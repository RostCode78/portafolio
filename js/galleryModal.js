// WEB

let web0 = `
<div class="ic-image image-modal-0-1 move-slide"></div>
<div class="ic-image image-modal-0-2 move-slide"></div>
`;

// DESIGN

let design6 = `
<div class="ic-image image-modal-6-1 move-slide"></div>
<div class="ic-image image-modal-6-2 move-slide"></div>
<div class="ic-image image-modal-6-3 move-slide"></div>
<div class="ic-image image-modal-6-4 move-slide"></div>
<div class="ic-image image-modal-6-5 move-slide"></div>
`;

let pGM = {

   btnOpen: $$('.open-gallery-modal'),
   btnExit: $('.exit-gallery-modal'),
   getSlide: null,
   titulo: $('.titulo-modal'),
   image: $('.img-container-slide'),
   modal: $('#modal'),
   body: $('body'),
   item: 0,
   web: `
   <div class="line-modal"></div>
   <p>Desarrollo Web</p>
   `,
   design: `
   <div class="line-modal"></div>
   <p>Diseño Grafico</p>
   `,
   list: [],
   lastList: 0,
   longList: 0,
   next: $('.btn-next'),
   prev: $('.btn-prev'),
   itemModal: 0

}

let mGM = {

   start: () => {

      pGM.btnOpen.forEach( e => {

         e.addEventListener(
            'click',
            mGM.openModal
         );

      });

      pGM.btnExit.addEventListener(
         'click',
         mGM.exitModal
      );

      pGM.next.addEventListener(
         'click',
         mGM.next
      );

      pGM.prev.addEventListener(
         'click',
         mGM.prev
      );

   },

   openModal: e => {

      e.preventDefault();

      pGM.item = e.target.getAttribute("itemGM") - 1;
      pGM.modal.style.display = "flex";
      pGM.body.style.overflow = "hidden";

      switch (pGM.item) {
         case 0:
            pGM.titulo.innerHTML = pGM.web;
            pGM.image.innerHTML = web0;
         break;

         case 1:
            pGM.titulo.innerHTML = pGM.web;
         break;

         case 2:
            pGM.titulo.innerHTML = pGM.web;
         break;

         case 3:
            pGM.titulo.innerHTML = pGM.web;
         break;

         case 4:
            pGM.titulo.innerHTML = pGM.web;
         break;

         case 5:
            pGM.titulo.innerHTML = pGM.web;
         break;

         case 6:
            pGM.titulo.innerHTML = pGM.design;
            pGM.image.innerHTML = design6;
         break;

         case 7:
            pGM.titulo.innerHTML = pGM.design;
         break;

         case 8:
            pGM.titulo.innerHTML = pGM.design;
         break;

         case 9:
            pGM.titulo.innerHTML = pGM.design;
         break;

         case 10:
            pGM.titulo.innerHTML = pGM.design;
         break;
      
         default:
            pGM.titulo.innerHTML = pGM.design;
         break;
      }

      pGM.getSlide = $$('.move-slide');

      pGM.getSlide.forEach( e => {

         pGM.list.push(e);

      });

      pGM.lastList = pGM.list.length;
      pGM.longList = pGM.list.length - 1;

   },

   exitModal: () => {

      pGM.modal.style.display = "none";
      pGM.body.style.overflow = "initial";

      pGM.list = pGM.list.splice(pGM.lastList);
      pGM.itemModal = 0;
      pGM.image.style.left = '0%';

   },

   next: () => {

      if ( pGM.itemModal == pGM.longList ) {

         pGM.itemModal = 0;

      } else {

         pGM.itemModal++;

      }

      mGM.moveSlide(pGM.itemModal);

   },

   prev: () => {

      if ( pGM.itemModal == 0 ) {

         pGM.itemModal = pGM.longList;

      } else {

         pGM.itemModal--;

      }

      mGM.moveSlide(pGM.itemModal);  
      
   },

   moveSlide: item => {
      
      pGM.image.style.left = ` ${ item * -100 }% `;

   }

}

mGM.start();