<script setup>
const projects = ref([
  {
    modalType: 'amoresearch',
    title: 'AmoreSearch',
    subtitle: 'sLLM 기반 사내 AI 검색 시스템',
    tag: 'TEAM',
    githubRepo: 'https://github.com/yunazz/AmoreSearch',
    date: '2025.01.21 ~ 2025.03.20',
    description:
      '아모레퍼시픽에서 사용할 수 있는 <u>AI 사내검색 시스템</u>을 개발했습니다. 사내 문서, 자사 브랜드 제품, 타사 경쟁제품, 논문, 최신 뉴스 등 다양한 정보를 한 번에 검색하고 조회할 수 있도록 구성된 AI 기반 웹 서비스입니다.',
    role: '기획, 디자인, 프론트엔드, 백엔드, AI, DevOps',
    skills:
      'Nuxt3, FastAPI, MariaDB, ChromaDB, sLLM, AWS, Runpod, Docker, CI/CD',
    intro: `   AmoreSearch는 아모레퍼시픽의 사내 정보를 보다 효율적으로 검색하고 활용할 수 있도록 설계된 AI 기반 검색 시스템입니다.<br /> sLLM을 활용한 질의응답 시스템으로, 사내 문서뿐 아니라 화장품 정보, 업계 뉴스 및 논문 등 다양한 정보를 통합적으로 검색할 수 있도록 구성되어있고,<br />LLM 파인튜닝과 임베딩 실험을 통해 사용자에게 최적화된 검색 결과를 제공하는 것이 핵심 목표였습니다.`,
    functions: [
      'AI 기반 통합 검색 (사내 문서, 뉴스, 논문, 제품 정보 등)',
      '최신 뉴스·논문·저널 크롤링 및 AI 질의',
      '외부 뉴스/논문/저널 조회',
      '자사 및 경쟁사 화장품 비교 (성분, 가격, 포장 등)',
      '즐겨찾기 기능',
      '직원 입·퇴사 관리',
      'JWT 기반 로그인 인증',
    ],
    uiImage: [
      '/image/project/amoresearch-1.gif',
      '/image/project/amoresearch-2.gif',
      '/image/project/amoresearch-3.gif',
      '/image/project/amoresearch-4.gif',
    ],
    contributions: [
      {
        title: 'CI/CD',
        content: '',
      },
      {
        title: 'Nuxt3',
        content: '',
      },
      {
        title: 'FastAPI',
        content: '',
      },
      {
        title: 'Python',
        content: '',
      },
      {
        title: 'MariaDB',
        content: '',
      },
      {
        title: 'ChromaDB',
        content: '',
      },
      {
        title: 'sLLM',
        content: '',
      },
      {
        title: 'AWS',
        content: '',
      },
      {
        title: 'Runpod',
        content: '',
      },
      {
        title: 'Docker',
        content: '',
      },
    ],
  },
  {
    modalType: 'lawbot',
    title: 'Lawbot',
    subtitle: ' RAG 기반 세법 AI 챗봇 개발',
    tag: 'TEAM',
    githubRepo: 'https://github.com/yunazz/SKN06-4th-4Team',
    date: '2024.12.24 ~ 2025.01.20',
    description:
      '복잡한 세법에 대한 질문에 신속하고 정확한 답변을 제공하는 챗봇 시스템을 개발했습니다. 법제처에서 제공하는 세법 데이터를 크롤링하여 학습 데이터로 가공하고, 자연어 질의에 응답할 수 있는 AI 챗봇 모델을 구축하는 것이 핵심 목표였습니다.',
    skills: 'Django, Python, OpenAI',
    role: '기획, 디자인, 프론트엔드, 백엔드, AI, DevOps',
    uiImage: ['/image/project/lawbot-1.png', '/image/project/lawbot-2.png'],
  },

  {
    modalType: 'sf',
    title: 'XXX펀즈',
    subtitle: '카피트레이딩 플랫폼',
    tag: 'TEAM',
    githubRepo: '',
    date: '2025.01.21 ~ 2025.03.20',
    description:
      '실시간 트레이딩 내역을 공개하며, 사용자들이 트레이더의 거래를 자동으로 따라할 수 있는 투명한 <u>카피트레이딩 플랫폼</u>을 개발했습니다. 트레이더 구독 기능과 트레이딩 대회를 통해 사용자 참여를 유도하며, <u>PWA 기반 웹앱과 웹뷰 앱</u>으로도 제공해 접근성과 사용성을 높였습니다.',
    skills: 'Nuxt3, MariaDB, PWA, Capacitor',
    role: '기획, 프론트엔드, 백엔드',
    uiImage: ['/image/project/sf-1.png', '/image/project/sf-2.png'],
  },
  {
    modalType: 'sklmno',
    title: 'SKLMNO',
    subtitle: '통신사 대리점 통합 관리 시스템',
    tag: 'TEAM',
    githubRepo: '',
    date: '2025.01.21 ~ 2025.03.20',
    description:
      '대리점 운영에 필요한 업무 기능을 통합한 <u>내부/외부용 웹 플랫폼</u>을 개발했습니다. 실제 통신업계의 복잡한 업무 프로세스를 반영하기 위해 많은 고민과 구조 설계를 거쳤으며, 결과적으로 현업 적용이 가능한 수준의 시스템을 구현했습니다.',
    skills: 'Vue2, Vuex, Vuetify',
    role: '기획, 프론트엔드',
    uiImage: ['/image/project/sklmno-1.png', '/image/project/sklmno-2.png'],
  },
  {
    modalType: 'joy',
    title: '조이펍',
    subtitle: '오프라인 매장 운영 시스템',
    tag: 'SOLO',
    githubRepo: '',
    date: '2025.01.21 ~ 2025.03.20',
    description:
      '오프라인 홀덤펍 매장 운영을 위한 관리 시스템으로, 티어·시즌 랭킹, 게임머니 충전/사용 등 주요 기능을 포함한 풀스택 외주 프로젝트입니다. 복잡한 로직과 유동적인 비즈니스 조건을 직접 설계하고 구현했습니다.',
    skills: 'Nuxt3, PrimeVue, MariaDB, Nginx, Ubuntu',
    role: '기획, 디자인, 프론트엔드, 백엔드, DevOps',
    uiImage: ['/image/project/joy-1.png', '/image/project/joy-2.png'],
  },
  {
    modalType: 'phone',
    title: 'XX폰',
    subtitle: '온라인 휴대폰 쇼핑몰',
    tag: 'SOLO',
    githubRepo: '',
    date: '2025.01.21 ~ 2025.03.20',
    description:
      '휴대폰을 쉽게 조회하고 신청할 수 있는 <u>온라인 쇼핑몰</u>과, 신청 내역을 관리할 수 있는 상담원용 <u>관리자 시스템</u>을 함께 개발했습니다. 사용자 편의성과 실제 상담 흐름을 고려한 구조로 설계되었으며, 복잡한 요금제 로직을 반영한 자동 요금 계산 시스템이 핵심 기능입니다.',
    skills: 'Nuxt2, Vuex, MariaDB, AWS, Nginx, Ubuntu',
    role: '기획, 디자인, 프론트엔드, 백엔드, DevOps',
  },
]);
const modal = ref(false);

