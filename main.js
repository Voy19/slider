window.onload = function () {

   class Slider {
      constructor(obj) {
         this.items = obj.items;
         this.butPrev = obj.butPrev;
         this.butNext = obj.butNext;
         this.animation = typeof obj.animation == 'function' ? obj.animation() : obj.animation;
         // this.animation = obj.animation;
         this.auto = obj.auto || false;
         this.interval = obj.interval || 2000;
         this.i = 0;
         this.dots = document.querySelector('.dots');
         this.width = this.items[0].style.width;
         this.butPrev.addEventListener('click', this.prev.bind(this));
         this.butNext.addEventListener('click', this.next.bind(this));
         this.carouselSlider = document.querySelector('.carousel-slider');
         if (this.items) {
            this.createDots();
            this.dot = document.querySelectorAll('.dot');
            this.dot[0].classList.add('active');
            for (let i = 0; i < this.dot.length; i++) {
               this.dot[i].addEventListener('click', function () {
                  this.dotNavigation(i);
                  this.i = i;
               }.bind(this));
            }
         }

         if (this.auto) {
            setInterval(this.next.bind(this), this.interval);
         }
      }

      prev() {
         this.move(-1);
      };

      next() {
         this.move(1);
      };

      move(a) {
         this.animation(a);
      }

      move(a) {
         this.items[this.i].classList.remove('active');
         this.dot[this.i].classList.remove('active');
         this.i += a;
         this.carouselSlider.style.left = -this.items[0].offsetWidth * (this.i) + 'px';
         if (this.i < 0) {
            this.i = this.items.length - 1;
            this.carouselSlider.style.left = -this.items[0].offsetWidth * this.items.length + this.items[0].offsetWidth + 'px';
         } else if (this.i >= this.items.length) {
            this.i = 0;
            this.carouselSlider.style.left = 0 + 'px';
         }
         this.dot[this.i].classList.add('active');
         this.items[this.i].classList.add('active');
      }

      createDots() {
         for (let i = 0; i < this.items.length; i++) {
            let element = document.createElement('div');
            element.className = 'dot';
            this.dots.appendChild(element);
         }
      }

      dotNavigation(item) {
         for (let i = 0; i < this.items.length; i++) {
            this.dot[i].classList.remove('active');
            this.items[i].classList.remove('active');
         }
         this.carouselSlider.style.left = -this.items[0].offsetWidth * (item) + 'px';
         this.dot[item].classList.add('active');
         this.items[item].classList.add('active');
      }
   }

   const prev = document.querySelector('.prev');
   const next = document.querySelector('.next');
   const items = document.querySelectorAll('.item');
   const active = document.querySelector('.active');
   const sliderClass = document.querySelector('.slider');
   const carouselSlider = document.querySelector('.carousel-slider');

   const appearanceAnimation = function appearance() {
      sliderClass.classList.add('animationAppearance');
   }

   const flippingAnimation = function flipping(qwe) {
      sliderClass.classList.add('animationFlipping');
      // this.items[this.i].classList.remove('active');
      // this.dot[this.i].classList.remove('active');
      // this.i += qwe;
      // this.carouselSlider.style.left = -this.items[0].offsetWidth * (this.i) + 'px';
      // if (this.i < 0) {
      //    this.i = this.items.length - 1;
      //    this.carouselSlider.style.left = -this.items[0].offsetWidth * this.items.length + this.items[0].offsetWidth + 'px';
      // } else if (this.i >= this.items.length) {
      //    this.i = 0;
      //    this.carouselSlider.style.left = 0 + 'px';
      // }
      // this.dot[this.i].classList.add('active');
      // this.items[this.i].classList.add('active');
   }

   let slider = new Slider({
      items: items,
      butPrev: prev,
      butNext: next,
      animation: flippingAnimation,
      auto: false,
      interval: 3000
   });
}