const gnbMenu = document.querySelector(".header_gnb_menu");
const gnbOpended = document.querySelector(".gnb_opened");
const body = document.querySelector("#bg");
const header = document.querySelector("header");
gnbMenu.addEventListener("click", function(){
  if(gnbOpended.classList.contains("display_flex")){
    gnbOpended.classList.remove("display_flex");
    header.style.background = "none";
    document.body.style.overflow = "scroll";
    header.style.zIndex = "0";
  }else{
    gnbOpended.classList.add("display_flex");
    header.style.background = "url('../img/bg_black.png') no-repeat 0 0";
    header.style.zIndex = "999";
    document.body.style.overflow = "hidden";
  }
})

var s = skrollr.init();
window.addEventListener("scroll", function(){
  console.log(scrollY);
  // if(scrollY >= 1000){
  //   $('.illust').css('display', 'none');
  // }else if(scrollY < 1000){
  //   $('.illust').css('display', 'block');
  // }
})
