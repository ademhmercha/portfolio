/* ============================================================
   Adem Hmercha — Portfolio 2026
   main.js
   ============================================================ */

const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ── Theme Toggle ──────────────────────────────────────────── */
(function initTheme() {
  const META_DARK = '#0a0a0b';
  const META_LIGHT = '#faf5f0';
  const themeColorMeta = document.querySelector('meta[name="theme-color"]');

  const syncMetaColor = (theme) => {
    if (themeColorMeta) themeColorMeta.setAttribute('content', theme === 'dark' ? META_DARK : META_LIGHT);
  };

  const stored = localStorage.getItem('theme');
  const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  const initial = stored || (prefersDark ? 'dark' : 'light');

  if (initial === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
  }
  syncMetaColor(initial);

  const toggleTheme = () => {
    const current = document.documentElement.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next === 'light' ? '' : next);
    localStorage.setItem('theme', next);
    syncMetaColor(next);
  };

  document.querySelectorAll('.nav__theme, .mobile-nav__theme').forEach(btn => {
    if (btn) btn.addEventListener('click', toggleTheme);
  });
})();

/* ── Project Filters ──────────────────────────────────────── */
(function initFilters() {
  const buttons = document.querySelectorAll('.projects .filter-btn');
  const cards = document.querySelectorAll('.pcard');

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      const filter = btn.dataset.filter;
      buttons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      cards.forEach(card => {
        const categories = (card.dataset.category || '').split(',');
        if (filter === 'all' || categories.includes(filter)) {
          card.classList.remove('filtered');
        } else {
          card.classList.add('filtered');
        }
      });
    });
  });
})();

/* ── Experience Filters ──────────────────────────────────── */
(function initExpFilters() {
  const buttons = document.querySelectorAll('.exp-filter-bar .filter-btn');
  const items = document.querySelectorAll('.detail-group--experience .detail-item');

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      const filter = btn.dataset.filter;
      buttons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      items.forEach(item => {
        const category = item.dataset.category;
        if (filter === 'all' || category === filter) {
          item.classList.remove('filtered');
        } else {
          item.classList.add('filtered');
        }
      });
    });
  });
})();

/* ── Custom Cursor ─────────────────────────────────────────── */
(function initCursor() {
  if (reduced) return;
  if ('ontouchstart' in window) return;

  const dot = document.querySelector('.cursor-dot');
  const ring = document.querySelector('.cursor-ring');
  const label = ring ? ring.querySelector('.cursor-label') : null;
  if (!dot || !ring) return;

  let mx = 0, my = 0, rx = 0, ry = 0;
  let visible = false;

  document.addEventListener('mousemove', e => {
    mx = e.clientX;
    my = e.clientY;
    if (!visible) {
      visible = true;
      dot.style.opacity = '1';
      ring.style.opacity = '1';
    }
  }, { passive: true });

  document.addEventListener('mouseleave', () => {
    visible = false;
    dot.style.opacity = '0';
    ring.style.opacity = '0';
  });

  document.addEventListener('mousedown', () => ring.classList.add('clicking'));
  document.addEventListener('mouseup', () => ring.classList.remove('clicking'));

  document.addEventListener('mouseover', e => {
    const card = e.target.closest('.pcard');
    if (card && label && !e.target.closest('a')) {
      ring.classList.add('hovering', 'labeled');
      const lang = window.i18n ? window.i18n.getLang() : 'en';
      const words = lang === 'fr' ? { view: 'Voir', details: 'Détails' } : { view: 'View', details: 'Details' };
      label.textContent = card.dataset.screenshot ? words.view : words.details;
    } else {
      ring.classList.remove('labeled');
      if (e.target.closest('a, button, .btn, .pcard, .skill-group')) {
        ring.classList.add('hovering');
      } else {
        ring.classList.remove('hovering');
      }
    }
  }, { passive: true });

  function animate() {
    rx += (mx - rx) * 0.12;
    ry += (my - ry) * 0.12;
    dot.style.transform = `translate(${mx - 3}px, ${my - 3}px)`;
    ring.style.transform = `translate(${rx - 20}px, ${ry - 20}px)`;
    requestAnimationFrame(animate);
  }
  animate();
})();

