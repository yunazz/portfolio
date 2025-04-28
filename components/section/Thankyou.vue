<script setup>
const githubUrl = ref('https://github.com/yunazz');
</script>

<template>
  <section class="Thankyou">
    <div class="flex-column text-center">
      <IOB>
        <p class="flex-column body-l not-draggable">
          <span>
            익숙함에 <b>안주하지 않고</b>, 낯선 기술과 문제 앞에서도
            <b>한 걸음씩 나아가며</b>
          </span>
          <span
            >더 나은 서비스와 함께 <b>성장하는 개발자</b>가 되겠습니다.</span
          >
        </p>
      </IOB>
      <IOB>
        <p class="title-l inter-700 not-draggable">
          <span>Thank you.</span>
        </p>
      </IOB>
      <IOB>
        <div class="contact">
          <a :href="githubUrl" target="_blank">
            <img src="/assets/image/logo-github-w.png" />
          </a>
        </div>
      </IOB>
    </div>
  </section>
</template>
<!-- 👣 -->
<style lang="css" scoped>
/* 애니메이션 딜레이 */
.title-l {
  transition-delay: 0.15s;
}
</style>
