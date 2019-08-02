// window.onload = function () {

class Slider {
   constructor(obj) {
      this.slider = obj.slider;
      this.items = obj.items;
      this.butPrev = obj.butPrev;
      this.butNext = obj.butNext;
      this.dots = obj.dots;
      this.animation = obj.animation;
      this.carouselSlider = obj.carouselSlider;
      this.slider.classList.add(this.animation);
      this.auto = obj.auto || false;
      this.interval = obj.interval || 2000;
      this.i = 0;
      this.butPrev.addEventListener('click', this.prev.bind(this));
      this.butNext.addEventListener('click', this.next.bind(this));
      this.carouselSlider.style.width = this.slider.offsetWidth * this.items.length + 'px';
      if (this.items) {
         this.createDots();
         this.arr = this.dots.className.split(' ');
         this.dot = document.querySelectorAll(`.${this.arr[this.arr.length - 1]} .dot`);
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
      this.carouselSlider.style.left = -this.items[0].offsetWidth * item + 'px';
      this.dot[item].classList.add('active');
      this.items[item].classList.add('active');
   }
}

// slider 1

const prev1 = document.querySelector('.prev1');
const next1 = document.querySelector('.next1');
const items1 = document.querySelectorAll('.slider1 .item');
const firstSlider = document.querySelector('.slider1');
const dots1 = document.querySelector('.dots1');
const carouselSlider1 = document.querySelector('.slider1 .carousel-slider');

let slider1 = new Slider({
   items: items1,
   butPrev: prev1,
   butNext: next1,
   dots: dots1,
   carouselSlider: carouselSlider1,
   slider: firstSlider,
   animation: 'animationFlipping',
   auto: true,
   interval: 3000
});


//slider 2

const prev2 = document.querySelector('.prev2');
const next2 = document.querySelector('.next2');
const items2 = document.querySelectorAll('.slider2 .item');
const secondSlider = document.querySelector('.slider2');
const dots2 = document.querySelector('.dots2');
const carouselSlider2 = document.querySelector('.slider2 .carousel-slider');

let slider2 = new Slider({
   items: items2,
   butPrev: prev2,
   butNext: next2,
   dots: dots2,
   carouselSlider: carouselSlider2,
   slider: secondSlider,
   animation: 'animationAppearance',
   auto: false,
   interval: 3000
});

// }