/* ── Typing Animation ────────────────────────────────────────── */
(function initTyping() {
  const el = document.querySelector('.hero__role-text');
  if (!el) return;

  const getRoles = () => (window.i18n ? window.i18n.roles() : ['Software Engineer']);

  let roles = getRoles();
  let timer = null;

  if (reduced) {
    el.textContent = roles[0];
    document.addEventListener('langchange', () => { roles = getRoles(); el.textContent = roles[0]; });
    return;
  }

  const SPEED_TYPE = 70;
  const SPEED_DELETE = 35;
  const PAUSE_AFTER = 2200;
  const PAUSE_EMPTY = 350;

  let rIdx = 0, cIdx = 0, deleting = false;

  function tick() {
    const cur = roles[rIdx] || '';
    cIdx = deleting ? cIdx - 1 : cIdx + 1;
    el.textContent = cur.slice(0, cIdx);

    let delay = deleting ? SPEED_DELETE : SPEED_TYPE;

    if (!deleting && cIdx === cur.length) {
      delay = PAUSE_AFTER;
      deleting = true;
    } else if (deleting && cIdx === 0) {
      deleting = false;
      rIdx = (rIdx + 1) % roles.length;
      delay = PAUSE_EMPTY;
    }

    timer = setTimeout(tick, delay);
  }

  document.addEventListener('langchange', () => {
    roles = getRoles();
    rIdx = 0; cIdx = 0; deleting = false;
    el.textContent = '';
    if (timer) clearTimeout(timer);
    timer = setTimeout(tick, 400);
  });

  timer = setTimeout(tick, 1500);
})();

/* ── Navbar ─────────────────────────────────────────────────── */
(function initNavbar() {
  const nav = document.querySelector('.nav');
  const toggle = document.querySelector('.nav__toggle');
  const links = document.querySelector('.nav__links');
  if (!nav) return;

  /* Scroll state: glass background + hide-on-scroll-down / reveal-on-scroll-up */
  let lastScrollY = window.scrollY;
  let ticking = false;

  const updateNav = () => {
    const y = window.scrollY;
    nav.classList.toggle('scrolled', y > 40);

    const menuOpen = links && links.classList.contains('open');
    if (!reduced && !menuOpen) {
      const scrollingDown = y > lastScrollY;
      if (scrollingDown && y > nav.offsetHeight * 2) {
        nav.classList.add('nav--hidden');
      } else if (!scrollingDown) {
        nav.classList.remove('nav--hidden');
      }
    } else {
      nav.classList.remove('nav--hidden');
    }

    lastScrollY = y;
    ticking = false;
  };

  const onScroll = () => {
    if (!ticking) {
      requestAnimationFrame(updateNav);
      ticking = true;
    }
  };
  window.addEventListener('scroll', onScroll, { passive: true });

  /* Mobile toggle */
  if (toggle && links) {
    toggle.addEventListener('click', () => {
      const open = toggle.classList.toggle('open');
      links.classList.toggle('open', open);
      toggle.setAttribute('aria-expanded', String(open));
      document.body.style.overflow = open ? 'hidden' : '';
    });

    links.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
      toggle.classList.remove('open');
      links.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    }));

    document.addEventListener('keydown', e => {
      if (e.key === 'Escape' && links.classList.contains('open')) {
        toggle.classList.remove('open');
        links.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      }
    });
  }

  /* Active section tracking */
  const sections = ['hero', 'about', 'projects', 'skills', 'contact'];
  const anchors = links ? links.querySelectorAll('a[href^="#"]') : [];
  if (!anchors.length || !('IntersectionObserver' in window)) return;

  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        anchors.forEach(a => {
          a.classList.toggle('active', a.getAttribute('href') === '#' + e.target.id);
        });
      }
    });
  }, { threshold: 0.25, rootMargin: '-15% 0px -70% 0px' });

  sections.forEach(id => {
    const el = document.getElementById(id);
    if (el) obs.observe(el);
  });
})();

/* ── Scroll Progress Bar ─────────────────────────────────────── */
(function initScrollProgress() {
  const bar = document.querySelector('.scroll-progress');
  if (!bar) return;

  let ticking = false;
  const update = () => {
    const scrollable = document.documentElement.scrollHeight - window.innerHeight;
    const pct = scrollable > 0 ? window.scrollY / scrollable : 0;
    bar.style.transform = `scaleX(${Math.min(1, Math.max(0, pct))})`;
    ticking = false;
  };
  const onScroll = () => {
    if (!ticking) {
      requestAnimationFrame(update);
      ticking = true;
    }
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll, { passive: true });
  update();
})();

