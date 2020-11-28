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
   moveSlide: null,
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
`

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

      pGM.moveSlide = $$('.move-slide');

      pGM.moveSlide.forEach( e => {

         þ(e);

      })

   },

   exitModal: () => {

      pGM.modal.style.display = "none";
      pGM.body.style.overflow = "initial";

   }

}

mGM.start();