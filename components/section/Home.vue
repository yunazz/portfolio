<script setup></script>

<template>
  <section>
    <h2>PORTFOLIO</h2>
    <div class="masked-container">
      <div class="mask-text">
        <p class="title-xl inter-800">
          FRONT END FRONT END FRONT END FRONT END
        </p>
        <p class="title-m">
          <span>
            <b>#프론트엔드</b>
            <b>#문제를 해결하는 개발자</b>
          </span>
          <span>
            <b>#웹퍼블리싱</b>
            <b>#백엔드</b>
            <b>#AI</b>
            <b>#성장캐</b>
          </span>
        </p>
        <p class="title-xl inter-800">
          DEVELOPER DEVELOPER DEVELOPER DEVELOPER
        </p>
        <div class="image-me">
          <NuxtImg src="/image/profile.png" />
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="css" scoped>
.sticky h2 {
  position: absolute;
  top: 12px;
  left: 20px;
  color: var(--color-yellow);
  font-size: 24px;
}
section {
  width: 100%;
  min-height: 832px;
  height: 100vh;
  background: black;
  border-bottom: 1px solid;
  z-index: -1;
}
.masked-container {
  width: 100%;
  min-width: 1280px;
  height: 620px;
  background: var(--color-yellow);
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 320px;
}
.image-me {
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-48%, 10%);
}
.image-me img {
  width: 310px;
}
.mask-text {
  position: relative;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
.mask-text .title-xl {
  color: var(--color-white);
  width: 100%;
  white-space: nowrap;
  transform: translateX(80px);
  line-height: 290px;
}
.mask-text .title-xl:last-of-type {
  transform: translateX(60px);
}
.mask-text .title-m {
  display: flex;
  justify-content: space-between;
  color: var(--color-black);
  width: 100%;
  max-width: 100vw;
  min-width: 1280px;
  white-space: nowrap;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.mask-text > .title-m span {
  display: flex;
  justify-content: space-around;
  width: 36%;
  min-width: 510px;
}
.mask-text > .title-m span:first-of-type {
  padding-left: 20px;
  min-width: 560px;
}
.mask-text > .title-m span:last-of-type {
  padding-right: 20px;
}
.mask-text > .title-m span b {
  font-weight: 700;
}
</style>
