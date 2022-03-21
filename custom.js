jQuery(function($) {




var templateUrl = object_name.templateUrl;
  var jours = {
      container: document.getElementById('lottieload'),
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: templateUrl +'/data.json'
    }

anim = bodymovin.loadAnimation(jours);
anim.setSpeed(0.6);
  anim.addEventListener("DOMLoaded", function(e) {
   console.log("lottie is loaded");
setTimeout(function() {
   
 $("body").removeClass("loading"); 
  $("body").addClass("loaded"); 
anim.destroy();

}, 4000);




  });




gsap.registerPlugin(ScrollTrigger);

  const pageContainer = document.querySelector(".smooth-scroll");
  pageContainer.setAttribute("data-scroll-container", "");

  const scroller = new LocomotiveScroll({
    el: pageContainer,
    smooth: true,
    getDirection: true
  });

  scroller.on("scroll", function (t) {
    document.documentElement.setAttribute("data-direction", t.direction);
  });

  scroller.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy(pageContainer, {
    scrollTop(value) {
      return arguments.length
        ? scroller.scrollTo(value, 0, 0)
        : scroller.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return {
        left: 0,
        top: 0,
        width: window.innerWidth,
        height: window.innerHeight
      };
    },
    pinType: pageContainer.style.transform ? "transform" : "fixed"
  });






 $(".nav-trigger").click(function(){


  $("span:nth-child(1)").toggleClass('top-nav-bar');
    $("span:nth-child(2)").toggleClass('fade');
  $("span:nth-child(3)").toggleClass('bottom-nav-bar');

  //$('.container-tab').toggleClass('shrink');
//$(".main-fluid").toggleClass("open");
//$("#site-logo").toggleClass("open");



if($("#main-nav").hasClass("open")){

$("#main-nav").css('transform', "translateX(-100%)");
$(".nav-trigger").css('transform', 'translateX(0)');
$("#main-nav").removeClass("open");






//$('#site-logo').css('transform', 'translateX(' + $('#main-nav').width() + //'px)' );

//$(".main-fluid").css('transform', 'translateX(' + $('#main-nav').width() + 'px)' );

//console.log($('#main-nav').width());
}
else{

$("#main-nav").css('transform', "translateX(0)");
$(".nav-trigger").css('transform', 'translateX(' + $('#main-nav').width() + 'px)' );

$("#main-nav").addClass("open");


//$('#site-logo').css('transform', 'translateX(0)');

//$(".main-fluid").css('transform', 'translateX(0)');
}
});




if(document.getElementById("countdown")) {

 const second = 1000,
        minute = second * 60,
        hour = minute * 60,
        day = hour * 24;

  //I'm adding this section so I don't have to keep updating this pen every year :-)
  //remove this if you don't need it
  let today = new Date(),
      dd = String(today.getDate()).padStart(2, "0"),
      mm = String(today.getMonth() + 1).padStart(2, "0"),
      yyyy = today.getFullYear(),
      nextYear = yyyy + 1,
      dayMonth = "03/15/",
      birthday = dayMonth + yyyy;
  
  today = mm + "/" + dd + "/" + yyyy;
  if (today > birthday) {
    birthday = dayMonth + nextYear;
  }
  //end
  
  const countDown = new Date(birthday).getTime(),
      x = setInterval(function() {    

        const now = new Date().getTime(),
              distance = countDown - now;

        document.getElementById("days").innerText = Math.floor(distance / (day)),
          document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
          document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
          document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);

        //do something later when date is reached
        if (distance < 0) {
          document.getElementById("headline").innerText = "Shop Now";
          document.getElementById("countdown").style.display = "none";
          document.getElementById("end-content").style.display = "block";
          clearInterval(x);
        }
        //seconds
      }, 0)

}

});