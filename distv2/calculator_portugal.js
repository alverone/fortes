(()=>{"use strict";var t,e=(t=>(t.Cozy="cozy",t.Japandi="japandi",t.Modern="modern",t.Fusion="fusion",t.NeoClassic="neoclassic",t))(e||{});(t=e||(e={})).fromString=function(t){return"japandi"===t?"japandi":"neoclassic"===t?"neoclassic":"modern"===t?"modern":"fusion"===t?"fusion":"cozy"},t.fromNumber=function(t){return 0===t?"cozy":1===t?"japandi":2===t?"fusion":3===t?"modern":"neoclassic"},t.inUkrainian=function(t){switch(t){case"neoclassic":return"Нео Класика";case"japandi":return"Джапанді";case"fusion":return"Фьюжн";case"modern":return"Модерн";default:return"Козі"}};class s{static formatCurrency(t){return Intl.NumberFormat("uk-UA",{maximumFractionDigits:2}).format(t)}}var i=(t=>(t[t.uk=0]="uk",t[t.en=1]="en",t))(i||{});class o{constructor(t,e=!1){if(e)switch(t){case 0:this._init();case 1:this._initPortugal();default:this._init()}}get(t){try{return JSON.parse(localStorage.getItem(t))}catch(e){return localStorage.getItem(t)}}set(t,e){localStorage.setItem(t,e.toString())}_init(){this.set("style","cozy"),this.set("bath",!0),this.set("shower",!1),this.set("ceiling","stretch ceiling"),this.set("flooring","laminat"),this.set("hygienic_shower",!1),this.set("second_gypsum_layer",!1),this.set("floor_screed",!1),this.set("heated_flooring",!1),this.set("denoising",!1),this.set("entrance_doors",!1),this.set("conditioning",!1),this.set("amount_of_rooms",2),this.set("amount_of_bathrooms",1),this.set("appliances","gorenje"),this.set("appliances_bool_total",!1),this.set("furniture_bool",!0),this.set("space",50),this.set("color",1)}_initPortugal(){this.set("style","cozy"),this.set("color",1),this.set("space",50),this.set("amount_of_rooms",2),this.set("amount_of_bathrooms",1),this.set("bath",!0),this.set("shower",!1),this.set("flooring","laminat"),this.set("finishing_materials",!1),this.set("demontage",!1),this.set("cement_screed",!1),this.set("heated_flooring",0),this.set("denoising",!1),this.set("entrance_doors",!1),this.set("windows_installation",0),this.set("builtin_furniture",!1),this.set("conditioning",0),this.set("furniture_bool",!1),this.set("appliances_bool_total",!1),this.set("appliances","gorenje"),this.set("transportation_expenses",5)}storageToRequestBody(t){const e={};for(const s in t)"length"!==s&&"costPerMetre"!=s&&"color"!=s&&("true"!==String(t[s])?"false"!==String(t[s])?isFinite(Number(t[s]))?e[s]=Number(t[s]):e[s]=t[s]:e[s]=0:e[s]=1);return JSON.stringify(e)}}$((function(){const t=new o(i.en,!1),n=$("#space"),a=$("#total"),r=$("#totalWhole"),c=$("#totalWholeVAT"),l=function(t,e,s){var i,o,n;void 0===e&&(e=50),void 0===s&&(s={});var a=null!=(i=s.isImmediate)&&i,r=null!=(o=s.callback)&&o,c=s.maxWait,l=Date.now(),u=[];function h(){if(void 0!==c){var t=Date.now()-l;if(t+e>=c)return c-t}return e}var d=function(){var e=[].slice.call(arguments),s=this;return new Promise((function(i,o){var c=a&&void 0===n;if(void 0!==n&&clearTimeout(n),n=setTimeout((function(){if(n=void 0,l=Date.now(),!a){var i=t.apply(s,e);r&&r(i),u.forEach((function(t){return(0,t.resolve)(i)})),u=[]}}),h()),c){var d=t.apply(s,e);return r&&r(d),i(d)}u.push({resolve:i,reject:o})}))};return d.cancel=function(t){void 0!==n&&clearTimeout(n),u.forEach((function(e){return(0,e.reject)(t)})),u=[]},d}((function(){return e=this,i=null,o=function*(){u();const e=yield fetch("https://api.fortes.agency/calc?country=portugal",{body:t.storageToRequestBody(localStorage),headers:{"Content-Type":"application/json"},method:"POST"}),i=yield e.json(),o=parseFloat(i.cost_per_meter);t.set("costPerMetre",o),t.set("summedPrice",o*t.get("space")*1.23),a.html(s.formatCurrency(o)),r.html(s.formatCurrency(o*t.get("space"))),c.html(s.formatCurrency(o*t.get("space")*1.23))},new Promise(((t,s)=>{var n=t=>{try{r(o.next(t))}catch(t){s(t)}},a=t=>{try{r(o.throw(t))}catch(t){s(t)}},r=e=>e.done?t(e.value):Promise.resolve(e.value).then(n,a);r((o=o.apply(e,i)).next())}));var e,i,o}),300);function u(){t.set("space",n.val()),t.set("amount_of_rooms",$("#amountOfRooms").val()),t.set("amount_of_bathrooms",$("#amountOfBathrooms").val()),t.set("windows_installation",$("#amountOfWindows").val()),t.set("demontage",$("#dismantlingWorks").is(":checked")),t.set("heated_flooring",$("#heatedFlooring").val()),t.set("conditioning",$("#conditioning").val()),t.set("builtin_furiture",$("#builtinFurniture").is(":checked")),t.set("cement_screed",$("#cementScreed").is(":checked")),t.set("finishing_materials",$("#finishingMaterials").is(":checked")),t.set("furniture_bool",$("#furnitureBool").is(":checked")),t.set("bath",$("#bathtub").is(":checked")),t.set("shower",$("#shower").is(":checked")),t.set("appliances_bool_total",$("#appliancesBool").is(":checked")),t.set("denoising",$("#noise").is(":checked")),t.set("entrance_doors",$("#doors").is(":checked")),t.set("flooring",$(":radio[name='flooring']:checked").val()),t.set("transportation_expenses",$("#distance").val())}n.val(50),l(),$(".calculator input").not(".form-2 input").on("change",(()=>{u(),l()})),n.on("focusout",(function(){if($(this).val($(this).val().toString().match(/\d*\.?\d+/)),t.set("space",n.val()),0===t.get("space")||0===t.get("amount_of_rooms"))return a.html("0"),void r.html("0");l()})),n.on("focusout",(function(){(parseInt($(this).val().toString())<30||!$(this).val())&&($(this).val(30),t.set("space",n.val()),l())})),$(".increment-field .increment").on("click",(function(e){e.preventDefault();const s=$(this).siblings(".increment-input");if(s.val(parseInt(s.val())+parseInt($(this).val())),"0"===s.val()?"1"===$(this).val()?$(this).siblings(".increment").toggleClass("disabled"):$(this).toggleClass("disabled"):parseInt(s.val())>0&&$(this).siblings(".disabled").toggleClass("disabled"),0==t.get("amount_of_rooms"))return a.html("0"),void r.html("0");l()})),$(".calculator-tab, .tab-new").on("click",(function(){const s=parseInt($(this).data("slider-index"));t.set("style",e.fromNumber(s)),l()})),$(".choice").on("click",(function(){t.set("appliances_bool_total",!0),t.set("appliances",$(this).data("appliances")),l()})),$("#node").on("click",(function(){t.set("appliances_bool_total",!1),l()})),$("#appliancesBool").on("click",(function(){$(this).is(":checked")&&(document.querySelector(".choice-gradient.gradientrevamped")||(t.set("appliances_bool_total",1),t.set("appliances","gorenje"),l()))})),$("#appliancesBool").on("change",(function(){$(this).is(":checked")&&(t.set("appliances_bool_total",!0),l())}))}))})();