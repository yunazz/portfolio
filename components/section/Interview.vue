<script setup></script>

<template>
  <section>
    <h2 class="text-yellow not-draggable observe-fade-in">INTERVIEW</h2>
    <div class="section-inner">
      <div class="chat-wrap">
        <div class="chat-bubble chat-a observe-fade-in">
          <p>
            안녕하세요. <b>박유나</b>입니다 — 챗봇 버전으로 인사드립니다. 😊<br />
            저의 경험과 생각을 최대한 잘 전달해드릴 수 있도록 준비했습니다.<br />
            궁금한 점이 있으시다면 언제든 질문해 주세요. 성실하게
            답변드리겠습니다.
          </p>
        </div>
        <div class="chat-bubble chat-q observe-fade-in">
          <p>질문입니다.</p>
        </div>
        <div class="chat-bubble chat-a observe-fade-in">
          <p>대답</p>
        </div>
        <div class="chat-bubble chat-q observe-fade-in">
          <p>질문입니다.</p>
        </div>
        <div class="chat-bubble chat-a observe-fade-in">
          <p>대답</p>
        </div>
      </div>
      <div class="chat-input observe-fade-in">
        <input type="text" />
      </div>
    </div>
  </section>
</template>

<style lang="css" scoped>
section {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.section-inner {
  flex-direction: column;
}
h2 {
  width: 100%;
  text-align: center;
  margin-top: 40px;
}
.chat-wrap {
  width: 900px;
  font-size: var(--body-size-m);
  margin: 0 auto;
  display: flex;
  flex-direction: column;
}
.chat-bubble {
  margin-top: 40px;
}
.chat-bubble p {
  display: inline-block;
  padding: 16px 28px;
  border-radius: 14px;
  line-height: 1.5;
}
.chat-wrap .chat-a {
  float: left;
}
.chat-wrap .chat-a p {
  padding: 10px 28px 10px 0;
}
.chat-wrap .chat-q p {
  float: right;
  background: #fff29f;
  position: relative;
}
.chat-input {
  display: flex;
  align-items: center;
  width: 900px;
  margin: 54px auto 20px;
  padding: 0 20px;
  border-radius: 20px;
  height: 44px;
  background: #f7f7f7;
  box-shadow: rgba(14, 63, 126, 0.04) 0px 0px 0px 1px,
    rgba(42, 51, 69, 0.04) 0px 1px 1px -0.5px,
    rgba(42, 51, 70, 0.04) 0px 3px 3px -1.5px,
    rgba(42, 51, 70, 0.04) 0px 6px 6px -3px,
    rgba(14, 63, 126, 0.04) 0px 12px 12px -6px,
    rgba(14, 63, 126, 0.04) 0px 24px 24px -12px;
}
.chat-input input {
  border: 0;
  margin: 0;
  outline: none;
  font-size: 1rem;
  line-height: 42px;
  padding: 0;
  background: transparent;
}
.chat-q p:after {
  content: '';
  position: absolute;
  bottom: 0;
  right: 32px;
  width: 0;
  height: 0;
  border: 16px solid transparent;
  border-top-color: #fff29f;
  border-bottom: 0;
  border-right: 0;
  margin-right: -8px;
  margin-bottom: -16px;
}
/* 애니메이션 */
.observe-fade-in.chat-q {
  transform: translateX(30px);
}
.observe-fade-in.chat-q.fade-in {
  transform: translateX(0);
}
.observe-fade-in.chat-a {
  transform: translateX(-30px);
}
.observe-fade-in.chat-a.fade-in {
  transform: translateX(0);
}
</style>
