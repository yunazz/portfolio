<script setup></script>

<template>
  <section>
    <div class="text-center">
      <div class="introduce-title">
        <div class="speech-bubble m-auto not-draggable observe-fade-in">
          <p class="title-s">호기심으로 시작해, 꾸준함으로 성장해온</p>
          <h5 class="title-m">프론트엔드 개발자 <b>박유나</b>입니다.</h5>
        </div>
        <div class="memoticon observe-fade-in">
          <img src="/assets/image/memoticon.png" alt="memoticon" />
        </div>
      </div>
      <div class="introduce-text not-draggable">
        <p class="flex-column body-l observe-fade-in">
          <span>
            <b class="highlight-hover">디자인</b>과
            <b class="highlight-hover">UX</b>에 대한 관심으로
            <b class="highlight-hover">웹퍼블리싱</b>을 시작했고,
          </span>
          <span>
            실무와 프로젝트를 통해 <b class="highlight-hover">프론트엔드</b>는
            물론 <b class="highlight-hover">백엔드</b>까지 자연스럽게
            확장해왔습니다.
          </span>
          <span>
            스타트업 환경에서 다양한 역할을 맡으며 실무 경험을 쌓았고,
          </span>
          <span
            >최근에는 <b class="highlight-hover">AI</b> 분야로도 관심과 기술의
            폭을 넓히고 있습니다.</span
          >
        </p>
        <p class="flex-column body-l observe-fade-in">
          <span>
            개발 과정에서는 <b class="highlight-hover">효율적인 </b> 자원 배분과
            <b class="highlight-hover">책임감</b> 있는 태도를 중요하게 생각하며
          </span>
          <span>
            문제를 끝까지 해결하려는 <b class="highlight-hover">끈기</b>와 함께
            일하는 사람들과 <b class="highlight-hover">신뢰</b>를 쌓아가는
            과정을 소중히 여깁니다.
          </span>
        </p>
        <p class="body-l observe-fade-in">
          <span> "꾸준히 배우고, 자라고, 함께 만들어가는 사람. </span>
          <br />
          <span> 그게 제가 되고 싶은 개발자의 모습입니다."</span>
        </p>
      </div>
    </div>
  </section>
</template>

<style lang="css" scoped>
section {
  background: white;
  align-items: flex-start;
  padding-top: 80px;
  position: relative;
  overflow-y: hidden;
}
.speech-bubble {
  position: relative;
  background: var(--color-lightyellow);
  padding: 20px 0;
  border-radius: 100px;
  width: 700px;
}
.speech-bubble:after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  width: 0;
  height: 0;
  border: 20px solid transparent;
  border-top-color: var(--color-lightyellow);
  border-bottom: 0;
  border-left: 0;
  margin-left: -10px;
  margin-bottom: -20px;
}
.memoticon {
  margin-top: 36px;
}
.memoticon img {
  width: 150px;
}
.introduce-title {
  position: relative;
  margin-bottom: 24px;
}
.introduce-title .title-s {
  font-weight: 500;
  z-index: 2;
}
.introduce-title .title-m {
  font-weight: 500;
  z-index: 2;
  background: transparent;
}
.introduce-title .title-m b {
  position: relative;
  font-weight: 700;
  padding: 0 3px;
  z-index: 0;
}
.introduce-title .title-m b::before {
  content: '';
  position: absolute;
  left: 0;
  bottom: 2px;
  width: 100%;
  height: 8px;
  background-color: var(--color-yellow);
  z-index: -1;
}
.introduce-text {
  cursor: default;
  display: flex;
  flex-direction: column;
  row-gap: 1.75rem;
  line-height: 1.65;
}
.introduce-text b {
  font-weight: 600;
  padding: 0 1px;
}
.introduce-text p:last-of-type {
  margin-top: 8px;
}
.introduce-text p:last-of-type span {
  border-bottom: 2px dotted;
  line-height: 1.8;
  font-weight: 500;
}
/* 애니메이션 딜레이 */
.speech-bubble {
  animation-delay: 0.1s;
}
.memoticon {
  transition-delay: 0.2s;
}
.introduce-text p:nth-of-type(1) {
  transition-delay: 0.25s;
}
.introduce-text p:nth-of-type(2) {
  transition-delay: 0.28s;
}
.introduce-text p:nth-of-type(3) {
  transition-delay: 0.31s;
}
</style>
