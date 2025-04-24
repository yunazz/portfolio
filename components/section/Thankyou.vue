<script setup>
const githubUrl = ref('https://github.com/yunazz');
</script>

<template>
  <section>
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
          <!-- <a href="">
          <img src="/assets/image/logo-velog-w.png" />
        </a> -->
        </div>
      </IOB>
    </div>
  </section>
</template>
<!-- 👣 -->
<style lang="css" scoped>
section {
  background: var(--color-black);
  min-height: 832px;
  height: 100vh;
}
.body-l {
  color: var(--color-white);
  line-height: 1.75;
  font-weight: 300;
}
.body-l b {
  font-weight: 300;
  color: var(--color-yellow);
}
.body-l i {
  font-size: 26px;
}
.title-l {
  margin-top: 24px;
  color: var(--color-yellow);
  margin-bottom: 150px;
  position: relative;
}
.contact {
  display: flex;
  justify-content: center;
  gap: 2rem;
}
.contact img {
  width: 40px;
  height: 40px;
}

/* 애니메이션 딜레이 */
.title-l {
  transition-delay: 0.15s;
}
</style>