const targetItem = ref(null);
function showDetail(item) {
  // modal.value[item] = true;
  modal.value = true;
  targetItem.value = item;
  document.documentElement.style.overflow = 'hidden';
}
function hideDetail() {
  document.documentElement.style.overflow = '';
  modal.value = false;

  // modal.value[item] = false;
}
</script>

<template>
  <section class="section-page">
    <div class="section-inner">
      <IOB>
        <h2 class="inter-800">PROJECT</h2>
      </IOB>
      <div>
        <div class="projects">
          <IOB v-for="(item, index) in projects" :key="index" :threshold="0.1">
            <div class="project">
              <span class="project-type-eng inter-700">
                {{ item.tag }}
              </span>
              <div>
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
              <p class="body-s project-type">{{ item.subtitle }}</p>
              <p class="project-description" v-html="item.description" />

              <p class="body-s fw-600 mt-3">내 역할</p>
              <p class="project-skill body-s">
                {{ item.role }}
              </p>

              <p class="body-s fw-600 mt-3">기술 스텍</p>
              <p class="project-skill body-s">
                {{ item.skills }}
              </p>
            </div>
            <div class="project-hover not-draggable">
              <button @click="showDetail(item)">자세히 보기</button>
            </div>
          </IOB>
        </div>
        <ProjectDetail v-if="modal" :project="targetItem" @close="hideDetail" />
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
.animate .project-hover {
  height: 100%;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  z-index: 1;
  width: 100%;
  height: 100%;
  background: rgba(105, 95, 1, 0.5);
  border-radius: 5px;
  opacity: 0;
  transition: all 0.25s ease;
}
.animate:hover .project-hover {
  opacity: 1;
}
.project-hover button {
  background: var(--color-yellow);
  padding: 10px 20px;
  font-weight: 500;
  font-size: 16px;
  border-radius: 5px;
  transition: all 0.2s ease;
}
.project-hover button:hover {
  background: var(--color-white);
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
.projects .animate:nth-of-type(1),
.projects .animate:nth-of-type(4) {
  transition-delay: 0.1s;
}
.projects .animate:nth-of-type(2),
.projects .animate:nth-of-type(5) {
  transition-delay: 0.2s;
}
.projects .animate:nth-of-type(3),
.projects .animate:nth-of-type(6) {
  transition-delay: 0.3s;
}
</style>
