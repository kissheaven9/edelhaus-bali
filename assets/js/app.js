/* ============================================================
   edelhaus — app logic: i18n (DE base / EN / RU / UK),
   catalog + filter, modal, forms, drawer, reveal.
   Demo, no backend.
   ============================================================ */
(function () {
  'use strict';

  /* ---------------- i18n dictionaries ---------------- */
  const I18N = window.ED.I18N;
  const LANGS = ['de', 'en', 'ru', 'uk'];
  let lang = 'de';
  const T = window.EDtypo || (s => s);
  const t = (k) => T((I18N[lang] && I18N[lang][k]) || (I18N.de[k] || k));

  /* ---------------- Catalog data — REAL, publicly-listed Bali objects.
     Parameters (developer, district, area, price, tenure, yield) taken from the
     linked source listings. Prices ~ converted to EUR (1 EUR ≈ 1.08 USD).
     Yields are developer/market estimates as stated by the source. ---------------- */
  const G = 'assets/img/obj/';
  const OBJECTS = window.ED.OBJECTS, FEAT = window.ED.FEAT;
  let currentFilter = 'villa';
  let currentRegion = 'all';
  let currentSort = 'default';
  const regionOf = (o) => (o.loc || '').split('·')[0].trim();

  /* ---------------- helpers ---------------- */
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
  const fmtEUR = (n) => new Intl.NumberFormat('de-DE').format(n);

  function applyI18n() {
    $$('[data-i18n]').forEach(el => { el.textContent = t(el.getAttribute('data-i18n')); });
    $$('[data-i18n-html]').forEach(el => { el.innerHTML = t(el.getAttribute('data-i18n-html')); });
    $$('[data-i18n-ph]').forEach(el => { el.setAttribute('placeholder', t(el.getAttribute('data-i18n-ph'))); });
    document.documentElement.lang = lang;
    $('#langCur').textContent = lang.toUpperCase();
    $$('#langMenu button').forEach(b => b.setAttribute('aria-current', String(b.dataset.lang === lang)));
  }

  /* ---------------- catalog ---------------- */
  function populateRegions() {
    const sel = $('#regionSel'); if (!sel) return;
    // only regions that actually have objects of the current type
    const pool = OBJECTS.filter(o => currentFilter === 'all' || o.type === currentFilter);
    const regions = Array.from(new Set(pool.map(regionOf).filter(Boolean))).sort((a, b) => a.localeCompare(b, 'de'));
    if (currentRegion !== 'all' && regions.indexOf(currentRegion) < 0) currentRegion = 'all';
    const first = sel.querySelector('option[value="all"]');
    sel.innerHTML = '';
    if (first) sel.appendChild(first);
    regions.forEach(r => { const o = document.createElement('option'); o.value = r; o.textContent = r; sel.appendChild(o); });
    sel.value = currentRegion;
  }

  function renderCatalog() {
    const box = $('#catalog'), empty = $('#catEmpty');
    let list = OBJECTS.filter(o =>
      (currentFilter === 'all' || o.type === currentFilter) &&
      (currentRegion === 'all' || regionOf(o) === currentRegion));
    if (currentSort === 'price-asc') list = list.slice().sort((a, b) => (a.price || 0) - (b.price || 0));
    else if (currentSort === 'price-desc') list = list.slice().sort((a, b) => (b.price || 0) - (a.price || 0));
    else if (currentSort === 'area-desc') list = list.slice().sort((a, b) => (b.area || 0) - (a.area || 0));
    else if (currentSort === 'area-asc') list = list.slice().sort((a, b) => (a.area || 0) - (b.area || 0));
    if (empty) empty.hidden = list.length > 0;
    if (!list.length) { box.innerHTML = ''; return; }
    box.innerHTML = list.map(o => `
      <a class="pcard reveal is-in" href="objekt.html?id=${o.id}" target="_blank" rel="noopener" data-id="${o.id}">
        <div class="pcard__media">
          <img src="${o.img}" alt="${o.name}" style="object-position:${o.pos}">
          <span class="pcard__badge">${t('catalog.f.' + o.type)}</span>
        </div>
        <div class="pcard__body">
          <div class="pcard__name">${o.name}</div>
          <div class="pcard__loc"><svg width="14" height="14"><use href="#i-pin"/></svg>${o.loc}</div>
          <div class="pcard__specs">
            <div><div class="spec__k">${t('spec.area')}</div><div class="spec__v">${o.area ? t('spec.from') + ' ' + o.area + ' m²' : '—'}</div></div>
            <div><div class="spec__k">${t('spec.price')}</div><div class="spec__v">${t('spec.from')} ${fmtEUR(o.price)} €</div></div>
            <div><div class="spec__k">${t('spec.yield')}</div><div class="spec__v">${o.yieldTxt ? '<span class="mark">' + o.yieldTxt + '</span>' : '<span style="color:var(--ink-3);font-weight:500">' + t('spec.onreq') + '</span>'}</div></div>
            <div><div class="spec__k">${t('spec.dev')}</div><div class="spec__v" style="font-weight:500;font-size:.8rem">${o.dev}</div></div>
          </div>
          <span class="btn btn--sm">${t('catalog.more')}</span>
        </div>
      </a>`).join('');
  }

  function bindCatalog() {
    $('#chips').addEventListener('click', e => {
      const btn = e.target.closest('.chip'); if (!btn) return;
      $$('#chips .chip').forEach(c => c.setAttribute('aria-pressed', 'false'));
      btn.setAttribute('aria-pressed', 'true');
      currentFilter = btn.dataset.filter;
      populateRegions();   // regions depend on the selected type
      renderCatalog();
    });
    const rs = $('#regionSel'), ss = $('#sortSel');
    if (rs) rs.addEventListener('change', () => { currentRegion = rs.value; renderCatalog(); });
    if (ss) ss.addEventListener('change', () => { currentSort = ss.value; renderCatalog(); });
  }

  /* ---------------- modal ---------------- */
  let lastFocus = null;
  let gal = { imgs: [], i: 0 };
  let lmap = null, lmarker = null;

  function showMap(lat, lng, label) {
    const el = $('#modalMap');
    if (!window.L) { el.innerHTML = '<div class="modal__mapfallback">' + label + '</div>'; return; }
    if (!lmap) {
      lmap = L.map(el, { scrollWheelZoom: false }).setView([lat, lng], 13);
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: '© OpenStreetMap' }).addTo(lmap);
      lmarker = L.marker([lat, lng]).addTo(lmap);
    } else {
      lmap.setView([lat, lng], 13);
      lmarker.setLatLng([lat, lng]);
    }
    setTimeout(function () { if (lmap) lmap.invalidateSize(); }, 240);
  }

  function renderGallery() {
    const main = $('#galMain');
    main.src = gal.imgs[gal.i];
    $('#galCount').textContent = (gal.i + 1) + ' / ' + gal.imgs.length;
    $$('#galThumbs img').forEach((th, idx) => th.setAttribute('aria-current', String(idx === gal.i)));
    const active = $$('#galThumbs img')[gal.i];
    if (active && active.scrollIntoView) active.scrollIntoView({ block: 'nearest', inline: 'center' });
  }
  function galGo(dir) {
    if (!gal.imgs.length) return;
    gal.i = (gal.i + dir + gal.imgs.length) % gal.imgs.length;
    renderGallery();
  }

  function openModal(id) {
    const o = OBJECTS.find(x => x.id === id); if (!o) return;
    lastFocus = document.activeElement;

    // gallery
    gal = { imgs: (o.gallery && o.gallery.length ? o.gallery : [o.img]), i: 0 };
    $('#modalGallery').classList.toggle('gallery--single', gal.imgs.length < 2);
    $('#galThumbs').innerHTML = gal.imgs.map((src, i) =>
      `<img src="${src}" alt="${o.name} — Foto ${i + 1}" data-gi="${i}" aria-current="${i === 0}">`).join('');
    $('#galMain').alt = o.name;
    renderGallery();

    // head
    $('#modalTitle').textContent = o.name;
    $('#modalLoc').innerHTML = '<svg><use href="#i-pin"/></svg>' + o.loc + ' · ' + t('catalog.f.' + o.type);

    // specs (7)
    $('#modalSpecs').innerHTML = [
      ['spec.area', t('spec.from') + ' ' + o.area + ' m²'],
      ['spec.beds', o.beds],
      ['spec.price', t('spec.from') + ' ' + fmtEUR(o.price) + ' €'],
      ['spec.yield', o.yieldTxt || t('spec.onreq')],
      ['spec.tenure', o.tenure],
      ['spec.completion', o.done],
      ['spec.dev', o.dev]
    ].map(([k, v]) => `<div class="spec"><div class="spec__k">${t(k)}</div><div class="spec__v">${v}</div></div>`).join('');

    // description + features
    $('#modalDesc').textContent = (o.desc && (o.desc[lang] || o.desc.de)) || '';
    $('#modalFeats').innerHTML = (o.feat || []).map(k => `<li>${(FEAT[k] && (FEAT[k][lang] || FEAT[k].de)) || k}</li>`).join('');

    // map (Leaflet + OSM raster tiles — keyless, no WebGL) + Google Maps link
    const [lat, lng] = o.coords || [-8.65, 115.13];
    showMap(lat, lng, o.loc);
    $('#modalMapLink').innerHTML =
      `<a href="https://www.google.com/maps/search/?api=1&query=${lat}%2C${lng}" target="_blank" rel="noopener" class="modal__src">${t('modal.mapopen')} ↗</a>`;

    // source + bar price
    const host = (function () { try { return new URL(o.source).hostname.replace('www.', ''); } catch (e) { return o.source; } })();
    $('#modalSrc').innerHTML = t('modal.note') +
      ' <a href="' + o.source + '" target="_blank" rel="noopener nofollow" class="modal__src">' + t('modal.source') + ': ' + host + ' ↗</a>';
    $('#modalBarPrice').textContent = t('spec.from') + ' ' + fmtEUR(o.price) + ' €';

    $('#modalScroll').scrollTop = 0;
    const m = $('#modal'); m.classList.add('open'); document.body.style.overflow = 'hidden';
    $('.modal__close').focus();
  }
  function closeModal() {
    $('#modal').classList.remove('open'); document.body.style.overflow = '';
    if (lastFocus && lastFocus.focus) lastFocus.focus();
  }
  function bindModal() {
    // use closest so clicks on inner <svg>/<use> of [data-close] still close
    $('#modal').addEventListener('click', e => { if (e.target.closest('[data-close]')) closeModal(); });
    document.addEventListener('keydown', e => {
      if (!$('#modal').classList.contains('open')) return;
      if (e.key === 'Escape') closeModal();
      else if (e.key === 'ArrowRight') galGo(1);
      else if (e.key === 'ArrowLeft') galGo(-1);
    });
    $('#galPrev').addEventListener('click', () => galGo(-1));
    $('#galNext').addEventListener('click', () => galGo(1));
    $('#galThumbs').addEventListener('click', e => {
      const th = e.target.closest('[data-gi]'); if (!th) return;
      gal.i = +th.dataset.gi; renderGallery();
    });
  }

  /* ---------------- quiz: find the right property ---------------- */
  const QUIZ = (window.ED && window.ED.QUIZ) || null;
  const BUDGET = { '0-150': [0, 150000], '150-300': [150000, 300000], '300-600': [300000, 600000], '600+': [600000, Infinity] };
  let qi = 0, qAns = {};
  const L = (o) => (o && (o[lang] || o.de)) || '';

  function quizRegions() {
    const counts = {};
    OBJECTS.forEach(o => { const r = regionOf(o); if (r) counts[r] = (counts[r] || 0) + 1; });
    return Object.keys(counts).sort((a, b) => counts[b] - counts[a]).slice(0, 5);
  }
  function quizOptsFor(q) {
    if (q.key !== 'region') return q.opts;
    return quizRegions().map(r => ({ v: r, l: { de: r, en: r, ru: r, uk: r } }))
      .concat([{ v: 'all', l: q.anyLabel }]);
  }
  function quizMatches() {
    const b = BUDGET[qAns.budget] || [0, Infinity];
    let list = OBJECTS.filter(o =>
      (o.price || 0) >= b[0] && (o.price || 0) < b[1] &&
      (!qAns.type || qAns.type === 'all' || o.type === qAns.type) &&
      (!qAns.region || qAns.region === 'all' || regionOf(o) === qAns.region));
    if (qAns.goal === 'invest') list = list.slice().sort((a, b2) => (b2.yieldTxt ? 1 : 0) - (a.yieldTxt ? 1 : 0));
    return list;
  }
  function renderQuiz() {
    if (!QUIZ || !$('#quizBox')) return;
    const total = QUIZ.questions.length;
    $('#quizResult').hidden = true;
    $('#quizOpts').hidden = false; $('#quizQ').hidden = false; $('#quizStep').hidden = false;
    $('#quizBack').style.display = qi > 0 ? '' : 'none';
    $('#quizBar').style.width = Math.round((qi / total) * 100) + '%';
    const q = QUIZ.questions[qi];
    $('#quizStep').textContent = L(QUIZ.ui.step) + ' ' + (qi + 1) + ' ' + L(QUIZ.ui.of) + ' ' + total;
    $('#quizQ').textContent = T(L(q.q));
    $('#quizOpts').innerHTML = quizOptsFor(q).map(o =>
      '<button class="quiz__opt" type="button" data-v="' + o.v + '">' + T(L(o.l)) + '</button>').join('');
  }
  function renderQuizResult() {
    const list = quizMatches();
    $('#quizOpts').hidden = true; $('#quizQ').hidden = true; $('#quizStep').hidden = true;
    $('#quizBack').style.display = '';
    $('#quizBar').style.width = '100%';
    const res = $('#quizResult'); res.hidden = false;
    const cards = list.slice(0, 3).map(o => `
      <a class="pcard" href="objekt.html?id=${o.id}" target="_blank" rel="noopener">
        <div class="pcard__media"><img src="${o.img}" alt="${o.name}" style="object-position:${o.pos}">
          <span class="pcard__badge">${t('catalog.f.' + o.type)}</span></div>
        <div class="pcard__body">
          <div class="pcard__name">${o.name}</div>
          <div class="pcard__loc"><svg width="14" height="14"><use href="#i-pin"/></svg>${o.loc}</div>
          <div class="pcard__specs">
            <div><div class="spec__k">${t('spec.price')}</div><div class="spec__v">${t('spec.from')} ${fmtEUR(o.price)} €</div></div>
            <div><div class="spec__k">${t('spec.yield')}</div><div class="spec__v">${o.yieldTxt ? '<span class="mark">' + o.yieldTxt + '</span>' : '<span style="color:var(--ink-3);font-weight:500">' + t('spec.onreq') + '</span>'}</div></div>
          </div>
          <span class="btn btn--sm">${t('catalog.more')}</span>
        </div>
      </a>`).join('');
    res.innerHTML =
      '<div class="quiz__resh">' + T(L(QUIZ.ui.resTitle)) +
      ' <span class="quiz__count">' + list.length + ' ' + T(L(QUIZ.ui.found)) + '</span></div>' +
      (list.length ? '<div class="quiz__cards">' + cards + '</div>'
                   : '<p class="quiz__none">' + T(L(QUIZ.ui.none)) + '</p>') +
      '<div class="quiz__actions">' +
        (list.length ? '<button class="btn btn--accent" type="button" id="quizShowAll">' + T(L(QUIZ.ui.showAll)) + '</button>' : '') +
        '<a class="btn btn--light" href="#tour">' + T(L(QUIZ.ui.book)) + '</a>' +
        '<button class="btn btn--ghost" type="button" id="quizRestart">' + T(L(QUIZ.ui.restart)) + '</button>' +
      '</div>';
    const sa = $('#quizShowAll');
    if (sa) sa.addEventListener('click', () => {
      // apply the quiz answers to the catalog filters and jump there
      currentFilter = (qAns.type && qAns.type !== 'all') ? qAns.type : 'all';
      $$('#chips .chip').forEach(c => c.setAttribute('aria-pressed', String(c.dataset.filter === currentFilter)));
      populateRegions();
      currentRegion = (qAns.region && qAns.region !== 'all') ? qAns.region : 'all';
      const rs = $('#regionSel'); if (rs) rs.value = currentRegion;
      currentSort = 'price-asc';
      const ss = $('#sortSel'); if (ss) ss.value = currentSort;
      renderCatalog();
      const k = document.getElementById('katalog');
      if (k && k.scrollIntoView) k.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
    const rr = $('#quizRestart');
    if (rr) rr.addEventListener('click', () => { qi = 0; qAns = {}; renderQuiz(); });
  }
  function bindQuiz() {
    if (!QUIZ || !$('#quizBox')) return;
    $('#quizOpts').addEventListener('click', e => {
      const b = e.target.closest('.quiz__opt'); if (!b) return;
      qAns[QUIZ.questions[qi].key] = b.dataset.v;
      if (qi < QUIZ.questions.length - 1) { qi++; renderQuiz(); }
      else renderQuizResult();
    });
    $('#quizBack').addEventListener('click', () => {
      if (!$('#quizResult').hidden) { renderQuiz(); return; }   // back from result
      if (qi > 0) { qi--; renderQuiz(); }
    });
    renderQuiz();
  }

  /* ---------------- toast ---------------- */
  function toast(msg) {
    const el = document.createElement('div');
    el.className = 'toast';
    el.innerHTML = '<svg><use href="#i-check"/></svg><span></span>';
    el.querySelector('span').textContent = msg;
    $('#toasts').appendChild(el);
    setTimeout(() => { el.style.opacity = '0'; el.style.transform = 'translateY(10px)'; setTimeout(() => el.remove(), 300); }, 3600);
  }

  /* ---------------- forms ---------------- */
  function validateField(field) {
    const input = field.querySelector('input, select, textarea');
    let ok = true;
    if (input.type === 'checkbox') ok = input.checked;
    else if (input.type === 'tel') ok = (input.value.replace(/[^\d]/g, '').length >= 7);
    else ok = input.value.trim().length >= 2;
    field.classList.toggle('field--invalid', !ok);
    return ok;
  }
  function bindForm(formId, msgKey) {
    const form = $('#' + formId); if (!form) return;
    form.addEventListener('submit', e => {
      e.preventDefault();
      const fields = $$('.field', form);
      let valid = true;
      fields.forEach(f => { if (!validateField(f)) valid = false; });
      const consent = form.querySelector('input[type=checkbox][required]');
      if (consent && !consent.checked) valid = false;
      if (!valid) { const bad = form.querySelector('.field--invalid input'); if (bad) bad.focus(); return; }
      form.reset();
      toast(t(msgKey));
    });
    $$('.field input, .field select', form).forEach(inp => {
      inp.addEventListener('input', () => { const f = inp.closest('.field'); if (f.classList.contains('field--invalid')) validateField(f); });
    });
  }

  /* ---------------- language switch ---------------- */
  function setLang(l) {
    if (!LANGS.includes(l)) l = 'de';
    lang = l;
    try { localStorage.setItem('edelhaus_lang', l); } catch (e) {}
    applyI18n();
    renderCatalog();
    if ($('#quizBox')) { if ($('#quizResult') && !$('#quizResult').hidden) renderQuizResult(); else renderQuiz(); }
  }
  function bindLang() {
    const wrap = $('#lang');
    $('#langBtn').addEventListener('click', () => {
      const open = wrap.classList.toggle('open');
      $('#langBtn').setAttribute('aria-expanded', String(open));
    });
    $('#langMenu').addEventListener('click', e => {
      const b = e.target.closest('button[data-lang]'); if (!b) return;
      setLang(b.dataset.lang); wrap.classList.remove('open'); $('#langBtn').setAttribute('aria-expanded', 'false');
    });
    document.addEventListener('click', e => { if (!wrap.contains(e.target)) wrap.classList.remove('open'); });
  }

  /* ---------------- drawer ---------------- */
  function bindDrawer() {
    const d = $('#drawer');
    $('#burger').addEventListener('click', () => { d.classList.add('open'); document.body.style.overflow = 'hidden'; });
    d.addEventListener('click', e => { if (e.target.hasAttribute('data-drawer-close')) { d.classList.remove('open'); document.body.style.overflow = ''; } });
  }

  /* ---------------- reveal ---------------- */
  function bindReveal() {
    const els = $$('.reveal');
    if (!('IntersectionObserver' in window)) { els.forEach(e => e.classList.add('is-in')); return; }
    const io = new IntersectionObserver((entries) => {
      entries.forEach(en => { if (en.isIntersecting) { en.target.classList.add('is-in'); io.unobserve(en.target); } });
    }, { threshold: 0.12 });
    els.forEach(e => io.observe(e));
  }

  /* ---------------- init ---------------- */
  document.addEventListener('DOMContentLoaded', () => {
    let saved = 'de';
    try { saved = localStorage.getItem('edelhaus_lang') || 'de'; } catch (e) {}
    lang = LANGS.includes(saved) ? saved : 'de';
    $('#year').textContent = '2026';
    applyI18n();
    populateRegions();
    renderCatalog();
    bindCatalog();
    const uc = $('#uspCount'); if (uc) uc.textContent = OBJECTS.length;
    bindQuiz();
    bindModal();
    bindLang();
    bindDrawer();
    bindReveal();
    // header: transparent over hero -> solid on scroll
    const header = $('#header');
    const onScroll = () => header.classList.toggle('header--solid', window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    bindForm('tourForm', 'toast.tour');
    bindForm('footerForm', 'toast.footer');
    $('#phoneAnswer').addEventListener('click', () => toast(t('toast.answer')));
    $('#tourCall').addEventListener('click', () => toast(t('toast.answer')));
  });
})();
