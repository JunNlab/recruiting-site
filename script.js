$(function(){
  $('.toggle-wrapper').click(function() {
  if($(".ac_menu").hasClass('open')) { 
    $(".ac_menu").removeClass('open');
    $(".ac_menu").slideUp();
  } else {
    $(".ac_menu").addClass('open'); 
    $(".ac_menu").slideDown();
  }
});
});

const accordionItemHeaders = document.querySelectorAll(".accordion-item-header");

accordionItemHeaders.forEach(accordionItemHeader => {
    accordionItemHeader.addEventListener("click", event => {
        accordionItemHeader.classList.toggle("active");
        const accordionItemBody = accordionItemHeader.nextElementSibling;
        if(accordionItemHeader.classList.contains("active")) {
            accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
        }
        else {
            accordionItemBody.style.maxHeight = 0;
        }
    });
}); 

$(function(){
  $(".img-seminar1 img:not(:first-child)").hide();
  setInterval(function() {
    $(".img-seminar1 img:first-child").fadeOut("slow").next("img").fadeIn("slow").end().appendTo(".img-seminar1");
  },5000);
});

$(function(){
  $(".img-seminar2 img:not(:first-child)").hide();
  setInterval(function() {
    $(".img-seminar2 img:first-child").fadeOut("slow").next("img").fadeIn("slow").end().appendTo(".img-seminar2");
  },5000);
});

$(function(){
  $(".img-seminar3 img:not(:first-child)").hide();
  setInterval(function() {
    $(".img-seminar3 img:first-child").fadeOut("slow").next("img").fadeIn("slow").end().appendTo(".img-seminar3");
  },5000);
});

$(function(){
  $(".img-seminar4 img:not(:first-child)").hide();
  setInterval(function() {
    $(".img-seminar4 img:first-child").fadeOut("slow").next("img").fadeIn("slow").end().appendTo(".img-seminar4");
  },5000);
});
$(function(){
  $(".img-seminar5 img:not(:first-child)").hide();
  setInterval(function() {
    $(".img-seminar5 img:first-child").fadeOut("slow").next("img").fadeIn("slow").end().appendTo(".img-seminar5");
  },5000);
});

$(function(){
  $(".img-seminar6 img:not(:first-child)").hide();
  setInterval(function() {
    $(".img-seminar6 img:first-child").fadeOut("slow").next("img").fadeIn("slow").end().appendTo(".img-seminar6");
  },5000);
});

$(function(){
  $(".img-seminar7 img:not(:first-child)").hide();
  setInterval(function() {
    $(".img-seminar7 img:first-child").fadeOut("slow").next("img").fadeIn("slow").end().appendTo(".img-seminar7");
  },5000);
});

$(function(){
  $(".img-seminar7 img:not(:first-child)").hide();
  setInterval(function() {
    $(".img-seminar7 img:first-child").fadeOut("slow").next("img").fadeIn("slow").end().appendTo(".img-seminar7");
  },5000);
});

$(function(){
  $(".img-seminar8 img:not(:first-child)").hide();
  setInterval(function() {
    $(".img-seminar8 img:first-child").fadeOut("slow").next("img").fadeIn("slow").end().appendTo(".img-seminar8");
  },5000);
});

$(function(){
  $(".img-seminar9 img:not(:first-child)").hide();
  setInterval(function() {
    $(".img-seminar9 img:first-child").fadeOut("slow").next("img").fadeIn("slow").end().appendTo(".img-seminar9");
  },5000);
});

$(function(){
  $(".img-seminar10 img:not(:first-child)").hide();
  setInterval(function() {
    $(".img-seminar10 img:first-child").fadeOut("slow").next("img").fadeIn("slow").end().appendTo(".img-seminar10");
  },5000);
});