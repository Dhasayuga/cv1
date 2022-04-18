/*styles-line*/
var $window = $(window);
var $elem = $(".hscroll");
var $gotOutOfFrame = true

function isScrolledIntoView($elem, $window) {
  var docViewTop = $window.scrollTop();
  var docViewBottom = docViewTop + $window.height();

  var elemTop = $elem.offset().top;
  var elemBottom = elemTop + $elem.height();

  return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop) && $gotOutOfFrame);
}

function isScrolledOutView($elem, $window) {
  var docViewTop = $window.scrollTop();
  var docViewBottom = docViewTop + $window.height();

  var elemTop = $elem.offset().top;
  var elemBottom = elemTop + $elem.height();

  return ((elemBottom < docViewBottom) && (elemTop < docViewTop));
}
$(document).on("scroll", function() {
  if (isScrolledIntoView($elem, $window)) {
    $gotOutOfFrame = true;
    $elem.addClass("animate");
    $(function() {
      setTimeout(function() {
        $elem.removeClass("animate");

      }, 6000);
      });
  }
  if (isScrolledOutView($elem, $window)) {
    $gotOutOfFrame = true;
    $elem.removeClass("animate");
  }
});
/*styles-line*/

/*Running images1*/
function scrollWindow() {
  var scroll = document.querySelector('.trusted-row');

    if (scroll.offsetWidth + scroll.scrollLeft== scroll.scrollWidth) {
      var container = document.createElement("div");
      container.classList.add("trusted-column");

      var image1 = document.createElement("img");
      image1.src = images[imageIndex];

      container.appendChild(image1);

      scroll.appendChild(container);

      if (imageIndex == images.length - 1) {
        imageIndex = 0;
      } else {
        imageIndex += 1;
      }
    }
 scroll.scrollLeft += 2;
  }
function handleScroll() {
    if (scrollStatus == false) {
      startScroll();
      scrollStatus = true;
    } else {
      stopScroll();
      scrollStatus = false;
    }
  }
function startScroll() {
    timeout = setInterval(scrollWindow, 28);
    scrollStatus = true;
  }
function stopScroll() {
    clearInterval(timeout);
    scrollStatus = false;
  }
const images =  ["images/design1.png" , "images/design2.png","images/design3.png","images/design4.png","images/design1.png","images/design2.png","images/design3.png", "images/design4.png","images/design1.png","images/design2.png","images/design3.png","images/design4.png","images/design1.png",];


var scrollStatus = false;
var imageIndex = 0;
handleScroll();
document.querySelector('.trusted-row').addEventListener("click", function(){
  handleScroll();
})

/*Running images2*/
function scrollWindowNew() {
  var scrollNew = document.querySelector('.trustednew-row');

    if (scrollNew.offsetWidth + scrollNew.scrollLeft== scrollNew.scrollWidth) {
      var containerNew = document.createElement("div");
      containerNew.classList.add("trustednew-column");

      var image3 = document.createElement("img");
      image3.src = images1[imageIndexNew];

      containerNew.appendChild(image3);

      scrollNew.appendChild(containerNew);

      if (imageIndexNew == images1.length - 1) {
        imageIndexNew  = 0;
      } else {
        imageIndexNew  += 1;
      }
    }
 scrollNew.scrollLeft += 2;
  }
function handleScrollNew() {
    if (scrollStatusNew == false) {
      startScrollNew ();
      scrollStatusNew = true;
    } else {
      stopScrollNew();
      scrollStatusNew = false;
    }
  }
function startScrollNew() {
    timeoutNew = setInterval(scrollWindowNew, 15);
    scrollStatusNew = true;
  }
function stopScrollNew() {
    clearInterval(timeoutNew);
    scrollStatusNew = false;
  }
const images1 =  ["images/design1.png" , "images/design2.png","images/design3.png","images/design4.png","images/design1.png","images/design2.png","images/design3.png", "images/design4.png","images/design1.png","images/design2.png","images/design3.png","images/design4.png","images/design1.png",];


var scrollStatusNew = false;
var imageIndexNew = 0;
handleScrollNew();
document.querySelector('.trustednew-row').addEventListener("click", function(){
  handleScrollNew();
})
/*Testimonials*/

const testemonialsContainer = document.querySelector('.testimonials-container')
const testemonial = document.querySelector('.testimonial')
const userImage = document.querySelector('.user-image')
const userName = document.querySelector('.username')
const role = document.querySelector('.role')

const testimonials = [
	{
		name: "Priya",
		position: "chennai",
		photo:
			"https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=707b9c33066bf8808c934c8ab394dff6",
		text: "Love this T-shirt. It’s somehow both basic and elegant AND super cozy.Phasellus gravida ipsum neque.",
	},

	{
		name: "Jeeva",
		position: "Madurai",
		photo: "https://randomuser.me/api/portraits/women/68.jpg",
		text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus gravida ipsum neque. Lorem ipsum dolor sit amet, consectetur adipiscing",
	},
	{
		name: "Hari",
		position: "Coimbatore",
		photo: "https://randomuser.me/api/portraits/women/65.jpg",
		text: " Phasellus gravida ipsum neque.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing",
	},

];

let idx = 1;

function updateTestimonial() {
  const { name, position, photo, text } = testimonials[idx]

  testemonial.innerHTML = text
  userImage.src = photo
  userName.innerHTML = name
  role.innerHTML = position

  idx++

  if (idx > testimonials.length - 1) {
    idx = 0
  }
}

setInterval(updateTestimonial, 9200)
