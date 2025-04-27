<script setup>
const props = defineProps(['modalType', 'project']);
const emit = defineEmits(['close']);

function close() {
  emit('close');
}

const typeText = computed(() =>
  props.project.tag === 'TEAM'
    ? '팀 프로젝트'
    : props.project.tag === 'FREELANCE'
    ? '개인 프리랜스 프로젝트'
    : '회사 프로젝트'
);
</script>

<template>
  <div class="modal-overlay" @click.self="close">
    <div class="modal project-modal">
      <button class="close-btn" @click="close">
        <Icon
          name="material-symbols:close-rounded"
          style="color: black; font-size: 26px"
        />
      </button>
      <div class="modal-inner">
        <h3 class="project-title">
          {{ project.title }}
          <a
            v-if="project.githubRepo"
            :href="project.githubRepo"
            target="_blank"
          >
            <img src="/assets/image/logo-github.png" alt="" />
          </a>
        </h3>
        <p class="project-subtitle">{{ project.subtitle }}</p>
        <p class="project-date">
          작업기간 : {{ project.date }} / {{ typeText }}
        </p>
        <div class="project-description">
          <p v-html="project.description" class="text-center" />
        </div>

        <article>
          <h5>👩🏻‍💻 내 역할</h5>
          <div class="project-skills">
            {{ project.role }}
          </div>
        </article>

        <article>
          <h5>🛠️ 기술 스텍</h5>
          <template v-if="project?.skillDetail">
            <table class="tech-stack">
              <thead>
                <tr>
                  <th>구분</th>
                  <th>사용 기술</th>
                </tr>
              </thead>
              <tbody>
                <tr v-if="project?.skillDetail.frontend">
                  <td>프론트엔드</td>
                  <td>{{ project.skillDetail.frontend }}</td>
                </tr>
                <tr v-if="project?.skillDetail.backend">
                  <td>백엔드</td>
                  <td>{{ project.skillDetail.backend }}</td>
                </tr>
                <tr v-if="project?.skillDetail.ai">
                  <td>LLM / 임베딩</td>
                  <td>{{ project.skillDetail.ai }}</td>
                </tr>
                <tr v-if="project?.skillDetail.db">
                  <td>데이터베이스</td>
                  <td>{{ project.skillDetail.db }}</td>
                </tr>
                <tr v-if="project?.skillDetail.server">
                  <td>서버/인프라</td>
                  <td>{{ project.skillDetail.server }}</td>
                </tr>
              </tbody>
            </table>
          </template>
        </article>

        <article>
          <h5>🧩 주요 기능</h5>
          <ol>
            <li v-for="(fnc, index) in project.functions" :key="index">
              {{ fnc }}
            </li>
          </ol>
        </article>

        <article class="my-work">
          <h5>🚀 핵심 기여 및 문제 해결 경험</h5>
          <details
            v-for="(contribution, index) in project.contributions"
            :key="index"
            open
          >
            <summary>
              <span class="highlight">{{ contribution.title }}</span>
            </summary>
            <div>
              <ol>
                <li v-for="(detail, i) in contribution.details" :key="i">
                  {{ detail }}
                </li>
              </ol>
            </div>
          </details>
        </article>

        <article>
          <h5>📈 프로젝트를 통해 성장한 점</h5>
          <ol>
            <li v-for="(review, index) in project.reviews" :key="index">
              {{ review }}
            </li>
          </ol>
        </article>

        <article>
          <h5>
            <template v-if="project.modalType === 'lawbot'"
              >🎨 화면설계서</template
            >
            <template v-else>🖼️ UI</template>
          </h5>

          <div :id="`ui-${project.modalType}`" class="project-ui">
            <div v-for="(image, idx) in project.uiImage" :key="idx">
              <img :src="image" :alt="`UI 이미지 ${idx}`" />
            </div>
          </div>
        </article>
      </div>
    </div>
  </div>
</template>

