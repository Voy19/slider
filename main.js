window.onload = function () {

   class Slider {
      constructor(obj) {
         this.items = obj.items;
         this.butPrev = obj.butPrev;
         this.butNext = obj.butNext;
         this.animation = typeof obj.animation == 'function' ? obj.animation() : obj.animation;
         this.auto = obj.auto || false;
         this.interval = obj.interval || 2000;
         this.i = 0;
         this.width = this.items[0].style.width;
         this.butPrev.addEventListener('click', this.prev.bind(this));
         this.butNext.addEventListener('click', this.next.bind(this));
         if (this.auto) {
            setInterval(this.next.bind(this), this.interval);
         }
      }

      prev() {
         this.move(-1)
      };

      next() {
         this.move(1);
      };

      // move(a) {
      //    this.items[this.i].classList.remove('active');
      //    this.i += a;
      //    if (this.i < 0) {
      //       this.i = this.items.length - 1;
      //    } else if (this.i >= this.items.length) {
      //       this.i = 0;
      //    }
      //    this.items[this.i].classList.add('active');
      // }

      move(a) {
         // this.items[this.i].style.left = (this.width * direction);

         this.items[this.i].style.left = 0;
         this.i += a;
         if (this.i < 0) {
            this.i = this.items.length - 1;
         } else if (this.i >= this.items.length) {
            this.i = 0;
         }
         this.items[this.i].style.left = '100%';
      }
   }

   const prev = document.querySelector('.prev');
   const next = document.querySelector('.next');
   const items = document.querySelectorAll('.item');
   const active = document.querySelector('.active');

   const appearanceAnimation = function appearance() {
      for (let i = 0; i < items.length; i++) {
         items[i].style.transition = 'opacity 3s ease';
      }
      active.style.transition = 'opacity 3s ease';
   }

   const animation = function animaton2() {
      for (let i = 0; i < items.length; i++) {
         // items[i].style.transition = 'width 3s ease';
         // items[i].style.width = '100%';
      }
      // active.style.transition = 'width 2s ease';
      // active.style.width = '100%';
      // active.style.left = '0';
   }


   // скрыть
   // imgs.eq(i).animate({
   //    left: (sliderWidth * direction)
   // }, rate).css({
   //    left: 0,
   // });

   // i += direction;
   // if (i < 0) {
   //    i = imgs.length - 1;
   // } else if (i >= imgs.length) {
   //    i = 0;
   // }

   // // показать
   // imgs.eq(i).css({
   //    left: (-sliderWidth * direction),
   //    width: "100%"
   // }).animate({
   //    left: 0,
   // }, rate, function () {
   //    isRun = false;
   // });

   let slider = new Slider({
      items: items,
      butPrev: prev,
      butNext: next,
      animation: animation,
      auto: false,
      interval: 3000
   });







   // function Slider(obj) {
   //    this.items = obj.items;
   //    this.butPrev = obj.butPrev;
   //    this.butNext = obj.butNext;
   //    this.auto = obj.auto || false;
   //    this.interval = obj.interval || 2000;
   //    let i = 0;
   //    let slider = this;
   //    let stop = false;
   //    this.prev = function () {
   //       move(-1);
   //    };
   //    this.next = function () {
   //       move(1);
   //    };

   //    function move(a) {
   //       slider.items[i].classList.remove('active');
   //       i += a;
   //       if (i < 0) {
   //          i = slider.items.length - 1;
   //       } else if (i >= slider.items.length) {
   //          i = 0;
   //       }
   //       slider.items[i].classList.add('active');
   //    }

   //    this.butPrev.addEventListener('click', slider.prev);
   //    this.butNext.addEventListener('click', slider.next);
   //    if (this.auto) {
   //       setInterval(slider.next, slider.interval);
   //    }
   // }





}