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
document.querySelectorAll('.swiper-slide .card-link').forEach(card => {
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
    });
});

