(() => {
  const root = document.documentElement;
  document.body.classList.toggle('embedded', window.self !== window.top);
  const key = 'sgk-reader-preferences';
  let size = 18;
  try {
    const saved = JSON.parse(localStorage.getItem(key) || '{}');
    size = Math.max(16, Math.min(24, Number(saved.size) || 18));
    document.body.classList.toggle('light', saved.light === true);
  } catch { /* Reading remains available when browser storage is disabled. */ }
  function apply() {
    root.style.setProperty('--size', size + 'px');
    document.querySelector('[data-action="theme"]').setAttribute('aria-pressed', String(document.body.classList.contains('light')));
    document.querySelector('#font-status').textContent = 'Cỡ chữ ' + size + ' px';
    try { localStorage.setItem(key, JSON.stringify({size, light: document.body.classList.contains('light')})); } catch {}
  }
  apply();
  document.querySelectorAll('[data-action]').forEach(button => button.addEventListener('click', () => {
    const action = button.dataset.action;
    if (action === 'smaller') size = Math.max(16, size - 1);
    if (action === 'larger') size = Math.min(24, size + 1);
    if (action === 'theme') document.body.classList.toggle('light');
    if (action === 'print') window.print();
    apply();
  }));
  const progress = document.querySelector('progress');
  const sections = [...document.querySelectorAll('main section[id]')];
  function updateProgress() {
    const total = root.scrollHeight - innerHeight;
    progress.value = total > 0 ? Math.min(100, Math.max(0, scrollY / total * 100)) : 100;
    let current = sections[0];
    for (const section of sections) {
      if (section.getBoundingClientRect().top <= innerHeight * 0.3) current = section;
    }
    document.querySelectorAll('.sidebar nav a').forEach(link => {
      if (current && link.hash === '#' + current.id) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    });
  }
  addEventListener('scroll', updateProgress, {passive: true});
  addEventListener('resize', updateProgress);
  updateProgress();
  document.querySelectorAll('.quiz').forEach(form => form.addEventListener('submit', event => {
    event.preventDefault();
    const feedback = form.querySelector('.feedback');
    const selected = form.querySelector('input:checked');
    feedback.className = 'feedback';
    if (!selected) { feedback.textContent = 'Em hãy chọn một phương án trước khi kiểm tra.'; return; }
    const correct = selected.value === form.dataset.answer;
    feedback.classList.add(correct ? 'correct' : 'wrong');
    feedback.textContent = (correct ? 'Chính xác. ' : 'Chưa đúng. ') + form.dataset.explain;
  }));
  const query = document.querySelector('#search-topic');
  if (query) {
    const update = () => {
      const topic = query.value.trim();
      const domain = document.querySelector('#search-scope').value;
      const text = (topic ? '"' + topic.replaceAll('"', '') + '"' : '') + (domain ? ' site:' + domain : '');
      document.querySelector('#search-result').textContent = text || 'Nhập chủ đề để tạo truy vấn.';
      const link = document.querySelector('#search-link');
      link.href = 'https://www.google.com/search?q=' + encodeURIComponent(text);
      link.hidden = !topic;
    };
    query.addEventListener('input', update);
    document.querySelector('#search-scope').addEventListener('change', update);
    update();
  }
  const paint = document.querySelector('#fill-color');
  if (paint) {
    const update = () => {
      const target = document.querySelector('#paint-object');
      target.setAttribute('fill', paint.value);
      target.setAttribute('stroke', document.querySelector('#stroke-color').value);
      target.setAttribute('stroke-width', document.querySelector('#stroke-width').value);
      document.querySelector('#paint-values').textContent = 'Fill: ' + paint.value + ' · Stroke: ' + document.querySelector('#stroke-color').value + ' · Độ dày: ' + document.querySelector('#stroke-width').value;
    };
    document.querySelectorAll('.paint-control').forEach(control => control.addEventListener('input', update));
    update();
  }
  const opacity = document.querySelector('#opacity');
  if (opacity) opacity.addEventListener('input', () => {
    document.querySelector('#front-shape').setAttribute('opacity', Number(opacity.value) / 100);
    document.querySelector('#opacity-value').textContent = opacity.value + '%';
  });
  const reorder = document.querySelector('#reorder');
  if (reorder) reorder.addEventListener('click', () => {
    const group = document.querySelector('#stack-demo');
    group.append(group.firstElementChild);
    document.querySelector('#stack-status').textContent = 'Đối tượng trên cùng: ' + group.lastElementChild.dataset.name + '.';
  });
})();
