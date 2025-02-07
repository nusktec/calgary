;(function($){
    $(document).ready(function(){

//pricing 
    let active_button = $('.dizo-active-button');
    let inactive_button = $('.dizo-inactive-button');
    let active_content = $('.dizo-active-content');
    let inactive_content = $('.dizo-inactive-content');

inactive_button.on('click', showContent);
active_button.on('click', hideContent);

function showContent() {
    inactive_button.addClass('dizo_active');
    active_button.removeClass('dizo_active');
    
  
    inactive_content.attr('style', 'display:block !important');
    active_content.attr('style', 'display:none');
}

function hideContent() {
    inactive_button.removeClass('dizo_active');
	active_button.addClass('dizo_active');
	
   
    inactive_content.attr('style', 'display:none !important');
    active_content.attr('style', 'display:block !important');
}

/*=============== Ecommerce site content changing =============
==============================================================*/
let tabButton = $(".dipro_ecom_tab_button");
let tabContent = $(".dipro_ecom_tab_content");
$(tabButton).each(function(index){
    $(this).attr('data-tab-index',index);
});

$(tabContent).each(function(index){
    $(this).attr('data-tab-index',index);
    if(index !==0){
        $(this).css('display', 'none');    
    }
});


/*================= Active tab Content ================*/
let previousActiveTabIndex = 0;

$(tabButton).on('click keypress', function (event) {
        // event.which === 13 means the "Enter" key is pressed

    if ((event.type === "keypress" && event.which === 13) || event.type === "click") {
        
        let tabClicked = $(this).data("tab-index");
            
        if(tabClicked != previousActiveTabIndex) {
            $(tabContent).each(function () {
                if($(this).data("tab-index") == tabClicked) {
                    $(tabContent).hide();
                    $(this).show();
                    previousActiveTabIndex = $(this).data("tab-index");
                    return;
                }
            });
        }    
    }
});


/*================= Active tab Button ================*/
let previousButtonTabIndex = 0;
$(tabButton).on("click", function(){
    let tabclicked =$(this).data("tab-index");
   if(tabclicked != previousButtonTabIndex){
       $(tabButton).each(function(){
            if($(this).data("tab-index") == tabclicked){
                $(tabButton).removeClass("divipro_ecom_tab_active");
                $(this).addClass("divipro_ecom_tab_active");
                previousButtonTabIndex = $(this).data("tab-index");
                return;
            }   
        });
        
    }
   
});
        



//video Popup
$('.dizo_home_2_icon').magnificPopup({
  items: {
      src: '.dizo_video_popup',
      type: 'inline'
  }
});

//Form popup

$('.dizo_popup_button').magnificPopup({
  items: {
      src: '.dizo_popup_form',
      type: 'inline'
  }
});
$('.dizo_popup_button_menu').magnificPopup({
  items: {
      src: '.dizo_popup_form_menu',
      type: 'inline'
  }
});

/*================================================================================
================= Elements page call to action popup form ========================
==================================================================================*/

// Design 1
$('.dizo_popup_button_1').magnificPopup({
  items: {
      src: '.dizo_popup_form_1',
      type: 'inline'
  }
});

// Design 2
$('.dizo_popup_button_2').magnificPopup({
  items: {
      src: '.dizo_popup_form_2',
      type: 'inline'
  }
});

// Design 3
$('.dizo_popup_button_3').magnificPopup({
  items: {
      src: '.dizo_popup_form_3',
      type: 'inline'
  }
});

// Design 4
$('.dizo_popup_button_4').magnificPopup({
  items: {
      src: '.dizo_popup_form_4',
      type: 'inline'
  }
});

// Design 5
$('.dizo_popup_button_5').magnificPopup({
  items: {
      src: '.dizo_popup_form_5',
      type: 'inline'
  }
});

/*======================================== End of Element page popup form design ========================================*/

//Map Popup
$('.dizo_map_button').magnificPopup({
  items: {
      src: '.dizo_map_popup',
      type: 'inline'
  }
});


/*================================================================================
============================ Carousel Design ======================================
==================================================================================*/

/*====== Multicolumn carousel design=====*/

var multiColumnSwiper = new Swiper(".dipro_multicolumnSwiper", {
    pagination: {
        el: ".swiper-pagination-multi",
        clickable: true,
    },
    autoplay: {
        delay: 3000,
        pauseOnMouseEnter:true    
    },
        
    breakpoints: {
    // when window width is >= 480px
    480: {
      slidesPerView: 1,
      slidesPerColumn: 1,
      spaceBetween: 20
    },
    // when window width is >= 767px
    767: {
      slidesPerView: 2,
      slidesPerColumn: 2,
      spaceBetween: 20
    },
    // when window width is >= 981px
    981: {
      slidesPerView: 3,
      slidesPerColumn: 2,
      spaceBetween: 30
    }
  }
});

/*================== Flip Carousel design ============*/ 

var flipSwiper = new Swiper(".dipro_flip_effect", {
    effect: "flip",
    grabCursor: true,
    autoplay: {
        delay: 3000,
        pauseOnMouseEnter:true    
    },
    pagination: {
        el: ".swiper-pagination-flip",
         clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});
      
/*================== Slides Per View Carousel design ============*/ 

var slidesPerViewSwiper = new Swiper(".dipro_slides_per_view", {
    pagination: {
        el: ".swiper-pagination-slidesperview",
        clickable: true,
    },
    autoplay: {
        delay: 2000,
        pauseOnMouseEnter:true    
    },
    loop: true,
    autoHeight: true,
    slidesPerView: "auto",
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
        
    breakpoints: {
    // when window width is >= 480px
    480: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    // when window width is >= 767px
    767: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    // when window width is >= 981px
    981: {
      slidesPerView: 3,
      spaceBetween: 30
    }
  }
});
/*========================== Group Slides =================*/
var swiper = new Swiper(".dipro_group_slides", {
        effect: "cards",
        grabCursor: true,
       
      });
      
/*================== Cube effect Carousel design ============*/

var cubeswiper = new Swiper(".dipro_cube_effect", {
    effect: "cube",
    grabCursor: true,
    cubeEffect: {
        shadow: true,
        slideShadows: true,
        shadowOffset: 20,
        shadowScale: 0.94,
    },
    pagination: {
        el: ".swiper-pagination-cube",
    },
});

/*================== Coverflow Carousel design ============*/

var coverFlowswiper = new Swiper(".dipro_coverflow_effect_carousel", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
        rotate: 20,
        stretch: 0,
        depth: 200,
        modifier: 1,
        slideShadows: true,
    },
    pagination: {
         el: ".swiper-pagination-coverflow",
    },
});

/*================== Logo Carousel design ============*/ 

var logoCarousel = new Swiper(".dipro_logo_carousel", {
    pagination: {
        el: ".swiper-pagination-logoCarousel",
        clickable: true,
    },
    autoplay: {
        // delay: 2000,
        pauseOnMouseEnter:true    
    },
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
        
    breakpoints: {
    // when window width is >= 480px
    480: {
      slidesPerView: 3,
      spaceBetween: 10
    },
    // when window width is >= 767px
    767: {
      slidesPerView: 4,
      spaceBetween: 15
    },
    // when window width is >= 981px
    981: {
      slidesPerView: 4,
      spaceBetween: 20
    }
  }
});  
  
  /*==== Vertical menu class add =========*/
  
    // var vMenuFound = $('.et-l--header .et_builder_inner_content').children('.divipro_vertical_menu');
    // var classFound = $('.et_pb_section').hasClass('divipro_vertical_menu');
    
    // console.log(classFound);
    
    // if(classFound){
    // $('body').addClass('divipro_vertical');    
    // }
    
    
    
/*============ Typing effect =================*/ 
var typed = new Typed('#typed', {
  stringsElement: '#typed-strings',
  typeSpeed: 30,
  backSpeed: 20,
  smartBackspace: true, // this is a default
  loop: true
});
    
});
})(jQuery);