/* ── Hero Cursor-Reactive Glow ───────────────────────────────── */
(function initHeroParallax() {
  if (reduced) return;
  if ('ontouchstart' in window) return;
  if (!window.matchMedia || !window.matchMedia('(pointer: fine)').matches) return;

  const hero = document.querySelector('.hero');
  if (!hero) return;

  let ticking = false;
  let mx = 0.5, my = 0.35;

  const apply = () => {
    document.documentElement.style.setProperty('--mx', mx.toFixed(3));
    document.documentElement.style.setProperty('--my', my.toFixed(3));
    ticking = false;
  };

  hero.addEventListener('mousemove', e => {
    const r = hero.getBoundingClientRect();
    mx = (e.clientX - r.left) / r.width;
    my = (e.clientY - r.top) / r.height;
    if (!ticking) {
      requestAnimationFrame(apply);
      ticking = true;
    }
  }, { passive: true });
})();

/* ── Scroll Reveal ───────────────────────────────────────────── */
(function initReveal() {
  if (reduced) {
    document.querySelectorAll('.reveal').forEach(el => el.classList.add('visible'));
    return;
  }
  if (!('IntersectionObserver' in window)) {
    document.querySelectorAll('.reveal').forEach(el => el.classList.add('visible'));
    return;
  }

  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -60px 0px' });

  document.querySelectorAll('.reveal').forEach(el => obs.observe(el));
})();

/* ── Skill List Stagger ──────────────────────────────────────── */
(function initSkillStagger() {
  if (reduced || !('IntersectionObserver' in window)) return;

  const groups = document.querySelectorAll('.skill-group');
  if (!groups.length) return;

  groups.forEach(g => {
    g.querySelectorAll('li').forEach(li => {
      li.style.opacity = '0';
      li.style.transform = 'translateX(-8px)';
    });
  });

  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      e.target.querySelectorAll('li').forEach((li, i) => {
        setTimeout(() => {
          li.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
          li.style.opacity = '1';
          li.style.transform = 'translateX(0)';
        }, i * 50);
      });
      obs.unobserve(e.target);
    });
  }, { threshold: 0.2 });

  groups.forEach(g => obs.observe(g));
})();

/* ── Magnetic Buttons ────────────────────────────────────────── */
(function initMagnetic() {
  if (reduced) return;

  document.querySelectorAll('.magnetic').forEach(el => {
    el.addEventListener('mousemove', e => {
      const r = el.getBoundingClientRect();
      const dx = (e.clientX - r.left - r.width / 2) * 0.15;
      const dy = (e.clientY - r.top - r.height / 2) * 0.15;
      el.style.transform = `translate(${dx}px, ${dy}px)`;
    });
    el.addEventListener('mouseleave', () => {
      el.style.transform = '';
      el.style.transition = 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)';
      setTimeout(() => el.style.transition = '', 400);
    });
  });
})();

/* ── Smooth Scroll ──────────────────────────────────────────── */
(function initSmoothScroll() {
  const NAV_H = 72;
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const href = a.getAttribute('href');
      const target = href === '#' ? null : document.querySelector(href);
      if (!target) return;
      e.preventDefault();
      const top = target.getBoundingClientRect().top + window.scrollY - NAV_H;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  });
})();

/* ── Marquee Pause on Hover ──────────────────────────────────── */
(function initMarquee() {
  const track = document.querySelector('.marquee__track');
  if (!track) return;
  track.addEventListener('mouseenter', () => track.style.animationPlayState = 'paused');
  track.addEventListener('mouseleave', () => track.style.animationPlayState = 'running');
})();

/* ── Favorites Sort ────────────────────────────────────────── */
(function initFavoritesSort() {
  const list = document.querySelector('.projects__list');
  if (!list) return;
  const cards = Array.from(list.querySelectorAll('.pcard'));
  const sorted = [
    ...cards.filter(c => c.dataset.favorite === 'true'),
    ...cards.filter(c => c.dataset.favorite !== 'true')
  ];
  sorted.forEach((card, i) => {
    const num = card.querySelector('.pcard__num');
    if (num) num.textContent = String(i + 1).padStart(2, '0');
    list.appendChild(card);
  });
})();

