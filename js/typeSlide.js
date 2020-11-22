let pTS = {

   btn: $$(".btn-type-slide"),
   slide: $(".container-gallery-slide"),
   line: $(".line-type"),
   item: 0

}

let mTS = {

   start: () => {

      pTS.btn.forEach( e => {

         e,addEventListener(
            'click',
            mTS.moveSlide
         );

      });

   },

   moveSlide: e => {

      if ( e.target == pTS.btn[0] ) {

         pTS.line.style.left = "0%";
         pTS.item = e.target.getAttribute("itemGallery") - 1;
         pTS.slide.style.left = ` ${ pTS.item * -100 }% `;

      } else if ( e.target == pTS.btn[1] ) {

         pTS.line.style.left = "50%";
         pTS.item = e.target.getAttribute("itemGallery") - 1;
         pTS.slide.style.left = ` ${ pTS.item * -100 }% `;

      }

   }

}

mTS.start();