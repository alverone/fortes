(()=>{"use strict";var Ut={};class p{static formatCurrency(e){return Intl.NumberFormat("uk-UA",{maximumFractionDigits:2}).format(e)}}class me{constructor(e,o){this.address=e,this._value=o}hasValue(){return this._value!==null&&this._value.length>0}value(){return this._value}numeric(){return parseFloat(this._value)}formattedNumerical(){return p.formatCurrency(parseFloat(this.value()))}}class kt{constructor(e){this.cells=e}getCell(e){const o=this.cells.filter(u=>u.address===e);return o.length==0?new me(e,"0"):o[0]}}var he=(r=>(r[r.uk=0]="uk",r[r.en=1]="en",r))(he||{});class St{constructor(e,o=!1){if(o)switch(e){case 0:this._init();case 1:this._initPortugal();default:this._init()}}get(e){try{return JSON.parse(localStorage.getItem(e))}catch(o){return localStorage.getItem(e)}}set(e,o){localStorage.setItem(e,o.toString())}_init(){this.set("style","cozy"),this.set("bath",!0),this.set("shower",!1),this.set("ceiling","stretch ceiling"),this.set("flooring","laminat"),this.set("hygienic_shower",!1),this.set("second_gypsum_layer",!1),this.set("floor_screed",!1),this.set("heated_flooring",!1),this.set("denoising",!1),this.set("entrance_doors",!1),this.set("conditioning",!1),this.set("amount_of_rooms",2),this.set("amount_of_bathrooms",1),this.set("appliances","gorenje"),this.set("appliances_bool_total",!1),this.set("furniture_bool",!0),this.set("space",50),this.set("color",1)}_initPortugal(){this.set("style","cozy"),this.set("color",1),this.set("space",50),this.set("amount_of_rooms",2),this.set("amount_of_bathrooms",1),this.set("bath",!0),this.set("shower",!1),this.set("flooring","laminat"),this.set("finishing_materials",!1),this.set("demontage",!1),this.set("cement_screed",!1),this.set("heated_flooring",0),this.set("denoising",!1),this.set("entrance_doors",!1),this.set("windows_installation",0),this.set("builtin_furniture",!1),this.set("conditioning",0),this.set("furniture_bool",!1),this.set("appliances_bool_total",!1),this.set("appliances","gorenje"),this.set("transportation_expenses",5)}storageToRequestBody(e){const o={};for(const u in e)if(!(u==="length"||u=="costPerMetre"||u=="color")){if(String(e[u])==="true"){o[u]=1;continue}else if(String(e[u])==="false"){o[u]=0;continue}if(isFinite(Number(e[u]))){o[u]=Number(e[u]);continue}o[u]=e[u]}return JSON.stringify(o)}}class fe{static numberToEncodedLetter(e){if(isNaN(e))return;e=Math.abs(Math.floor(e));let o=e%26,u=e/26,s;return e<=26?this.numToLetter(e):(u>=1&&(o===0&&u--,s=this.numberToEncodedLetter(u)),o===0&&(o=26),s+this.numToLetter(o))}static numToLetter(e){if(!(e>26||e<0))return e===0?"":this.alphabet.slice(e-1,e)}static containsRuPath(e){return e.split(/\/(?=.)/).includes("ru")}}fe.alphabet="ABCDEFGHIJKLMNOPQRSTUVWXYZ";class g{}g.kCost="Cost",g.kAmount="Amount",g.kKitchen="Kitchen",g.kLMonth="month",g.seeLivingroom="\u0414\u0438\u0432\u0438\u0442\u0438\u0441\u044C \u0432\u0456\u0442\u0430\u043B\u044C\u043D\u044E",g.seeBedroom="\u0414\u0438\u0432\u0438\u0442\u0438\u0441\u044C \u0441\u043F\u0430\u043B\u044C\u043D\u044E",g.seeKitchen="\u0414\u0438\u0432\u0438\u0442\u0438\u0441\u044C \u043A\u0443\u0445\u043D\u044E",g.seeShower="\u0414\u0438\u0432\u0438\u0442\u0438\u0441\u044C \u0434\u0443\u0448",g.seeBath="\u0414\u0438\u0432\u0438\u0442\u0438\u0441\u044C \u0432\u0430\u043D\u043D\u0443",g.ruSeeLivingroom="\u0421\u043C\u043E\u0442\u0440\u0435\u0442\u044C \u043F\u0440\u0438\u0445\u043E\u0436\u0443\u044E",g.ruSeeBedroom="\u0421\u043C\u043E\u0442\u0440\u0435\u0442\u044C \u0441\u043F\u0430\u043B\u044C\u043D\u044E",g.ruSeeKitchen="\u0421\u043C\u043E\u0442\u0440\u0435\u0442\u044C \u043A\u0443\u0445\u043D\u044E",g.ruSeeShower="\u0421\u043C\u043E\u0442\u0440\u0435\u0442\u044C \u0434\u0443\u0448",g.ruSeeBath="\u0421\u043C\u043E\u0442\u0440\u0435\u0442\u044C \u0432\u0430\u043D\u043D\u0443";var G=(r=>(r.Cozy="cozy",r.Japandi="japandi",r.Modern="modern",r.Fusion="fusion",r.NeoClassic="neoclassic",r))(G||{});(r=>{function e(s){return s==="japandi"?"japandi":s==="neoclassic"?"neoclassic":s==="modern"?"modern":s==="fusion"?"fusion":"cozy"}r.fromString=e;function o(s){return s===0?"cozy":s===1?"japandi":s===2?"fusion":s===3?"modern":"neoclassic"}r.fromNumber=o;function u(s){switch(s){case"neoclassic":return"\u041D\u0435\u043E \u041A\u043B\u0430\u0441\u0438\u043A\u0430";case"japandi":return"\u0414\u0436\u0430\u043F\u0430\u043D\u0434\u0456";case"fusion":return"\u0424\u044C\u044E\u0436\u043D";case"modern":return"\u041C\u043E\u0434\u0435\u0440\u043D";case"cozy":default:return"\u041A\u043E\u0437\u0456"}}r.inUkrainian=u})(G||(G={}));var z=(r,e,o)=>new Promise((u,s)=>{var _=l=>{try{n(o.next(l))}catch(w){s(w)}},k=l=>{try{n(o.throw(l))}catch(w){s(w)}},n=l=>l.done?u(l.value):Promise.resolve(l.value).then(_,k);n((o=o.apply(r,e)).next())});class Lt{constructor(e){this._storage=e}collectPortugalClientData(e){return z(this,null,function*(){return fetch("https://script.google.com/macros/s/AKfycbzyzzY4bi4yQoHdsTeVmm8BxGQ-bGW_-rK_erhrFA0zKak6rQ27p-k9Mx3HWk6vKEIatw/exec",{method:"POST",body:e}).catch(o=>console.error("Failed to collect consultation data!",o.message))})}collectClientData(e){return z(this,null,function*(){return fetch("https://script.google.com/macros/s/AKfycbyTfAJSAOSn1mB5Ua10w0AHAdKLb1weCd3ve139FkPzbqLEPnBeiE8gGGTq5S6XhmevIQ/exec",{method:"POST",body:e}).catch(o=>console.error("Failed to collect consultation data!",o.message))})}collectCalcData(){return z(this,null,function*(){const e=new FormData,o=G.fromString(this._storage.get("style")),u=this._storage.get("space"),s=(u<=40?3:u<=80?4:u<=100?5:u<=130?6:u<=150?7:u<=175?8:9)+(o=="modern"||o=="neoclassic"?1:0);e.append("\u0421\u0442\u0438\u043B\u044C",G.inUkrainian(o)),e.append("\u0426\u0456\u043D\u0430 \u0437\u0430 \u043C\u0435\u0442\u0440",this._storage.get("costPerMetre")),e.append("\u0417\u0430\u0433\u0430\u043B\u044C\u043D\u0430 \u0446\u0456\u043D\u0430",this._storage.get("summedPrice")),e.append("\u041F\u043B\u043E\u0449\u0430",u),e.append("\u041A\u0456\u043B\u044C\u043A\u0456\u0441\u0442\u044C \u043A\u0456\u043C\u043D\u0430\u0442",this._storage.get("amount_of_rooms")),e.append("\u041A\u0456\u043B\u044C\u043A\u0456\u0441\u0442\u044C \u0441\u0430\u043D\u0432\u0443\u0437\u043B\u0456\u0432",this._storage.get("amount_of_bathrooms")),e.append("\u0412\u0430\u043D\u043D\u0430",this._storage.get("bath")?"1":"0"),e.append("\u0414\u0443\u0448",this._storage.get("shower")?"1":"0");const _=this._storage.get("ceiling"),k=this._storage.get("flooring"),n=this._storage.get("appliances_bool_total"),l=_=="stretch ceiling"?"\u041D\u0430\u0442\u044F\u0436\u043D\u0430 \u043C\u0430\u0442\u043E\u0432\u0430":_=="gapless"?"\u041D\u0430\u0442\u044F\u0436\u043D\u0430 \u0431\u0435\u0441\u0449\u0435\u043B\u0435\u0432\u0430 \u043C\u0430\u0442\u043E\u0432\u0430":"\u0413\u0456\u043F\u0441\u043E\u043A\u0430\u0440\u0442\u043E\u043D",w=k=="laminat"?"\u041B\u0430\u043C\u0456\u043D\u0430\u0442":k=="vynil"?"\u0412\u0456\u043D\u0456\u043B\u043E\u0432\u0430 \u043F\u0456\u0434\u043B\u043E\u0433\u0430":"\u041F\u0430\u0440\u043A\u0435\u0442",A=n?this._storage.get("appliances").charAt(0).toUpperCase()+this._storage.get("appliances").slice(1):"\u041D\u0435 \u043E\u0431\u0440\u0430\u043D\u043E";return e.append("\u0421\u0442\u0435\u043B\u044F",l),e.append("\u041F\u0456\u0434\u043B\u043E\u0433\u043E\u0432\u0435 \u043F\u043E\u043A\u0440\u0438\u0442\u0442\u044F",w),e.append("\u0421\u0442\u044F\u0436\u043A\u0430 \u043F\u0456\u0434\u043B\u043E\u0433\u0438",this._storage.get("floor_screed")?"1":"0"),e.append("\u0428\u0443\u043C\u043E\u0456\u0437\u043E\u043B\u044F\u0446\u0456\u044F",this._storage.get("denoising")?"1":"0"),e.append("\u0412\u0445\u0456\u0434\u043D\u0456 \u0434\u0432\u0435\u0440\u0456",this._storage.get("entrance_doors")?"1":"0"),e.append("\u0414\u0440\u0443\u0433\u0438\u0439 \u0448\u0430\u0440 \u0433\u0456\u043F\u0441\u043E\u043A\u0430\u0440\u0442\u043E\u043D\u0443",this._storage.get("second_gypsum_layer")?"1":"0"),e.append("\u0413\u0456\u0433\u0456\u0454\u043D\u0456\u0447\u043D\u0438\u0439 \u0434\u0443\u0448",this._storage.get("hygienic_shower")?"1":"0"),e.append("\u0422\u0435\u043F\u043B\u0430 \u043F\u0456\u0434\u043B\u043E\u0433\u0430",this._storage.get("heated_flooring")?"1":"0"),e.append("\u041A\u043E\u043D\u0434\u0438\u0446\u0456\u044E\u0432\u0430\u043D\u043D\u044F",this._storage.get("conditioning")?"1":"0"),e.append("\u041C\u0435\u0431\u043B\u0456",this._storage.get("furniture_bool")?"1":"0"),e.append("\u0422\u0435\u0445\u043D\u0456\u043A\u0430",A),e.append("\u0422\u0435\u0440\u043C\u0456\u043D \u0432\u0438\u043A\u043E\u043D\u0430\u043D\u043D\u044F \u0440\u043E\u0431\u0456\u0442",s.toString()),fetch("https://script.google.com/macros/s/AKfycbyt7QOcA0Dp_2voHy2w1rVGCllwvW_SX_V8iDTD5E7zJohqH0C4/exec",{method:"POST",body:e}).catch(m=>console.error(m))})}collectSpecificationData(e){return z(this,null,function*(){const o=G.fromString(this._storage.get("style")),u=this._storage.get("space"),s=(u<=40?3:u<=80?4:u<=100?5:u<=130?6:u<=150?7:u<=175?8:9)+(o=="modern"||o=="neoclassic"?1:0);e.append("\u0421\u0442\u0438\u043B\u044C",G.inUkrainian(o)),e.append("\u0426\u0456\u043D\u0430 \u0437\u0430 \u043C\u0435\u0442\u0440",this._storage.get("costPerMetre")),e.append("\u0417\u0430\u0433\u0430\u043B\u044C\u043D\u0430 \u0446\u0456\u043D\u0430",this._storage.get("summedPrice")),e.append("\u041F\u043B\u043E\u0449\u0430",u),e.append("\u041A\u0456\u043B\u044C\u043A\u0456\u0441\u0442\u044C \u043A\u0456\u043C\u043D\u0430\u0442",this._storage.get("amount_of_rooms")),e.append("\u041A\u0456\u043B\u044C\u043A\u0456\u0441\u0442\u044C \u0441\u0430\u043D\u0432\u0443\u0437\u043B\u0456\u0432",this._storage.get("amount_of_bathrooms")),e.append("\u0412\u0430\u043D\u043D\u0430",this._storage.get("bath")?"1":"0"),e.append("\u0414\u0443\u0448",this._storage.get("shower")?"1":"0");const _=this._storage.get("ceiling"),k=this._storage.get("flooring"),n=this._storage.get("appliances_bool_total"),l=_=="stretch ceiling"?"\u041D\u0430\u0442\u044F\u0436\u043D\u0430 \u043C\u0430\u0442\u043E\u0432\u0430":_=="gapless"?"\u041D\u0430\u0442\u044F\u0436\u043D\u0430 \u0431\u0435\u0441\u0449\u0435\u043B\u0435\u0432\u0430 \u043C\u0430\u0442\u043E\u0432\u0430":"\u0413\u0456\u043F\u0441\u043E\u043A\u0430\u0440\u0442\u043E\u043D",w=k=="laminat"?"\u041B\u0430\u043C\u0456\u043D\u0430\u0442":k=="vynil"?"\u0412\u0456\u043D\u0456\u043B\u043E\u0432\u0430 \u043F\u0456\u0434\u043B\u043E\u0433\u0430":"\u041F\u0430\u0440\u043A\u0435\u0442",A=n?this._storage.get("appliances").charAt(0).toUpperCase()+this._storage.get("appliances").slice(1):"\u041D\u0435 \u043E\u0431\u0440\u0430\u043D\u043E";return e.append("\u0421\u0442\u0435\u043B\u044F",l),e.append("\u041F\u0456\u0434\u043B\u043E\u0433\u043E\u0432\u0435 \u043F\u043E\u043A\u0440\u0438\u0442\u0442\u044F",w),e.append("\u0421\u0442\u044F\u0436\u043A\u0430 \u043F\u0456\u0434\u043B\u043E\u0433\u0438",this._storage.get("floor_screed")?"1":"0"),e.append("\u0428\u0443\u043C\u043E\u0456\u0437\u043E\u043B\u044F\u0446\u0456\u044F",this._storage.get("denoising")?"1":"0"),e.append("\u0412\u0445\u0456\u0434\u043D\u0456 \u0434\u0432\u0435\u0440\u0456",this._storage.get("entrance_doors")?"1":"0"),e.append("\u0414\u0440\u0443\u0433\u0438\u0439 \u0448\u0430\u0440 \u0433\u0456\u043F\u0441\u043E\u043A\u0430\u0440\u0442\u043E\u043D\u0443",this._storage.get("second_gypsum_layer")?"1":"0"),e.append("\u0413\u0456\u0433\u0456\u0454\u043D\u0456\u0447\u043D\u0438\u0439 \u0434\u0443\u0448",this._storage.get("hygienic_shower")?"1":"0"),e.append("\u0422\u0435\u043F\u043B\u0430 \u043F\u0456\u0434\u043B\u043E\u0433\u0430",this._storage.get("heated_flooring")?"1":"0"),e.append("\u041A\u043E\u043D\u0434\u0438\u0446\u0456\u044E\u0432\u0430\u043D\u043D\u044F",this._storage.get("conditioning")?"1":"0"),e.append("\u041C\u0435\u0431\u043B\u0456",this._storage.get("furniture_bool")?"1":"0"),e.append("\u0422\u0435\u0445\u043D\u0456\u043A\u0430",A),e.append("\u0422\u0435\u0440\u043C\u0456\u043D \u0432\u0438\u043A\u043E\u043D\u0430\u043D\u043D\u044F \u0440\u043E\u0431\u0456\u0442",s.toString()),fetch("https://script.google.com/macros/s/AKfycbzymV7zIns6N9AdE882E44BwQAFZ_wy0JNIahqsoDWx3kqLi-U/exec",{method:"POST",body:e}).catch(m=>console.error(m))})}collectPortugalCalcData(e){return z(this,null,function*(){const o=!!this._storage.get("appliances_bool_total"),u=!!this._storage.get("furniture_bool"),s=this._storage.get("space"),_=!!this._storage.get("bath"),k=!!this._storage.get("shower"),n=this._storage.get("amount_of_rooms"),l=this._storage.get("amount_of_bathrooms"),w=!!this._storage.get("demontage"),A=this._storage.get("windows_installation"),m=!!this._storage.get("finishing_materials"),K=!!this._storage.get("cement_screed"),j=!!this._storage.get("builtin_furiture"),U=this._storage.get("heated_flooring"),V=!!this._storage.get("denoising"),x=!!this._storage.get("entrance_doors"),H=this._storage.get("conditioning"),J=this._storage.get("flooring"),R=this._storage.get("transportation_expenses"),N=this._storage.get("appliances"),O=this._storage.get("summedPrice"),I=this._storage.get("costPerMetre"),M=(s<=40?3:s<=80?4:s<=100?5:s<=130?6:s<=150?7:s<=175?8:9)+(e=="modern"||e=="neoclassic"?1:0),c=new FormData;return c.append("Style",e),c.append("Total cost VAT",p.formatCurrency(O)),c.append("Total cost",p.formatCurrency(O/1.23)),c.append("Cost per metre",p.formatCurrency(I)),c.append("Cost per metre VAT",p.formatCurrency(I*1.23)),c.append("Area",s.toString()),c.append("Number of bedrooms",n.toString()),c.append("Number of bathrooms",l.toString()),c.append("Bath",_?"1":"0"),c.append("Shower",k?"1":"0"),c.append("Distance from Lisbon",R.toString()),c.append("Flooring",J),c.append("Finishing materials",m?"1":"0"),c.append("Dismantling works",w?"1":"0"),c.append("Cement screed",K?"1":"0"),c.append("Entrance doors",x?"1":"0"),c.append("Soundproofing",V?"1":"0"),c.append("Built-in furniture",j?"1":"0"),c.append("Underfloor heating",U.toString()),c.append("Air conditioning",H.toString()),c.append("Window installation",A.toString()),c.append("Decorating",u?"1":"0"),c.append("Appliances",o?N:"0"),c.append("Time to completion",M.toString()),fetch("https://script.google.com/macros/s/AKfycbwnwi3SZ8gK3zSYW2DEoc6BtY9HS1stpRSHPW6pATmX2UawetpC-74YPZ5LjjX282Ki/exec",{method:"POST",body:c}).catch(Y=>console.error(Y))})}collectPortugalSpecificationData(e){return z(this,null,function*(){const o=this._storage.get("style"),u=!!this._storage.get("appliances_bool_total"),s=!!this._storage.get("furniture_bool"),_=this._storage.get("space"),k=!!this._storage.get("bath"),n=!!this._storage.get("shower"),l=this._storage.get("amount_of_rooms"),w=this._storage.get("amount_of_bathrooms"),A=!!this._storage.get("demontage"),m=this._storage.get("windows_installation"),K=!!this._storage.get("finishing_materials"),j=!!this._storage.get("cement_screed"),U=!!this._storage.get("builtin_furiture"),V=this._storage.get("heated_flooring"),x=!!this._storage.get("denoising"),H=!!this._storage.get("entrance_doors"),J=this._storage.get("conditioning"),R=this._storage.get("flooring"),N=this._storage.get("transportation_expenses"),O=this._storage.get("appliances"),I=this._storage.get("summedPrice"),M=this._storage.get("costPerMetre"),c=(_<=40?3:_<=80?4:_<=100?5:_<=130?6:_<=150?7:_<=175?8:9)+(o=="modern"||o=="neoclassic"?1:0);return e.append("Style",o),e.append("Total cost VAT",p.formatCurrency(I)),e.append("Total cost",p.formatCurrency(I/1.23)),e.append("Cost per metre",p.formatCurrency(M)),e.append("Cost per metre VAT",p.formatCurrency(M*1.23)),e.append("Area",_.toString()),e.append("Number of bedrooms",l.toString()),e.append("Number of bathrooms",w.toString()),e.append("Bath",k?"1":"0"),e.append("Shower",n?"1":"0"),e.append("Distance from Lisbon",N.toString()),e.append("Flooring",R),e.append("Finishing materials",K?"1":"0"),e.append("Dismantling works",A?"1":"0"),e.append("Cement screed",j?"1":"0"),e.append("Entrance doors",H?"1":"0"),e.append("Soundproofing",x?"1":"0"),e.append("Built-in furniture",U?"1":"0"),e.append("Underfloor heating",V.toString()),e.append("Air conditioning",J.toString()),e.append("Window installation",m.toString()),e.append("Decorating",s?"1":"0"),e.append("Appliances",u?O:"0"),e.append("Time to completion",c.toString()),fetch("https://script.google.com/macros/s/AKfycbzwN8RKdZRUWDBLNnvUwxxK9FXHUVPeqPpGFJYu9NT9zLsc34JKzIHgHz1CwFbNYGzs/exec",{method:"POST",body:e}).catch(Y=>console.error(Y))})}}var ve=(r,e,o)=>new Promise((u,s)=>{var _=l=>{try{n(o.next(l))}catch(w){s(w)}},k=l=>{try{n(o.throw(l))}catch(w){s(w)}},n=l=>l.done?u(l.value):Promise.resolve(l.value).then(_,k);n((o=o.apply(r,e)).next())});$(function(){const r=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,e=new St(he.en,!1),o=new Lt(e),u=e.get("style"),s=Ot(u),_=!!e.get("appliances_bool_total"),k=!!e.get("furniture_bool"),n=e.get("space"),l=!!e.get("bath"),w=!!e.get("shower"),A=e.get("amount_of_rooms"),m=e.get("amount_of_bathrooms"),K=!!e.get("demontage"),j=e.get("windows_installation"),U=!!e.get("finishing_materials"),V=!!e.get("cement_screed"),x=!!e.get("builtin_furiture"),H=e.get("heated_flooring"),J=!!e.get("denoising"),R=!!e.get("entrance_doors"),N=e.get("conditioning"),O=e.get("flooring"),I=e.get("transportation_expenses"),M=e.get("appliances"),c=e.get("summedPrice"),Y=e.get("costPerMetre"),Pt=$("#furnitureList");let i="",d="",S=0,ne=0;const re=(n<=40?3:n<=80?4:n<=100?5:n<=130?6:n<=150?7:n<=175?8:9)+(u=="modern"||u=="neoclassic"?1:0);$("#months").html(re.toString()),$("#total").html(p.formatCurrency(c)),$("#space").html(n.toString()),$("#pricePerMetre").html(p.formatCurrency(Y)),fetch("https://docs.google.com/spreadsheets/d/1KkkpKbytztt48mwP1RGgpVFpfke8-IqB0KLWA8Sn2FE/gviz/tq?tqx=out:json&gid=1219923480").then(h=>h.text()).then(h=>{var v,q,Z,ce,X,ue,ee,oe,ie,ye,Fe,Ae,be,Be,Ee,De,ke,Se,Le,Pe,Te,xe,Ne,Me,Ge,Oe,Ie,ze,Ke,je,Ue,Ve,He,Je,Re,qe,We,Qe,Ye,Ze,Xe,et,tt,nt,ut,ot,it,st,at,lt,rt,ct,pt,gt,dt,mt,ht,ft,vt,Ct,_t,$t,wt;const It=JSON.parse(h.substring(h.length-2,0).replace(`/*O_o*/
google.visualization.Query.setResponse(`,"")).table.rows,t=new kt(It.map((a,b)=>a.c.map(function(F,E){var C;if(!(F===null||F.v===null))return new me(`${fe.numberToEncodedLetter(E+1)}${b+1}`,(C=F.v)!=null?C:F.f)}).filter(F=>F!=null)).reduce((a,b)=>[...a,...b])),f=t.getCell("S46").numeric(),L=t.getCell("S44").numeric(),pe=t.getCell("S69").numeric(),yt=t.getCell("T103").numeric(),ge=t.getCell("S104").numeric();u=="cozy"?(i="I",d="A"):u=="japandi"?(i="K",d="B"):u=="fusion"?(i="M",d="C"):u=="modern"?(i="O",d="D"):u=="neoclassic"&&(i="Q",d="E");let se=0,ae,te;O=="vynil"?(ae="60",te="86",se=n*(n<70?220.33:161.8)*f*3):O=="parket"?(ae="61",te="87",se=n*(n<80?369.96:240.31)*f*2):(ae="59",te="85",se=n*(n<70?201.26:198.81)*f*2);const le=$("#workList");let D="";const Ft=2523*((A>0?6:0)+(l?2:0)+(w?2:0)+m*2)*f*2*L+(l?1:0)*m*2500*2*L*f-950*f/41+(w?1:0)*4e3*m*2*L*f-800*f/41,At=1974*((A>0?3:0)+(l?1:0)+(w?1:0)+m*2)*f*2*L,bt=n*m*(n<=100?83.2:33.98)*L*f*2,Bt=(n/A<=50?850*n:A*24*3519)*f*L,zt=[t.getCell("J47").numeric()/L,t.getCell("J48").numeric()/L,n/A<=50?n*(n<=60?1142.78:n<=95?883.87:(n<=125,819.43))*f*1.45:Math.sqrt(n)*4*3*600*f,n*(n<=60?283.08:n<=95?281.22:n<=124?338.33:362.47)*f*1.35*1.45,n*(n<=60?700.67:n<=100?687.36:n<=130?341.25:317.36)*f*1.1*1.5/2,700*3*f,(n/A<50?(n<=50?1e3*n:990*n)*1.77:Math.sqrt(n)*4*3*600)*f,n*(n<=60?418.86:n<=100?416.29:n<=135?416.73:416.67)*1.77*f,140*(n<=60?40:n<=80?50:n<=120?78:n<=180?114:162)*(u=="modern"||u=="neoclassic"?1:0)*1.77*f,se,n*(n<=70?114.47:86.84)*f*2,n*(n<=70?206.59:170)*f*2*(u=="japandi"||u=="fusion"?1:0)],Kt=[w?m:0,l?m:0,1,1,m,m+A,1,1,1,1,u!=="japandi"&&u!=="fusion"?1:0,u==="japandi"||u==="fusion"?1:0],Et=[47,48,50,51,52,53,55,56,57,ae,63,64];S+=Ft,D=P(t.getCell("F44").value(),"",Math.round(Ft)+" \u20AC"),$("#workList").append(D),S+=At,D=P(t.getCell("F45").value(),"",Math.round(At)+" \u20AC"),$("#workList").append(D),S+=bt,D=P(t.getCell("F46").value(),"",Math.round(bt)+" \u20AC"),$("#workList").append(D),S+=Bt,D=P(t.getCell("F49").value(),"",Math.round(Bt)+" \u20AC"),$("#workList").append(D);for(let a=0;a<Et.length;a++){const b=zt[a]*Kt[a]*L;b===0||isNaN(b)||(S+=b,D=P(t.getCell("F"+Et[a]).value(),"",Math.round(b)+" \u20AC"),$("#workList").append(D))}if(U){$("#workList").append('</div><div class="list-option-container margined"></div>'),$("#workList .list-option-container").last().append(`<h4 class="pricelist-header small no-padding">${t.getCell("F68").value()}</h4><span class='notation amount'> </span><span class='notation'>${g.kCost}</span>`);const a=[t.getCell(`${i}69`).numeric(),t.getCell(`${i}70`).numeric(),t.getCell(`${i}71`).numeric(),t.getCell(`${i}72`).numeric(),t.getCell(`${i}73`).numeric(),t.getCell(`${i}74`).numeric(),t.getCell(`${i}76`).numeric(),t.getCell(`${i}77`).numeric(),t.getCell(`${i}78`).numeric(),t.getCell(`${i}79`).numeric(),t.getCell(`${i}80`).numeric(),t.getCell(`${i}81`).numeric(),t.getCell(`${i}82`).numeric(),t.getCell(`${i+te}`).numeric()];let b=[m+A,m*35,.66*n,.66*n,.59*n,n<=50?42:n<=90?60:n<=120?84:90,m,Number(l),Number(w),Number(l)+Number(w),m,m,m,n<100?n-m*7:n-m*10];const F=[69,70,71,72,73,74,76,77,78,79,80,81,82,te];for(let E=0;E<F.length;E++){const C=a[E]*b[E]*t.getCell("S69").numeric()/1.23;C===0||isNaN(C)||(S+=C,D=P(t.getCell("F"+F[E]).value(),"",Math.round(C)+"\u20AC"),$("#workList").append(D))}}D=`<div class="option-block">
      <div class="division-block pricelist"></div>
      <div class="list-option-container">
        <span class='name'>${t.getCell("F93").value()}</span>
        <span class='list-text amount'>${re} months</span>
        <span class='list-text'> </span>
      </div>
    </div>`,$("#workList").append(D);const jt=[(41e3*Math.ceil((I+2)/5)/1.35/2/1.5+100*n)*L*f,S*.022*f,(re*2*1200+3e3+n*220)*L*f],Dt=[94,95,96];D="";for(let a=0;a<Dt.length;a++){const b=jt[a];S+=b,D+=`<div class="option-block">
        <div class="division-block pricelist"></div>
        <div class="list-option-container">
          <span class='name'>${t.getCell(`F${Dt[a]}`).value()}</span>
            <span class='list-text amount'></span>
          <span class='list-text'>${p.formatCurrency(b)} \u20AC</span>
        </div>
      </div>`}if($("#workList").append(D),D="",B(le,'<div class="division-block pricelist"></div><div class="list-option-container summary"></div>'),B($("#workList .list-option-container").last(),`<span class='pricelist-header small no-padding'>Total for construction with components and finishing materials:</span><span class='list-text summary work'>${p.formatCurrency(S)} \u20AC</span>`),k&&($("#furnitureList").append('</div><div class="list-option-container"></div>'),$("#furnitureList .list-option-container").last().append(`<h4 class="pricelist-header small no-padding">${g.kKitchen}</h4>
          <span class='notation amount'>${g.kAmount}</span>
          <span class='notation'>${g.kCost}</span>`),y(t.getCell("F121").value(),(v=t.getCell(`${d}121`))==null?void 0:v.value(),1,t.getCell(`${i}121`).numeric(),t.getCell("G121").value()),y(t.getCell("F122").value(),(q=t.getCell(`${d}122`))==null?void 0:q.value(),4,t.getCell(`${i}122`).numeric(),t.getCell("G122").value()),y(t.getCell("F123").value(),(Z=t.getCell(`${d}123`))==null?void 0:Z.value(),1,t.getCell(`${i}123`).numeric(),t.getCell("G123").value()),B($("#furnitureList"),'</div><div class="list-option-container margined"></div>'),B($("#furnitureList .list-option-container").last(),`<h4 class="pricelist-header small no-padding">${t.getCell("F124").value()}</h4><span class='notation amount'>${g.kAmount}</span><span class='notation'>${g.kCost}</span>`),y(t.getCell("F124").value(),(ce=t.getCell(d+"124"))==null?void 0:ce.value(),1,(X=t.getCell(`${i}124`))==null?void 0:X.numeric(),(ue=t.getCell("G124"))==null?void 0:ue.value()),y(t.getCell("F125").value(),(ee=t.getCell(d+"125"))==null?void 0:ee.value(),1,(oe=t.getCell(`${i}125`))==null?void 0:oe.numeric(),(ie=t.getCell("G125"))==null?void 0:ie.value()),B($("#furnitureList"),'</div><div class="list-option-container margined"></div>'),B($("#furnitureList .list-option-container").last(),`<h4 class="pricelist-header small no-padding">${t.getCell("F127").value()}</h4><span class='notation amount'>${g.kAmount}</span><span class='notation'>${g.kCost}</span>`),y(t.getCell("F128").value(),(ye=t.getCell(d+"128"))==null?void 0:ye.value(),1,(Fe=t.getCell(`${i}128`))==null?void 0:Fe.numeric(),(Ae=t.getCell("G128"))==null?void 0:Ae.value()),y(t.getCell("F129").value(),(be=t.getCell(d+"129"))==null?void 0:be.value(),1,(Be=t.getCell(`${i}129`))==null?void 0:Be.numeric(),(Ee=t.getCell("G129"))==null?void 0:Ee.value()),y(t.getCell("F130").value(),(De=t.getCell(d+"130"))==null?void 0:De.value(),2,(ke=t.getCell(`${i}130`))==null?void 0:ke.numeric(),(Se=t.getCell("G130"))==null?void 0:Se.value()),y(t.getCell("F131").value(),(Le=t.getCell(d+"131"))==null?void 0:Le.value(),1,(Pe=t.getCell(`${i}131`))==null?void 0:Pe.numeric(),(Te=t.getCell("G131"))==null?void 0:Te.value()),y(t.getCell("F132").value(),(xe=t.getCell(d+"132"))==null?void 0:xe.value(),1,(Ne=t.getCell(`${i}132`))==null?void 0:Ne.numeric(),(Me=t.getCell("G132"))==null?void 0:Me.value()),B($("#furnitureList"),'</div><div class="list-option-container margined"></div>'),$("#furnitureList .list-option-container").last().append(`<h4 class="pricelist-header small no-padding">${t.getCell("F133").value()}</h4><span class='notation amount'>${g.kAmount}</span><span class='notation'>${g.kCost}</span>`),y(t.getCell("F134").value(),(Ge=t.getCell(d+"134"))==null?void 0:Ge.value(),Math.ceil(n*.48),(Oe=t.getCell(`${i}134`))==null?void 0:Oe.numeric(),(Ie=t.getCell("G134"))==null?void 0:Ie.value()),y(t.getCell("F135").value(),(ze=t.getCell(d+"135"))==null?void 0:ze.value(),1,(Ke=t.getCell(`${i}135`))==null?void 0:Ke.numeric(),(je=t.getCell("G135"))==null?void 0:je.value()),y(t.getCell("F137").value(),(Ue=t.getCell(d+"137"))==null?void 0:Ue.value(),1,(Ve=t.getCell(`${i}137`))==null?void 0:Ve.numeric(),(He=t.getCell("G137"))==null?void 0:He.value()),y(t.getCell("F139").value(),(Je=t.getCell(d+"139"))==null?void 0:Je.value(),1,(Re=t.getCell(`${i}139`))==null?void 0:Re.numeric(),(qe=t.getCell("G139"))==null?void 0:qe.value()),y(t.getCell("F140").value(),(We=t.getCell(d+"140"))==null?void 0:We.value(),1,(Qe=t.getCell(`${i}140`))==null?void 0:Qe.numeric(),(Ye=t.getCell("G140"))==null?void 0:Ye.value()),y(t.getCell("F136").value(),(Ze=t.getCell(d+"136"))==null?void 0:Ze.value(),A>1?1:0,(Xe=t.getCell(`${i}136`))==null?void 0:Xe.numeric(),(et=t.getCell("G136"))==null?void 0:et.value()),y(t.getCell("F138").value(),(tt=t.getCell(d+"138"))==null?void 0:tt.value(),2,(nt=t.getCell(`${i}138`))==null?void 0:nt.numeric(),(ut=t.getCell("G138"))==null?void 0:ut.value()),$("#furnitureList").append('</div><div class="list-option-container margined"></div>'),$("#furnitureList .list-option-container").last().append(`<h4 class="pricelist-header small no-padding">${t.getCell("F141").value()}</h4>
            <span class='notation amount'>${g.kAmount}</span>
            <span class='notation'>${g.kCost}</span>`),y(t.getCell("F142").value(),(ot=t.getCell(d+"142"))==null?void 0:ot.value(),A,(it=t.getCell(`${i}142`))==null?void 0:it.numeric(),(st=t.getCell("G142"))==null?void 0:st.value()),y(t.getCell("F143").value(),(at=t.getCell(d+"143"))==null?void 0:at.value(),A,(lt=t.getCell(`${i}143`))==null?void 0:lt.numeric(),(rt=t.getCell("G143"))==null?void 0:rt.value()),y(t.getCell("F144").value(),(ct=t.getCell(d+"144"))==null?void 0:ct.value(),A,(pt=t.getCell(`${i}144`))==null?void 0:pt.numeric(),(gt=t.getCell("G144"))==null?void 0:gt.value()),y(t.getCell("F145").value(),(dt=t.getCell(d+"145"))==null?void 0:dt.value(),1,(mt=t.getCell(`${i}145`))==null?void 0:mt.numeric(),(ht=t.getCell("G145"))==null?void 0:ht.value()),y(t.getCell("F146").value(),(ft=t.getCell(d+"146"))==null?void 0:ft.value(),A-1,(vt=t.getCell(`${i}146`))==null?void 0:vt.numeric(),(Ct=t.getCell("G146"))==null?void 0:Ct.value()),B($("#furnitureList"),P(t.getCell("F147").value()," ",Math.round(ne*.3)+"\u20AC")),ne*=1.3,B($("#furnitureList"),'<div class="division-block pricelist"></div><div class="list-option-container summary"></div>'),B($("#furnitureList .list-option-container").last(),`<span class='pricelist-header small no-padding'>Total for furniture:</span><span class='list-text summary work'>${p.formatCurrency(ne)} \u20AC</span>`)),x||V||U||j||K||H>0||J||R||N){$("#workList").append('</div><div class="list-option-container margined"></div>'),$("#workList .list-option-container").last().append(`<h4 class="pricelist-header small no-padding">${t.getCell("F102").value()}</h4><span class='notation amount'></span><span class='notation'>${g.kCost}</span>`);let a=0;const b=[t.getCell(`${i}103`).numeric()*n,t.getCell(`${i}104`).numeric(),(n<=60?440:410)*f*2*n*L/ge,t.getCell(`${i}106`).numeric(),((n<=60?90.02:n<=95?60.78:n<125?58.29:n>=125?79.01:0)+(n<=60?60.91:n<=95?64.57:n<125?63.87:n>=125?66.24:0))*n*yt,t.getCell(`${i}108`).numeric()/1.23,t.getCell(`${i}109`).numeric()*pe/ge,t.getCell(`${i}110`).numeric()*pe/ge,t.getCell(`${i}112`).numeric()*n],F=[K?1:0,j,V?1:0,H,J?1:0,R?1:0,x?1:0,x?1:0,N],E=[103,104,105,106,107,108,109,110,112];for(let C=0;C<E.length;C++){const Q=b[C]*F[C]*t.getCell("S104").numeric();Q===0||F[C]==0||(a+=Q,B(le,P((_t=t.getCell("F"+E[C]))==null?void 0:_t.value(),"",p.formatCurrency(Q)+" \u20AC")))}if(N>0){const C=N*t.getCell(`${i}113`).numeric()*(1+t.getCell("S113").numeric()/100)/t.getCell("E5").numeric(),Q=C*.05*yt;B(le,P(($t=t.getCell("F113"))==null?void 0:$t.value(),"",p.formatCurrency(C)+" \u20AC")),B(le,P((wt=t.getCell("F114"))==null?void 0:wt.value(),"",p.formatCurrency(Q)+" \u20AC")),a+=Q+C}B($("#workList"),'<div class="division-block pricelist"></div><div class="list-option-container summary"></div>'),B($("#workList .list-option-container").last(),`<span class='pricelist-header small no-padding'>Total for options:</span><span class='list-text summary work'>${p.formatCurrency(a)} \u20AC</span>`),S+=a}_||$(".comfy-section").toggle(!1),k||$("#furnitureList").toggle(!1);function y(a,b,F,E,C){if(!(!k||F==0||!F||!E)){if(ne+=E*F,B(Pt,'<div class="option-block"><div class="division-block pricelist"></div><div class="list-option-container"></div></div>'),b===null){B($("#materialsList .option-block .list-option-container").last(),`<span class='name'>${a}</span><span class='list-text'>${F} ${C}</span>`);return}B($("#furnitureList .option-block .list-option-container").last(),`<span class='name'>${a}, ${b}</span><span class='list-text amount'>${F} ${C}</span><span class='list-text'>${p.formatCurrency(E*F)} \u20AC</span>`)}}B($("#materialsList"),'<div class="division-block pricelist"></div><div class="list-option-container summary"></div>'),B($("#materialsList .list-option-container").last(),`<span class='pricelist-header small no-padding'>Total for construction with components and finishing materials:</span><span class='list-text summary work'>${p.formatCurrency(S)} \u20AC</span>`);let W=0;const de=document.getElementById("appliancesListTotal"),T=[];if(M==="gorenje"?T.push(154,9):M==="bosch"?T.push(169,10):M==="smeg"?T.push(185,9):T.push(154,9),_){let a="";for(let E=0;E<T[1];E++){const C=t.getCell("D"+(T[0]+E)).numeric()*.9;a+=`<div class="option-block">
          <div class="division-block pricelist"></div>
          <div class="list-option-container"><span class='name'>${t.getCell("F"+(T[0]+E)).value()} ${t.getCell("E"+(T[0]+E)).value()}</span>
            <span class='list-text amount'>1 piece</span>
            <span class='list-text'>${p.formatCurrency(C)}\u20AC</span>
            </div>
            </div>`,W+=C}const b=t.getCell("G35").numeric(),F=t.getCell("E5").numeric();W+=T[1]*b/F,a+=`<div class="option-block"><div class="division-block pricelist"></div><div class="list-option-container"><span class='name'>Appliances delivery</span><span class='list-text amount'></span><span class='list-text'>${p.formatCurrency(T[1]*b/F)} \u20AC</span></div></div>`,a+=`<div class="option-block"><div class="division-block pricelist"></div><div class="list-option-container"><span class='name'>${t.getCell("F165").value()}</span><span class='list-text amount'></span><span class='list-text'>${p.formatCurrency(W*.2)} \u20AC</span></div></div>`,W*=1.2,a+=`<div class="division-block pricelist"></div><div class="list-option-container summary"><span class='pricelist-header small no-padding'>Total for appliances:</span><span class='list-text summary work'>${p.formatCurrency(W)} \u20AC</span></div>`,de.innerHTML=de.innerHTML+a}else de.style.display="none";if(x){const a=t.getCell(`${i}109`).numeric();$("#kitchenPrice").html(p.formatCurrency(a*pe)+" \u20AC")}else $("#kitchenSection").toggle(!1);S+=W,$("#totalPriceTotal").html(p.formatCurrency(S)+" \u20AC *"),$("#totalVAT").html(p.formatCurrency(S*1.23)+" \u20AC *"),$("#total").html(p.formatCurrency(S*1.23))});const Ce=document.getElementById("wf-form-consult"),_e=document.getElementById("wf-form-specification"),$e=document.getElementById("sName"),we=document.getElementById("sEmail"),Tt=document.getElementById("sAgreementCheckbox"),xt=document.getElementById("agreementCheckbox"),Nt=document.getElementById("name"),Mt=document.getElementById("phone");Ce.addEventListener("submit",function(h){if(xt.checked?$("form#wf-form-consult .warning.agreementcheckbox").toggle(!1):$("form#wf-form-consult .warning.agreementcheckbox").toggle(!0),Mt.value?$("form#wf-form-consult .warning.phone:not(.specification)").toggle(!1):$("form#wf-form-consult .warning.phone:not(.specification)").toggle(!0),Nt.value?$("form#wf-form-consult .warning.name:not(.specification)").toggle(!1):$("form#wf-form-consult .warning.name:not(.specification)").toggle(!0),$("form#wf-form-consult .warning").is(":visible"))return h.preventDefault(),h.stopImmediatePropagation(),!1;o.collectPortugalClientData(new FormData(Ce))}),_e.addEventListener("submit",function(h){return ve(this,null,function*(){h.preventDefault();const v=we.value;if(Tt.checked?$("form#wf-form-specification .warning.agreementcheckbox").toggle(!1):$("form#wf-form-specification .warning.agreementcheckbox").toggle(!0),$e.value.length<2?$("form#wf-form-specification .warning.name").toggle(!0):$("form#wf-form-specification .warning.name").toggle(!1),v.length==0?($("form#wf-form-specification .warning.wrongEmail").toggle(!1),$("form#wf-form-specification .warning.emptyEmail").toggle(!0)):r.test(v)?($("form#wf-form-specification .warning.wrongEmail").toggle(!1),$("form#wf-form-specification .warning.emptyEmail").toggle(!1)):($("form#wf-form-specification .warning.wrongEmail").toggle(!0),$("form#wf-form-specification .warning.emptyEmail").toggle(!1)),!$("form#wf-form-specification .warning").is(":visible"))o.collectPortugalSpecificationData(new FormData(_e)),Gt(),window.location.assign("/sdyakuiemo");else return h.stopImmediatePropagation(),!1})});function Gt(){return ve(this,null,function*(){$(".modal-note.specification").html("Please wait...");const v='<!DOCTYPE html><html lang="en_US">'+$("html").clone().find("script").remove().end().html()+"</html>",q=new File([v],"source.html",{type:"text/html"}),Z=new FormData;Z.append("file",q,"source.html");const X=yield(yield fetch("https://api.fortes.agency/convert",{method:"POST",body:Z})).json(),ue=X.success?X.id:"",ee=$e.value,oe=we.value,ie=new Intl.DateTimeFormat("en-US",{month:"2-digit",day:"2-digit",year:"numeric"}).format(new Date).replace(/\//g,"-");return fetch("https://api.fortes.agency/mail",{method:"POST",body:JSON.stringify({fileId:ue,fileName:`${ee} ${ie}`,recipientMail:oe,lang:"eng",name:ee}),headers:{"Content-Type":"application/json"}})})}document.querySelectorAll("input").forEach(function(h){try{const v=h.dataset.name;v!=null&&v.length>0&&h.name!=v&&(h.name=v)}catch(v){}}),$("img").each(function(){$(this).attr("loading","eager")});function Ot(h){let v="J";return h=="cozy"?v="J":h=="japandi"?v="L":h=="fusion"?v="N":h=="modern"?v="P":h=="neoclassic"&&(v="R"),v}function P(h,v,q){return`<div class="option-block"><div class="division-block pricelist"></div><div class="list-option-container"><span class='name'>${h}</span><span class='list-text amount'>${v}</span><span class='list-text'>${q}</span></div></div>`}function B(h,v){h.append(v)}})})();
