const $$ = document.querySelectorAll.bind(document);
const $ = document.querySelector.bind(document);
const þ = console.log;

let pCS = {

   section: $$('.move-container-slide'),
   slide: $('#container'),
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

   }

}

mCS.start();