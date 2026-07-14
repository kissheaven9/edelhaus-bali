/* ============================================================
   edelhaus — object detail page (objekt.html)
   Reads ?id, renders full listing from window.ED + window.ED_FULL.
   ============================================================ */
(function () {
  'use strict';
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
  const LANGS = ['de', 'en', 'ru', 'uk'];
  const I18N = (window.ED && window.ED.I18N) || {};
  const OBJECTS = (window.ED && window.ED.OBJECTS) || [];
  const FEAT = (window.ED && window.ED.FEAT) || {};
  const FULL = window.ED_FULL || {};
  const fmtEUR = (n) => new Intl.NumberFormat('de-DE').format(n);

  let lang = 'de';
  try { lang = LANGS.includes(localStorage.getItem('edelhaus_lang')) ? localStorage.getItem('edelhaus_lang') : 'de'; } catch (e) {}
  const t = (k) => (I18N[lang] && I18N[lang][k]) || (I18N.de && I18N.de[k]) || k;

  const id = new URLSearchParams(location.search).get('id');
  const o = OBJECTS.find(x => x.id === id);
  const main = $('#op-main');

  let gal = { imgs: [], i: 0 }, lmap = null, lmarker = null;

  function applyStatic() {
    $$('[data-i18n]').forEach(el => { el.textContent = t(el.getAttribute('data-i18n')); });
    document.documentElement.lang = lang;
    $('#langCur').textContent = lang.toUpperCase();
    $$('#langMenu button').forEach(b => b.setAttribute('aria-current', String(b.dataset.lang === lang)));
  }

  function renderGallery() {
    $('#opMain').src = gal.imgs[gal.i];
    $('#opCount').textContent = (gal.i + 1) + ' / ' + gal.imgs.length;
    $$('#opThumbs img').forEach((th, idx) => th.setAttribute('aria-current', String(idx === gal.i)));
    const a = $$('#opThumbs img')[gal.i];
    if (a && a.scrollIntoView) a.scrollIntoView({ block: 'nearest', inline: 'center' });
  }
  function galGo(d) { gal.i = (gal.i + d + gal.imgs.length) % gal.imgs.length; renderGallery(); }

  function showMap() {
    const [lat, lng] = o.coords || [-8.65, 115.13];
    const el = $('#opMap');
    if (!window.L) { el.innerHTML = '<div class="modal__mapfallback">' + o.loc + '</div>'; return; }
    if (!lmap) {
      lmap = L.map(el, { scrollWheelZoom: false }).setView([lat, lng], 13);
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: '© OpenStreetMap' }).addTo(lmap);
      lmarker = L.marker([lat, lng]).addTo(lmap);
      setTimeout(function () { if (lmap) lmap.invalidateSize(); }, 220);
    }
  }

  function fillDynamic() {
    document.title = o.name + ' — edelhaus';
    const F = (k) => $('[data-f="' + k + '"]');
    F('badge').textContent = t('catalog.f.' + o.type);
    F('title').textContent = o.name;
    F('loc').textContent = o.loc;
    F('price').textContent = t('spec.from') + ' ' + fmtEUR(o.price) + ' €';

    // description (full, mirrors developer info)
    const dtext = (FULL[o.id] && (FULL[o.id][lang] || FULL[o.id].de)) || '';
    F('desc').innerHTML = dtext.split(/\n+/).map(p => '<p>' + p + '</p>').join('');

    // features
    F('feats').innerHTML = (o.feat || []).map(k => '<li>' + ((FEAT[k] && (FEAT[k][lang] || FEAT[k].de)) || k) + '</li>').join('');

    // specs
    F('specs').innerHTML = [
      ['spec.area', o.area ? t('spec.from') + ' ' + o.area + ' m²' : '—'],
      ['spec.beds', o.beds],
      ['spec.price', t('spec.from') + ' ' + fmtEUR(o.price) + ' €'],
      ['spec.yield', o.yieldTxt ? '<span class="mark">' + o.yieldTxt + '</span>' : t('spec.onreq')],
      ['spec.tenure', o.tenure],
      ['spec.completion', o.done],
      ['spec.dev', o.dev]
    ].map(([k, v]) => '<div class="op-spec"><div class="k">' + t(k) + '</div><div class="v">' + v + '</div></div>').join('');

    // source + map link
    const host = (function () { try { return new URL(o.source).hostname.replace('www.', ''); } catch (e) { return o.source; } })();
    F('srcline').innerHTML = t('modal.note') + '<br><a href="' + o.source + '" target="_blank" rel="noopener nofollow" class="op-src">' + t('modal.source') + ': ' + host + ' ↗</a>';
    const [lat, lng] = o.coords || [-8.65, 115.13];
    const ml = F('maplink');
    ml.href = 'https://www.google.com/maps/search/?api=1&query=' + lat + '%2C' + lng;
    ml.textContent = t('modal.mapopen') + ' ↗';
  }

  function setLang(l) {
    if (!LANGS.includes(l)) l = 'de';
    lang = l;
    try { localStorage.setItem('edelhaus_lang', l); } catch (e) {}
    applyStatic();
    if (o) fillDynamic();
  }

  function bindLang() {
    const wrap = $('#lang');
    $('#langBtn').addEventListener('click', () => {
      const open = wrap.classList.toggle('open');
      $('#langBtn').setAttribute('aria-expanded', String(open));
    });
    $('#langMenu').addEventListener('click', e => {
      const b = e.target.closest('button[data-lang]'); if (!b) return;
      setLang(b.dataset.lang); wrap.classList.remove('open');
    });
    document.addEventListener('click', e => { if (!wrap.contains(e.target)) wrap.classList.remove('open'); });
  }

  document.addEventListener('DOMContentLoaded', () => {
    bindLang();
    if (!o) {
      applyStatic();
      main.innerHTML = '<div class="op-notfound"><h1>Objekt nicht gefunden</h1><a class="btn btn--accent" href="index.html#katalog">' + t('obj.back') + '</a></div>';
      return;
    }
    main.appendChild($('#op-template').content.cloneNode(true));
    applyStatic();

    gal = { imgs: (o.gallery && o.gallery.length ? o.gallery : [o.img]), i: 0 };
    $('#opThumbs').innerHTML = gal.imgs.map((src, i) => '<img src="' + src + '" alt="' + o.name + ' — Foto ' + (i + 1) + '" data-gi="' + i + '" aria-current="' + (i === 0) + '">').join('');
    renderGallery();
    fillDynamic();
    showMap();

    $('#opPrev').addEventListener('click', () => galGo(-1));
    $('#opNext').addEventListener('click', () => galGo(1));
    $('#opThumbs').addEventListener('click', e => { const th = e.target.closest('[data-gi]'); if (th) { gal.i = +th.dataset.gi; renderGallery(); } });
    document.addEventListener('keydown', e => {
      if (e.key === 'ArrowRight') galGo(1);
      else if (e.key === 'ArrowLeft') galGo(-1);
    });
  });
})();
