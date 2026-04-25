/* ============================================================
   Adem Hmercha — Portfolio (Light Theme)
   main.js
   ============================================================ */

const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ── Typing animation ────────────────────────────────────────── */
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

  const SPEED_TYPE   = 70;
  const SPEED_DELETE = 35;
  const PAUSE_AFTER  = 2500;
  const PAUSE_EMPTY  = 380;

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

  setTimeout(tick, 1000);
})();

/* ── Navbar scroll ───────────────────────────────────────────── */
(function initNavbar() {
  const nav    = document.querySelector('.nav');
  const toggle = document.querySelector('.nav__toggle');
  const links  = document.querySelector('.nav__links');
  if (!nav) return;

  const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 24);
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  function closeMenu() {
    toggle.classList.remove('open');
    links.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  if (toggle && links) {
    toggle.addEventListener('click', () => {
      const open = toggle.classList.toggle('open');
      links.classList.toggle('open', open);
      toggle.setAttribute('aria-expanded', String(open));
      document.body.style.overflow = open ? 'hidden' : '';
    });

    links.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', closeMenu);
    });

    /* Close on Escape key */
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape') closeMenu();
    });
  }
})();

/* ── Scroll reveal ───────────────────────────────────────────── */
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
  }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.reveal').forEach(el => obs.observe(el));
})();

/* ── Skill list stagger ──────────────────────────────────────── */
(function initSkillStagger() {
  if (reduced || !('IntersectionObserver' in window)) return;

  const groups = document.querySelectorAll('.skill-group');
  if (!groups.length) return;

  groups.forEach(g => {
    g.querySelectorAll('li').forEach(li => {
      li.style.opacity = '0';
      li.style.transform = 'translateX(-6px)';
    });
  });

  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      e.target.querySelectorAll('li').forEach((li, i) => {
        setTimeout(() => {
          li.style.transition = 'opacity 0.38s ease, transform 0.38s ease';
          li.style.opacity    = '1';
          li.style.transform  = 'translateX(0)';
        }, i * 45);
      });
      obs.unobserve(e.target);
    });
  }, { threshold: 0.15 });

  groups.forEach(g => obs.observe(g));
})();

/* ── Magnetic buttons ────────────────────────────────────────── */
(function initMagnetic() {
  if (reduced) return;

  document.querySelectorAll('.magnetic').forEach(el => {
    el.addEventListener('mousemove', e => {
      const r  = el.getBoundingClientRect();
      const dx = (e.clientX - r.left - r.width  / 2) * 0.2;
      const dy = (e.clientY - r.top  - r.height / 2) * 0.2;
      el.style.transform = `translate(${dx}px, ${dy}px)`;
    });
    el.addEventListener('mouseleave', () => {
      el.style.transform = '';
    });
  });
})();

/* ── Smooth scroll for anchor links ─────────────────────────── */
(function initSmoothScroll() {
  const NAV_H = parseInt(
    getComputedStyle(document.documentElement).getPropertyValue('--nav-h') || '68', 10
  );

  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const href   = a.getAttribute('href');
      const target = href === '#' ? null : document.querySelector(href);
      if (!target) return;
      e.preventDefault();
      const top = target.getBoundingClientRect().top + window.scrollY - NAV_H;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  });
})();

/* ── Pause marquee on hover ──────────────────────────────────── */
(function initMarquee() {
  const track = document.querySelector('.marquee__track');
  if (!track) return;
  track.addEventListener('mouseenter', () => track.style.animationPlayState = 'paused');
  track.addEventListener('mouseleave', () => track.style.animationPlayState = 'running');
})();

/* ── Mobile bottom nav active state ─────────────────────────── */
(function initMobileNav() {
  const navItems = document.querySelectorAll('.mobile-nav__item');
  if (!navItems.length) return;

  const sections = ['hero', 'projects', 'skills', 'contact'].map(id =>
    document.getElementById(id)
  ).filter(Boolean);

  function setActive(id) {
    navItems.forEach(item => {
      item.classList.toggle('active', item.dataset.section === id);
    });
  }

  setActive('hero');

  if (!('IntersectionObserver' in window)) return;

  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) setActive(e.target.id);
    });
  }, { threshold: 0.4, rootMargin: '-10% 0px -50% 0px' });

  sections.forEach(s => obs.observe(s));

  /* Tap feedback: add slight scale on touch */
  navItems.forEach(item => {
    item.addEventListener('touchstart', () => {
      item.style.opacity = '0.7';
    }, { passive: true });
    item.addEventListener('touchend', () => {
      item.style.opacity = '';
    }, { passive: true });
  });
})();

/* ── Tech chip stagger ───────────────────────────────────────── */
(function initTechStagger() {
  if (reduced || !('IntersectionObserver' in window)) return;

  const grid = document.querySelector('.tech__grid');
  if (!grid) return;

  const chips = Array.from(grid.querySelectorAll('.tech-chip'));
  chips.forEach(c => {
    c.style.opacity = '0';
    c.style.transform = 'translateY(10px)';
  });

  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      chips.forEach((c, i) => {
        setTimeout(() => {
          c.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
          c.style.opacity    = '1';
          c.style.transform  = 'translateY(0)';
        }, i * 50);
      });
      obs.unobserve(e.target);
    });
  }, { threshold: 0.2 });

  obs.observe(grid);
})();
