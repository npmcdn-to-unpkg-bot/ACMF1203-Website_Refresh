jQuery(document).ready(function($){function t(){$(".modalButton").on("click",function(t){var e=$(this).attr("data-src"),a=$(this).attr("data-width")||640,l=$(this).attr("data-height")||360,i=$(this).attr("data-video-fullscreen");$("#myModal iframe").attr({src:e,height:l,width:a,allowfullscreen:""})}),$("#myModal").on("hidden.bs.modal",function(){$(this).find("iframe").html(""),$(this).find("iframe").attr("src","")})}$(".slickslider").slick({slidesToShow:1,slidesToScroll:1,arrows:!1,dots:!0,autoplay:!0,autoplaySpeed:5e3}),$(".slickslider-samples").slick({slidesToShow:1,slidesToScroll:1,arrows:!1,autoplay:!0,autoplaySpeed:5e3,fade:!0,adaptiveHeight:!0,asNavFor:".slider-nav"}),$(".slider-nav").slick({asNavFor:".slickslider-samples",dots:!1,arrows:!1,centerMode:!1,centerPadding:"40px",focusOnSelect:!0}),$(".parent-container").magnificPopup({delegate:"a",type:"image"});var e=function(t,e,a){if("[object Object]"===Object.prototype.toString.call(t))for(var l in t)Object.prototype.hasOwnProperty.call(t,l)&&e.call(a,t[l],l,t);else for(var i=0,s=t.length;s>i;i++)e.call(a,t[i],i,t)},a=document.querySelectorAll(".hamburger");a.length>0&&e(a,function(t){t.addEventListener("click",function(){this.classList.toggle("is-active")},!1)}),jQuery(".grid").masonry({itemSelector:".grid-item",columnWidth:25}),$("#samples-thumbnails-module .nav-pills a").click(function(t){t.preventDefault(),$(this).tab("show")}),$("#samples-thumbnails-module .nav-pills li:nth-child(1)").addClass("active"),$(document).ready(function(){t()})});