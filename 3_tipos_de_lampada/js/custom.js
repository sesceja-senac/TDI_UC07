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