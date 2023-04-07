console.clear();

// $(window).scrollTop(9999);

function topbarHover() {
  $(".top-bar__menu > ul > li > a").mouseenter(function () {
    $this = $(this);
    $this.children(".en").addClass("opacity-0");
    $this.children(".ko").removeClass("opacity-0");
  });

  $(".top-bar__menu > ul > li > a").mouseleave(function () {
    $this = $(this);
    $this.children(".en").removeClass("opacity-0");
    $this.children(".ko").addClass("opacity-0");
  });
}

// 슬라이더

function SliderBanner() {
  var bullet = [
    "복숭아 신메뉴 출시",
    "피스타치오 & 망고 신메뉴 출시",
    "베스트 콤비네이션"
  ];
  var swiper = new Swiper(".banner .swiper-container", {
    // Optional parameters
    loop: true,
    speed: 550,

    pagination: {
      el: ".banner .swiper-pagination",
      clickable: true,
      renderBullet: function (index, className) {
        return (
          '<div class="' +
          className +
          '"><span>' +
          bullet[index] +
          "</span></div>"
        );
      }
    },

    autoplay: {
      delay: 5000
    },

    navigation: {
      nextEl: ".banner .swiper-button-next",
      prevEl: ".banner .swiper-button-prev"
    },

    scrollbar: {
      el: ".banner .swiper-scrollbar"
    }
  });
}

function SliderSection() {
  const swiper = new Swiper(".second__slide .swiper-container", {
    loop: true,
    speed: 800,

    pagination: {
      el: ".second__slide .swiper-pagination"
    },

    autoplay: {
      delay: 5000
    },

    navigation: {
      nextEl: ".second__slide .swiper-button-next",
      prevEl: ".second__slide .swiper-button-prev"
    }
  });
}


$(".tea-recipe__tab > div").click(function () {
  let $this = $(this);
  $this.addClass("recipe-tab-active");
  $this.siblings(".recipe-tab-active").removeClass("recipe-tab-active");

  let $tab_Id = $this.attr("id");
  // console.log($this.attr("id"));

  $(".tea-recipe__" + $tab_Id).removeClass("opacity-0 invisible");
  $(".tea-recipe__" + $tab_Id).siblings().addClass("opacity-0 invisible");
});


function QuickMenuHover() {
  $(".quick-menu > img").mouseenter(function () {
    $(".quick-menu > img").attr("src", "https://www.gong-cha.co.kr/view/gongcha/images/brand/quick_img_on.png");
  });
  $(".quick-menu > img").mouseleave(function () {
    $(".quick-menu > img").attr("src", "https://www.gong-cha.co.kr/view/gongcha/images/brand/quick_img_off.png");
  });
}


topbarHover();
SliderBanner();
SliderSection();
QuickMenuHover();