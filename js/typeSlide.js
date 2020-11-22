let pTS = {

   btn: $$(".btn-type-slide"),
   line: $(".line-type")

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

      } else if ( e.target == pTS.btn[1] ) {

         pTS.line.style.left = "50%";

      }

   }

}

mTS.start();