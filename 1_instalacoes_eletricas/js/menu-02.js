// -> window.location.search

var pageNo = window.location.search;
var btns = $('.menu-btn');
if(pageNo=="?page=1"){
    $('.menu-btn-1').addClass('ativo')
} else if(pageNo=="?page=2"){
    $('.menu-btn-2').addClass('ativo')
} else if(pageNo=="?page=3"){
    $('.menu-btn-3').addClass('ativo')
} else if(pageNo=="?page=4"){
    $('.menu-btn-4').addClass('ativo')
} else if(pageNo=="?page=5"){
    $('.menu-btn-5').addClass('ativo')
} else if(pageNo=="?page=6"){
    $('.menu-btn-6').addClass('ativo')
} else if(pageNo=="?page=7"){
    $('.menu-btn-8').addClass('ativo')
}
 
$('.mobile-menu-btn').click(function(){
    if($('.menu-links').hasClass('showing')){
        $('.menu-links').removeClass('showing')
    } else {
        $('.menu-links').addClass('showing')
    }
})