<script setup>
const props = defineProps(['modalType', 'project']);
const emit = defineEmits(['close']);

function close() {
  emit('close');
}

const getImageUrl = (image) => {
  return require(`~${image}`);
};
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
        <h3 class="project-title">{{ props.project.title }}</h3>
        <p class="project-subtitle">{{ props.project.subtitle }}</p>
        <p class="project-date">
          작업기간 : {{ props.project.date }} / 팀 프로젝트 / 기여도 : 95%
        </p>

        <div class="project-intro">
          <p v-html="props.project.intro" class="text-center"></p>
        </div>

        <article>
          <h5>🛠️ 내 역할</h5>
          <div class="skills">
            {{ props.project.role }}
          </div>
        </article>

        <article>
          <h5>🛠️ 기술 스텍</h5>
          <template v-if="props.project.modalType === 'amoresearch'">
            <table class="tech-stack">
              <thead>
                <tr>
                  <th>구분</th>
                  <th>사용 기술</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>프론트엔드</td>
                  <td>Nuxt.js 3, Vuetify 3</td>
                </tr>
                <tr>
                  <td>백엔드</td>
                  <td>FastAPI, LangChain, Pydantic, PyMySQL, PyJWT</td>
                </tr>
                <tr>
                  <td>LLM / 임베딩</td>
                  <td>Qwen2.5-72B-Instruct, multilingual-e5-large (RunPod)</td>
                </tr>
                <tr>
                  <td>데이터베이스</td>
                  <td>MariaDB, ChromaDB, AWS S3</td>
                </tr>
                <tr>
                  <td>서버/인프라</td>
                  <td>AWS EC2, S3, Docker, Github Actions (CI/CD)</td>
                </tr>
              </tbody>
            </table>
          </template>
          <template v-else-if="props.project.modalType === 'lawbot'">
          </template>
          <template v-else-if="props.project.modalType === 'sf'"> </template>
          <template v-else-if="props.project.modalType === 'sklmno'">
          </template>
          <template v-else-if="props.project.modalType === 'joy'"> </template>
        </article>

        <article>
          <h5>⚙️ 주요 기능 및 특징</h5>
          <ol>
            <li v-for="(item, index) in props.project.functions" :key="index">
              {{ item }}
            </li>
          </ol>
        </article>

        <article class="my-work">
          <h5>👩🏻‍💻 내 작업 내용</h5>
          <details
            v-for="(item, index) in props.project.contributions"
            :key="index"
            open
          >
            <summary>{{ item.title }}</summary>
            <div>{{ item.content }}</div>
          </details>
        </article>

        <article>
          <h5>
            <template v-if="props.project.modalType === 'lawbot'"
              >🎨 화면설계서</template
            >
            <template v-else>🖼️ UI</template>
          </h5>

          <div :id="`ui-${props.project.modalType}`" class="project-ui">
            <div v-for="(image, idx) in props.project.uiImage" :key="idx">
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
  padding: 2.5rem 2rem 3.5rem;
  max-width: 80vw;
  min-width: 1200px;
  width: 90%;
  animation: modalFadeIn 0.3s ease;
  overflow-y: auto;
  height: 92vh;
  font-size: 15px;
}
.modal-inner {
  width: 1000px;
  margin: 0 auto;
}
.modal article:first-of-type {
  margin-top: 2.4rem;
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
  font-size: 2.5rem;
  line-height: 1;
  margin: 4px 0 6px;
  text-align: center;
  font-weight: 700;
  color: #ffd500;
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
.my-work details summary::marker {
  content: '';
}
.project-modal details {
  font-size: 1rem;
  margin: 6px 0;
  padding: 8px 12px;
  background: #eee;
  padding: 7px 16px;
}
.project-modal summary {
  font-size: 1rem;
  margin-bottom: 2px;
}
.project-modal details div {
  margin-top: 10px;
}
.project-ui div {
  box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px,
    rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px,
    rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px;
}
.project-ui img {
  width: 100%;
}
.project-description {
  margin-top: 1rem;
  font-size: 1rem;
}
.project-modal ol {
  margin: 10px 20px;
}
.project-modal ol li {
  list-style-type: disc;
}
.project-modal ol li b {
  font-weight: 600;
}
.project-modal ol li,
.project-modal ul li {
  font-size: 1rem;
  margin-bottom: 8px;
}

.divider {
  border-top: none;
  border-bottom: 1px solid #dfdfdf;
  margin-top: 1rem;
}
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
  padding: 12px 16px;
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

.project-intro {
  margin-top: 1rem;
  background: #f5f5f5;
  padding: 28px 20px;
  line-height: 1.5;
}
.skills {
  font-size: 1rem;
  line-height: 1;
  word-spacing: 4px;
}
.skills span {
  margin-right: 0.75rem;
}
.grid-2 {
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 1rem;
}
.project-ui {
  display: grid;
  gap: 1rem;
  grid-template-columns: 1fr 1fr;
}
.project-ui div {
  overflow: hidden;
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
</style>
