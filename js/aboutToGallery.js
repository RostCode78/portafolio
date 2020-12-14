let pATG = {

   btn: $('.about-to-gallery')

}

let mATG = {

   start: () => {

      pATG.btn.addEventListener(
         'click',
         mATG.go
      );

   },

   go: () => {
      pCS.slide.style.left = ` ${ 1 * -100 }% `;
      pCS.container.style.height = "1488px";
      pCS.container.style.transition = ".4s";
   }

}

mATG.start();