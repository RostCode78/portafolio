let pMS = {

   slide: $('.img-container-slide'),
   next: $('.btn-next'),
   prev: $('.btn-prev'),
   item: 0

}

let mMS = {

   start: () => {

      

      pMS.next.addEventListener(
         'click',
         mMS.next
      );

      pMS.prev.addEventListener(
         'click',
         mMS.prev
      );

   },

   next: () => {
      þ('NEXT')
   },

   prev: () => {
      þ("PREV")
   }

}

mMS.start();