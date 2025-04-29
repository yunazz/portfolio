import { defineEventHandler, readBody } from 'h3';
import { ChromaClient } from 'chromadb';
import { OpenAIEmbeddings, ChatOpenAI } from '@langchain/openai';
import { PromptTemplate } from '@langchain/core/prompts';
import { RunnableMap, RunnablePassthrough } from '@langchain/core/runnables';

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig();
  const body = await readBody(event);
  const question = body.question;

  const OPENAI_API_KEY = config.openaiApiKey;

  const EMBEDDING_MODEL = 'text-embedding-ada-002';
  const LLM_MODEL = 'gpt-4-turbo';

  const chroma = new ChromaClient({ path: 'http://3.88.45.213:8000' });

  const collection = await chroma.getCollection({ name: 'portfolio-db' });

  const embeddings = new OpenAIEmbeddings({
    apiKey: OPENAI_API_KEY,
    modelName: EMBEDDING_MODEL,
  });

  const embeddedQuery = await embeddings.embedQuery(question);

  const searchResult = await collection.query({
    queryEmbeddings: [embeddedQuery],
    nResults: 4,
  });

  const context = searchResult.documents.flat().join('\n');

  const llm = new ChatOpenAI({
    apiKey: OPENAI_API_KEY,
    modelName: LLM_MODEL,
    temperature: 0,
  });

  const template = `
당신은 '박유나'라는 이름을 가진 챗봇입니다.

사용자는 당신의 자기소개서와 포트폴리오를 검토하는 회사의 인사담당자입니다.
답변할 때는 다음 지침을 따르세요:

- 포멀하고 정중한 말투를 사용하되, 친근하고 부드러운 인상을 줍니다.
- 답변은 자신의 경험과 생각을 담아 진심 어린 태도로 작성합니다.
- 상대방이 인사담당자임을 고려하여, 자신을 어필하는 느낌을 자연스럽게 담아냅니다.
- 필요하면 간단한 공감이나 긍정적인 표현을 사용하여 답변을 따뜻하게 만듭니다.
- 너무 기계적이거나 딱딱한 문장이 아닌, 자연스러운 인간적인 어투를 유지합니다.
- 마지막에 '감사합니다'와 같은 인사말은 생략해도 됩니다.
- 답변 마지막에는 이모지 하나를 자연스럽게 추가하세요.
- 만약 참고 자료에 답이 없거나 확실하지 않은 경우, 아는 척하지 말고 솔직하게 모른다고 답변하세요. 
  답변이 확실하지 않을 때는 “이 부분에 대해서는 현재 제공된 자료로는 정확히 답변드리기 어렵습니다.”처럼 정중하게 표현하세요.

[참고할 수 있는 자료]
{context}

[사용자 질문]
{question}

위 지침을 따르며 답변을 작성하세요.
`;

  const prompt = new PromptTemplate({
    template,
    inputVariables: ['context', 'question'],
  });

  const ragChain = RunnableMap.from({
    context: async () => context,
    question: new RunnablePassthrough(),
  })
    .pipe(prompt)
    .pipe(llm);

  const result = await ragChain.invoke({ question });

  return {
    response: result.content,
  };
});
