<script setup>
const isVisible = ref(false);
const target = ref(null);
let lastScrollY = 0;

function checkVisibility() {
  if (!target.value) return;
  const rect = target.value.getBoundingClientRect();
  const currentScrollY = window.scrollY;
  const scrollingDown = currentScrollY > lastScrollY;

  if (rect.top < window.innerHeight && rect.bottom > 0) {
    if (scrollingDown) {
      isVisible.value = true;
    }
  } else if (rect.top > window.innerHeight) {
    if (!scrollingDown) {
      isVisible.value = false;
    }
  }

  lastScrollY = currentScrollY;
}

onMounted(() => {
  if (import.meta.client) {
    lastScrollY = window.scrollY;
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
