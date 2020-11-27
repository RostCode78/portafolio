let pGM = {

   btnOpen: $$('.open-gallery-modal'),
   btnExit: $('.exit-gallery-modal'),
   titulo: $('.titulo-modal'),
   image: $('.img-container'),
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

   },

   exitModal: () => {

      pGM.modal.style.display = "none";
      pGM.body.style.overflow = "initial";

   }

}

mGM.start();