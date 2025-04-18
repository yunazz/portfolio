<script setup>
const containerRef = ref(null);
const stickyMode = ref(true);

function handleScroll() {
  const scrollTop = containerRef.value.scrollTop;
  const sectionHeight = window.innerHeight > 832 ? window.innerHeight : 832;
  const stickyPoint = sectionHeight * 1.5;

  stickyMode.value = scrollTop < stickyPoint;
}
</script>

<template>
  <div>
    <div class="wrapper">
      <div
        ref="containerRef"
        class="section-container snap"
        @scroll="handleScroll"
      >
        <SectionHome
          id="home"
          class="section-snap"
          :class="{ sticky: stickyMode }"
        />
        <SectionIntroduce id="Introduce" class="section-snap" style="" />
        <div class="section-gap">
          <SectionAboutMe id="AboutMe" class="section-snap" />
          <SectionProject id="Project" class="section-snap" />
          <SectionInterview id="Interview" class="section-snap" />
          <SectionContact id="Contact" class="section-snap" />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="css" scoped>
.sticky {
  position: sticky;
  top: 0;
}
.section-gap {
  padding-top: 80px;
  background: white;
}
#home {
  z-index: -1;
}
#Introduce {
  z-index: 1;
  top: 0;
}
</style>
