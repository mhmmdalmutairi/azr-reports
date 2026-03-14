(function(){
"use strict";

/* Detect mobile/touch device — needed early */
var isMobile = window.innerWidth <= 768;
var isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

/* ============================
   Wait 2 frames so browser paints the hidden state,
   THEN start observing — this makes transitions visible.
   ============================ */
requestAnimationFrame(function(){
requestAnimationFrame(function(){

  /* Scroll Animations */
  var animObserver = new IntersectionObserver(function(entries){
    entries.forEach(function(entry){
      if(entry.isIntersecting){
        entry.target.classList.add('anim-visible');
        animObserver.unobserve(entry.target);
      }
    });
  }, {threshold: 0.05, rootMargin: '0px 0px -30px 0px'});

  document.querySelectorAll('.anim-hidden, .anim-slide-right, .anim-slide-left, .anim-scale, .section-reveal').forEach(function(el){
    animObserver.observe(el);
  });

  /* === Staggered Card Reveal — each card 150ms after previous === */
  var cardStaggerObs = new IntersectionObserver(function(entries){
    entries.forEach(function(entry){
      if(entry.isIntersecting){
        var cards = entry.target.querySelectorAll('.card, .stagger-item, .stat-card');
        cards.forEach(function(card, i){
          card.style.transitionDelay = (i * 0.15) + 's';
          card.classList.add('anim-visible');
        });
        /* Clean up delays after animation completes */
        setTimeout(function(){
          cards.forEach(function(card){
            card.style.transitionDelay = '';
          });
        }, cards.length * 150 + 1000);
        cardStaggerObs.unobserve(entry.target);
      }
    });
  }, {threshold: 0.06, rootMargin: '0px 0px -40px 0px'});

  document.querySelectorAll('.cards-grid, .stats-grid, .services-grid, .stagger-container, .features-grid, .portfolio-grid').forEach(function(el){
    cardStaggerObs.observe(el);
  });

  /* === Premium Counter Animation — slow start, fast middle, smooth end === */
  var counterObserver = new IntersectionObserver(function(entries){
    entries.forEach(function(entry){
      if(entry.isIntersecting){
        var el = entry.target;
        var target = +el.dataset.target;
        var duration = 2400;
        var start = performance.now();
        var suffix = el.dataset.suffix || '';
        var prefix = el.dataset.prefix || '';

        /* Custom easing: slow start, fast middle, smooth deceleration */
        function premiumEase(t) {
          if (t < 0.15) {
            /* Slow start — cubic ease in */
            return 0.5 * Math.pow(t / 0.15, 3) * 0.15;
          } else if (t < 0.7) {
            /* Fast middle — near linear but accelerated */
            var mid = (t - 0.15) / 0.55;
            return 0.075 + mid * 0.65;
          } else {
            /* Smooth end — exponential ease out */
            var end = (t - 0.7) / 0.3;
            return 0.725 + (1 - Math.pow(1 - end, 3)) * 0.275;
          }
        }

        /* Add scale-in class for visual punch */
        el.classList.add('anim-stat-visible');

        function update(now){
          var progress = Math.min((now - start) / duration, 1);
          var easedProgress = premiumEase(progress);
          var current = Math.floor(easedProgress * target);
          el.textContent = prefix + current + suffix;
          if(progress < 1) {
            requestAnimationFrame(update);
          } else {
            el.textContent = prefix + target + suffix;
          }
        }
        requestAnimationFrame(update);
        counterObserver.unobserve(el);
      }
    });
  }, {threshold: isMobile ? 0.2 : 0.5});
  document.querySelectorAll('.counter').forEach(function(c){ counterObserver.observe(c); });

  /* Stagger Animation (legacy support) */
  var staggerObs = new IntersectionObserver(function(entries){
    entries.forEach(function(entry){
      if(entry.isIntersecting){
        entry.target.querySelectorAll('.stagger-item').forEach(function(child,i){
          child.style.transitionDelay = i*0.12+'s';
          child.classList.add('anim-visible');
        });
        staggerObs.unobserve(entry.target);
      }
    });
  }, {threshold: 0.08});
  document.querySelectorAll('.stagger-container').forEach(function(el){ staggerObs.observe(el); });

  /* Fallback: force visible after 4s */
  setTimeout(function(){
    document.querySelectorAll('.anim-hidden,.anim-slide-right,.anim-slide-left,.anim-scale').forEach(function(el){
      if(!el.classList.contains('anim-visible')) el.classList.add('anim-visible');
    });
  }, 4000);

}); /* end rAF 2 */
}); /* end rAF 1 */

/* ============================
   These run immediately (no delay needed)
   ============================ */

/* Particles — fewer on mobile */
var heroP = document.getElementById('heroParticles');
if(heroP){
  var particleCount = isMobile ? 8 : 20;
  for(var i=0;i<particleCount;i++){
    var p = document.createElement('div');
    p.className='particle';
    p.style.left=Math.random()*100+'%';
    p.style.animationDuration=(Math.random()*15+10)+'s';
    p.style.animationDelay=(Math.random()*10)+'s';
    var sz=Math.random()*4+2;
    p.style.width=sz+'px'; p.style.height=sz+'px';
    heroP.appendChild(p);
  }
}

/* Parallax + Navbar scroll + Hero text parallax */
var ticking=false;
var heroTextEl = document.querySelector('.hero-parallax-text, .hero-content, .hero h1');
var parallaxLayers = document.querySelectorAll('.parallax-layer-1, .parallax-layer-2, .parallax-layer-3');

window.addEventListener('scroll',function(){
  if(!ticking){
    requestAnimationFrame(function(){
      var scrollY=window.scrollY;

      /* Navbar scroll state — always needed */
      var nav=document.getElementById('navbar');
      if(nav){
        if(scrollY>50) nav.classList.add('scrolled');
        else if(!nav.classList.contains('always-scrolled')) nav.classList.remove('scrolled');
      }

      /* Skip heavy parallax on mobile for performance */
      if(!isMobile){
        /* Glow orb parallax */
        document.querySelectorAll('.glow-orb').forEach(function(orb,i){
          orb.style.transform='translateY('+scrollY*(0.05+i*0.02)+'px)';
        });

        /* Hero text subtle parallax — moves slightly slower than scroll */
        if(heroTextEl && scrollY < 800){
          heroTextEl.style.transform = 'translateY(' + (scrollY * 0.15) + 'px)';
          heroTextEl.style.opacity = Math.max(1 - scrollY / 600, 0);
        }

        /* Parallax depth layers — different speeds */
        parallaxLayers.forEach(function(layer){
          var speed = 0.03;
          if(layer.classList.contains('parallax-layer-2')) speed = 0.06;
          if(layer.classList.contains('parallax-layer-3')) speed = 0.1;
          layer.style.transform = 'translateY(' + (scrollY * speed) + 'px)';
        });
      }

      ticking=false;
    });
    ticking=true;
  }
}, {passive: true});

/* Cursor Glow — only on non-touch devices */
if(!isTouch){
  var glow=document.createElement('div');
  glow.className='cursor-glow';
  document.body.appendChild(glow);
  var mx=0,my=0,gx=0,gy=0;
  var isInteractive = false;

  document.addEventListener('mousemove',function(e){
    mx=e.clientX; my=e.clientY;

    /* Check if hovering over an interactive element */
    var target = e.target;
    var hoveredInteractive = false;
    while(target && target !== document.body){
      if(target.tagName === 'A' || target.tagName === 'BUTTON' ||
         target.classList.contains('btn') || target.classList.contains('card') ||
         target.classList.contains('dot') || target.classList.contains('nav-link') ||
         target.classList.contains('cta-btn') || target.classList.contains('stat-card')){
        hoveredInteractive = true;
        break;
      }
      target = target.parentElement;
    }

    if(hoveredInteractive && !isInteractive){
      isInteractive = true;
      glow.classList.add('cursor-glow-interactive');
    } else if(!hoveredInteractive && isInteractive){
      isInteractive = false;
      glow.classList.remove('cursor-glow-interactive');
    }
  });

  (function loop(){
    gx+=(mx-gx)*0.1; gy+=(my-gy)*0.1;
    glow.style.left=gx+'px'; glow.style.top=gy+'px';
    requestAnimationFrame(loop);
  })();
}

/* Magnetic Buttons — desktop only */
if(!isTouch){
  document.querySelectorAll('.btn').forEach(function(btn){
    btn.addEventListener('mousemove',function(e){
      var r=btn.getBoundingClientRect();
      btn.style.transform='translate('+(e.clientX-r.left-r.width/2)*0.15+'px,'+(e.clientY-r.top-r.height/2)*0.15+'px)';
    });
    btn.addEventListener('mouseleave',function(){ btn.style.transform=''; });
  });

  /* 3D Card Tilt — desktop only */
  document.querySelectorAll('.card').forEach(function(card){
    card.addEventListener('mousemove',function(e){
      var r=card.getBoundingClientRect();
      var x=(e.clientX-r.left)/r.width, y=(e.clientY-r.top)/r.height;
      card.style.transform='perspective(800px) rotateX('+((y-0.5)*6)+'deg) rotateY('+((x-0.5)*-6)+'deg) translateY(-12px) scale(1.025)';
    });
    card.addEventListener('mouseleave',function(){ card.style.transform=''; });
  });
}

/* Testimonials Carousel */
var track=document.getElementById('testimonialTrack');
var dots=document.querySelectorAll('#testimonialDots .dot');
var cur=0, timer;
function goTo(n){
  if(!track)return;
  cur=n;
  track.style.transform='translateX('+(n*-100)+'%)';
  dots.forEach(function(d,i){ d.classList.toggle('active',i===n); });
}
function next(){ goTo((cur+1)%dots.length); }
function startAuto(){ timer=setInterval(next,5000); }
dots.forEach(function(dot){
  dot.addEventListener('click',function(){ clearInterval(timer); goTo(+dot.dataset.index); startAuto(); });
});
if(track){
  startAuto();
  var tsx=0, tsy=0, tsTime=0;
  track.addEventListener('touchstart',function(e){
    tsx=e.touches[0].clientX;
    tsy=e.touches[0].clientY;
    tsTime=Date.now();
  }, {passive: true});
  track.addEventListener('touchend',function(e){
    var dx=tsx-e.changedTouches[0].clientX;
    var dy=tsy-e.changedTouches[0].clientY;
    var elapsed=Date.now()-tsTime;
    /* Only trigger if horizontal swipe > vertical and threshold met */
    if(Math.abs(dx)>30 && Math.abs(dx)>Math.abs(dy) && elapsed<500){
      clearInterval(timer);
      /* RTL: track uses ltr direction, so swipe left (dx>0) = next, swipe right (dx<0) = prev */
      if(dx>0) goTo(Math.min(cur+1,dots.length-1));
      else goTo(Math.max(cur-1,0));
      startAuto();
    }
  }, {passive: true});
  /* Pause auto-play when carousel is in viewport on mobile */
  if(isMobile){
    var carouselEl=document.getElementById('testimonialsCarousel');
    if(carouselEl){
      var carouselObs = new IntersectionObserver(function(entries){
        entries.forEach(function(entry){
          if(entry.isIntersecting){ clearInterval(timer); startAuto(); }
        });
      }, {threshold: 0.5});
      carouselObs.observe(carouselEl);
    }
  }
}

/* Mobile Menu */
var navToggle=document.getElementById('navToggle');
var navLinks=document.getElementById('navLinks');
if(navToggle){
  navToggle.addEventListener('click',function(){
    navLinks.classList.toggle('open');
    document.body.classList.toggle('menu-open');
    var spans=navToggle.querySelectorAll('span');
    navToggle.classList.toggle('active');
    if(navToggle.classList.contains('active')){
      spans[0].style.transform='rotate(45deg) translate(5px,5px)';
      spans[1].style.opacity='0';
      spans[2].style.transform='rotate(-45deg) translate(5px,-5px)';
    } else { spans[0].style.transform=''; spans[1].style.opacity=''; spans[2].style.transform=''; }
  });
}
document.querySelectorAll('.nav-links a').forEach(function(link){
  link.addEventListener('click',function(){
    navLinks.classList.remove('open');
    document.body.classList.remove('menu-open');
    if(navToggle){ navToggle.classList.remove('active'); navToggle.querySelectorAll('span').forEach(function(s){ s.style.transform=''; s.style.opacity=''; }); }
  });
});

/* Active Nav Link */
var page=window.location.pathname.split('/').pop()||'index.html';
document.querySelectorAll('.nav-links a').forEach(function(link){
  link.classList.remove('active');
  if(link.getAttribute('href')===page) link.classList.add('active');
});

/* Smooth Anchor Scroll */
document.querySelectorAll('a[href^="#"]').forEach(function(a){
  a.addEventListener('click',function(e){
    e.preventDefault();
    var t=document.querySelector(this.getAttribute('href'));
    if(t) t.scrollIntoView({behavior:'smooth',block:'start'});
  });
});

})();
