<script setup></script>

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
        <IOB>
          <div class="chat-bubble chat-q">
            <p>질문입니다.</p>
          </div>
        </IOB>
        <IOB>
          <div class="chat-bubble chat-a">
            <p>대답</p>
          </div>
        </IOB>
        <IOB>
          <div class="chat-bubble chat-q">
            <p>질문입니다.</p>
          </div>
        </IOB>
        <IOB>
          <div class="chat-bubble chat-a">
            <p>대답</p>
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
section {
  background: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 40px;
  height: 100vh;
  min-height: 832px;
}
.section-inner {
  position: relative;
  flex-direction: column;
  height: 100%;
}
</style>
