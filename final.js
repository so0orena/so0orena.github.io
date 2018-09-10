slideIndex = 1;

var $window = $(window);
var $elem = $("#products")
function isScrolledIntoView($elem, $window) {
  var docViewTop = $window.scrollTop();
  var docViewBottom = docViewTop + $window.height();

  var elemTop = $elem.offset().top;
  var elemBottom = elemTop + $elem.height();
  if(elemTop == docViewBottom) console.log("fire")
  return (docViewBottom - elemTop > 30);
}
$(document).on("scroll", function () {
  if (isScrolledIntoView($elem, $window)) {
      
    document.getElementById("product-card").classList.add("play-animation-card");
    startAnimation();
  }
});

function whichTransitionEvent(){
    var t,
        el = document.createElement("fakeelement");
  
    var transitions = {
      "transition"      : "transitionend",
      "OTransition"     : "oTransitionEnd",
      "MozTransition"   : "transitionend",
      "WebkitTransition": "webkitTransitionEnd"
    }
  
    for (t in transitions){
      if (el.style[t] !== undefined){
        return transitions[t];
      }
    }
  }
  
  var transitionEvent = whichTransitionEvent();
  var cards = document.getElementsByClassName("animation-card")

  let i=0;
function startAnimation()
{
    for(i=0; i < cards.length ; i++){
        let card = cards[i]
        if(i < cards.length -1){
            
            card.addEventListener(transitionEvent,animationEnd.bind(this,i),false);
        }
    
    }
    
    
    
}
function animationEnd(n){
    cards[n+1].classList.add("play-animation-card");
}

function openNav() {
    document.getElementById("myPopup").classList.add("overlay-show");
  }
  function closeNav() {
    document.getElementById("myPopup").classList.remove("overlay-show");
      
  }

 
function currentSlider(n){
    slideIndex = n;
    showSlides(slideIndex);
}

function plusSlides(i){
    showSlides( slideIndex += i);
}

function showSlides(n){
    var i;
    var slides = document.getElementsByClassName("image-wrapper")
    var image = document.getElementById("imageSlide")
     
    if (n > slides.length)
    {
        n = 1;
        slideIndex =1;
    }
    if( n < 1 )
     {
         n = slides.length;
         slideIndex = slides.length;
     }
    
    
    image.src=slides[n-1].childNodes[1].src
}




function ScrollToElement($id,element) {
  var $window = $(window);
  var $elem = $($id);
  var navItem = document.getElementsByClassName("nav-item");
  for(var x=0; x< navItem.length;x++)
    {
        navItem[x].classList.remove("active");

    }
  element.classList.add("active");
  var elemTop = $elem.offset().top;
  window.scroll({
    top: elemTop, 
    left: 0, 
    behavior: 'smooth' 
  });

}
var blogImgIndex = 0;
carousel();
function carousel(){
  var i = 0;
  var x = document.getElementsByClassName("slides");
  for ( i =0 ; i<x.length ; i++)
  {
    x[i].style.display="none";
  }
  blogImgIndex++;
  if(blogImgIndex > x.length){blogImgIndex=1;}
  x[blogImgIndex-1].style.display="block";
  setTimeout(carousel,2500);

}

