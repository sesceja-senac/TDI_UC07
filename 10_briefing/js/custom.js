var FXManager = {
    snd_certo : new Audio("objetos/snd/acerto.mp3"),
    snd_erro : new Audio("objetos/snd/erro.mp3"),
    snd_aplauso : new Audio("objetos/snd/aplauso.mp3")
}

$(".menu label.menu-toggle").click(function(){
    $(".bg-fundo").toggleClass("mod");
    $('body').toggleClass('overflow');
    $('.menu').toggleClass('fade-check');
});

$(".bg-fundo").click(function(){
    $(this).removeClass("mod");
    $('body').removeClass('overflow');
    $('.menu').removeClass('fade-check');
});

$(".fundo-item").click(function(){
    $(".bg-fundo").removeClass("mod");
    $('body').removeClass('overflow');
    $('.menu').removeClass('fade-check');
});

//-------- BOTÕES EXERCÍCIO --------\\
$(".btn-exercicio01").click(function(){
    $(this).addClass("resposta-errada");
    FXManager.snd_erro.play();
});
$(".btn-exercicio02").click(function(){
    $(this).addClass("resposta-certa");
    FXManager.snd_certo.play();
});
$(".btn-exercicio03").click(function(){
    $(this).addClass("resposta-certa");
    FXManager.snd_certo.play();
});
$(".btn-exercicio04").click(function(){
    $(this).addClass("resposta-errada");
    FXManager.snd_erro.play();
});
$(".btn-exercicio05").click(function(){
    $(this).addClass("resposta-certa");
    FXManager.snd_certo.play();
});
$(".btn-exercicio06").click(function(){
    $(this).addClass("resposta-certa");
    FXManager.snd_certo.play();
});
$(".btn-exercicio07").click(function(){
    $(this).addClass("resposta-certa");
    FXManager.snd_certo.play();
});






//subir pagina ao expandir um painel
$('.collapse').on('shown.bs.collapse', function () {               
    $('html, body').animate({scrollTop:$(this).offset().top-120},500);
  });
  
  
  
  // Animação de scrolling
  window.addEventListener('load', function(){
    console.log('iniciando no load')
  })
  
  // animação scroll no menu
  $('.indiceLista a').on('click', function() {
    $("html, body").animate({scrollTop: $('#'+$(this).data('section')).offset().top-80}, 800);
  });
  
  var alturas = {};
  $('.ancora').each(function () {
    alturas[$(this).prop('id')] = $(this).offset().top; 
  });
  
  $(window).on('scroll', function() {
    for(var seccao in alturas) {
      if($(window).scrollTop() >= alturas[seccao]) {
        $('.indiceLista a').removeClass('active'); 
        $('.indiceLista a[data-section="' +seccao+ '"]').addClass('active'); 
      }
    }
  });
  
  
  $(function() {
    $(window).scroll(function(){
      var topo = $('#topo').height(); // altura do topo
      var scrollTop = $(window).scrollTop(); // qto foi rolado a barra
      var tamPagina = $(document).height(); // altura da página
        
      if(scrollTop > topo){
        $('#scrollSpyNav').css({'top' : 0});
      }else{
        $('#scrollSpyNav').css({'top' : 100});
      }               
    });
  });