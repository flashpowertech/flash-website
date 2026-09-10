const reducedMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

const THEME_STORAGE_KEY = 'flash-theme';

const applyTheme = (theme) => {
  document.documentElement.setAttribute('data-theme', theme);

  const themeToggle = document.getElementById('theme-toggle');
  if (themeToggle) {
    const isLight = theme === 'light';
    themeToggle.setAttribute('aria-pressed', String(isLight));
    themeToggle.setAttribute('aria-label', isLight ? 'Switch to dark mode' : 'Switch to light mode');
  }
};

const initThemeToggle = () => {
  const themeToggle = document.getElementById('theme-toggle');

  applyTheme(document.documentElement.getAttribute('data-theme') === 'light' ? 'light' : 'dark');

  if (!themeToggle) return;

  themeToggle.addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme') === 'light' ? 'light' : 'dark';
    const next = current === 'light' ? 'dark' : 'light';

    localStorage.setItem(THEME_STORAGE_KEY, next);
    applyTheme(next);
  });

  themeToggle.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' || event.key === ' ' || event.key === 'Spacebar') {
      event.preventDefault();
      themeToggle.click();
    }
  });
};

const initMenu = () => {
  const menuToggle = document.getElementById('menu-toggle');
  const siteMenu = document.getElementById('site-menu');

  if (!menuToggle || !siteMenu) return;

  let closeTimeout = null;

  const closeMenu = () => {
    if (!siteMenu.classList.contains('is-open')) return;

    siteMenu.classList.remove('is-open');
    menuToggle.classList.remove('is-open');
    menuToggle.setAttribute('aria-expanded', 'false');

    clearTimeout(closeTimeout);
    closeTimeout = setTimeout(() => {
      siteMenu.setAttribute('hidden', '');
    }, 200);
  };

  const openMenu = () => {
    clearTimeout(closeTimeout);
    siteMenu.removeAttribute('hidden');

    // Force a layout flush so the opening transition animates from its closed state
    // instead of the removed "hidden" and added "is-open" class applying in the same tick.
    void siteMenu.offsetHeight;

    siteMenu.classList.add('is-open');
    menuToggle.classList.add('is-open');
    menuToggle.setAttribute('aria-expanded', 'true');
  };

  menuToggle.addEventListener('click', (event) => {
    event.stopPropagation();

    if (siteMenu.classList.contains('is-open')) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  menuToggle.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' || event.key === ' ' || event.key === 'Spacebar') {
      event.preventDefault();
      menuToggle.click();
    }
  });

  siteMenu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => closeMenu());
  });

  document.addEventListener('click', (event) => {
    if (!siteMenu.classList.contains('is-open')) return;
    if (siteMenu.contains(event.target) || menuToggle.contains(event.target)) return;

    closeMenu();
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && siteMenu.classList.contains('is-open')) {
      closeMenu();
      menuToggle.focus();
    }
  });
};

const setActiveNavigation = () => {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';

  document.querySelectorAll('.site-nav a').forEach((link) => {
    const href = link.getAttribute('href') || '';
    const isHome = (currentPage === '' || currentPage === 'index.html') && (href === 'index.html' || href === '#top');
    const isAbout = currentPage === 'about.html' && href === 'about.html';
    const isContact = currentPage === 'contact.html' && href === 'contact.html';

    const isActive = isHome || isAbout || isContact;

    link.classList.toggle('active', isActive);
    if (isActive) {
      link.setAttribute('aria-current', 'page');
    } else {
      link.removeAttribute('aria-current');
    }
  });
};

const formatNumber = (value, decimals = 0) => {
  if (decimals > 0) {
    return Number(value).toLocaleString(undefined, {
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals,
    });
  }

  return Number(value).toLocaleString(undefined, {
    maximumFractionDigits: 0,
  });
};

const animateMetric = (element) => {
  const target = Number(element.dataset.target || 0);
  const suffix = element.dataset.suffix || '';
  const decimals = suffix === 'kWh' || suffix === 'kg' || suffix === 'km' ? 2 : 0;
  const valueEl = element.querySelector('.impact-value') || element;

  if (reducedMotionQuery.matches) {
    const formatted = suffix === 'km'
      ? formatNumber(target, 2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')
      : formatNumber(target, decimals);

    valueEl.textContent = formatted;
    return;
  }

  const duration = 1200;
  const startTime = performance.now();

  const update = (now) => {
    const progress = Math.min((now - startTime) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    const current = target * eased;

    let formatted;

    if (suffix === 'km') {
      formatted = formatNumber(current, 2).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    } else if (suffix === 'kWh' || suffix === 'kg') {
      formatted = formatNumber(current, 2);
    } else {
      formatted = formatNumber(current, 0);
    }

    valueEl.textContent = formatted;

    if (progress < 1) {
      requestAnimationFrame(update);
    }
  };

  requestAnimationFrame(update);
};

const metricObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;

      animateMetric(entry.target);
      observer.unobserve(entry.target);
    });
  },
  {
    threshold: 0.35,
  }
);

initThemeToggle();
initMenu();
setActiveNavigation();

const flashWhatsappUrl = 'https://wa.me/916262663664';

const buildWhatsAppMessage = (data) => {
  const extraInfo = data.message?.trim() ? data.message.trim() : 'Not provided';
  const homes = data.homes?.trim() ? data.homes.trim() : 'Not provided';

  return [
    'Hello Flash, I would like to explore EV charging infrastructure for my community.',
    '',
    `Name: ${data.name.trim()}`,
    `Community: ${data.community.trim()}`,
    `City: ${data.city.trim()}`,
    `Phone: ${data.phone.trim()}`,
    `Number of Homes: ${homes}`,
    `Additional Information: ${extraInfo}`,
  ].join('\n');
};

const contactForm = document.getElementById('flash-contact-form');

if (contactForm) {
  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData(contactForm);
    const values = {
      name: (formData.get('name') || '').toString().trim(),
      community: (formData.get('community') || '').toString().trim(),
      city: (formData.get('city') || '').toString().trim(),
      phone: (formData.get('phone') || '').toString().trim(),
      homes: (formData.get('homes') || '').toString().trim(),
      message: (formData.get('message') || '').toString().trim(),
    };

    const requiredFields = ['name', 'community', 'city', 'phone'];
    const missingFields = requiredFields.filter((field) => !values[field]);

    if (missingFields.length > 0) {
      const firstMissing = document.getElementById(missingFields[0]);
      firstMissing?.focus();
      firstMissing?.reportValidity();
      return;
    }

    const whatsappMessage = encodeURIComponent(buildWhatsAppMessage(values));
    const whatsappUrl = `${flashWhatsappUrl}?text=${whatsappMessage}`;
    window.open(whatsappUrl, '_blank', 'noopener');
  });
}

document.querySelectorAll('.impact-metric').forEach((metric) => {
  if (reducedMotionQuery.matches) {
    animateMetric(metric);
    return;
  }

  metricObserver.observe(metric);
});
