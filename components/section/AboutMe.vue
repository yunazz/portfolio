<script setup></script>

<template>
  <section>
    <div class="section-inner">
      <div class="profile flex-column not-draggable">
        <p class="fw-700">박유나</p>
        <p class="inter-600 mb-3">PARK YUNA</p>
        <p class="flex-column body-m">
          <span>1995.04.02</span>
          <span>010-4470-5117</span>
          <span>yunaz0402@gmail.com</span>
        </p>
      </div>
      <div class="profile-detail flex not-draggable">
        <div class="flex-column">
          <div>
            <p class="inter-700 mb-3">Education</p>
            <ul>
              <li>2016.02 인하공업전문대학 항공운항과 졸업</li>
              <li>2020.02 감리교신학대학교 기독교교육학 졸업</li>
            </ul>
          </div>
          <div>
            <p class="inter-700 mb-3">Training</p>
            <ul>
              <li class="flex-column">
                <p class="fw-600">3D 영상제작과 영상모션그래픽 과정</p>
                <span>#포토샵 #일러스트레이터 #프리미어프로 #에펙</span>
                <span class="date">2017.12 ~ 2018.02</span>
              </li>
              <li class="flex-column">
                <p class="fw-600">
                  [과정평가형 웹디자인기능사] 웹퍼블리셔-취업과정A
                </p>
                <span>#HTML #CSS #jQuery #Javascript</span>
                <span class="date">2020.03 ~ 2020.06</span>
              </li>
              <li class="flex-column">
                <p class="fw-600">(온라인) FastCampus & Inflearn</p>
                <span>#프론트엔드 개발 올인원 패키지 with React</span>
                <span>#캡틴판교 #Vue.js</span>
                <span class="date">2020.07 ~ 2020.12</span>
              </li>
              <li class="flex-column">
                <p class="fw-600">SQLD 개발자 자격증 시험 준비 과정</p>
                <span>#데이터베이스 #SQL</span>
                <span class="date">2021.01 ~ 2021.03</span>
              </li>
              <li class="flex-column">
                <p class="fw-600">블렌더로 만드는 정교한 3D 캐릭터 제작</p>
                <span>#3D #블렌더 #WebGL</span>
                <span class="date">2024.01 ~ 2024.02</span>
              </li>
              <li class="flex-column">
                <p class="fw-600">SK네트웍스 Family AI 캠프</p>
                <span>#AI #LLM #파이썬</span>
                <span class="date">2024.09 ~ 2025.03 </span>
              </li>
            </ul>
          </div>
        </div>
        <div class="flex-column">
          <div>
            <p class="inter-700 mb-3">Certificates</p>
            <ul>
              <li>2020.06 GTQ 포토샵 1급</li>
              <li>2022.06 정보처리기사</li>
            </ul>
          </div>
          <div>
            <p class="inter-700 mb-3">Skills</p>
            <ul>
              <li>
                <p class="fw-600">협업툴</p>
                <span>svn, 깃헙, 노션, 지라, 슬랙</span>
              </li>
              <li>
                <p class="fw-600">디자인</p>
                <span>figma, sketch, ps, ai, pr, af, 블렌더</span>
              </li>
              <li>
                <p class="fw-600">프론트엔드 개발</p>
                <span>html, css, js, vue, nuxt, react</span>
              </li>
              <li>
                <p class="fw-600">백엔드 개발</p>
                <span>nodejs, fastapi, 장고, sql</span>
              </li>
              <li>
                <p class="fw-600">Devops</p>
                <span>깃엑션, aws, 리눅스, docker</span>
              </li>
              <li>
                <p class="fw-600">AI</p>
                <span>python, langchain</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="css" scoped>
section {
  background: var(--color-white);
}
.section-inner {
  display: flex;
  margin: 0 auto;
  width: 1280px;
  padding: 0 60px;
  margin: 0 auto;
}
.profile {
  flex: 0 0 270px;
}

.profile p:nth-of-type(1) {
  font-size: 30px;
}
.profile p:nth-of-type(2) {
  font-size: 26px;
}
.profile-detail {
  flex: 1;
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 54px;
}
.profile-detail > div.flex-column {
  row-gap: 36px;
}
.profile-detail > div.flex-column:first-of-type div:last-of-type ul li,
.profile-detail > div.flex-column:last-of-type div:last-of-type ul li {
  margin-bottom: 16px;
  line-height: 1.5;
}
.profile-detail > div.flex-column .inter-700 {
  font-size: 1.625rem;
}
.profile-detail ul li {
  margin-bottom: 4px;
  font-size: var(--body-size-m);
}
.profile-detail ul li span {
  font-size: var(--body-size-s);
}
.profile-detail .date {
  color: #7e7e7e;
}
</style>
