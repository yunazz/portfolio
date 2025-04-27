<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';

const isVisible = ref(false);
const target = ref(null);
let lastScrollY = 0;

function checkVisibility() {
  if (!target.value) return;

  const rect = target.value.getBoundingClientRect();
  const currentScrollY = window.scrollY;
  const scrollingDown = currentScrollY > lastScrollY;

  // 브라우저에서 문서 전체 높이의 현재 요소 위치 계산
  const elementTopFromPageTop = rect.top + currentScrollY;

  // 1. 요소가 현재 스크롤 위치보다 위쪽에 있었으면 무조건 fade-in
  if (elementTopFromPageTop < currentScrollY) {
    isVisible.value = true;
  }
  // 2. 요소가 화면 안에 들어오면 fade-in
  else if (rect.top < window.innerHeight && rect.bottom > 0) {
    isVisible.value = true;
  }
  // 3. 요소가 화면 아래로 사라졌고 스크롤을 위로 하면 fade-in 해제
  else {
    if (!scrollingDown && rect.top > window.innerHeight) {
      isVisible.value = false;
    }
  }

  lastScrollY = currentScrollY;
}

onMounted(() => {
  if (import.meta.client) {
    lastScrollY = window.scrollY;
    checkVisibility(); // ✅ 최초 체크
    window.addEventListener('scroll', checkVisibility, { passive: true });
  }
});

onBeforeUnmount(() => {
  if (import.meta.client) {
    window.removeEventListener('scroll', checkVisibility);
  }
});
</script>

<template>
  <div ref="target" :class="['animate', { 'fade-in': isVisible }]">
    <slot />
  </div>
</template>

<style scoped>
.animate {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.8s ease, transform 0.8s ease;
}
.fade-in {
  opacity: 1;
  transform: translateY(0);
}
</style>
