$(document).ready(function(){function e(e){return 0===e?"cozy":1===e?"japandi":2===e?"fusion":3===e?"modern":"neoclassic"}function i(e){return e.addClass("active")}function t(e){return e.removeClass("active")}function o(e){e.toggle(!1)}function c(e){e.toggle(!0)}function a(e,i){return isFinite(e.data(i))?parseInt(e.data(i)):e.data(i)}function n(e){return isFinite(e.val())?parseInt(e.val()):e.val()}function s(e){return+e.is(":checked")}function r(e){const i=e.getBoundingClientRect();return i.top>=0&&i.left>=0&&i.bottom<=(window.innerHeight||document.documentElement.clientHeight)&&i.right<=(window.innerWidth||document.documentElement.clientWidth)}$("input").each(function(){$(this).attr("name",$(this).data("name"))}),$(".choiceactive.card").toggleClass("choiceActiveBorder"),$("#laminat").prop("checked",!0);const l={arrows:!1,pagination:!1,speed:550,flickPower:400,breakpoints:{480:{pagination:!0,speed:650}}},d=new Splide(".slider-container.splide",l);if(d.mount(),$(".slider-wrapper.splide").length){$(".fact-link").click(function(){$(this).is(".active")||(t($(".fact-container.active")),i($(".fact-container").eq($(this).index())),t($(".fact-link.active")),i($(this)))}),$(".tab-new").click(function(){if($(this).is(".active"))return;let e=$(this).index();t($(".tab-new.active")),i($(this)),t($(".slider-image-new")),$(".slider-image-new").each(function(){$(this).index()==e&&i($(this))})});const e=new Splide(".slider-wrapper.splide",l);function h(){$(".splide__list").css("height",$(".splide__slide.is-active .active img").height())}e.mount(),e.on("move",()=>{setTimeout(h,vw>480?650:750)}),h(),$(".slick-btn-prev, .slick-btn-next").click(function(){let i,t,o=e.index;switch($(".slick-btn-prev, .slick-btn-next").removeClass("disabled"),0==$(this).index()?(e.go("<"),o---1==0&&$(this).addClass("disabled")):(e.go(">"),1+o++==4&&$(this).addClass("disabled")),o){case 0:i="",t="Дивитись спальню";break;case 1:i="Дивитись вітальню",t="Дивитись кухню";break;case 2:i="Дивитись спальню",t="Дивитись душ";break;case 3:i="Дивитись кухню",t="Дивитись ванну";break;case 4:i="Дивитись душ",t="";break;default:return}$(".slick-prev-text").html(i),$(".slick-next-text").html(t)})}$(".wrap-border.calculator-btn").click(()=>{let e={_costPerMetre:$("#total").html(),_appliances:$(".choiceActiveBorder").data("appliances"),_style:style,_bath:+$("#bathtub").is(":checked"),_shower:+$("#shower").is(":checked"),_ceiling:n($(":radio[name='ceiling']:checked")),_flooring:n($(":radio[name='flooring']:checked")),_hygienicShower:s($("#hygienicShower")),_secondGypsumLayer:s($("#secondGypsumLayer")),_floorScreen:s($("#floorscreed")),_heatedFlooring:n($("#heatedFlooring")),_denoising:s($("#noise")),_entranceDoors:s($("#doors")),_conditioning:n($("#conditioning")),_amountOfRooms:n($("#amountOfRooms")),_amountOfBathrooms:n($("#amountOfBathrooms")),_summedPrice:parseInt($("#totalWhole").html().replace(/ /,"")),_appliancesBoolTotal:s($("#appliancesBool")),_furnitureBool:s($("#furnitureBool")),_space:n($("#space")),_color:$(".div-block-14 .color-tab.active").index()},i="";document.cookie="";for(let t in e)i=t+"="+e[t]+";",document.cookie=i}),$(".increment-field .increment").click(e=>{let i=$(this).siblings(".increment-input");i.val()<=0&&i.val(0)}),$("#wf-form-consult").submit(function(){if($("#agreementCheckbox").is(":checked")?o($(".warning.agreementcheckbox")):c($(".warning.agreementcheckbox")),$("#phone").val()?o($(".warning.inputs.phone")):c($(".warning.inputs.phone")),$("#name").val()?o($(".warning.inputs.name")):c($(".warning.inputs.name")),$(".warning").is(":visible"))return!1;{const e="https://script.google.com/macros/s/AKfycbxaZQTrmT0wZsVWErYh9k8yxgTqUn1v9NfBTXyZCv01dFmRsp-4/exec";let i=new FormData($("#wf-form-consult").get(0));fetch(e,{method:"POST",body:i}).catch(e=>console.error("Error! ",e.message))}}),$(".choice").click(function(e){if(!$("#appliancesBool").is(":checked"))return e.preventDefault(),$(".choiceActive").toggleClass("choiceActive"),void $(".choiceActiveBorder").toggleClass("choiceActiveBorder");$(this).hasClass("borderAcrive")||($(".choiceActive").removeClass("choiceActive"),$(".choiceActiveBorder").removeClass("choiceActiveBorder"),$(this).addClass("choiceActive"),$(this).parent().addClass("choiceActiveBorder"),$("#node").is(":checked")&&$("#appliances").prop("checked","checked"))}),$("#node").change(()=>{$("#node").is(":checked")&&$(".choiceActive")&&($(".choiceActive").toggleClass("choiceActive"),$(".choiceActiveBorder").toggleClass("choiceActiveBorder"))}),$("#appliancesBool").change(function(){$(this).is(":checked")&&!document.querySelector(".choiceActiveBorder")&&($(".choice").first().toggleClass("choiceActive"),$(".choice").first().parent().toggleClass("choiceActiveBorder"))}),$(".hover-text").on("click",function(){let e=$(this);e.siblings(".hover-modal").css("display","flex"),0==e.siblings(".hover-modal").css("opacity")?(r(e.siblings(".hover-modal").get(0))||$([document.documentElement,document.body]).animate({scrollTop:e.siblings(".hover-modal").offset().top-96},450),e.siblings(".hover-modal").animate({bottom:42,opacity:1},200,"swing")):e.siblings(".hover-modal").animate({bottom:12,opacity:0},200,function(){o(e.siblings(".hover-modal"))})}),$(".submit-container .button").click(function(e){let i=/constructor/i.test(window.HTMLElement)||(t=!window.safari||"undefined"!=typeof safari&&window.safari.pushNotification,"[object SafariRemoteNotification]"===t.toString());var t;i&&(e.preventDefault(),$(this).html("Зачекайте..."));let o=$(this).attr("href"),c=$(this).html(),r=new FormData,l="cozy"===data.style?"Козі":"japandi"===data.style?"Джапанді":"fusion"===data.style?"Фьюжн":"modern"===data.style?"Модерн":"Нео Класика",d=data.space<60?4:data.space<=80?5:data.space<=100?6:data.space<=130?7:data.space<=150?8:data.space<=175?9:10;r.append("Стиль",l),r.append("Ціна за метр",$("#total").html()),r.append("Загальна ціна",$("#totalWhole").html()),r.append("Площа",n($("#space"))),r.append("Кількість кімнат",n($("#amountOfRooms"))),r.append("Кількість санвузлів",n($("#amountOfBathrooms"))),r.append("Ванна",s($("#bathtub"))),r.append("Душ",s($("#shower")));let h="stretch ceiling"==$(":radio[name='ceiling']:checked").val()?"Натяжна матова":"gapless"==$(":radio[name='ceiling']:checked").val()?"Натяжна бесщелева матова":"Гіпсокартон",p="laminat"==v$(":radio[name='flooring']:checked").val()?"Ламінат":"vynil"==$(":radio[name='flooring']:checked").val()?"Вінілова підлога":"Паркет",u=null==a($(".choiceActiveBorder"),"appliances")?"Не обрано":a($(".choiceActiveBorder"),"appliances").substr(0,1).toUpperCase()+a($(".choiceActiveBorder"),"appliances").substr(1);r.append("Стеля",h),r.append("Підлогове покриття",p),r.append("Стяжка підлоги",s($("#floorscreed"))),r.append("Шумоізоляція",s($("#noise"))),r.append("Вхідні двері",s($("#doors"))),r.append("Другий шар гіпсокартону",s($("#secondGypsumLayer"))),r.append("Гігієнічний душ",s($("#hygienicShower"))),r.append("Тепла підлога",n($("#heatedFlooring"))),r.append("Кондиціювання",n($("#conditioning"))),r.append("Меблі",s($("#furnitureBool"))),r.append("Техніка",u),r.append("Термін виконання робіт",d),fetch("https://script.google.com/macros/s/AKfycbxiJPHg5oz88UhS0apuylDhgjLskSLo-Dt2mvF6VA/exec",{method:"POST",body:r}).then(e=>{i&&($(this).html(c),window.location=o)}).catch(e=>console.error("Error!",e.message))}),$(".closing-btn").click(function(){let e=$(this);e.parent(".hover-modal").animate({bottom:12,opacity:0},200,function(){o(e.parent(".hover-modal"))})}),vw>=992&&($(".preview-image, .blackbg-text").hover(()=>$(".video-cursor").css("opacity",1),()=>$(".video-cursor").css("opacity",0)),$(".project-link-image").hover(()=>$(".project-dot").css("opacity",1),()=>$(".project-dot").css("opacity",0)),$(".arrow-right").hover(()=>$(".small-hover.right").css("opacity",1),()=>$(".small-hover.right").css("opacity",0)),$(".arrow-left").hover(()=>$(".small-hover.left").css("opacity",1),()=>$(".small-hover.left").css("opacity",0)),$(".color-tab").click(function(){let a=$(this).index(),n=$(".calculator-tab.w--current").index(),s=e(n);$(this).not(".active")&&(t($(".color-tab.active")),$(".div-block-14 .color-tab").each(function(){$(this).index()==a&&i($(this))}),o($(".color-var, .wrap-border.calculator-btn")),c($(`.calculator-slide .color-${a+1}, .wrap-border.calculator-btn.specification-${s}.color-${a+1}`)))}),$(".calculator-slider-option").click(function(){t($(".calculator-slider-option.active")),i($(this)),slideIndex=parseInt($(this).data("slider-index")),d.go(slideIndex)}),$(".calculator-tab").click(function(){let a=$(this).index(),n=e(a);o($(".calculator-slide.splide__slide .calculator-slide, .calculator-slide .color-var, .wrap-border.calculator-btn")),c($(".calculator-slide.splide__slide .calculator-slide .color-1, .calculator-slide"+`.${n}, .specification-${n}.color-1`)),c($(".calculator-slide.splide__slide .calculator-slide").eq(a)),$(".calculator-tab.w--current").removeClass("w--current"),$(`.calculator-tab:eq(${a})`).addClass("w--current"),t($(".color-tab.active, .slide-nav.active")),$(".tab-new").eq(a).click(),$(".div-block-14 .color-tab").each(function(){0==$(this).index()&&i($(this))}),d.refresh()}),$(".calculator-arrow").click(function(){$(this).is(".arrow-right")?d.go(">"):d.go("<"),t($(".calculator-slider-option.active")),i($(`.calculator-slider-option:eq(${d.index})`))}),$("form input").keydown(function(e){13!=e.keyCode||e.preventDefault()})),vw<=767&&($(".star").mouseleave(function(){$(this).removeClass("hidden"),$(this).siblings(".image-price").removeClass("active")}),$(".image-price").click(function(){$(this).is(".active")&&($(this).siblings(".star").removeClass("hidden"),$(this).removeClass("active"))}),$(".star").click(function(){$(this).is(".hidden")?($(this).removeClass("hidden"),$(this).siblings(".image-price").removeClass("active")):($(this).addClass("hidden"),$(this).siblings(".image-price").addClass("active"))}))});
