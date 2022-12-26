
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

let detailTabs = $('.detail-tabs');
if(detailTabs.length > 0){
  const onHoverMoveCarriage = function(num){
    let widthCarriage = detailTabs.find('li').eq(num).width();
    let offsestLeftCarriage = detailTabs.find('li').eq(num).position().left;
    $('.detail-tabs-carriage').css({width: widthCarriage+'px', left: offsestLeftCarriage+'px'});
  }
  let timeOutId;
  let curretTabs = 0;
  let timeReturn = 500;
  detailTabs.find('li').hover(
  function(){

    clearInterval(timeOutId)
    onHoverMoveCarriage($(this).index());

  
  },function(){

    timeOutId = setTimeout(function(){
      onHoverMoveCarriage(curretTabs);
    }, timeReturn);
  });

  detailTabs.find('li').on('click',function(){
    
    curretTabs = $(this).index();
    detailTabs.find('li').removeClass('active').eq(curretTabs).addClass('active');
    onHoverMoveCarriage(curretTabs);
  });

  onHoverMoveCarriage(0);


}
