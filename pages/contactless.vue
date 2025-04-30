<template>
  <div class="wrapper">
    <div class="section-container">
      <div class="sections">
        <SectionHome id="Home" class="section-page fixed" />
        <SectionIntroduce id="Introduce" class="section-page" />
        <SectionAboutMeContactLess id="AboutMe" class="section-page" />

        <SectionProject id="Project" class="section-page" />
        <SectionInterview id="Interview" class="section-page" />
        <SectionThankyou id="Thankyou" class="section-page" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.fixed {
  position: fixed;
  top: 0;
}
.sections {
  padding-top: 7.5rem;
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
