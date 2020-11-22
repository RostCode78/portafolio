const $$ = document.querySelectorAll.bind(document);
const $ = document.querySelector.bind(document);
const þ = console.log;

let pCS = {

   container: $('#container'),
   slide: $('.container-slide'),
   btn: $$('.btn-slide'),
   item: 0

}

let mCS = {

   start: () => {

      pCS.btn.forEach( e => {

         e.addEventListener(
            'click',
            mCS.moveContainerSlide
         )

      });

   },

   moveContainerSlide: e => {

      pCS.item = e.target.getAttribute("item") - 1;
      pCS.slide.style.left = ` ${ pCS.item * -100 }% `;
      pCS.container.style.transition = ".4s";

      if( pCS.item == 2 ) {

         pCS.container.style.height = "1188px";

      } else {

         pCS.container.style.height = "792px";

      }

   }

}

mCS.start();