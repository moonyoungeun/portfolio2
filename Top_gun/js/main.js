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



const article01 = document.querySelector(".color_block");
const article02 = document.querySelector(".article02");


var s = skrollr.init();
window.addEventListener("scroll", function(){
  console.log(scrollY);
  if(scrollY >= 0 && scrollY <= 10000){
    article01.classList.remove("position_relative");
    article01.classList.add("position_fixed");
    article01.style.width = "2000vw";
  }else{
    article01.classList.remove("position_fixed");
    article01.classList.add("position_relative");
    article01.style.width = "100vw";
  }
  if(scrollY >= 10000 && scrollY <= 20000){
    article02.classList.remove("position_relative");
    article02.classList.add("position_fixed");
  }else{
    article02.classList.remove("position_fixed");
    article02.classList.add("position_relative");
  }
 
})


