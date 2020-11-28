let pMS = {
   
   slide: $('.img-container-slide'),
   moveSlide: $$('.move-slide'),
   next: $('.btn-next'),
   prev: $('.btn-prev'),
   longItems: 0,
   list: [],
   item: 0

}

let mMS = {

   start: () => {

      pMS.moveSlide.forEach( e => {

         pMS.list.push(e);

      });

      pMS.next.addEventListener(
         'click',
         mMS.next
      );

      pMS.prev.addEventListener(
         'click',
         mMS.prev
      );

      pMS.longItems = pMS.list.length - 1;

   },

   next: () => {

      if ( pMS.item == pMS.longItems ) {

         pMS.item = 0;

      } else {

         pMS.item++;

      }

      mMS.moveSlide(pMS.item);

   },

   prev: () => {

      if ( pMS.item == 0 ) {

         pMS.item = pMS.longItems;

      } else {

         pMS.item--;

      }

      mMS.moveSlide(pMS.item);  
      
   },

   moveSlide: item => {
      
      pMS.slide.style.left = ` ${ item * -100 }% `;

   }

}

mMS.start();