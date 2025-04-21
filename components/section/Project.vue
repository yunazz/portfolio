<script setup>
const projects = ref([
  {
    title: '제목',
    projectType: '팀프로젝트',
    projectTypeEng: 'TEAM',
    githubRepo: 'www.',
    startDate: '2015.01.01',
    endDate: '2015.01.01',
    description:
      '사내 문서, 제품, 뉴스, 직원 정보를 통합 검색하는 AI 기반 검색시스템입니다. 검색 정확도를 높이기 위한 sLLM 모델을 구성하고, 이를 실제 서비스에 적용한 웹 애플리케이션입니다.',
    skills: 'Nuxtjs, Nuxtjs',
    implements: ['CI/CD 파이프라인 구축', 'CI/CD 파이프라인 구축'],
  },
  {
    title: '제목',
    projectType: '팀프로젝트',
    projectTypeEng: 'TEAM',
    githubRepo: 'www.',
    startDate: '2015.01.01',
    endDate: '2015.01.01',
    description:
      '사내 문서, 제품, 뉴스, 직원 정보를 통합 검색하는 AI 기반 검색시스템입니다. 검색 정확도를 높이기 위한 sLLM 모델을 구성하고, 이를 실제 서비스에 적용한 웹 애플리케이션입니다.',
    skills: 'Nuxtjs, Nuxtjs',
    implements: ['CI/CD 파이프라인 구축', 'CI/CD 파이프라인 구축'],
  },
  {
    title: '제목',
    projectType: '팀프로젝트',
    projectTypeEng: 'TEAM',
    githubRepo: 'www.',
    startDate: '2015.01.01',
    endDate: '2015.01.01',
    description:
      '사내 문서, 제품, 뉴스, 직원 정보를 통합 검색하는 AI 기반 검색시스템입니다. 검색 정확도를 높이기 위한 sLLM 모델을 구성하고, 이를 실제 서비스에 적용한 웹 애플리케이션입니다.',
    skills: 'Nuxtjs, Nuxtjs',
    implements: ['CI/CD 파이프라인 구축', 'CI/CD 파이프라인 구축'],
  },
  {
    title: '제목',
    projectType: '팀프로젝트',
    projectTypeEng: 'TEAM',
    githubRepo: 'www.',
    startDate: '2015.01.01',
    endDate: '2015.01.01',
    description:
      '사내 문서, 제품, 뉴스, 직원 정보를 통합 검색하는 AI 기반 검색시스템입니다. 검색 정확도를 높이기 위한 sLLM 모델을 구성하고, 이를 실제 서비스에 적용한 웹 애플리케이션입니다.',
    skills: 'Nuxtjs, Nuxtjs',
    implements: ['CI/CD 파이프라인 구축', 'CI/CD 파이프라인 구축'],
  },
  {
    title: '제목',
    projectType: '팀프로젝트',
    projectTypeEng: 'TEAM',
    githubRepo: 'www.',
    startDate: '2015.01.01',
    endDate: '2015.01.01',
    description:
      '사내 문서, 제품, 뉴스, 직원 정보를 통합 검색하는 AI 기반 검색시스템입니다. 검색 정확도를 높이기 위한 sLLM 모델을 구성하고, 이를 실제 서비스에 적용한 웹 애플리케이션입니다.',
    skills: 'Nuxtjs, Nuxtjs',
    implements: ['CI/CD 파이프라인 구축', 'CI/CD 파이프라인 구축'],
  },
  {
    title: '제목',
    projectType: '팀프로젝트',
    projectTypeEng: 'TEAM',
    githubRepo: 'www.',
    startDate: '2015.01.01',
    endDate: '2015.01.01',
    description:
      '사내 문서, 제품, 뉴스, 직원 정보를 통합 검색하는 AI 기반 검색시스템입니다. 검색 정확도를 높이기 위한 sLLM 모델을 구성하고, 이를 실제 서비스에 적용한 웹 애플리케이션입니다.',
    skills: 'Nuxtjs, Nuxtjs',
    implements: ['CI/CD 파이프라인 구축', 'CI/CD 파이프라인 구축'],
  },
]);
</script>

<template>
  <section class="section-page">
    <div class="section-inner not-draggable">
      <h2 class="inter-800 observe-fade-in">PROJECT</h2>
      <div>
        <div class="projects">
          <div
            v-for="(item, index) in projects"
            :key="index"
            class="project observe-fade-in"
          >
            <span class="project-type-eng inter-700">
              {{ item.projectTypeEng }}
            </span>
            <div>
              <h5 class="body-xl">{{ item.title }}</h5>
              <!-- <div v-if="item.githubRepo">github</div> -->
            </div>
            <p class="body-s fw-500">{{ item.projectType }}</p>
            <p class="date body-xs">
              {{ item.startDate }} ~ {{ item.endDate }}
            </p>
            <p class="body-s mt-1" v-html="item.description" />
            <p class="fw-700 mt-3">기술 스텍</p>
            <p class="project-skill body-s">
              <span>{{ item.skills }}</span>
            </p>
            <p class="fw-700 mt-3">내가 구현한 기능</p>
            <ol class="project-implement">
              <li
                v-for="implement in item.implements"
                :key="implement"
                class="body-s"
              >
                {{ implement }}
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="css" scoped>
section {
  margin-top: 50px;
  padding-top: 20px;
}
.section-inner {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
h2 {
  position: absolute;
  top: 26px;
  left: 2px;
  color: var(--color-white);
  font-size: 38px;
}
.projects {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 1.25rem;
  row-gap: 4rem;
  margin: 110px 0 80px;
}
.project {
  position: relative;
  display: flex;
  flex-direction: column;
  background: white;
  height: 430px;
  border-radius: 16px;
  padding: 20px 24px 16px 24px;
}
.project-type-eng {
  position: absolute;
  top: -34px;
  right: 0;
  font-size: 1.5rem;
  color: var(--color-lightyellow);
}
.project .body-m {
  line-height: 1.3;
}
.project .fw-700 {
  font-size: 1rem;
  line-height: 1.75;
}
.project ol {
  list-style-type: disc;
  margin-left: 20px;
}
.project .date {
  color: #7e7e7e;
}

/* 애니메이션 딜레이 */
.project:nth-of-type(1),
.project:nth-of-type(4) {
  transition-delay: 0.1s;
}
.project:nth-of-type(2),
.project:nth-of-type(5) {
  transition-delay: 0.2s;
}
.project:nth-of-type(3),
.project:nth-of-type(6) {
  transition-delay: 0.3s;
}
</style>
