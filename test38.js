$(document).ready(function(){if(document.querySelector(".main-slider")||document.querySelector(".calculator-slider-side")){if($("#submit").on("click",function(e){let t={},i="";document.cookie="",t._costPerMetre=$("#total").html(),t._appliances=appliancesCookie,t._style=style,t._bath=+$("#bathtub").is(":checked"),t._shower=+$("#shower").is(":checked"),t._ceiling=$(":radio[name='ceiling']:checked").val(),t._flooring=$(":radio[name='flooring']:checked").val(),t._hygienicShower=+$("#hygienicShower").is(":checked"),t._secondGypsumLayer=+$("#secondGypsumLayer").is(":checked"),t._floorScreed=+$("#floorscreed").is(":checked"),t._heatedFlooring=+$("#heatedFlooring").val(),t._denoising=+$("#noise").is(":checked"),t._entranceDoors=+$("#doors").is(":checked"),t._conditioning=+$("#conditioning").val(),t._amountOfRooms=+$("#amountOfRooms").val(),t._amountOfBathrooms=+$("#amountOfBathrooms").val(),t._summedPrice=+$("#total").html()*parseFloat($("#space").val()),t._appliancesBoolTotal=+$("#appliancesBool").is(":checked"),t._furnitureBool=+$("#furnitureBool").is(":checked"),t._space=parseFloat($("#space").val());for(let e in t)i=e+"="+t[e]+";",document.cookie=i}),document.querySelector(".main-slider")){document.ready(function(){$(".main-slider").slick({arrows:!1,dots:!1,speed:425,draggable:!1,adaptiveHeight:!0,responsive:[{breakpoint:991,settings:{draggable:!0,infinite:!0,arrows:!0,dots:!1,autoplay:!0,autoplaySpeed:4e3}},{breakpoint:478,settings:{draggable:!0,infinite:!0,arrows:!1,dots:!0,autoplay:!0,autoplaySpeed:3500}}]})}),$(".slider-tab.custom-style").on("click",function(){$(this).parent().toggleClass("w--current"),$(".main-slider").toggle(!1),$(".slider-side").toggle(!1),$(".arrow-left, .arrow-right").toggle(!1),$(".custom-style-section").css("display","flex"),$(".slider-tab.w--current").toggleClass("w--current")});let l=$("<div id='progressBarContainer'></div>"),r=$("<div id='progressBar'></div>");function i(e){for(;document.getElementById("progressBarContainer")||document.getElementById("progressBar");)$("#progressBarContainer").siblings(".slide-nav").toggleClass("active-nav"),$("#progressBar").remove(),$("#progressBarContainer").remove();$(`[data-slide-index='${e}']`).append(l),$("#progressBarContainer").append(r),$("#progressBarContainer").siblings(".slide-nav").toggleClass("active-nav")}i(0);var c=document.getElementById("progressBar");let a,n=0,d=.5;var s=0;function o(){c=document.getElementById("progressBar"),s>=100?(s=0,$("#progressBar").css("width","0%"),t.slick("slickGoTo",n+1),n>=4?n=0:n++,i(n),c=document.getElementById("progressBar")):s<100&&(s+=d,c.style.width=`${s}%`)}c=document.getElementById("progressBar"),a=setInterval(o,75),$(".slide-nav").on("click",function(e){e.preventDefault(),slideIndex=parseInt($(this).attr("data-index")),i(slideIndex),c=document.getElementById("progressBar"),n=slideIndex,clearInterval(a),s=0,c.style.width=0,a=setInterval(o,75),t[0].slick.slickGoTo(slideIndex)}),$(".slider-tab").on("click",function(t){if($(".slider-main").slick("refresh"),clearInterval(a),$(".slider-tab.w--current").toggleClass("w--current"),$(this).toggleClass("w--current"),$("#progressBar").css("width","0%"),s=0,0==(e=parseInt($(this).attr("data-slider-index"))))u="cozy";else if(2==e)u="fusion";else if(1==e)u="japandi";else if(3==e)u="modern";else if(4==e)u="neoclassic";else if(5==e)return;$(".slider-tab.custom-style").css("background","white"),$(".slider-tab.custom-style").css("color","#0d0d0d"),$(".main-slider").toggle(!0),$(".custom-style-section").toggle(!1),$(".slider-side").toggle(!0),$(".slide").toggle(!1),$(".slide.main").toggle(!0),$(`.slide.${u}`).toggle(!0),$(".style-heading, .style-note, .style-description").toggle(!1),$(`.header-${u}`).toggle(!0),a=setInterval(o,75),slideIndex=0,i(slideIndex),$(".main-slider").slick("slickGoTo",slideIndex),$(".arrow-left, .arrow-right").toggle(!0)}),$(".main-slider").slick("refresh"),$(".arrow-left").on("click",function(){$(".main-slider").slick("slickPrev");let e=$("#progressBarContainer").siblings("a").data("index");clearInterval(a),i(e-1<0?e=4:e-1),$("#progressBar").css("width","0%"),s=0,a=setInterval(o,75)}),$(".arrow-right").on("click",function(){$(".main-slider").slick("slickNext");let e=$("#progressBarContainer").siblings("a").data("index");clearInterval(a),i(e+1>4?e=0:e+1),$("#progressBar").css("width","0%"),s=0,a=setInterval(o,75)}),$(window).width()<991&&clearInterval(a)}$(".calculator-tab").on("click",function(){let e;e||(e="cozy");let t=parseInt($(this).attr("data-slider-index"));if(0==t)e="cozy";else if(1==t)e="japandi";else if(2==t)e="fusion";else if(3==t)e="modern";else if(4==t)e="neoclassic";else if(5==t)return $(".custom-style-background-calculator").css("display","flex"),void $(".card-wrapper").css("display","flex");$(".custom-style-background-calculator").css("display","none"),$(".card-wrapper").css("display","none"),$(".form-block").css("display","flex"),$(".submit-container").css("display","flex"),$(".calculator-slide").toggle(!0),$(".calculator-slide.main").toggle(!1),$(`.calculator-slide.${e}`).toggle(!1),$(".calculator-slider-side").slick("slickGoTo",0),$(".calculator-slider-option.active").removeClass("active"),$(".calculator-slider-option[data-slider-index='0']").addClass("active")}),$(".custom-style").on("click",function(){$(this).css("color","white"),$(this).css("background-color","transparent")}),$(".calculator-tab").on("click",function(){if(number=parseInt($(this).attr("data-slider-index")),0==number)styleTab="cozy";else if(5==number)return $(".custom-style-background-calculator").css("display","flex"),$(".card-wrapper").css("display","flex"),$(this).siblings(".wrap-border").children(".custom-style").css("color","black"),void $(this).siblings(".wrap-border").children(".custom-style").css("background-color","white")}),$(document).ready(function(){$(".increment-field .increment").on("click",function(e){e.preventDefault(),$(this).siblings(".increment-input").val()<=0&&$(this).siblings(".increment-input").val(0)}),$(".choiceactive.card").toggleClass("choiceActiveBorder");let t=$(".calculator-slider-side");$(".calculator-slider-side").not(".slick-initialized").slick({dots:!1,speed:425,arrows:!1,draggable:!1,responsive:[{breakpoint:991,settings:"unslick"}]});let i="";$(".preview-image, .blackbg-text").hover(function(){$(".video-cursor").css("opacity",1)},function(){$(".video-cursor").css("opacity",0)}),$(".project-link-image").hover(function(){$(".project-dot").css("opacity",1)},function(){$(".project-dot").css("opacity",0)}),$("#laminat").prop("checked",!0),$("#appliances").prop("checked",!0),$(".choice").first().toggleClass("choiceActive"),$(".choice").first().parent().toggleClass("choiceActiveBorder"),$(".choice").on("click",function(e){if(!$("#appliancesBool").is(":checked"))return e.preventDefault(),$(".choiceActive").toggleClass("choiceActive"),void $(".choiceActiveBorder").toggleClass("choiceActiveBorder");$(this).hasClass("borderAcrive")||($(".choiceActive").toggleClass("choiceActive"),$(".choiceActiveBorder").toggleClass("choiceActiveBorder"),$(this).toggleClass("choiceActive"),$(this).parent().toggleClass("choiceActiveBorder"),$("#node").is(":checked")&&$("#appliances").prop("checked","checked"))}),$("#node").on("change",function(e){$("#node").is(":checked")&&$(".choiceActive")&&($(".choiceActive").toggleClass("choiceActive"),$(".choiceActiveBorder").toggleClass("choiceActiveBorder"))}),$("#appliancesBool").on("change",function(){$(this).is(":checked")&&!document.querySelector(".choiceActiveBorder")&&($(".choice").first().toggleClass("choiceActive"),$(".choice").first().parent().toggleClass("choiceActiveBorder"))}),$("form input").keydown(function(e){13!=e.keyCode||e.preventDefault()}),$(".calculator-tab").on("click",function(){0==(e=parseInt($(this).attr("data-slider-index")))?i="cozy":2==e?i="fusion":1==e?i="japandi":3==e?i="modern":4==e&&(i="neoclassic"),$(".calculator-slide").toggle(!1),$(".calculator-slide.main").toggle(!0),$(`.calculator-slide.${i}`).toggle(!0),$(".calculator-tab.w--current").removeClass("w--current"),$(this).addClass("w--current")}),$(".calculator-slider-option").on("click",function(){$(".calculator-slider-option.active").removeClass("active"),$(this).addClass("active"),slideIndex=parseInt($(this).data("slider-index")),r=slideIndex,t[0].slick.slickGoTo(slideIndex)}),$(".button.modal").on("click",function(e){$("#agreementCheckbox").is(":checked")||(e.preventDefault(),$(".agreementCheckbox").toggle(!0)),$("#name").val()&&$("#phone").val()&&$("#email").val()||(e.preventDefault(),$(".warning.inputs").toggle(!0))})}),$(".calculator-button, .calculate, .calculator-tab").on("click",function(){$(".calculator-slider-side").slick("refresh")}),$(".calculator-tab").on("click",function(){$(this).siblings(".wrap-border.calculator-tab").hasClass("w--current")&&($(".wrap-border.calculator-tab").removeClass("w--current"),$(".wrap-border.calculator-tab .custom-style").css("background","white"),$(".wrap-border.calculator-tab .custom-style").css("color","black"))}),$(".arrow-right.calculator-arrow").on("click",function(){$(".calculator-slider-side").slick("slickNext");let e=parseInt($(".calculator-slider-option.active").data("slider-index"));$(".calculator-slider-option.active").removeClass("active"),4==e?e=0:e+=1,$(`.calculator-slider-option:eq(${e})`).addClass("active")}),$(".arrow-left.calculator-arrow").on("click",function(){$(".calculator-slider-side").slick("slickPrev");let e=parseInt($(".calculator-slider-option.active").data("slider-index"));$(".calculator-slider-option.active").removeClass("active"),0==e?e=4:e-=1,$(`.calculator-slider-option:eq(${e})`).addClass("active")})}});