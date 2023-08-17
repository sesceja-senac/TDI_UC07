// var FXManager = {
//     snd_certo : new Audio("objetos/snd/acerto.mp3"),
//     snd_erro : new Audio("objetos/snd/erro.mp3"),
//     snd_aplauso : new Audio("objetos/snd/aplauso.mp3")
// }

// $(".menu label.menu-toggle").click(function(){
//     $(".bg-fundo").toggleClass("mod");
//     $('body').toggleClass('overflow');
//     $('.menu').toggleClass('fade-check');
// });

// $(".bg-fundo").click(function(){
//     $(this).removeClass("mod");
//     $('body').removeClass('overflow');
//     $('.menu').removeClass('fade-check');
// });

// $(".fundo-item").click(function(){
//     $(".bg-fundo").removeClass("mod");
//     $('body').removeClass('overflow');
//     $('.menu').removeClass('fade-check');
// });

// //-------- BOTÕES EXERCÍCIO --------\\
// $(".btn-exercicio01").click(function(){
//     $(this).addClass("resposta-errada");
//     FXManager.snd_erro.play();
// });
// $(".btn-exercicio02").click(function(){
//     $(this).addClass("resposta-certa");
//     FXManager.snd_certo.play();
// });
// $(".btn-exercicio03").click(function(){
//     $(this).addClass("resposta-certa");
//     FXManager.snd_certo.play();
// });
// $(".btn-exercicio04").click(function(){
//     $(this).addClass("resposta-errada");
//     FXManager.snd_erro.play();
// });
// $(".btn-exercicio05").click(function(){
//     $(this).addClass("resposta-certa");
//     FXManager.snd_certo.play();
// });
// $(".btn-exercicio06").click(function(){
//     $(this).addClass("resposta-certa");
//     FXManager.snd_certo.play();
// });
// $(".btn-exercicio07").click(function(){
//     $(this).addClass("resposta-certa");
//     FXManager.snd_certo.play();
// });




// window.addEventListener('load', function(){  
//     $('.bts_exemplo').on('click', function(){
//         $(this).toggleClass('ativo');
//     })
//   })
  
//   $(function() {
//     $(".card").click(function() {
//       if ($(this).hasClass("exibe-frente")) {
//         $(this)
//           .children()
//           .first()
//           .hide();
//         $(this)
//           .children()
//           .last()
//           .show();
//         $(this).removeClass("exibe-frente");
//       } else {
//         $(".card .verso").hide();
//         $(".card .frente").show();
//         $(this).addClass("exibe-frente");
//       }
//     });
//   });
  
//   $( document ).ready(function() {
//     $(".card .verso").hide();
//   });
  
//   window.onscroll = function() {myFunction()};
  
//   function myFunction() {
//     var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
//     var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
//     var scrolled = (winScroll / height) * 100;
//     document.getElementById("myBar").style.width = scrolled + "%";
//   }
  

 $(".btoMenu").click(function (){
    $(".btoMenu").removeClass("ativo")
    $(this).addClass("ativo")
  })

  
  window.addEventListener("load",function(){
    $(".btoMenu").click(function (e){
      e.preventDefault()
      console.log($($(this).attr("href")).position().top)
      let topo=($($(this).attr("href")).position().top)-100
     window.scrollTo(0,topo)

  })
})
  
