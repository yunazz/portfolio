<script setup>
const sections = [
  'Home',
  'Introduce',
  'AboutMe',
  'Project',
  'Interview',
  'Contact',
];
const sectionTitle = {
  Home: 'PORTFOLIO',
  Introduce: 'INTRODUCE',
  AboutMe: 'ABOUT ME',
  Project: 'PROJECTS',
  Interview: 'INTERVIEW',
  Contact: 'THANK YOU',
};

const activeSection = ref('PORTFOLIO');
const containerRef = ref(null);

function changePage(section) {
  activeSection.value = sectionTitle[section];
}

// function handleScroll() {
//   const sections = containerRef.value.querySelectorAll('section');
//   const scrollTop = containerRef.value.scrollTop;
//   const containerHeight = containerRef.value.offsetHeight;

//   sections.forEach((section) => {
//     const { offsetTop, id } = section;
//     if (scrollTop >= offsetTop - containerHeight / 2) {
//       activeSection.value = sectionTitle[id];
//     }
//   });
// }
</script>

<template>
  <div>
    <div class="wrapper">
      <header>
        <h2 class="page-title">{{ activeSection }}</h2>
        <div class="pagination">
          <a
            v-for="section in sections"
            :key="section"
            :class="{
              active: section == activeSection,
            }"
            class="pagination-dot"
            :href="`#${section}`"
            @click="changePage(section)"
          />
        </div>
      </header>
      <!-- @scroll="handleScroll" -->
      <div ref="containerRef" class="pages snap-container">
        <SectionHome id="Home" class="page snap-section" />
        <SectionIntroduce id="Introduce" class="page snap-section" />
        <SectionAboutMe id="AboutMe" class="page snap-section" />
        <SectionProject id="Project" class="page snap-section" />
        <SectionInterview id="Interview" class="page snap-section" />
        <SectionContact id="Contact" class="page snap-section" />
      </div>
    </div>
  </div>
</template>

<style lang="css" scoped>
.wrapper {
  min-width: 1200px;
}
header {
  position: fixed;
  width: 100vw;
  display: flex;
  justify-content: space-between;
  height: 0;
  min-width: 1200px;
}
.page-title {
  position: absolute;
  top: 10px;
  left: 16px;
  color: var(--color-yellow);
}
.pagination {
  position: absolute;
  top: 20px;
  right: 28px;
  display: flex;
  flex-direction: column;
  row-gap: 12px;
}
.pagination .pagination-dot {
  width: 16px;
  height: 16px;
  border-radius: 8px;
  background: #b7b7b7;
  cursor: pointer;
}
.pagination .pagination-dot.active {
  background: var(--color-yellow);
}
.pages {
  overflow-x: hidden;
}
.pages .page {
  width: 100vw;
  height: 100vh;
}
.snap-container {
  height: 100vh;
  overflow-y: scroll;
  /* scroll-snap-type: y mandatory; */
  scroll-behavior: smooth;
  /* overscroll-behavior: contain; */
}

.snap-section {
  height: 100vh;
  scroll-snap-align: start;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
}
#Home.page {
  background: var(--color-black);
}
#Project.page {
  background: var(--color-yellow);
}
.wrapper.bg--yellow .page-title {
  color: var(--color-white);
}
.wrapper.bg--yellow .pagination-dot.active {
  background: var(--color-white);
}
</style>
