import '../utils/focus-lock.js';

export default (headerElement) => {
  const togglerElement = headerElement.querySelector('[data-toggler]');

  function keyCloseHandler(evt) {
    if (evt.key.startsWith('Esc')) {
      closeHeader();
    }
  }

  function openHeader() {
    window.focusLock.lock('[data-page-header]');
    togglerElement.setAttribute('aria-expanded', 'true');
    document.addEventListener('keydown', keyCloseHandler);
    headerElement.classList.add('is-active');
  }

  function closeHeader() {
    window.focusLock.unlock('[data-page-header]');
    togglerElement.setAttribute('aria-expanded', 'false');
    document.removeEventListener('keydown', keyCloseHandler);
    headerElement.classList.remove('is-active');
  }

  document.addEventListener('click', (evt) => {
    const isTogglerTarget = evt.target === togglerElement;
    const isLinkTarget = evt.target.nodeName === 'A';

    if (!isTogglerTarget && !isLinkTarget && evt.target.closest('[data-page-header]')) {
      return;
    }

    if (headerElement.classList.contains('is-active')) {
      closeHeader();
      return;
    }

    if (isTogglerTarget) {
      openHeader();
    }
  });

  headerElement.classList.remove('no-js');
};
