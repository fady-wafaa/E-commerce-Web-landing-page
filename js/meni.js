const navTor = document.querySelector('nav');
const lik = document.querySelectorAll('.nav-item a');
window.addEventListener('scroll', function () {
  if (window.scrollY > 330) {
    navTor.style.position = 'fixed';
    navTor.style.marginLeft = '5%';
    navTor.classList.remove('.');
    navTor.style.opacity = 0.8;
      lik.style.color = '#542e71';
    navTor.style.backgroundColor = '#161E54';
  } else {
    navTor.style.position = 'relative';
    navTor.style.opacity = 1;
    navTor.style.backgroundColor = '#FFF';
    lik.style.color = '#58d3cb';
  }
});




$('.nav-item a').on('click', function (event) {
  if (this.hash !== '') {
    event.preventDefault();
    var hash = this.hash;
    $('html , body').animate({ scrollTop: $(hash).offset().top - 10 }, 1200);
  }
});



// +++++++++++++++++++ Gsap +++++++++++++

gsap.registerPlugin(ScrollTrigger);
gsap.from('.navbar', { duration: 1, y: '-100%', delay: 0.5 });
gsap.from('.nav-link', {
  duration: 0.5,
  opacity: 0,
  delay: 1,
  stagger: 0.3,
  ease: 'power3.out',
  y: -50,
});

const text_img = document.querySelector('.text_img .img');

gsap.from('.Home', {
  delay: 0.5,
  duration: 1,
  x: -200,
  // height: 0,
  opacity: 0,
  ease: 'power3.inOut',
});

gsap.from('.text_home', { duration: 2, opacity: 0, y: -100, delay: 1.5 });

gsap.fromTo(
  text_img,
  { opacity: 0, scale: 0, ease: 'power3.out' },
  { opacity: 1, scale: 1, daley: 9, duration: 5 }
);

gsap.from('.skls .item_skls', {
  y: -100,
  opacity: 0,
  duration: 1,
  delay: 0.5,
  ease: 'power3.out',
  stagger: 0.5,
  scrollTrigger: {
    trigger: '.text_img',
    start: '80% 30%',
    end: '95% 20%',
    // markers:true,
    scrub: true,
    toggleActions: 'restart none none none',
  },
});

gsap.from('.model_fashoin .item_model', {
  opacity: 0,
  x: 100,
  daley: 1,
  duration: 1,
  stagger: { amount: 0.7 },
  scrollTrigger: {
    trigger: '.Products .title_h1',
    start: '20% 30%',
    end: 'center 20%',
    //    markers:true,
    scrub: true,
    toggleActions: 'restart none none none',
  },
});

gsap.from('.tiem_ofer .tiem_js', {
  opacity: 0,
  duration: 0.5,
  y: -50,
  delay: 0.5,
  stagger: 2,
  scrollTrigger: {
    trigger: '.Offers',
    start: '-16% 30%',
    end: '-1% 20%',
      //  markers:true,
    scrub: true,
    toggleActions: 'restart none none none',
  },

});

gsap.from('.img_Offers img', {
  opacity: 0,
  duration: 2,
  y: 400,
  delay: 1,
  scrollTrigger: {
    trigger: '.Offers',
    start: '-16% 30%',
    end: '-1% 20%',
      //  markers:true,
    scrub: true,
    toggleActions: 'restart none none none',
  },
});

gsap.from('.alab .vod_js', {
  opacity: 0,
  duration: 2,
  scale: 0,
  delay: 1,
  stagger:  2 ,
  scrollTrigger: {
    trigger: '.products',
    start: '85% 30%',
    end: '95% 20%',
      //  markers:true,
    scrub: true,

    toggleActions: 'restart none none none',
  },
});
gsap.from(['.titel_downlod .bot_down ', '.titel_downlod .rt'], {
  opacity: 0,
  duration: 2,
  x: 100,
  delay: 1,
  stagger:  2 ,
  scrollTrigger: {
    trigger: '.downlod',
    start: 'top 30%',
    end: '2% 20%',
    //    markers:true,
    scrub: true,

    toggleActions: 'restart none none none',
  },
});

gsap.from('.posts .card', {
  duration: 0.5,
  opacity: 0,
  delay: 1,
  stagger: 0.3,
  ease: 'power3.out',
  x: -50,
  scrollTrigger: {
    trigger: '.post',
    start: '10% 30%',
    end: '20% 20%',
    //    markers:true,
    scrub: true,

    toggleActions: 'restart none none none',
  },
});

//+++++++++  nav +++++++++++

const navTogl = document.querySelector('.navbar-toggler');

const Togl = document.getElementById('navbarScrol');

function tt() {
  Togl.classList.toggle('show');
 
}


window.addEventListener('resize' , function () {
  if (window.innerWidth > 730){
    navTogl.style.display= "none" ;
    console.log('fgh');
  }else{
    navTogl.style.display= "block" ;
    
    console.log('fgh 66');
  }
})


// //++++++++++++++++++++++++  slider +++++++++++++++++

$('.slide').hiSlide();

setInterval(function newYear() {
  const countDate = new Date('Dec 25, 2023 00:00:00').getTime();
  const now = new Date().getTime();
  const gap = countDate - now;

  let sec = 1000;
  let min = sec * 60;
  let hour = min * 60;
  let day = hour * 24;

  let d = Math.floor(gap / day);
  let h = Math.floor((gap % day) / hour);
  let m = Math.floor((gap % hour) / min);
  let s = Math.floor((gap % min) / sec);

  document.querySelector('.days').innerHTML = d;
  document.querySelector('.hours').innerHTML = h;
  document.querySelector('.mins').innerHTML = m;
  document.querySelector('.secs').innerHTML = s;
}, 1000);

// // +++++++++++++++++ filter+++++++++++++++

$(document).ready(function () {
  $('.item').click(function () {
    var value = $(this).attr('data-filter');

    if (value == 'all') {
      $('.filter').css({ display: 'none' });
      $('.fil').show('1000');
      $('.fil').css({ display: 'block' });
    } else {
      $('.filter').css({ display: 'block' });
      $('.filter')
        .not('.' + value)
        .hide('100');
      $('.filter')
        .filter('.' + value)
        .show('100');
    }
});

if ($('.item').removeClass('active')) {
    $(this).removeClass('active');
  }
  $(this).addClass('active');

});

