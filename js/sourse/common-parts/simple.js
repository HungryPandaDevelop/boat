
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



$('.dropdown-link').on('click',function(e){
  e.preventDefault();
  $(this).toggleClass('dropdown-link--active');
  $('.header-menu-hidden-wrapper').toggleClass('active');
});

$('.offer-tabs li').on('click',function(){
  $('.offer-tabs li').removeClass('active');
  $(this).addClass('active');

  $('.market-tabs-item').removeClass('market-tabs-item--active');
  $('.market-tabs-item').eq($(this).index()).addClass('market-tabs-item--active');
});

document.addEventListener( 'wpcf7mailsent', function( event ) {
  console.log('mail sent OK');
  // Stuff
  setTimeout(function(){
    $('.element-show').removeClass('active');
  },1500);
  
}, false ); 


$('.range').on('change input', function () {
  setRangeNum('.range-slider-container', '.range-num', $(this));
});

let minGap = 6;



function setRangeNum(wrap, num, thisEl){

  let offsetLeftRange = (100/thisEl.attr('max'))*thisEl.val();
  let rangeNum = thisEl.parents(wrap).find(num);

  console.log(thisEl.val(), rangeNum.attr('data-name')); //rangeNum

  rangeNum.html(thisEl.val());
  rangeNum.css({left: offsetLeftRange+'%',transform: 'translateX(-'+offsetLeftRange+'%)'});
}



$('.range-sliders-container').each(function(){

  let sliderOne = $(this).find('.slider-1');
  let sliderTwo = $(this).find('.slider-2');

  sliderOne.on('change input', function () {
    if(parseInt(sliderTwo.val()) - parseInt(sliderOne.val()) <= minGap){
      sliderOne.val(parseInt(sliderTwo.val()) - minGap);
    }
    setRangeNum('.range-sliders-container', '.range-num-1', $(this));
  });

  sliderTwo.on('change input', function () {
    if(parseInt(sliderTwo.val()) - parseInt(sliderOne.val()) <= minGap){
      sliderTwo.val(parseInt(sliderOne.val()) + minGap);
    }
  
    setRangeNum('.range-sliders-container', '.range-num-2', $(this));
  });

  setRangeNum('.range-sliders-container', '.range-num-1', $(this).find('.slider-1'));
  setRangeNum('.range-sliders-container', '.range-num-2', $(this).find('.slider-2'));





})