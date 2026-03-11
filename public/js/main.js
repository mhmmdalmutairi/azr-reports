(function(){
"use strict";

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
  }, {threshold: 0.08, rootMargin: '0px 0px -60px 0px'});

  document.querySelectorAll('.anim-hidden, .anim-slide-right, .anim-slide-left, .anim-scale, .section-reveal').forEach(function(el){
    animObserver.observe(el);
  });

  /* Counter Animation */
  var counterObserver = new IntersectionObserver(function(entries){
    entries.forEach(function(entry){
      if(entry.isIntersecting){
        var el = entry.target;
        var target = +el.dataset.target;
        var duration = 2000;
        var start = performance.now();
        function easeOutExpo(t){ return t===1?1:1-Math.pow(2,-10*t); }
        function update(now){
          var progress = Math.min((now-start)/duration,1);
          el.textContent = Math.floor(easeOutExpo(progress)*target);
          if(progress<1) requestAnimationFrame(update);
          else el.textContent = target;
        }
        requestAnimationFrame(update);
        counterObserver.unobserve(el);
      }
    });
  }, {threshold: 0.5});
  document.querySelectorAll('.counter').forEach(function(c){ counterObserver.observe(c); });

  /* Stagger Animation */
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

/* Particles */
var heroP = document.getElementById('heroParticles');
if(heroP){
  for(var i=0;i<20;i++){
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

/* Parallax + Navbar scroll */
var ticking=false;
window.addEventListener('scroll',function(){
  if(!ticking){
    requestAnimationFrame(function(){
      var scrollY=window.scrollY;
      document.querySelectorAll('.glow-orb').forEach(function(orb,i){
        orb.style.transform='translateY('+scrollY*(0.05+i*0.02)+'px)';
      });
      var nav=document.getElementById('navbar');
      if(nav){
        if(scrollY>80) nav.classList.add('scrolled');
        else if(!nav.classList.contains('always-scrolled')) nav.classList.remove('scrolled');
      }
      ticking=false;
    });
    ticking=true;
  }
});

/* Cursor Glow */
var glow=document.createElement('div');
glow.className='cursor-glow';
document.body.appendChild(glow);
var mx=0,my=0,gx=0,gy=0;
document.addEventListener('mousemove',function(e){ mx=e.clientX; my=e.clientY; });
(function loop(){
  gx+=(mx-gx)*0.1; gy+=(my-gy)*0.1;
  glow.style.left=gx+'px'; glow.style.top=gy+'px';
  requestAnimationFrame(loop);
})();
if('ontouchstart' in window) glow.style.display='none';

/* Magnetic Buttons */
document.querySelectorAll('.btn').forEach(function(btn){
  btn.addEventListener('mousemove',function(e){
    var r=btn.getBoundingClientRect();
    btn.style.transform='translate('+(e.clientX-r.left-r.width/2)*0.15+'px,'+(e.clientY-r.top-r.height/2)*0.15+'px)';
  });
  btn.addEventListener('mouseleave',function(){ btn.style.transform=''; });
});

/* 3D Card Tilt */
document.querySelectorAll('.card').forEach(function(card){
  card.addEventListener('mousemove',function(e){
    var r=card.getBoundingClientRect();
    var x=(e.clientX-r.left)/r.width, y=(e.clientY-r.top)/r.height;
    card.style.transform='perspective(800px) rotateX('+((y-0.5)*6)+'deg) rotateY('+((x-0.5)*-6)+'deg) translateY(-4px) scale(1.01)';
  });
  card.addEventListener('mouseleave',function(){ card.style.transform=''; });
});

/* Testimonials Carousel */
var track=document.getElementById('testimonialTrack');
var dots=document.querySelectorAll('#testimonialDots .dot');
var cur=0, timer;
function goTo(n){
  if(!track)return;
  cur=n;
  track.style.transform='translateX('+n*100+'%)';
  dots.forEach(function(d,i){ d.classList.toggle('active',i===n); });
}
function next(){ goTo((cur+1)%dots.length); }
function startAuto(){ timer=setInterval(next,5000); }
dots.forEach(function(dot){
  dot.addEventListener('click',function(){ clearInterval(timer); goTo(+dot.dataset.index); startAuto(); });
});
if(track){
  startAuto();
  var tsx=0;
  track.addEventListener('touchstart',function(e){ tsx=e.touches[0].clientX; });
  track.addEventListener('touchend',function(e){
    var d=tsx-e.changedTouches[0].clientX;
    if(Math.abs(d)>50){ clearInterval(timer); d>0?goTo(Math.min(cur+1,dots.length-1)):goTo(Math.max(cur-1,0)); startAuto(); }
  });
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
