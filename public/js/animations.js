/* === AZR Innovation Studio — Animations Engine v2 === */

// Intersection Observer for scroll animations
const animObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('anim-visible');
      animObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.anim-hidden').forEach(el => {
  animObserver.observe(el);
});

// Counter animation with easing
const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const el = entry.target;
      const target = +el.dataset.target;
      const duration = 2000;
      const start = performance.now();

      function easeOutExpo(t) {
        return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
      }

      function update(now) {
        const progress = Math.min((now - start) / duration, 1);
        const value = Math.floor(easeOutExpo(progress) * target);
        el.textContent = value;
        if (progress < 1) requestAnimationFrame(update);
        else el.textContent = target;
      }

      requestAnimationFrame(update);
      counterObserver.unobserve(el);
    }
  });
}, { threshold: 0.5 });

document.querySelectorAll('.counter').forEach(c => counterObserver.observe(c));

// Particle generator
function createParticles(containerId, count = 20) {
  const container = document.getElementById(containerId);
  if (!container) return;
  for (let i = 0; i < count; i++) {
    const p = document.createElement('div');
    p.className = 'particle';
    p.style.left = Math.random() * 100 + '%';
    p.style.animationDuration = (Math.random() * 15 + 10) + 's';
    p.style.animationDelay = (Math.random() * 10) + 's';
    const size = Math.random() * 4 + 2;
    p.style.width = size + 'px';
    p.style.height = size + 'px';
    container.appendChild(p);
  }
}

createParticles('heroParticles', 20);

// Smooth parallax on scroll for glow orbs
let ticking = false;
window.addEventListener('scroll', () => {
  if (!ticking) {
    requestAnimationFrame(() => {
      const scrollY = window.scrollY;
      document.querySelectorAll('.glow-orb').forEach((orb, i) => {
        const speed = 0.05 + (i * 0.02);
        orb.style.transform = `translateY(${scrollY * speed}px)`;
      });
      ticking = false;
    });
    ticking = true;
  }
});

// Staggered children animation
const staggerObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const children = entry.target.querySelectorAll('.stagger-item');
      children.forEach((child, i) => {
        child.style.transitionDelay = `${i * 0.1}s`;
        child.classList.add('anim-visible');
      });
      staggerObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.stagger-container').forEach(el => {
  staggerObserver.observe(el);
});

// Progress bar animation for case study metrics
const progressObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const bar = entry.target;
      const target = bar.dataset.progress || '100';
      bar.style.width = target + '%';
      progressObserver.unobserve(bar);
    }
  });
}, { threshold: 0.3 });

document.querySelectorAll('.progress-fill').forEach(el => {
  progressObserver.observe(el);
});

// Cursor glow effect
const cursorGlow = document.createElement('div');
cursorGlow.className = 'cursor-glow';
document.body.appendChild(cursorGlow);
let mouseX = 0, mouseY = 0, glowX = 0, glowY = 0;

document.addEventListener('mousemove', (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

function animateCursor() {
  glowX += (mouseX - glowX) * 0.15;
  glowY += (mouseY - glowY) * 0.15;
  cursorGlow.style.left = glowX + 'px';
  cursorGlow.style.top = glowY + 'px';
  requestAnimationFrame(animateCursor);
}
animateCursor();

// Hide cursor glow on mobile
if ('ontouchstart' in window) {
  cursorGlow.style.display = 'none';
}

// Testimonials carousel
const track = document.getElementById('testimonialTrack');
const dots = document.querySelectorAll('#testimonialDots .dot');
let currentSlide = 0;
let autoSlideTimer;

function goToSlide(index) {
  if (!track) return;
  currentSlide = index;
  track.style.transform = `translateX(${index * 100}%)`;
  dots.forEach((d, i) => d.classList.toggle('active', i === index));
}

function nextSlide() {
  goToSlide((currentSlide + 1) % dots.length);
}

function startAutoSlide() {
  autoSlideTimer = setInterval(nextSlide, 5000);
}

dots.forEach(dot => {
  dot.addEventListener('click', () => {
    clearInterval(autoSlideTimer);
    goToSlide(+dot.dataset.index);
    startAutoSlide();
  });
});

if (track) {
  startAutoSlide();
  // Swipe support
  let touchStartX = 0;
  track.addEventListener('touchstart', (e) => { touchStartX = e.touches[0].clientX; });
  track.addEventListener('touchend', (e) => {
    const diff = touchStartX - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      clearInterval(autoSlideTimer);
      if (diff > 0) goToSlide(Math.min(currentSlide + 1, dots.length - 1));
      else goToSlide(Math.max(currentSlide - 1, 0));
      startAutoSlide();
    }
  });
}
