<script setup>
const loading = ref(false);
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
  '공식 문서 먼저 보는 스타일 vs 튜토리얼부터 보는 스타일?',
  '하나를 깊게 파는 편 vs 여러 가지를 얕게 넓게 보는 편?',
  '지금까지 진행한 프로젝트 중 가장 기억에 남는 프로젝트는 무엇인가요?',
]);

async function askQuestion(question) {
  if (loading.value) return;

  loading.value = true;
  // const response = await fetch('http://YOUR_SERVER_IP:8000/ask', {
  //   method: 'POST',
  //   headers: { 'Content-Type': 'application/json' },
  //   body: JSON.stringify({ prompt: question }),
  // });
  // const data = await response.json();
  // console.log(data.response);
  refQuestion.value.push({ question: question });
  setTimeout(() => {
    loading.value = false;
    refQuestion.value[-1].answer = '답변';
  }, 4000);
}
</script>

<template>
  <section class="Interview">
    <IOB>
      <h2 class="text-yellow not-draggable">INTERVIEW</h2>
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

        <div v-if="loading" class="flex justify-center">
          <span class="loader"></span>
        </div>
        <IOB>
          <div class="sample-question">
            <p>질문 추천</p>
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
          <input type="text" />
        </div>
      </IOB>
    </div>
  </section>
</template>

<style lang="css" scoped>
.loader {
  width: 48px;
  height: 48px;
  border: 5px solid #dadada;
  border-bottom-color: var(--color-yellow);
  border-radius: 50%;
  display: inline-block;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;
}

@keyframes rotation {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
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
  position: relative;
  flex-direction: column;
  height: 100%;
}
.sample-question {
  margin-top: 7rem;
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
}
</style>
