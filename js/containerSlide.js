const $$ = document.querySelectorAll.bind(document);
const $ = document.querySelector.bind(document);
const þ = console.log;

let pCS = {

   section: $$('.move-container-slide'),
   slide: $('#container'),
   btn: $$('.list-btn'),
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

      þ(e.target);

   }

}

mCS.start();