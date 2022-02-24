jQuery(function($) {
    
$(".nav-trigger").click(function(){
  $("span:nth-child(1)").toggleClass('top-nav-bar');
    $("span:nth-child(2)").toggleClass('fade');
  $("span:nth-child(3)").toggleClass('bottom-nav-bar');
  //$('.container-tab').toggleClass('shrink');
    $('nav').toggleClass('open');
$(".main-fluid").toggleClass("open");

if($(".main-fluid").hasClass("open")){
$('#site-logo').css('transform', 'translateX(' + $('#main-nav').width() + 'px)' );
$(".nav-trigger").css('transform', 'translateX(' + $('#main-nav').width() + 'px)' );
$(".main-fluid").css('transform', 'translateX(' + $('#main-nav').width() + 'px)' );

console.log($('#main-nav').width());
}
else{

$('#site-logo').css('transform', 'translateX(0)');
$(".nav-trigger").css('transform', 'translateX(0)');
$(".main-fluid").css('transform', 'translateX(0)');
}
});

});