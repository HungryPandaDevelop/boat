let owlMain = $('.owl-main');

owlMain.owlCarousel({
  items: 1,
  nav: true,
  dots: false,
  margin: 30
});

let owlAbout = $('.about-carousel');

owlAbout.owlCarousel({
  items: 1,
  nav: true,
  dots: false,
});

let owlDetail = $('.detail-owl');

owlDetail.owlCarousel({
  items: 5,
  nav: true,
  dots: false,
  margin:10,
  stagePadding: 155,
  loop: true
});

let owlYachtsItemImg = $('.yachts-item-img-owl');

owlYachtsItemImg.owlCarousel({
  items: 1,
  nav: false,
  dots: true,
});

let owlSecond = $('.owl-second');

owlSecond.owlCarousel({
  nav: true,
  dots: true,
  margin: 30,
  responsive:{
    0:{
      items:1,
      margin: 15
    },
    576:{
      items: 2,
      margin: 15
    },
    786:{
      items: 3,
      margin: 15
    }
  }
});



let owlDetailMain = $('.owl-detail-main');

owlDetailMain.owlCarousel({
  nav: true,
  dots: false,
  padding: 0,
  margin: 30,
  items: 1,
});


if($(window).width() < 786){
  let owlTablet = $('.owl-tablet');

  owlTablet.owlCarousel({
    dots: false,
    margin: 0,
    stagePadding: 45,
    responsive:{
      0:{
        items:1,
        margin: 15
      },
      576:{
        items: 2,
        margin: 15
      },
      786:{
        items: 4,
        margin: 15
      }
    }
  });
}

if($(window).width() < 576){
  let owlMobile = $('.owl-mobile');

  owlMobile.owlCarousel({
    dots: true,
    responsive:{
      0:{
        items:1,
        margin: 15
      },
      576:{
        items: 2,
        margin: 15
      }
    }
  });
}

let owlPartners = $('.owl-partners');

owlPartners.owlCarousel({
  dots:  false,
  // autoplay: true,
  // autoplayTimeout: 1001,
  // smartSpeed: 500,
  loop: true,
  responsive:{
    0:{
      items:2
    },
    567:{
      items: 4,
    },
    992:{
      items: 5,
    }
}
});
