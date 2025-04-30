<script setup>
const loading = ref(false);
const inputValue = ref('');
const refQuestion = ref([
  {
    question: '개발자로서 가장 중요하게 생각하는 가치는 무엇인가요?',
    answer: `개발자로서 가장 중요하게 생각하는 가치는 '본질을 꿰뚫는 사고'입니다.<br/>
저는 어떤 문제를 해결할 때도, 단순히 방법만 찾는 것이 아니라 '왜 이 기능이 필요한지', '왜 이 방법이 최선인지' 스스로 끊임없이 질문하려고 합니다.
이러한 본질 중심의 사고가 더 나은 결과를 만들고, 꾸준히 성장하는 데 핵심적인 역할을 한다고 생각합니다.<br/>
앞으로도 이 가치를 지키며, 깊이 있는 개발자가 되고자 합니다.`,
  },
  {
    question: '지금까지 경험한 기술 스택 중 가장 자신 있는 것은 무엇인가요?',
    answer: `가장 자신 있는 스택은 Vue.js와 Nuxt.js입니다. 그 다음으로는 Node.js와 SQL, Python입니다. 앞으로도 꾸준히 전문성을 높여나갈 계획입니다.`,
  },
]);
const sampleQuestion = ref([
  'MBTI 중 E/I 중 어느 쪽인가요? 실제 일할 때는 어떤 스타일인가요?',
  '하나를 깊게 파는 편 vs 여러 가지를 얕게 넓게 보는 편?',
  '지금까지 진행한 프로젝트 중 가장 기억에 남는 프로젝트는 무엇인가요?',
  'AI에 관심을 가지게 된 계기는 무엇인가요?',
]);

async function askQuestion(question) {
  if (loading.value) return;

  loading.value = true;

  const currentIndex = refQuestion.value.length;
  refQuestion.value.push({ question: question });

  const { data } = await useFetch('/api/rag-chat', {
    method: 'POST',
    body: { question: question },
  });

  if (data?.value?.response) {
    refQuestion.value[currentIndex].answer = data.value.response;
  }
  loading.value = false;
}

async function searchInput() {
  if (loading.value) return;
  if (!inputValue.value) return;
  const question = inputValue.value;

  inputValue.value = '';

  await askQuestion(question);
}
</script>

<template>
  <section class="Interview">
    <IOB>
      <h2 class="text-yellow not-draggable">
        <span>INTERVIEW</span>
        <div class="infomation">
          <Icon name="ion:alert-circle" />
          <div class="tooltip">
            <b>JavaScript + LangChain</b> 기반의 RAG 챗봇을 구현해 보았습니다.
          </div>
        </div>
      </h2>
    </IOB>
    <div class="section-inner">
      <div class="chat-wrap">
        <IOB>
          <div class="chat-bubble chat-a">
            <p>
              안녕하세요. <b>박유나</b>입니다 — 챗봇 버전으로 인사드립니다.
              😊<br />
              저의 경험과 생각을 최대한 잘 전달해드릴 수 있도록 준비했습니다.<br />
              궁금한 점이 있으시다면 언제든 질문해 주세요. 성실하게
              답변드리겠습니다.
            </p>
          </div>
        </IOB>
        <template v-for="(item, index) in refQuestion" :key="index">
          <IOB>
            <div class="chat-bubble chat-q">
              <p>{{ item.question }}</p>
            </div>
          </IOB>
          <IOB>
            <div class="chat-bubble chat-a">
              <p v-html="item.answer" />
            </div>
          </IOB>
        </template>

        <div v-if="loading" class="loader-wrap">
          <span class="loader"></span>
        </div>
        <IOB>
          <div class="sample-question">
            <p>질문을 클릭해 보세요!</p>
            <div>
              <button
                v-for="(question, i) in sampleQuestion"
                :key="i"
                @click="askQuestion(question)"
              >
                {{ question }}
              </button>
            </div>
          </div>
        </IOB>
      </div>

      <IOB class="chat-input-wrap">
        <div class="chat-input">
          <input
            type="text"
            v-model="inputValue"
            @keyup.enter="searchInput"
            placeholder="질문을 입력해 주세요."
          />
          <button class="send-btn" :disabled="loading" @click="searchInput">
            <Icon
              name="eva:arrow-forward-fill"
              style="color: black; font-size: 26px"
            />
          </button>
        </div>
      </IOB>
    </div>
  </section>
</template>

<style lang="css" scoped>
.send-btn {
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--color-yellow);
  color: white;
  border-radius: 20px;
  width: 38px;
  height: 38px;
}
.loader-wrap {
  display: flex;
  padding: 50px 30px 0;
}
.loader,
.loader:before,
.loader:after {
  border-radius: 50%;
  width: 2em;
  height: 2em;
  animation-fill-mode: both;
  animation: bblFadInOut 1.8s infinite ease-in-out;
}
.loader {
  color: #a8a8a8;
  font-size: 7px;
  position: relative;
  text-indent: -9999em;
  transform: translateZ(0);
  animation-delay: -0.16s;
}
.loader:before,
.loader:after {
  content: '';
  position: absolute;
  top: 0;
}
.loader:before {
  left: -3.25em;
  animation-delay: -0.32s;
}
.loader:after {
  left: 3.25em;
}

@keyframes bblFadInOut {
  0%,
  80%,
  100% {
    box-shadow: 0 2.5em 0 -1.3em;
  }
  40% {
    box-shadow: 0 2.5em 0 0;
  }
}
h2 {
  display: flex;
  align-items: center;
}
h2 .iconify {
  font-size: 2.25rem;
  margin-left: 8px;
  color: #dcdcdc;
}

section {
  background: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 40px;
  min-height: 832px;
}
.section-inner {
  min-height: 1200px;
  position: relative;
  flex-direction: column;
  height: 100%;
  margin-bottom: 2rem;
}
.sample-question {
  margin-top: 10rem;
}
.sample-question div {
  display: flex;
  column-gap: 1rem;
  row-gap: 0.5rem;
  flex-wrap: wrap;
}
.sample-question p {
  font-size: 0.875rem;
  color: #999;
  margin-bottom: 0.5rem;
}
.sample-question button {
  font-size: 0.9375rem;
  background: #e9e9e9;
  padding: 10px 20px;
  border-radius: 40px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
}
.infomation {
  position: relative;
}
.infomation span {
  display: inline-block;
}
.infomation .tooltip {
  position: absolute;
  top: 0;
  right: -290px;
  display: block;
  background: #e8e8e8;
  color: black;
  padding: 12px 16px;
  font-size: 1rem;
  width: 280px;
  font-weight: 400;
  opacity: 0;
  transition: opacity 0.2s ease;
}
.infomation:hover .tooltip {
  opacity: 1;
}
@media (max-width: 768px) {
  .infomation span {
    margin-top: 10px;
    font-size: 1.75rem;
  }
  .infomation .tooltip {
    top: 36px;
    right: -50px;
    padding: 8px 10px;
    font-size: 0.875rem;
    width: 200px;
    height: 50px;
  }
  .sample-question {
    margin-top: 6rem;
  }
}
</style>
