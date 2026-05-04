/* ============================================================
   Adem Hmercha — Portfolio 2026
   main.js
   ============================================================ */

const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ── Theme Toggle ──────────────────────────────────────────── */
(function initTheme() {
  const stored = localStorage.getItem('theme');
  if (stored === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
  }

  const toggleTheme = () => {
    const current = document.documentElement.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next === 'light' ? '' : next);
    localStorage.setItem('theme', next);
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
    if (e.target.closest('a, button, .btn, .pcard, .tech-chip, .skill-group')) {
      ring.classList.add('hovering');
    } else {
      ring.classList.remove('hovering');
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

  const roles = [
    'Full Stack Developer',
    'MERN Stack Engineer',
    'Real-Time Systems Builder',
    'DevOps Enthusiast',
  ];

  if (reduced) { el.textContent = roles[0]; return; }

  const SPEED_TYPE = 70;
  const SPEED_DELETE = 35;
  const PAUSE_AFTER = 2200;
  const PAUSE_EMPTY = 350;

  let rIdx = 0, cIdx = 0, deleting = false;

  function tick() {
    const cur = roles[rIdx];
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

    setTimeout(tick, delay);
  }

  setTimeout(tick, 1500);
})();

/* ── Navbar ─────────────────────────────────────────────────── */
(function initNavbar() {
  const nav = document.querySelector('.nav');
  const toggle = document.querySelector('.nav__toggle');
  const links = document.querySelector('.nav__links');
  if (!nav) return;

  /* Scroll state */
  let lastScroll = 0;
  const onScroll = () => {
    nav.classList.toggle('scrolled', window.scrollY > 40);
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
