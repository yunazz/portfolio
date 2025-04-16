<script setup>
const containerRef = ref(null);
const stickyMode = ref(true);

function handleScroll() {
  const scrollTop = containerRef.value.scrollTop;
  const sectionHeight = window.innerHeight > 832 ? window.innerHeight : 832;
  const point = sectionHeight * 1.5;
  stickyMode.value = scrollTop < point;
}
</script>

<template>
  <div>
    <div class="wrapper">
      <div ref="containerRef" class="section-container" @scroll="handleScroll">
        <SectionHome
          id="home"
          class="section-snap"
          :class="{ sticky: stickyMode }"
        />
        <SectionIntroduce id="Introduce" class="section-snap" />
        <SectionAboutMe id="AboutMe" class="section-snap" />
        <SectionProject id="Project" class="section-snap" />
        <SectionInterview id="Interview" class="section-snap" />
        <SectionContact id="Contact" class="section-snap" />
      </div>
    </div>
  </div>
</template>

<style lang="css" scoped>
.section-container > div {
  display: block;
  height: 100vh;
}
.sticky {
  position: sticky;
  top: 0;
}
#home {
  z-index: -1;
}
#Introduce {
  z-index: 1;
  top: 0;
}
</style>
