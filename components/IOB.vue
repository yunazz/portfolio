<script setup>
const props = defineProps({ threshold: { default: 0.6, type: Number } });
const observer = ref(null);
const fadein = ref(null);

function inViewport(entries, observerInstance) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-inViewport');
      observerInstance.unobserve(entry.target);
    }
  });
}

onMounted(() => {
  observer.value = new IntersectionObserver(
    (entries, observerInstance) => {
      inViewport(entries, observerInstance);
    },
    {
      threshold: props.threshold,
    }
  );

  if (fadein.value) {
    observer.value.observe(fadein.value);
  }
});

onBeforeUnmount(() => {
  if (observer.value) {
    observer.value.disconnect();
  }
});
</script>

<template>
  <div ref="fadein" class="animate">
    <slot />
  </div>
</template>

<style scoped>
.animate {
  transition: 1s;
  opacity: 0;
  transform: translate3d(0, 50px, 0);
}

.animate.is-inViewport {
  opacity: 1;
  transform: translate3d(0, 0, 0);
}
</style>
