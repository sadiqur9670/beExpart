
// ======================== Menu toggle ================
const navLinks = document.querySelector('#navLinks')
function showMenu(){
  navLinks.style.top = "0";
  navLinks.style.opacity= "1";


}
function hideMenu(){
  navLinks.style.top = "-100%";
  navLinks.style.opacity= "0";

}

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    dots:true,
    autoplay: true,
    autoplayTimeout: 4000,
    smartSpeed: 1000,
    responsive:{
        0:{
            items:1,
            dots:true
        },
        600:{
            items:2,
            dots:true
        },
        1000:{
            items:3
        },
        1300:{
            items:4
        }
    }
})