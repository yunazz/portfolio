export default defineNuxtPlugin(() => {
  if (process.client) {
    const initObserver = () => {
      const io = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (
            entry.intersectionRatio > 0 &&
            !entry.target.classList.contains('fade-in')
          ) {
            entry.target.classList.add('fade-in');
          }
        });
      });

      const observeElements = () => {
        const boxElList = document.querySelectorAll('.observe-fade-in');
        boxElList.forEach((el) => io.observe(el));
      };

      // 처음 한 번 실행
      observeElements();

      // DOM 변경 감지해서 새로 생긴 요소에도 적용
      const mo = new MutationObserver(() => {
        observeElements();
      });

      mo.observe(document.body, {
        childList: true,
        subtree: true,
      });
    };

    // DOM이 준비된 후 실행
    if (document.readyState === 'loading') {
      window.addEventListener('DOMContentLoaded', initObserver);
    } else {
      initObserver();
    }
  }
});
