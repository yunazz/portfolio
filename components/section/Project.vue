<script setup>
const projects = ref([
  {
    modalType: 'amoresearch',
    title: 'AmoreSearch',
    subtitle: 'sLLM 기반 사내 검색 시스템',
    tag: 'TEAM',
    githubRepo: 'https://github.com/yunazz/AmoreSearch',
    date: '2025.01.21 ~ 2025.03.20',
    intro:
      '아모레퍼시픽에서 사용할 수 있는 <u>AI 사내검색 시스템</u>을 개발했습니다. 사내 문서, 자사 브랜드 제품, 타사 경쟁제품, 논문, 최신 뉴스 등 다양한 정보를 한 번에 검색하고 조회할 수 있도록 구성된 AI 기반 웹 서비스입니다.',
    role: '기획, 디자인, 프론트엔드, 백엔드, AI, DevOps',
    skills:
      'Nuxt3, FastAPI, Docker, MariaDB, ChromaDB, sLLM, Runpod, AWS, CI/CD',
    description: `AmoreSearch는 아모레퍼시픽의 사내 정보를 보다 효율적으로 검색하고 활용할 수 있도록 설계된 <u>AI 기반 검색 시스템</u>입니다.<br /> sLLM을 활용한 질의응답 시스템으로, 사내 문서뿐 아니라 화장품 정보, 업계 뉴스 및 논문 등 다양한 정보를 통합적으로 검색할 수 있도록 설계되었으며,<br />LLM 파인튜닝과 임베딩 실험을 통해 사용자에게 최적화된 검색 결과를 제공하는 것이 핵심 목표였습니다.`,
    skillDetail: {
      frontend: 'Nuxt3, Vuetify',
      backend: 'FastAPI, LangChain, Pydantic, PyMySQL, PyJWT',
      ai: 'Qwen2.5-72B-Instruct, multilingual-e5-large (RunPod)',
      db: 'MariaDB, ChromaDB, AWS S3',
      server: 'AWS EC2, Docker, Github Actions (CI/CD)',
    },
    functions: [
      'AI 기반 통합 검색 (사내 문서, 뉴스, 논문, 제품 정보 등)',
      '최신 뉴스·논문·저널 크롤링 및 AI 질의',
      '외부 뉴스/논문/저널 조회',
      '자사 및 경쟁사 화장품 비교 (성분, 가격, 포장 등)',
      '즐겨찾기 기능',
      '직원 입·퇴사 관리',
      'JWT 기반 로그인 인증',
    ],
    contributions: [
      {
        title: 'AI 검색 시스템 설계 및 구현',
        details: [
          'LangChain 기반 agentic 구조 설계로, 툴콜링과 체인을 활용한 검색 흐름 구성',
          'multilingual-e5-large 임베딩 모델 실험 및 채택',
          'Qwen2.5-72B-Instruct 기반 LLM 연동',
        ],
      },
      {
        title: '프론트엔드 개발',
        details: [
          'Vuetify3를 활용한 UI/UX 설계 및 컴포넌트 개발',
          '로그인, 검색, 뉴스/문서/화장품 조회, 즐겨찾기, 마이페이지 등 주요 기능 구현',
        ],
      },
      {
        title: '백엔드 개발',
        details: [
          'FastAPI 기반의 RESTful API 구현',
          '관계형 데이터베이스(MariaDB)를 위한 CRUD API 개발',
          'Vector Store(ChromaDB) 연동을 위한 벡터 검색 API 구현',
        ],
      },
      {
        title: '데이터베이스',
        details: [
          '사내 데이터에 기반한 관계형 스키마 설계 및 구축',
          '문서 성격에 따라 벡터스토어를 분리하여 collection 단위로 구성',
          '각 collection에 맞는 데이터를 전처리 후 임베딩 및 적재',
          'AWS S3를 활용한 문서 및 이미지 저장소 연동',
        ],
      },
      {
        title: 'CI/CD 및 인프라',
        details: [
          'Github Actions를 활용한 자동화된 CI/CD 파이프라인 구축',
          'Docker 기반의 컨테이너 환경 구성 및 배포 자동화',
          'AWS EC2, S3, RunPod를 활용한 서버 및 모델 인프라 운영',
        ],
      },
    ],
    uiImage: [
      '/image/project/amoresearch-1.gif',
      '/image/project/amoresearch-2.gif',
      '/image/project/amoresearch-3.gif',
      '/image/project/amoresearch-4.gif',
    ],
  },
  {
    modalType: 'lawbot',
    title: 'Lawbot',
    subtitle: 'Django 기반 세법 AI 챗봇 개발',
    tag: 'TEAM',
    githubRepo: 'https://github.com/yunazz/SKN06-4th-4Team',
    date: '2024.12.24 ~ 2025.01.20',
    intro:
      '일반인에게 어려운 대한민국 <u>세법과 연말정산 정보를 보다 쉽게 제공</u>하기 위한 RAG 기반의 AI 챗봇을 개발했습니다. Django와 LLM을 활용하여, 실질적인 법 조항을 문맥에 맞게 응답하도록 구현한 웹 기반 챗봇 시스템입니다.',
    role: '기획, 디자인, 프론트엔드, 백엔드, AI, DevOps',
    skills: 'Django, Python, OpenAI API, ChromaDB, LangChain, RAGAS',
    description: `Lawbot은 세법 관련 지식을 비전문가도 쉽게 접근할 수 있도록 <u>세무 관련 질의응답 기능</u>을 제공합니다.<br />
          세법 조항, 시행령, 시행규칙 등을 포함한 대용량 데이터를 PDF로부터 수집, 전처리하여<br />
          chunk 기반 벡터스토어로 구성하고, RAG 방식으로 LLM에 문맥 기반 응답을 생성하도록 했습니다.`,
    skillDetail: {
      frontend: 'HTML, CSS, Django Templates',
      backend: 'Django, LangChain, Python, OpenAI API',
      ai: 'gpt-3.5-turbo, text-embedding-3-small, RAGAS',
      db: 'ChromaDB, SQLite3',
      server: 'Django runserver (개발 환경)',
    },
    functions: [
      '세법 및 연말정산 관련 질의응답',
      '벡터스토어 기반 RAG 챗봇 구현',
      '회원가입, 로그인, 프로필 사진 업로드 기능',
      'Session 기반 대화 히스토리 저장',
      '사용자 프로필 관리',
      '세법 종류 및 조항 분류 기반 임베딩 관리',
    ],
    contributions: [
      {
        title: 'AI 및 RAG 시스템 구성',
        details: [
          'PDF 기반 세법 문서를 chunk 단위로 split 후 embedding 진행',
          'ChromaDB에 임베딩 결과 저장하여 context 기반 검색 수행',
          'OpenAI API (gpt-3.5-turbo)와 연동하여 RAG 기반 질의응답 시스템 구현',
          'RAGAS를 활용하여 응답 품질 측정',
        ],
      },
      {
        title: '프론트엔드 개발',
        details: [
          'Django Template 기반 UI 화면 설계 및 구현',
          '챗봇 페이지, 마이페이지, 로그인/회원가입 등 구성',
          '사용자 프로필 이미지 업로드 및 반응형 구성',
        ],
      },
      {
        title: '백엔드 개발',
        details: [
          'Django 기반 유저 인증 및 권한 관리 구현',
          '챗봇 대화 세션 저장 및 조회 기능 구현',
        ],
      },
      {
        title: '데이터 전처리 및 저장',
        details: [
          '75개 이상의 세법 PDF 수집 및 텍스트 변환',
          '법률, 시행령, 시행규칙 등을 기준으로 폴더별 분류 및 저장',
        ],
      },
      {
        title: '문서화 및 협업',
        details: [
          '화면설계서 및 시스템 구성도 작성',
          'GitHub 프로젝트 관리 및 팀원 역할 분배',
        ],
      },
    ],
    uiImage: ['/image/project/lawbot-1.png', '/image/project/lawbot-2.png'],
  },
  {
    modalType: 'sf',
    title: 'XXX펀즈',
    subtitle: '카피트레이딩 플랫폼',
    tag: 'COMPANY',
    githubRepo: '',
    date: '2023.07.01 ~ 2024.07.01',
    intro:
      '실시간 트레이딩 내역을 공개하며, 사용자들이 트레이더의 거래를 자동으로 따라할 수 있는 투명한 <u>카피트레이딩 플랫폼</u>을 개발했습니다. 트레이더 구독 기능과 트레이딩 대회를 통해 사용자 참여를 유도하며, <u>PWA 기반 웹앱과 웹뷰 앱</u>으로도 제공해 접근성과 사용성을 높였습니다.',
    role: '기획, 프론트엔드, 백엔드',
    skills: 'Nuxt3, MariaDB, PWA, Capacitor',
    description: `실시간 트레이딩 내역을 투명하게 공개하고, 사용자들이 손쉽게 트레이더의 거래를 자동으로 따라 할 수 있는 <u>카피트레이딩 플랫폼</u>을 개발했습니다. <br/>
    사용자는 관심 있는 트레이더를 구독하고, 실시간으로 거래 내역을 확인하며, 이를 기반으로 자동으로 거래를 실행할 수 있습니다.  <br/>
    또한, 트레이딩 대회를 통해 사용자들이 적극적으로 참여하고 경쟁할 수 있도록 유도하여 플랫폼의 활발한 커뮤니티 형성을 도왔으며, <br/>
    <u>PWA 기반 웹앱과 웹뷰 앱</u>으로 제공하여, 다양한 접근성과 편의성을 높였습니다.`,
    skillDetail: {
      frontend: 'Nuxt3, PrimeVue, Chart.js, PWA, WebSocket',
      backend: 'Node.js, Capacitor, Redis',
      db: 'MariaDB',
    },
    functions: [
      '실시간 트레이딩 내역 조회 — 사용자가 트레이더의 실시간 거래 내역을 확인할 수 있습니다.',
      '트레이더 구독 기능 — 사용자가 선호하는 트레이더를 구독하여 자동으로 거래를 따라 할 수 있습니다.',
      '트레이딩 대회 — 사용자들이 참여할 수 있는 트레이딩 대회를 통해 경쟁과 참여를 유도합니다.',
      'PWA 기반 웹앱 — 모바일 환경에서도 원활한 사용을 위해 PWA 기반 웹앱을 제공합니다.',
      '웹뷰 앱 — 네이티브 앱처럼 사용할 수 있는 웹뷰 앱을 통해 접근성을 높였습니다.',
    ],
    contributions: [
      {
        title: '기획',
        details: ['사용자 경험을 고려한 플랫폼 구조 설계 및 기능 기획에 참여'],
      },
      {
        title: '프론트엔드 개발',
        details: [
          'Nuxt3를 활용하여 반응형 UI 및 사용자 인터페이스를 구현하였습니다.',
          '트레이더 상세 페이지: API 최적화 및 컴포넌트 재사용성 설계를 통해 성능 개선 및 유지보수 용이성 확보.',
          '랭킹 시스템: 스케줄러 기반 매일 새벽 랭크 재계산 시스템을 구축하여 실시간으로 최신 정보를 제공.',
          '다양한 차트와 데이터를 시각화하는 작업을 담당하여, 사용자가 트레이딩 내역과 성과를 직관적으로 이해할 수 있도록 구현.',
          'PWA 앱: Android/Apple 대응, 캐싱 및 오프라인 대응 기능을 구현하여 모바일 환경에서 원활한 사용을 제공.',
        ],
      },
      {
        title: '백엔드 개발',
        details: [
          'MariaDB를 기반으로 데이터베이스 설계.',
          'API 개발 및 최적화 작업을 통해 시스템의 성능을 향상시켰습니다.',
        ],
      },
    ],
    uiImage: ['/image/project/sf-1.png', '/image/project/sf-2.png'],
  },
  {
    modalType: 'sklmno',
    title: 'SKLMNO',
    subtitle: '통신사 대리점 통합 관리 시스템',
    tag: 'COMPANY',
    githubRepo: '',
    date: '2021.04 ~ 2022.12',
    intro:
      '대리점 운영에 필요한 업무 기능을 통합한 <u>내부/외부용 웹 플랫폼</u>을 개발했습니다. 실제 통신업계의 복잡한 업무 프로세스를 반영하기 위해 많은 고민과 구조 설계를 거쳤으며, 결과적으로 현업 적용이 가능한 수준의 시스템을 구현했습니다.',
    role: '기획, 프론트엔드',
    skills: 'Vue2, Vuex, Vuetify',
    description: `대리점 운영에 필요한 모든 업무 기능을 통합한 내부/외부용 웹 플랫폼을 개발한 프로젝트입니다.<br/>
      실시간으로 변화하는 통신업계의 복잡한 업무 프로세스를 고려하여, 사용자 경험을 극대화하는 UI 디자인과 효율적인 시스템 구조 설계를 반영하였고,<br/>
      고객과 대리점 직원 모두의 사용 편의성을 고려해 최적화된 기능을 제공하며, 실제 현업에서 바로 활용할 수 있는 시스템으로 구현하었습니다.`,
    skillDetail: {
      frontend: 'Vue2, Vuex, Vuetify, WebSocket, Chart.js',
    },
    functions: [],
    contributions: [],
    uiImage: ['/image/project/sklmno-1.png', '/image/project/sklmno-2.png'],
  },

  {
    modalType: 'joy',
    title: '조이펍',
    subtitle: '오프라인 매장 운영 시스템',
    tag: 'SOLO',
    githubRepo: '',
    date: '2024.08.01 ~ 2025.09.01',
    intro:
      '오프라인 홀덤펍 매장 운영을 위한 관리 시스템으로, 티어·시즌 랭킹, 게임머니 충전/사용 등 주요 기능을 포함한 풀스택 외주 프로젝트입니다. 복잡한 로직과 유동적인 비즈니스 조건을 직접 설계하고 구현했습니다.',
    role: '기획, 디자인, 프론트엔드, 백엔드, DevOps',
    skills: 'Nuxt3, Quasar, MariaDB, Nginx, Ubuntu',
    skillDetail: {
      frontend: 'Nuxt3, Quasar',
      backend: 'Node.js, Nginx, Ubuntu',
      db: 'MariaDB',
      server: 'Cafe24 서버호스팅(Ubuntu)',
    },
    functions: [],
    contributions: [],
    uiImage: ['/image/project/joy-1.png', '/image/project/joy-2.png'],
  },
  {
    modalType: 'phone',
    title: 'XX폰',
    subtitle: '온라인 휴대폰 쇼핑몰',
    tag: 'SOLO',
    githubRepo: '',
    date: '2022.05 ~ 2022.07',
    intro:
      '휴대폰을 쉽게 조회하고 신청할 수 있는 <u>온라인 쇼핑몰</u>과, 신청 내역을 관리할 수 있는 상담원용 <u>관리자 시스템</u>을 함께 개발했습니다. 사용자 편의성과 실제 상담 흐름을 고려한 구조로 설계되었으며, 복잡한 요금제 로직을 반영한 자동 요금 계산 시스템이 핵심 기능입니다.',
    role: '기획, 디자인, 프론트엔드, 백엔드, DevOps',
    skills: 'Nuxt2, Vuex, MariaDB, AWS, Nginx, Ubuntu',
    description: `휴대폰을 손쉽게 조회하고 신청할 수 있는 <u>온라인 쇼핑몰</u>과, 사용자가 신청한 내역을 효율적으로 관리할 수 있는 상담원용 <u>관리자 시스템</u>을 <br/>
    함께 개발한 프로젝트입니다. 이 시스템은 사용자 편의성과 실제 상담 흐름을 최우선으로 고려하여 설계되었으며, 복잡한 요금제 로직을 반영한<br/>
    자동 요금 계산 시스템을 통해 사용자가 보다 정확하고 빠르게 요금을 확인하고 신청할 수 있도록 지원합니다`,
    skillDetail: {
      frontend: 'Nuxt2, Vuex, SCSS',
      backend: 'Node.js, Nginx',
      db: 'MariaDB',
      server: 'AWS(EC2 - Ubuntu)',
    },
    functions: [],
    contributions: [
      {
        title: '기획 및 UI/UX 디자인',
        details: [
          '쇼핑몰의 전체적인 사용자 경험(UX) 및 인터페이스(UI) 설계.',
          '모바일 환경과 데스크탑 환경을 모두 고려한 반응형 디자인 구현.',
        ],
      },
      {
        title: '프론트엔드 개발',
        details: [
          'Nuxt2를 활용하여 쇼핑몰의 사용자 인터페이스 구현.',
          '제품 검색, 신청, 장바구니, 회원가입 등 주요 기능을 구현.',
        ],
      },
      {
        title: '백엔드 개발',
        details: [
          'MariaDB를 사용하여 데이터베이스 설계 및 CRUD API 구현.',
          '쇼핑몰 제품, 사용자 정보, 주문 내역 등을 관리하는 API 구축.',
        ],
      },
      {
        title: '서버 배포 및 운영',
        details: [
          'Nginx와 Ubuntu 서버를 사용하여 웹 서버 구축 및 배포.',
          'AWS EC2 환경에서 쇼핑몰과 관리자 시스템의 서버 배포 및 운영.',
        ],
      },
      {
        title: '관리자 시스템 개발',
        details: [
          '상품, 요금제, 고객, 신청서 등 다양한 항목을 통합 관리할 수 있는 시스템 구축.',
          '권한 기반 로그인 및 페이지 접근 제어 시스템 구현.',
        ],
      },
    ],
    uiImage: ['/image/project/phone-1.png'],
  },
]);
const modal = ref(false);

const targetItem = ref(null);
function showDetail(item) {
  modal.value = true;
  targetItem.value = item;
  document.documentElement.style.overflow = 'hidden';
}
function hideDetail() {
  document.documentElement.style.overflow = '';
  modal.value = false;
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
              <p class="project-intro" v-html="item.intro" />

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
.project-intro {
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