/* ── Expandable Project Cards ───────────────────────────────── */
(function initExpandCards() {
  const cards = document.querySelectorAll('.pcard');

  cards.forEach(card => {
    card.addEventListener('click', e => {
      if (e.target.closest('a')) return;

      const expand = card.querySelector('.pcard__expand');
      const inner  = card.querySelector('.pcard__expand-inner');
      if (!expand || !inner) return;

      const isExpanded = card.classList.contains('expanded');

      cards.forEach(c => {
        c.classList.remove('expanded');
        const exp = c.querySelector('.pcard__expand');
        if (exp) exp.style.maxHeight = '0';
      });

      if (!isExpanded) {
        card.classList.add('expanded');
        expand.style.maxHeight = (inner.scrollHeight + 32) + 'px';
      }
    });
  });
})();

/* ── Project Preview Panel ─────────────────────────────────── */
(function initProjectPreview() {
  const preview = document.querySelector('.projects__preview');
  if (!preview) return;

  const imgEl          = preview.querySelector('.preview__img');
  const skeletonEl     = preview.querySelector('.preview__skeleton');
  const placeholderEl  = preview.querySelector('.preview__placeholder');
  const urlText        = preview.querySelector('.preview__url-text');
  const metaTitle      = preview.querySelector('.preview__meta-title');
  const placeholderNum = preview.querySelector('.preview__placeholder-num');

  const cards = document.querySelectorAll('.pcard[data-screenshot]');
  const cache = new Map();
  let currentCard = null;

  async function fetchScreenshot(url) {
    if (cache.has(url)) return cache.get(url);
    try {
      const res = await fetch(
        `https://api.microlink.io/?url=${encodeURIComponent(url)}&screenshot=true&meta=false`
      );
      if (!res.ok) throw new Error('bad response');
      const json = await res.json();
      const imgUrl = json?.data?.screenshot?.url || null;
      cache.set(url, imgUrl);
      return imgUrl;
    } catch {
      cache.set(url, null);
      return null;
    }
  }

  function showCard(card) {
    if (card === currentCard) return;
    currentCard = card;

    const liveUrl = card.dataset.screenshot;
    const title   = card.querySelector('.pcard__title')?.textContent || '';
    const num     = card.querySelector('.pcard__num')?.textContent || '';

    metaTitle.textContent = title;

    if (!liveUrl) {
      preview.style.visibility = 'hidden';
      preview.style.opacity = '0';
      return;
    }

    preview.style.visibility = '';
    preview.style.opacity = '';

    urlText.textContent = liveUrl.replace('https://', '');
    placeholderEl.classList.remove('visible');

    if (cache.has(liveUrl)) {
      const imgUrl = cache.get(liveUrl);
      if (imgUrl) {
        imgEl.src = imgUrl;
        imgEl.classList.add('loaded');
        skeletonEl.classList.add('hidden');
      } else {
        imgEl.classList.remove('loaded');
        skeletonEl.classList.add('hidden');
        placeholderNum.textContent = num;
        placeholderEl.classList.add('visible');
      }
      return;
    }

    imgEl.classList.remove('loaded');
    skeletonEl.classList.remove('hidden');

    fetchScreenshot(liveUrl).then(imgUrl => {
      if (currentCard !== card) return;
      if (imgUrl) {
        const tmp = new Image();
        tmp.onload = () => {
          if (currentCard !== card) return;
          imgEl.src = imgUrl;
          imgEl.classList.add('loaded');
          skeletonEl.classList.add('hidden');
        };
        tmp.src = imgUrl;
      } else {
        skeletonEl.classList.add('hidden');
        placeholderNum.textContent = num;
        placeholderEl.classList.add('visible');
      }
    });
  }

  if (cards.length) showCard(cards[0]);

  cards.forEach(card => {
    const url = card.dataset.screenshot;
    if (url) fetchScreenshot(url);
  });

  cards.forEach(card => {
    card.addEventListener('mouseenter', () => showCard(card));
  });
})();

/* ── Mobile Bottom Nav ─────────────────────────────────────── */
(function initMobileNav() {
  const items = document.querySelectorAll('.mobile-nav__item');
  if (!items.length) return;

  const sections = ['hero', 'projects', 'skills', 'contact']
    .map(id => document.getElementById(id))
    .filter(Boolean);

  function setActive(id) {
    items.forEach(item => {
      item.classList.toggle('active', item.dataset.section === id);
    });
  }

  setActive('hero');

  if (!('IntersectionObserver' in window)) return;

  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) setActive(e.target.id);
    });
  }, { threshold: 0.35, rootMargin: '-10% 0px -55% 0px' });

  sections.forEach(s => obs.observe(s));
})();
