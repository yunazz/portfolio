<script setup>
const projects = ref([
  {
    modalType: 'amoresearch',
    title: 'AmoreSearch',
    subtitle: 'sLLM 기반 사내 검색 시스템',
    tag: 'TEAM',
    githubRepo: 'https://github.com/yunazz/AmoreSearch',
    date: '2025.01.21 ~ 2025.03.20',
    intro: [
      'Nuxt3 + FastAPI 모던 풀스택 개발',
      'LangChain 기반 agentic 검색 흐름 설계',
      'sLLM 기반 온프레미스 AI 질의응답 시스템 구축',
      'LLM 파인튜닝 및 임베딩 모델 성능 실험',
      'AWS EC2, S3, RunPod 서버 인프라 구축 및 운영',
    ],
    role: '기획, 디자인, 프론트엔드, 백엔드, AI, DevOps — PM',
    skills:
      'Nuxt3, FastAPI, Docker, MariaDB, ChromaDB, sLLM, AWS EC2/S3, Runpod, CI/CD',
    description: `AmoreSearch는 아모레퍼시픽의 다양한 사내 정보를 통합 검색할 수 있도록 설계된 온프레미스 AI 검색 시스템입니다.<br/>
    기업 보안 정책을 준수하면서도 높은 검색 정확도와 사용자 친화적인 UX를 목표로 개발했으며,<br/>
    Nuxt3 기반 SSR 웹앱과 FastAPI 백엔드를 모던 풀스택으로 구축하고, LangChain을 이용해 agentic 검색 플로우를 설계했습니다.`,
    skillDetail: {
      frontend: 'Nuxt3, Vuetify',
      backend: 'FastAPI, Pydantic, PyMySQL, PyJWT',
      ai: 'LangChain, Qwen2.5-72B-Instruct, multilingual-e5-large, ',
      db: 'MariaDB, ChromaDB, AWS S3',
      server: 'AWS EC2, Docker, Github Actions (CI/CD), RunPod',
    },
    functions: [
      '통합 AI 검색 (사내 문서, 제품 정보, 뉴스, 논문 등)',
      'LLM 기반 질의응답 시스템',
      '외부 뉴스·논문 실시간 크롤링 및 조회',
      '자사 및 경쟁사 화장품 비교 (성분, 가격, 포장 등)',
      '즐겨찾기 저장 및 관리 기능',
      '사내 직원 입/퇴사 관리 기능',
      'JWT 기반 인증 시스템',
    ],
    contributions: [
      {
        title: 'AI 검색 시스템 설계 및 구현',
        details: [
          'LangChain 기반 agentic 구조 설계로, Tool Calling 링과 체인을 활용한 검색 흐름 구성',
          '다양한 임베딩 모델(multilingual-e5-large 등) 실험을 통해 최적의 검색 결과를 제공',
          '문서 유형별 벡터스토어를 분리해 검색 효율성 30% 향상',
          'Qwen2.5-72B-Instruct를 온프레미스 환경에 구축하여 외부 API 의존 없이 안정적인 AI 질의응답 제공',
        ],
      },
      {
        title: '프론트엔드 개발',
        details: [
          'Vuetify3를 활용한 UI/UX 설계 및 컴포넌트 개발',
          '로그인, 검색, 뉴스/문서/화장품 조회, 즐겨찾기, 마이페이지 등 주요 기능 구현',
          '실제 사용자 피드백을 반영하여 검색 결과 가독성과 접근성 개선',
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
          'Github Actions 기반 CI/CD 파이프라인 구축으로 배포 시간을 40% 단축',
          'Docker 기반 환경 통합으로 운영/배포 프로세스 표준화',
          'AWS EC2, S3, RunPod를 활용한 서버 및 모델 인프라 운영',
        ],
      },
    ],
    reviews: [
      [
        'Nuxt3 + FastAPI 기반 풀스택 아키텍처 설계 및 운영 경험 강화',
        '검색 결과 렌더링 속도 개선 경험',
        '파이썬, FastAPI, Docker, AWS 인프라 기술 역량을 대폭 강화',
        '프로젝트 PM 리딩 경험 (역할 분담, 일정 관리, 이슈 트래킹)',
        'SK하이닉스 출신 AI 엔지니어 멘토링을 통해 현업형 AI 시스템 구축 방식 학습 및 적용',
      ],
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
    subtitle: 'RAG 기반 세법 질의응답 챗봇 시스템',
    tag: 'TEAM',
    githubRepo: 'https://github.com/yunazz/SKN06-4th-4Team',
    date: '2024.12.24 ~ 2025.01.20',
    intro: [
      'Django 풀스텍 웹 서비스',
      '법제처, 홈텍스 데이터 크롤링 및 PDF 자료 수집',
      'PDF 텍스트 추출 및 문단 기준 chunk 전처리',
      'multilingual-e5 임베딩 및 ChromaDB 벡터 저장',
      'OpenAI API 기반 세법 질의응답 서비스 구축',
    ],
    role: '기획, 디자인, 프론트엔드, 백엔드, AI, DevOps — PM',
    skills: 'Django, Python, OpenAI API, ChromaDB, LangChain, RAGAS',
    description: `
    Lawbot은 세법 조항, 시행령, 시행규칙 등 방대한 법률 데이터를 기반으로<br/>
    비전문가도 쉽게 세무 지식을 검색하고 이해할 수 있도록 설계된 RAG 기반 AI 질의응답 챗봇입니다.<br/>
    Django 기반 웹 서비스로 구축하고, 대용량 PDF 데이터를 처리하여 벡터 임베딩 후 LLM을 통해 문맥 기반 응답을 제공하는 구조를 설계했습니다.`,

    skillDetail: {
      frontend: 'Django Templates',
      backend: 'Django, LangChain, OpenAI API',
      ai: 'gpt-3.5-turbo, text-embedding-3-small, RAGAS',
      db: 'ChromaDB, SQLite3',
      server: 'Django runserver (개발 환경)',
    },
    functions: [
      '회원가입/로그인 및 프로필 사진 업로드 기능',
      '대화 히스토리 저장 및 조회',
      '세법 및 연말정산 데이터 기반 AI 질의응답',
      '벡터스토어 기반 RAG 검색 최적화',
      '세법 종류 및 조항 분류 기반 임베딩 관리',
    ],
    contributions: [
      {
        title: '풀스택 웹 서비스 구축 경험',
        details: [
          'Django Template을 이용해 UI를 직접 설계 및 구현',
          '세션 기반 대화 기록 저장 기능을 추가하여 사용자 경험 향상',
          'Django 기반 유저 인증 및 권한 관리 구현',
        ],
      },
      {
        title: '대용량 PDF 데이터 처리 및 최적화',
        details: [
          '세법 PDF 문서를 자동 수집 및 추출한 후, chunk 단위로 분할하여 embedding 최적화',
          '데이터 구조를 조항별로 분류해, 검색 정확도를 기존 대비 약 20% 향상',
        ],
      },
      {
        title: 'RAG 시스템 품질 개선',
        details: [
          'ChromaDB 기반 벡터 검색 최적화 및 context retrieval 정확도 향상',
          'OpenAI API(gpt-3.5-turbo)와 연동하여 보다 자연스러운 문맥형 답변 생성',
          'RAGAS를 활용해 응답 품질을 계량적으로 측정하고 개선',
        ],
      },
      {
        title: '개발 생산성과 협업 최적화',
        details: [
          '화면 설계서 및 시스템 아키텍처 다이어그램을 작성하여 팀원 간 협업 효율 증대',
          'GitHub 프로젝트 관리 및 팀원 역할 분배',
        ],
      },
    ],
    reviews: [
      'Django 프레임워크 기반 풀스택 서비스 개발 역량 강화',
      'RAG 기반 AI 챗봇 설계 및 품질 개선 프로세스 실습 경험',
      '대규모 비정형 데이터 전처리 및 관리 경험 습득',
      '팀 리딩 및 협업 경험: 팀원 조율, 역할 분배, 일정 관리 경험',
      'AI + 웹서비스 통합 프로젝트 PM 경험',
    ],
    uiImage: ['/image/project/lawbot-1.png', '/image/project/lawbot-2.png'],
  },
  {
    modalType: 'sf',
    title: 'XXX펀즈',
    subtitle: '실시간 카피트레이딩 플랫폼',
    tag: 'COMPANY',
    githubRepo: '',
    date: '2023.07.01 ~ 2024.07.01',
    intro: [
      'Nuxt3 + PrimeVue 기반 트레이딩 플랫폼',
      'WebSocket 기반 실시간 트레이딩 데이터 수신',
      'MariaDB 데이터베이스 설계 및 랭킹 시스템 연동',
      '테스트 자동화 및 컴포넌트 모듈화로 유지보수성 향상',
      'PWA 기반 모바일 최적화',
    ],
    role: '기획, 프론트엔드, 백엔드',
    skills:
      'Nuxt3, PrimeVue, Node.js, MariaDB, PWA, WebSocket, Redis, Capacitor',
    description: `
    트레이더의 실시간 거래 내역을 투명하게 공개하고, 사용자가 실시간으로 거래를 자동 복제할 수 있도록 지원하는 카피트레이딩 플랫폼입니다.<br/>
    Nuxt3 기반 SSR 웹앱과 Node.js 백엔드를 활용해 빠르고 신뢰성 있는 트레이딩 환경을 구축했으며,<br/>
    모바일 대응을 위해 PWA 기반 웹앱과 웹뷰 앱을 개발했습니다.`,
    skillDetail: {
      frontend: 'Nuxt3, PrimeVue, Chart.js, PWA, WebSocket',
      backend: 'Node.js, Capacitor, Redis',
      db: 'MariaDB',
    },
    functions: [
      '실시간 트레이딩 내역 조회 (WebSocket 기반 스트리밍)',
      '트레이더 구독 및 자동 카피트레이딩 기능',
      '트레이딩 대회 운영 및 실시간 랭킹 시스템',
      'PWA 기반 모바일 최적화 및 웹뷰 앱 제공',
      '캐싱 및 오프라인 대응 기능 구현',
    ],
    contributions: [
      {
        title: '실시간 데이터 처리 및 스트리밍 최적화',
        details: [
          'WebSocket 기반 데이터 수신 시스템 구축',
          '데이터 병목 현상 문제를 발견하고, Redis Pub/Sub 구조로 개선하여 실시간 처리 지연을 50% 이상 감소시킴',
        ],
      },
      {
        title: '프론트엔드 개발 및 시스템 개선',
        details: [
          'Nuxt3를 활용하여 반응형 UI 및 사용자 인터페이스를 구현',
          '트레이더 상세 페이지: API 최적화 및 컴포넌트 재사용성 설계를 통해 성능 개선 및 유지보수 용이성 확보',
          '랭킹 시스템: 스케줄러 기반 매일 새벽 랭크 재계산 시스템을 구축하여 실시간으로 최신 정보를 제공',
          '다양한 차트와 데이터를 시각화하는 작업을 담당하여, 사용자가 트레이딩 내역과 성과를 직관적으로 이해할 수 있도록 구현',
          'PWA 앱: Android/Apple 대응, 캐싱 및 오프라인 대응 기능을 구현하여 모바일 환경에서 원활한 사용을 제공',
        ],
      },
      {
        title: '플랫폼 성능 및 확장성 개선',
        details: [
          'Nuxt3 서버사이드 렌더링 최적화를 통해 초기 로딩 속도 단축',
          '컴포넌트 모듈화를 강화하여 재사용성을 높이고 유지보수성을 확보',
          'Android/iOS 대응을 위해 PWA 기술을 적용하고, 오프라인 대응 및 캐싱 최적화로 모바일 UX를 향상',
        ],
      },
      {
        title: '백엔드 개발',
        details: [
          'MariaDB 기반 데이터베이스 설계 및 최적화',
          'API 개발 및 최적화 작업을 통해 시스템의 성능을 향상',
        ],
      },
    ],
    reviews: [
      'Nuxt3 기반 SSR 아키텍처의 최적화 및 운영 노하우 습득',
      '실시간 데이터 스트리밍 시스템 구축 경험',
      'PWA 기술을 통한 모바일 친화 서비스 설계 및 최적화 경험',
      'Redis를 이용한 서버 확장성과 안정성 확보 실습',
      '테스트 자동화, 컴포넌트화 등 지속적 품질 개선을 실천',
      '스타트업 환경에서 제품 전체를 리딩하며 A to Z 개발 역량 강화',
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
    intro: [
      'Vue2 + Vuetify 기반 B2B 시스템 개발',
      'Vuex를 활용한 상태관리 및 데이터 흐름 최적화',
      '요금계산기, 물류관리, 신청서 작성 등 업무 모듈 구축',
      'Chart.js로 대시보드 시각화',
      'Agile/Scrum 기반 개발과 Jira, Notion, Slack 활용',
    ],
    role: '기획, 프론트엔드',
    skills: 'Vue2, Vuex, Vuetify, WebSocket, Chart.js',
    description: `통신사 대리점 운영에 필요한 전반적인 업무(가입 신청서, 요금계산기, 물류 관리 등)를
    통합 관리할 수 있도록 설계된 B2B 웹 시스템입니다.<br/>
    Vue2 + Vuetify 기반의 모던한 프론트엔드와, 복잡한 업무 프로세스를 지원하는 모듈화를 통해<br/>
    다양한 이해관계자(고객, 대리점 직원, 관리자)의 니즈를 반영했습니다.`,
    skillDetail: {
      frontend: 'Vue2, Vuex, Vuetify, WebSocket, Chart.js',
    },
    functions: [
      '실시간 데이터 대시보드',
      '가입 신청서 작성 및 관리',
      '요금제 계산기, 공시지원금 관리',
      '회원/요금제/물류/정산/쇼핑몰 등 대리점 업무 통합 관리',
      '다양한 사용자 권한 및 접근 제어 시스템',
    ],
    contributions: [
      {
        title: '복잡한 비즈니스 로직 모델링 및 모듈화',
        details: [
          '통신 요금계산 로직의 복잡성과 빈번한 정책 변경 문제를 해결하기 위해, 요금 계산기 로직을 독립 모듈화하고, 정책 변경에 유연하게 대응할 수 있도록 설계',
          '물류 관리 및 공시지원금 관리 시스템도 별도 모듈로 분리하여 유지보수성과 가독성을 크게 개선',
          'WebSocket 기반 실시간 데이터 수신 시스템을 구축하여, 신청서 및 알림 기능의 업데이트 지연 문제를 40% 이상 개선',
        ],
      },
      {
        title: '애자일 기반 빠른 피드백/배포 사이클 구축',
        details: [
          'Jira 이슈 관리, Notion 문서화, Slack 커뮤니케이션을 적극 활용하여 개발 주기(스크럼 스프린트) 내 안정적인 기능 배포 성공률 유지',
        ],
      },
      {
        title: 'Vuex 상태 관리 최적화',
        details: [
          '다수의 업무 모듈 간 데이터 공유 문제를 해결하기 위해, Vuex 스토어 구조를 재설계하여 데이터 동기화 이슈를 감소시키고 버그 발생률을 낮춤',
        ],
      },
    ],
    reviews: [
      '대규모 B2B 복합 업무 시스템의 설계 및 운영 경험 축적',
      'Vue/Vuex 기반 SPA 아키텍처 설계 능력 강화',
      'WebSocket 실시간 스트리밍 및 대시보드 최적화 경험',
      '애자일 개발 프로세스 적응 및 협업 스킬 향상',
      '복잡한 비즈니스 로직 분석 및 모듈화 설계 능력 성장',
    ],
    uiImage: ['/image/project/sklmno-1.png', '/image/project/sklmno-2.png'],
  },
  {
    modalType: 'joy',
    title: '조이펍',
    subtitle: '오프라인 매장 운영 시스템 풀스택 개발',
    tag: 'FREELANCE',
    githubRepo: '',
    date: '2024.08.01 ~ 2025.09.01',
    intro: [
      'Nuxt3 + Quasar 기반 매장 운영 시스템 풀스택 개발',
      'Kysely ORM을 통한 데이터베이스 최적화',
      'Ubuntu 서버 세팅 및 Nginx 배포 자동화',
      '컴포넌트 재사용성 설계를 통해 성능 개선',
      '디자인시스템 구축',
    ],
    role: '기획, 디자인, 프론트엔드, 백엔드, DevOps',
    skills: 'Nuxt3, Quasar, Node.js, MariaDB, Kysely ORM, Ubuntu, Nginx',
    description: `홀덤펍 매장의 운영을 디지털화하여 게임머니 관리, 시즌별 랭킹, 우승자 등록 등 다양한 매장 운영 업무를 효율화하는 풀스택 시스템입니다.<br/>
    Nuxt3 + Quasar를 기반으로 반응형 UI를 구축하고, Kysely ORM을 활용해 안정적이고 확장 가능한 데이터베이스 아키텍처를 설계했습니다.<br/>
    서버 인프라는 Ubuntu, Nginx 환경에서 직접 구축 및 최적화하여 전방위적인 운영을 담당했습니다.`,
    skillDetail: {
      frontend: 'Nuxt3, Quasar',
      backend: 'Node.js, Kysely ORM',
      db: 'MariaDB',
      server: 'Cafe24 서버호스팅(Ubuntu), Nginx, Ubuntu',
    },
    functions: [
      '시즌별 랭킹 관리 및 점수 추적',
      '게임머니(조이) 충전/사용 기록 관리',
      '관리자 시스템 구축 (회원, 시즌, 게임 기록 관리)',
      '모바일 및 데스크탑 반응형 UX 설계',
      'Ubuntu + Nginx 기반 서버 운영 및 보안 강화',
    ],
    contributions: [
      {
        title: ' 비정형 매장 운영 프로세스 디지털화',
        details: [
          '기존 수기 기록/수동 관리 체계를 디지털 시스템으로 전환',
          '매장 운영 편의성 및 데이터 관리 정확도 70% 이상 향상',
        ],
      },
      {
        title: '반응형 UX 개선 및 사용성 테스트',
        details: [
          'Quasar 컴포넌트와 Nuxt3를 활용하여 모바일/데스크탑 모두 최적화',
          '실제 매장 직원 대상 사용성 테스트를 진행하여 UX 개선사항 반영',
        ],
      },
      {
        title: '보안 강화 및 데이터 정합성',
        details: [
          'Ubuntu 서버에 Nginx 리버스 프록시 및 HTTPS 적용으로 보안 강화',
          '데이터 정합성 이슈를 발견하고, 트랜잭션 처리 로직을 추가하여 해결',
        ],
      },
    ],
    reviews: [
      'Nuxt3 + Quasar 조합을 통한 반응형 풀스택 아키텍처 구축 경험',
      'ORM 기반 데이터베이스 설계 및 최적화 역량 강화',
      'Ubuntu 서버 세팅 및 운영 경험 (보안/최적화 포함)',
      '고객/운영자 관점의 UX 개선 및 실사용 피드백 반영 경험',
      '단독 프로젝트 운영 책임감 및 DevOps 스킬 강화',
    ],
    uiImage: ['/image/project/joy-1.png', '/image/project/joy-2.png'],
  },
  {
    modalType: 'phone',
    title: 'XX폰',
    subtitle: '온라인 휴대폰 쇼핑몰 풀스택 개발',
    tag: 'FREELANCE',
    githubRepo: '',
    date: '2022.05 ~ 2022.07',
    intro: [
      'Nuxt2 기반 온라인 휴대폰 쇼핑몰 UI/UX 개발',
      'PostgreSQL 데이터 베이스 설계 및 구축',
      'REST API, AWS S3 파일 업로드, 이메일 백엔드 개발',
      'EC2 + Ubuntu 서버 세팅 및 Nginx 리버스 프록시',
      '관리자 페이지를 통해 관리 시스템 구축',
    ],
    role: '기획, 디자인, 프론트엔드, 백엔드, DevOps',
    skills: 'Nuxt2, Vuex, Node.js, PostgreSQL, AWS EC2, S3, Nginx, Ubuntu',
    description: `XX폰은 다양한 휴대폰 상품과 요금제를 온라인으로 쉽게 비교하고 신청할 수 있도록 설계된 풀스택 쇼핑몰 플랫폼입니다.<br/>
    Nuxt2를 활용한 서버사이드 렌더링(SSR) 웹앱으로 초기 렌더링 속도를 개선하고,<br/>
    AWS 기반 인프라를 구축하여 안정적인 서비스 제공을 목표로 개발했습니다.`,
    skillDetail: {
      frontend: 'Nuxt2, Vuex, SCSS',
      backend: 'Node.js, Nginx',
      db: 'PostgreSQL',
      server: 'AWS(EC2 - Ubuntu)',
    },
    functions: [
      '상품 검색, 장바구니, 주문 신청 기능',
      '관리자용 상품/요금제/신청서 관리 시스템',
      'AWS S3 기반 파일 업로드 및 관리',
      '권한별 로그인 및 접근 제어',
      'EC2 + Ubuntu 서버 운영 및 Nginx 리버스 프록시 설정',
    ],
    contributions: [
      {
        title: 'SSR 기반 SEO 최적화 및 초기 렌더링 속도 개선',
        details: [
          'Nuxt2의 서버사이드 렌더링을 활용해, SEO 최적화와 초기 페이지 로딩 속도를 기존 대비 약 35% 향상',
          '데스크탑과 모바일 모두 최적화된 반응형 쇼핑몰 UI를 구현',
        ],
      },
      {
        title: '안정적인 데이터, 파일 업로드 시스템 구축',
        details: [
          'PostgreSQL를 사용하여 데이터베이스 설계 및 CRUD API 구현',
          '권한에 따라 등록/수정/삭제 허용',
          'AWS S3와 연동하여 상품 이미지 및 신청서 파일을 안정적으로 저장 및 관리',
          '파일 업로드 실패 및 보안 이슈를 고려하여 Presigned URL 방식을 적용',
        ],
      },
      {
        title: '서버 인프라 직접 구축 및 운영',
        details: [
          'AWS EC2 환경에서 서버 배포 및 운영',
          'Nginx와 Ubuntu 서버를 사용하여 웹 서버 구축 및 배포',
        ],
      },
    ],
    reviews: [
      'Nuxt2 SSR을 활용한 SEO 및 퍼포먼스 최적화 경험',
      'AWS EC2 + S3 인프라 구축 및 배포 경험 강화',
      'Vuex를 통한 상태 관리 및 데이터 흐름 최적화 실습',
      '오픈소스 분석과 트러블슈팅',
      '전체 시스템 설계 및 독립 운영 경험을 통한 풀사이클 역량 강화',
      'Node.js를 활용한 REST API 설계 및 보안 이슈 대응 경험',
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
              <div class="flex align-start">
                <h5 class="title-s fw-700">{{ item.title }}</h5>
                <img
                  v-if="item?.githubRepo"
                  class="github-logo"
                  src="/assets/image/logo-github.png"
                />
              </div>
              <p class="body-s project-type">{{ item.subtitle }}</p>
              <ol class="project-intro">
                <li v-for="(intro_item, i) in item.intro" :key="i">
                  {{ intro_item }}
                </li>
              </ol>

              <p class="body-s fw-600 mt-3">내 역할</p>
              <p class="project-skill body-s">
                {{ item.role }}
              </p>

              <p class="body-s fw-600 mt-3">기술 스텍</p>
              <p class="project-skill body-s">
                {{ item.skills }}
              </p>
              <div class="more">
                <img src="/assets/image/more.png" />
              </div>
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
  height: 354px;
  position: relative;
  display: flex;
  flex-direction: column;
  background: white;
  border-radius: 5px;
  padding: 18px 28px 16px 28px;
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
.align-start.flex {
  align-items: center;
  height: 36px;
  gap: 12px;
}
.github-logo {
  width: 22px;
  height: 22px;
}
.more {
  position: absolute;
  right: 16px;
  top: 6px;
}
.more img {
  width: 22px;
}
.project-type-eng {
  position: absolute;
  top: -34px;
  right: 0;
  font-size: 1.5rem;
  color: var(--color-lightyellow);
}
.project .project-type {
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
.project-intro li {
  list-style-type: disc;
  margin-left: 18px;
  line-height: 1.6;
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
