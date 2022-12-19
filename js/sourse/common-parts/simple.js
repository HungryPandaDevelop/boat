
var st = 0;
window.addEventListener('scroll', function (e) {

  st = $(this).scrollTop();

  if(st > 0){
    $('header').addClass('stick');
  }
  else{
    $('header').removeClass('stick');
  }

});   



// $('.dropdown-link').on('click',function(e){
//   e.preventDefault();
//   $(this).toggleClass('dropdown-link--active');
//   $('.header-menu-hidden-wrapper').toggleClass('active');
// });

$('.faq-head').on('click',function(){
  $(this).parent().toggleClass('faq-item--active');
});


$('.question-home-tabs span').on('click',function(){
  $('.question-home-tabs span').removeClass('active');
  $(this).addClass('active');

  $('.question-home-item').removeClass('active');
  $('.question-home-item').eq($(this).index()).addClass('active');
});


document.addEventListener( 'wpcf7mailsent', function( event ) {
  console.log('mail sent OK');
  // Stuff
  setTimeout(function(){
    $('.element-show').removeClass('active');
  },1500);
  
}, false ); 




$('.warning-show').on('click',function(e){
  e.preventDefault();
  $(this).parents('.warning-item').addClass('active');
}); 
$('.warning-close').on('click',function(){
  $(this).parents('.warning-item').removeClass('active');
}); 

$('.sidebar-search-item h3, .sidebar-search-item i').on('click',function(){
  $(this).parents('.sidebar-search-item').toggleClass('active');
});