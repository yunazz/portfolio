<script setup></script>

<template>
  <section class="Home">
    <h2>PORTFOLIO</h2>
    <div class="masked-container">
      <div class="mask-text">
        <p class="title-xl inter-800">
          FRONT END FRONT END FRONT END FRONT END
        </p>
        <p class="title-m">
          <span class="fade-in-right">
            <b>#프론트엔드</b>
            <b>#문제를 해결하는 개발자</b>
          </span>
          <span class="fade-in-left">
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
          <NuxtImg class="fade-in-up" src="/image/profile.png" />
        </div>
      </div>
    </div>

    <div class="arrow-down animate-bounce">
      <img src="/assets/image/arrowdown.png" alt="" />
    </div>
  </section>
</template>

<style lang="css" scoped>
/* 애니메이션 */
.image-me img {
  opacity: 0;
  animation-delay: 0.3s;
}
</style>
