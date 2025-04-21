<script setup>
const projects = ref([
  {
    title: 'AmoreSearch',
    projectType: 'sLLM 기반 사내 AI 검색 시스템',
    projectTypeEng: 'TEAM',
    githubRepo: 'https://github.com/yunazz/AmoreSearch',
    date: '2025.01.21 ~ 2025.03.20',
    description:
      '아모레퍼시픽에서 사용할 수 있는 <u>AI 사내검색 시스템</u>을 개발했습니다. 사내 문서, 자사 브랜드 제품, 타사 경쟁제품, 논문, 최신 뉴스 등 다양한 정보를 한 번에 검색하고 조회할 수 있도록 구성된 AI 기반 웹 서비스입니다.',
    skills:
      'Nuxt3, FastAPI, Python, MariaDB, ChromaDB, sLLM, AWS, Runpod, Docker, CI/CD',
    role: '기획, 디자인, 프론트엔드, 백엔드, AI, DevOps',
    implements: ['CI/CD 파이프라인 구축', 'CI/CD 파이프라인 구축'],
  },
  {
    title: 'Lawbot',
    projectType: '세법 질의응답 챗봇 시스템',
    projectTypeEng: 'TEAM',
    githubRepo: 'https://github.com/yunazz/SKN06-4th-4Team',
    description:
      '복잡한 세법에 대한 질문에 신속하고 정확한 답변을 제공하는 챗봇 시스템을 개발했습니다.법제처에서 제공하는 세법 데이터를 크롤링하여 학습 데이터로 가공하고, 자연어 질의에 응답할 수 있는 AI 챗봇 모델을 구축하는 것이 핵심 목표였습니다.',
    skills: 'Django, Python, OpenAI',
    role: '기획, 디자인, 프론트엔드, 백엔드, AI, DevOps',
    implements: ['CI/CD 파이프라인 구축', 'CI/CD 파이프라인 구축'],
  },

  {
    title: 'XXX펀즈',
    projectType: '카피트레이딩 플랫폼',
    projectTypeEng: 'TEAM',
    githubRepo: '',
    description:
      '실시간 트레이딩 내역을 공개하며, 사용자들이 트레이더의 거래를 자동으로 따라할 수 있는 투명한 <u>카피트레이딩 플랫폼</u>을 개발했습니다. 트레이더 구독 기능과 트레이딩 대회를 통해 사용자 참여를 유도하며, <u>PWA 기반 웹앱과 웹뷰 앱</u>으로도 제공해 접근성과 사용성을 높였습니다.',
    skills: 'Nuxt3, MariaDB, PWA, Capacitor',
    role: '기획, 프론트엔드, 백엔드',
    implements: ['CI/CD 파이프라인 구축', 'CI/CD 파이프라인 구축'],
  },
  {
    title: 'SKLMNO',
    projectType: '통신사 대리점 통합 관리 시스템',
    projectTypeEng: 'TEAM',
    githubRepo: '',
    description:
      '대리점 운영에 필요한 업무 기능을 통합한 <u>내부/외부용 웹 플랫폼</u>을 개발했습니다. 실제 통신업계의 복잡한 업무 프로세스를 반영하기 위해 많은 고민과 구조 설계를 거쳤으며, 결과적으로 현업 적용이 가능한 수준의 시스템을 구현했습니다.',
    skills: 'Vue2, Vuex, Vuetify',
    role: '기획, 프론트엔드',
    implements: ['CI/CD 파이프라인 구축', 'CI/CD 파이프라인 구축'],
  },
  {
    title: '조이펍',
    projectType: '오프라인 매장 운영 시스템',
    projectTypeEng: 'SOLO',
    githubRepo: '',
    description:
      '오프라인 홀덤펍 매장 운영을 위한 관리 시스템으로, 티어·시즌 랭킹, 게임머니 충전/사용 등 주요 기능을 포함한 풀스택 외주 프로젝트입니다. 복잡한 로직과 유동적인 비즈니스 조건을 직접 설계하고 구현했습니다.',
    skills: 'Nuxt3, PrimeVue, MariaDB, Nginx, Ubuntu',
    role: '기획, 디자인, 프론트엔드, 백엔드, DevOps',
    implements: ['CI/CD 파이프라인 구축', 'CI/CD 파이프라인 구축'],
  },
  {
    title: 'XX폰',
    projectType: '온라인 휴대폰 쇼핑몰',
    projectTypeEng: 'SOLO',
    githubRepo: '',
    description:
      '휴대폰을 쉽게 조회하고 신청할 수 있는 <u>온라인 쇼핑몰</u>과, 신청 내역을 관리할 수 있는 상담원용 <u>관리자 시스템</u>을 함께 개발했습니다. 사용자 편의성과 실제 상담 흐름을 고려한 구조로 설계되었으며, 복잡한 요금제 로직을 반영한 자동 요금 계산 시스템이 핵심 기능입니다.',
    skills: 'Nuxt2, Vuex, MariaDB, AWS, Nginx, Ubuntu',
    role: '기획, 디자인, 프론트엔드, 백엔드, DevOps',
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
            <div class="">
              <h5 class="title-s fw-700">{{ item.title }}</h5>
              <a
                v-if="item?.githubRepo"
                :href="item.githubRepo"
                class="github-logo"
                target="_blank"
              >
                <img src="/assets/image/logo-github.png" />
              </a>
            </div>
            <p class="body-s fw-r00 project-type">{{ item.projectType }}</p>
            <!-- <p class="date body-xs">{{ item.date }}</p> -->
            <p class="project-description" v-html="item.description" />

            <p class="body-s fw-600 mt-3">내 역할</p>
            <p class="project-skill body-s">
              {{ item.role }}
            </p>

            <p class="body-s fw-600 mt-3">기술 스텍</p>
            <p class="project-skill body-s">
              {{ item.skills }}
            </p>

            <!-- <p class="fw-700 mt-3">내가 구현한 기능</p>
            <ol class="project-implement">
              <li
                v-for="implement in item.implements"
                :key="implement"
                class="body-s"
              >
                {{ implement }}
              </li>
            </ol> -->
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
  height: 326px;
  position: relative;
  display: flex;
  flex-direction: column;
  background: white;
  border-radius: 5px;
  padding: 22px 28px 16px 28px;
  box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 1px, rgba(0, 0, 0, 0.07) 0px 2px 2px,
    rgba(0, 0, 0, 0.07) 0px 4px 4px, rgba(0, 0, 0, 0.07) 0px 8px 8px,
    rgba(0, 0, 0, 0.07) 0px 16px 16px;
}
.github-logo {
  position: absolute;
  top: 14px;
  right: 20px;
}
.github-logo img {
  width: 24px;
  height: 24px;
}
.project-type-eng {
  position: absolute;
  top: -34px;
  right: 0;
  font-size: 1.5rem;
  color: var(--color-lightyellow);
}
.project .project-type {
  margin-bottom: 2px;
  color: #9b9b9b;
  line-height: 1.8;
}
.project .body-m {
  line-height: 1.3;
}
.project-description {
  font-size: 0.875rem;
  margin-top: 4px;
}
.project-skill {
  word-spacing: 3px;
  font-size: 0.875rem;
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
