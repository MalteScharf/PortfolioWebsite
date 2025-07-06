const instance_swiper = new Swiper('.card-wrapper', {
  // Optional parameters
  loop: true,
  spaceBetween: 30,

  // Pagnation bullets
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets:true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // Responsive breakpoints
  breakpoints:{
    0: {
      slidesPerView: 1
    },

    768: {
      slidesPerView: 2
    },
    1024: {
      slidesPerView: 3
    }

  },

  on: {
    slideChange: function () {
      const index_currentSlide      = this.realIndex;
      const currentSlide            = this.slides[index_currentSlide];

      // make "previous" button invisible when current slide has slideindex of 0
      if (index_currentSlide === 0){
        document.getElementsByClassName('swiper-button-prev')[0].style.visibility ='hidden';
      } else{
        document.getElementsByClassName('swiper-button-prev')[0].style.visibility ='visible';
      }

      // make "next" button invisible when current slide has index of last slide

      const numberOfSlides = document.getElementsByClassName('card-item').length;

      if (index_currentSlide === numberOfSlides-1){
        document.getElementsByClassName('swiper-button-next')[0].style.visibility ='hidden';
      } else{
        document.getElementsByClassName('swiper-button-next')[0].style.visibility ='visible';
      }

    },
  },

});

// Card Preview Video
document.querySelectorAll('.card-item').forEach(item => {
  const video = item.querySelector('video');
  const card = item.querySelector('.card-link')

  if (video && card) {
    console.log(card.classList)
    const img = card.querySelector('.card-image')
    const video = card.querySelector('.preview-video')
    //const cardContainer = document.querySelector('.card-link');
    card.addEventListener('mouseenter', () => {
      console.log("Mouse enter Card: ", card)
      img.style.display='none';
      video.style.display='block';
      video.play();

    });

    card.addEventListener('mouseleave', () => {
      console.log("Mouse leaves Card: ", card)
      img.style.display='block';
      video.style.display='none';
      video.currentTime = 0;
    });
 }
});

// Email activation

const encodedpart1 = "Y29udGFjdEBt";
const encodedpart2 = "YWx0ZXNjaGFy";
const encodedpart3 = "Zi5jb20=";


function activateEmail(){
  const decoded = atob(encodedpart1 + encodedpart2 + encodedpart3);
  const link = document.getElementById("emailLink");
  link.href = `mailto:${decoded}?subject=Hey Malte, I am interested in working together!`;
  link.removeEventListener("click", activateEmail);
}
// add Event Listener only when clicked on
document.getElementById("emailLink").addEventListener("click", activateEmail);

// Tech Stack Animation

document.addEventListener("DOMContentLoaded", () => {
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const bar = entry.target;
        const targetWidth = bar.getAttribute('data-width');
        bar.style.width = targetWidth;
        obs.unobserve(bar); // animate only once
      }
    });
  }, {
    threshold: 0.5,
  });

  document.querySelectorAll('.exp-fill').forEach(bar => {
    bar.style.width = '0'; // start from 0
    observer.observe(bar);
  });
});

