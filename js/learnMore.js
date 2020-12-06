let pLM = {

   /*======================*/
   open: $('.btn-more'),
   bottom: $('.mc-bottom'),
   lineOpenData: $('.line-open-data'),
   deleateMinData: $('.modal-datos-min'),
   close: $('.exit-gallery-modal')
}

let mLM = {

   start: () => {

      pLM.open.addEventListener(
         'click',
         mLM.openMax
      );

      pLM.close.addEventListener(
         'click',
         mLM.closeMax
      );

   },

   openMax: () => {

      pLM.bottom.style.height = "100%";

      setTimeout(() => {
         pLM.lineOpenData.style.left = "0%";
         pLM.deleateMinData.style.top = "15%";
         pLM.deleateMinData.style.opacity = "0";
      }, 700);

      setTimeout(() => {
         pLM.deleateMinData.style.display = "none";
      }, 1200);

   },

   closeMax: () => {

      pLM.bottom.style.height = "27%";
      pLM.lineOpenData.style.left = "-100%";
      pLM.deleateMinData.style.top = "0%";
      pLM.deleateMinData.style.opacity = "1";
      pLM.deleateMinData.style.display = "flex";

   }

}

mLM.start();