<style scoped>
.modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
}

.modal {
  position: relative;
  background: white;
  border-radius: 10px;
  padding: 3rem 2rem 4.5rem;
  max-width: 80vw;
  min-width: 1200px;
  width: 90%;
  height: 92vh;
  overflow-y: auto;
  font-size: 15px;
  animation: modalFadeIn 0.3s ease;
}

.modal-inner {
  width: 1000px;
  margin: 0 auto;
}

.modal article {
  margin-top: 3.5em;
}
.project-modal h5 {
  margin-bottom: 1rem;
  font-size: 1.5rem;
  font-weight: 600;
}

.project-title {
  display: flex;
  justify-content: center;
  column-gap: 10px;
  font-size: 2.5rem;
  line-height: 1;
  margin: 4px 0 6px;
  text-align: center;
  font-weight: 700;
  color: #ffd500;
}
.project-title img {
  width: 32px;
}
.project-subtitle {
  text-align: center;
  font-size: 1.375rem;
  font-weight: 500;
  word-spacing: -1px;
  margin-bottom: 4px;
}

.project-date {
  color: #bdbdbd;
  text-align: center;
  margin-top: 10px;
}
.my-work details summary {
  font-weight: 600;
}
.project-modal .my-work details {
  padding: 10px 20px;
}
.project-modal .my-work details div {
  padding-left: 12px;
}
.my-work details ol li {
  margin-bottom: 4px;
}

.project-modal details {
  font-size: 1rem;
  margin: 6px 0;
  padding: 7px 16px;
  background: #f0f0f0;
  border-radius: 6px;
}
.project-modal summary::marker {
  color: #aaaaaa;
}
.project-modal summary {
  font-size: 1rem;
  margin-bottom: 2px;
}

.project-modal details div {
  margin-top: 10px;
}

.project-description {
  margin-top: 1rem;
  font-size: 1rem;
}

.project-modal ol,
.project-modal ul {
  margin: 10px 20px;
}

.project-modal ol li,
.project-modal ul li {
  font-size: 1rem;
  margin-bottom: 8px;
  list-style-type: disc;
}
.project-skills {
  font-size: 1rem;
  line-height: 1;
  word-spacing: 4px;
}

.project-skills span {
  margin-right: 0.75rem;
}

.project-modal ol li b {
  font-weight: 600;
}

.project-description {
  margin-top: 1rem;
  background: #f0f0f0;
  padding: 24px 20px;
  line-height: 1.6;
  border-radius: 6px;
}

.project-ui {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}

.project-ui div {
  overflow: hidden;
  box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px,
    rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px,
    rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px;
}

.project-ui img {
  width: 100%;
}

#ui-amoresearch div {
  height: 230px;
}

#ui-sklmno div {
  height: 225px;
}

#ui-sf div {
  height: 282px;
}

#ui-joy div {
  height: 350px;
}
/* 
.divider {
  border-bottom: 1px solid #dfdfdf;
  margin-top: 1rem;
} */

.close-btn {
  position: absolute;
  top: 1rem;
  right: 1rem;
}

table.tech-stack {
  width: 100%;
  border-collapse: collapse;
  margin: 1rem 0;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-size: 0.95rem;
}

table.tech-stack thead {
  background-color: #f5f5f5;
}

table.tech-stack th,
table.tech-stack td {
  border: 1px solid #ddd;
  padding: 10px 16px;
  text-align: left;
}

table.tech-stack th {
  background-color: #f0f0f0;
  color: #333;
  font-weight: 600;
}

table.tech-stack tbody tr:nth-child(even) {
  background-color: #fafafa;
}

table.tech-stack tbody tr:hover {
  background-color: #f1f7ff;
}

table.tech-stack td:first-child {
  font-weight: 500;
  color: #444;
  width: 140px;
  white-space: nowrap;
}

.highlight::before {
  bottom: 0;
}

@keyframes modalFadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
