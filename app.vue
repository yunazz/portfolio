<script setup></script>

<template>
  <div>
    <div class="wrapper">
      <div class="section-container" @scroll="handleScroll">
        <div class="sections">
          <SectionHome id="Home" class="section-page fixed" />
          <SectionIntroduce id="Introduce" class="section-page" />
          <SectionAboutMe id="AboutMe" class="section-page" />
          <SectionProject id="Project" class="section-page" />
          <SectionInterview id="Interview" class="section-page" />
          <SectionThankyou id="Thankyou" class="section-page" />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="css" scoped>
.fixed {
  position: fixed;
  top: 0;
}
.sections {
  padding-top: 120px;
  margin-top: 100vh;
  background: white;
}
#Home {
  /* z-index: -1; */
}
.section-page #Introduce {
  z-index: 1;
  top: 0;
}
</style>
