'use strict';
(() => {
  const feed = document.querySelector('.illustrated-feed');
  if (feed) {
    const topic = new URLSearchParams(location.search).get('topic');
    const stories = [...feed.querySelectorAll('.illustrated-story')];
    if (topic && stories.some(story => story.dataset.topic === topic)) {
      stories.forEach(story => { story.hidden = story.dataset.topic !== topic; });
      document.querySelector('#selected-topic').textContent = topic;
      document.querySelector('.topic-selection').hidden = false;
    }
  }
  const copy = document.querySelector('#copy-link');
  if (copy) copy.addEventListener('click', async () => {
    const status = document.querySelector('#copy-status');
    try {
      await navigator.clipboard.writeText(location.href.split('#')[0]);
      status.textContent = 'Länken är kopierad.';
    } catch (_) {
      status.textContent = 'Markera och kopiera adressen i webbläsaren.';
    }
  });
  const progress = document.querySelector('.reading-progress');
  const article = document.querySelector('#article-body');
  if (progress && article) {
    const update = () => {
      const box = article.getBoundingClientRect();
      const total = Math.max(1, box.height - innerHeight * 0.5);
      const read = Math.max(0, Math.min(1, (innerHeight * 0.25 - box.top) / total));
      progress.style.width = (read * 100) + '%';
    };
    addEventListener('scroll', update, {passive: true});
    addEventListener('resize', update);
    update();
  }
  document.querySelectorAll('.topics').forEach(menu => {
    document.addEventListener('click', event => { if (!menu.contains(event.target)) menu.open = false; });
    menu.addEventListener('keydown', event => { if (event.key === 'Escape') { menu.open = false; menu.querySelector('summary').focus(); } });
  });
  addEventListener('DOMContentLoaded', () => {
    if (typeof renderMathInElement === 'function' && article) {
      renderMathInElement(article, {delimiters:[{left:'$$',right:'$$',display:true},{left:'\\[',right:'\\]',display:true},{left:'\\(',right:'\\)',display:false}],throwOnError:false});
    }
  });
})();
