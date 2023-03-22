(()=>{"use strict";class e{static formatCurrency(e){return Intl.NumberFormat("uk-UA",{maximumFractionDigits:2}).format(e)}}class t{constructor(e,t){this.address=e,this._value=t}hasValue(){return null!==this._value&&this._value.length>0}value(){return this._value}numeric(){return parseFloat(this._value)}formattedNumerical(){return e.formatCurrency(parseFloat(this.value()))}}class n{constructor(e){this.cells=e}getCell(e){const n=this.cells.filter((t=>t.address===e));return 0==n.length?new t(e,"0"):n[0]}}var l=(e=>(e[e.uk=0]="uk",e[e.en=1]="en",e))(l||{});class i{constructor(e,t=!1){if(t)switch(e){case 0:this._init();case 1:this._initPortugal();default:this._init()}}get(e){try{return JSON.parse(localStorage.getItem(e))}catch(t){return localStorage.getItem(e)}}set(e,t){localStorage.setItem(e,t.toString())}_init(){this.set("style","cozy"),this.set("bath",!0),this.set("shower",!1),this.set("ceiling","stretch ceiling"),this.set("flooring","laminat"),this.set("hygienic_shower",!1),this.set("second_gypsum_layer",!1),this.set("floor_screed",!1),this.set("heated_flooring",!1),this.set("denoising",!1),this.set("entrance_doors",!1),this.set("conditioning",!1),this.set("amount_of_rooms",2),this.set("amount_of_bathrooms",1),this.set("appliances","gorenje"),this.set("appliances_bool_total",!1),this.set("furniture_bool",!0),this.set("space",50),this.set("color",1)}_initPortugal(){this.set("style","cozy"),this.set("color",1),this.set("space",50),this.set("amount_of_rooms",2),this.set("amount_of_bathrooms",1),this.set("bath",!0),this.set("shower",!1),this.set("flooring","laminat"),this.set("finishing_materials",!1),this.set("demontage",!1),this.set("cement_screed",!1),this.set("heated_flooring",0),this.set("denoising",!1),this.set("entrance_doors",!1),this.set("windows_installation",0),this.set("builtin_furniture",!1),this.set("conditioning",0),this.set("furniture_bool",!1),this.set("appliances_bool_total",!1),this.set("appliances","gorenje"),this.set("transportation_expenses",5)}storageToRequestBody(e){const t={};for(const n in e)"length"!==n&&"costPerMetre"!=n&&"color"!=n&&("true"!==String(e[n])?"false"!==String(e[n])?isFinite(Number(e[n]))?t[n]=Number(e[n]):t[n]=e[n]:t[n]=0:t[n]=1);return JSON.stringify(t)}}class o{static numberToEncodedLetter(e){if(isNaN(e))return;let t,n=(e=Math.abs(Math.floor(e)))%26,l=e/26;return e<=26?this.numToLetter(e):(l>=1&&(0===n&&l--,t=this.numberToEncodedLetter(l)),0===n&&(n=26),t+this.numToLetter(n))}static numToLetter(e){if(!(e>26||e<0))return 0===e?"":this.alphabet.slice(e-1,e)}}o.alphabet="ABCDEFGHIJKLMNOPQRSTUVWXYZ";class s{}s.kCost="Cost",s.kAmount="Amount",s.kKitchen="Kitchen",s.kLMonth="month";var a=(e,t,n)=>new Promise(((l,i)=>{var o=e=>{try{a(n.next(e))}catch(e){i(e)}},s=e=>{try{a(n.throw(e))}catch(e){i(e)}},a=e=>e.done?l(e.value):Promise.resolve(e.value).then(o,s);a((n=n.apply(e,t)).next())}));class r{constructor(e){this._storage=e}collectPortugalClientData(e){return a(this,null,(function*(){return fetch("https://script.google.com/macros/s/AKfycbw8iA1vk33T5UIZo_SAFw2gvvI1-sMY9UEQ3i8sDTaNsB2yJ2MKGphRa8PkJmqhgxB51A/exec",{method:"POST",body:e}).catch((e=>console.error("Error!",e.message)))}))}collectPortugalCalcData(){return a(this,null,(function*(){const t=this._storage.get("style"),n=Boolean(this._storage.get("appliances_bool_total")),l=Boolean(this._storage.get("furniture_bool")),i=this._storage.get("space"),o=Boolean(this._storage.get("bath")),s=Boolean(this._storage.get("shower")),a=this._storage.get("amount_of_rooms"),r=this._storage.get("amount_of_bathrooms"),c=Boolean(this._storage.get("demontage")),u=this._storage.get("windows_installation"),g=Boolean(this._storage.get("finishing_materials")),p=Boolean(this._storage.get("cement_screed")),d=Boolean(this._storage.get("builtin_furiture")),m=this._storage.get("heated_flooring"),v=Boolean(this._storage.get("denoising")),h=Boolean(this._storage.get("entrance_doors")),f=this._storage.get("conditioning"),C=this._storage.get("flooring"),$=this._storage.get("transportation_expenses"),_=this._storage.get("appliances"),w=this._storage.get("summedPrice"),y=this._storage.get("costPerMetre"),b=(i<=40?3:i<=80?4:i<=100?5:i<=130?6:i<=150?7:i<=175?8:9)+("modern"==t||"neoclassic"==t?1:0),k=new FormData;return k.append("Style",t),k.append("Total cost VAT",e.formatCurrency(w)),k.append("Total cost",e.formatCurrency(w/1.23)),k.append("Cost per metre",e.formatCurrency(y)),k.append("Cost per metre VAT",e.formatCurrency(1.23*y)),k.append("Area",i.toString()),k.append("Number of bedrooms",a.toString()),k.append("Number of bathrooms",r.toString()),k.append("Bath",o?"1":"0"),k.append("Shower",s?"1":"0"),k.append("Distance from Lisbon",$.toString()),k.append("Flooring",C),k.append("Finishing materials",g?"1":"0"),k.append("Dismantling works",c?"1":"0"),k.append("Cement screed",p?"1":"0"),k.append("Entrance doors",h?"1":"0"),k.append("Soundproofing",v?"1":"0"),k.append("Built-in furniture",d?"1":"0"),k.append("Underfloor heating",m.toString()),k.append("Air conditioning",f.toString()),k.append("Window installation",u.toString()),k.append("Decorating",l?"1":"0"),k.append("Appliances",n?_:"0"),k.append("Time to completion",b.toString()),fetch("https://script.google.com/macros/s/AKfycbwnwi3SZ8gK3zSYW2DEoc6BtY9HS1stpRSHPW6pATmX2UawetpC-74YPZ5LjjX282Ki/exec",{method:"POST",body:k}).catch((e=>console.error(e)))}))}collectPortugalSpecificationData(t){return a(this,null,(function*(){const n=this._storage.get("style"),l=Boolean(this._storage.get("appliances_bool_total")),i=Boolean(this._storage.get("furniture_bool")),o=this._storage.get("space"),s=Boolean(this._storage.get("bath")),a=Boolean(this._storage.get("shower")),r=this._storage.get("amount_of_rooms"),c=this._storage.get("amount_of_bathrooms"),u=Boolean(this._storage.get("demontage")),g=this._storage.get("windows_installation"),p=Boolean(this._storage.get("finishing_materials")),d=Boolean(this._storage.get("cement_screed")),m=Boolean(this._storage.get("builtin_furiture")),v=this._storage.get("heated_flooring"),h=Boolean(this._storage.get("denoising")),f=Boolean(this._storage.get("entrance_doors")),C=this._storage.get("conditioning"),$=this._storage.get("flooring"),_=this._storage.get("transportation_expenses"),w=this._storage.get("appliances"),y=this._storage.get("summedPrice"),b=this._storage.get("costPerMetre"),k=(o<=40?3:o<=80?4:o<=100?5:o<=130?6:o<=150?7:o<=175?8:9)+("modern"==n||"neoclassic"==n?1:0);return t.append("Style",n),t.append("Total cost VAT",e.formatCurrency(y)),t.append("Total cost",e.formatCurrency(y/1.23)),t.append("Cost per metre",e.formatCurrency(b)),t.append("Cost per metre VAT",e.formatCurrency(1.23*b)),t.append("Area",o.toString()),t.append("Number of bedrooms",r.toString()),t.append("Number of bathrooms",c.toString()),t.append("Bath",s?"1":"0"),t.append("Shower",a?"1":"0"),t.append("Distance from Lisbon",_.toString()),t.append("Flooring",$),t.append("Finishing materials",p?"1":"0"),t.append("Dismantling works",u?"1":"0"),t.append("Cement screed",d?"1":"0"),t.append("Entrance doors",f?"1":"0"),t.append("Soundproofing",h?"1":"0"),t.append("Built-in furniture",m?"1":"0"),t.append("Underfloor heating",v.toString()),t.append("Air conditioning",C.toString()),t.append("Window installation",g.toString()),t.append("Decorating",i?"1":"0"),t.append("Appliances",l?w:"0"),t.append("Time to completion",k.toString()),fetch("https://script.google.com/macros/s/AKfycbzwN8RKdZRUWDBLNnvUwxxK9FXHUVPeqPpGFJYu9NT9zLsc34JKzIHgHz1CwFbNYGzs/exec",{method:"POST",body:t}).catch((e=>console.error(e)))}))}}var c=(e,t,n)=>new Promise(((l,i)=>{var o=e=>{try{a(n.next(e))}catch(e){i(e)}},s=e=>{try{a(n.throw(e))}catch(e){i(e)}},a=e=>e.done?l(e.value):Promise.resolve(e.value).then(o,s);a((n=n.apply(e,t)).next())}));$((function(){const a=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,u=new i(l.en,!1),g=new r(u),p=u.get("style"),d=(function(e){let t="J";"cozy"==e?t="J":"japandi"==e?t="L":"fusion"==e?t="N":"modern"==e?t="P":"neoclassic"==e&&(t="R")}(p),Boolean(u.get("appliances_bool_total"))),m=Boolean(u.get("furniture_bool")),v=u.get("space"),h=Boolean(u.get("bath")),f=Boolean(u.get("shower")),C=u.get("amount_of_rooms"),_=u.get("amount_of_bathrooms"),w=Boolean(u.get("demontage")),y=u.get("windows_installation"),b=Boolean(u.get("finishing_materials")),k=Boolean(u.get("cement_screed")),F=Boolean(u.get("builtin_furiture")),S=u.get("heated_flooring"),L=Boolean(u.get("denoising")),B=Boolean(u.get("entrance_doors")),x=u.get("conditioning"),P=u.get("flooring"),T=u.get("transportation_expenses"),A=u.get("appliances"),N=u.get("summedPrice"),G=u.get("costPerMetre"),E=$("#furnitureList");let M="",D="",I=0,K=0;const z=(v<=40?3:v<=80?4:v<=100?5:v<=130?6:v<=150?7:v<=175?8:9)+("modern"==p||"neoclassic"==p?1:0);function j(e,t,n){return`<div class="option-block"><div class="division-block pricelist"></div><div class="list-option-container"><span class='name'>${e}</span><span class='list-text amount'>${t}</span><span class='list-text'>${n}</span></div></div>`}function J(e,t){e.append(t)}$("#months").html(z.toString()),$("#total").html(e.formatCurrency(N)),$("#space").html(v.toString()),$("#pricePerMetre").html(e.formatCurrency(G)),fetch("https://docs.google.com/spreadsheets/d/1KkkpKbytztt48mwP1RGgpVFpfke8-IqB0KLWA8Sn2FE/gviz/tq?tqx=out:json&gid=1219923480").then((e=>e.text())).then((l=>{var i,a,r,c,g,N,G,O,U,V,R,q,H,W,Y,Z,Q,X,ee,te,ne,le,ie,oe,se,ae,re,ce,ue,ge,pe,de,me,ve,he,fe,Ce,$e,_e,we,ye,be,ke,Fe,Se,Le,Be,xe,Pe,Te,Ae,Ne,Ge,Ee,Me,De,Ie,Ke,ze,je,Je,Oe,Ue;const Ve=JSON.parse(l.substring(l.length-2,0).replace("/*O_o*/\ngoogle.visualization.Query.setResponse(","")).table.rows,Re=new n(Ve.map(((e,n)=>e.c.map((function(e,l){var i;if(null!==e&&null!==e.v)return new t(`${o.numberToEncodedLetter(l+1)}${n+1}`,null!=(i=e.v)?i:e.f)})).filter((e=>null!=e)))).reduce(((e,t)=>[...e,...t]))),qe=Re.getCell("S46").numeric(),He=Re.getCell("S44").numeric(),We=Re.getCell("S69").numeric(),Ye=Re.getCell("T103").numeric(),Ze=Re.getCell("S104").numeric();"cozy"==p?(M="I",D="A"):"japandi"==p?(M="K",D="B"):"fusion"==p?(M="M",D="C"):"modern"==p?(M="O",D="D"):"neoclassic"==p&&(M="Q",D="E");let Qe,Xe,et=0;"vynil"==P?(Qe="60",Xe="86",et=v*(v<70?220.33:161.8)*qe*3):"parket"==P?(Qe="61",Xe="87",et=v*(v<80?369.96:240.31)*qe*2):(Qe="59",Xe="85",et=v*(v<70?201.26:198.81)*qe*2);const tt=$("#workList");let nt="";const lt=2523*((C>0?6:0)+(h?2:0)+(f?2:0)+2*_)*qe*2*He+(h?1:0)*_*2500*2*He*qe-950*qe/41+4e3*(f?1:0)*_*2*He*qe-800*qe/41,it=1974*((C>0?3:0)+(h?1:0)+(f?1:0)+2*_)*qe*2*He,ot=v*_*(v<=100?83.2:33.98)*He*qe*2,st=(v/C<=50?850*v:24*C*3519)*qe*He,at=[Re.getCell("J47").numeric()/He,Re.getCell("J48").numeric()/He,v/C<=50?v*(v<=60?1142.78:v<=95?883.87:819.43)*qe*1.45:4*Math.sqrt(v)*3*600*qe,v*(v<=60?283.08:v<=95?281.22:v<=124?338.33:362.47)*qe*1.35*1.45,v*(v<=60?700.67:v<=100?687.36:v<=130?341.25:317.36)*qe*1.1*1.5/2,2100*qe,(v/C<50?1.77*(v<=50?1e3*v:990*v):4*Math.sqrt(v)*3*600)*qe,v*(v<=60?418.86:v<=100?416.29:v<=135?416.73:416.67)*1.77*qe,140*(v<=60?40:v<=80?50:v<=120?78:v<=180?114:162)*("modern"==p||"neoclassic"==p?1:0)*1.77*qe,et,v*(v<=70?114.47:86.84)*qe*2,v*(v<=70?206.59:170)*qe*2*("japandi"==p||"fusion"==p?1:0)],rt=[f?_:0,h?_:0,1,1,_,_+C,1,1,1,1,"japandi"!==p&&"fusion"!==p?1:0,"japandi"===p||"fusion"===p?1:0],ct=[47,48,50,51,52,53,55,56,57,Qe,63,64];I+=lt,nt=j(Re.getCell("F44").value(),"",Math.round(lt)+" €"),$("#workList").append(nt),I+=it,nt=j(Re.getCell("F45").value(),"",Math.round(it)+" €"),$("#workList").append(nt),I+=ot,nt=j(Re.getCell("F46").value(),"",Math.round(ot)+" €"),$("#workList").append(nt),I+=st,nt=j(Re.getCell("F49").value(),"",Math.round(st)+" €"),$("#workList").append(nt);for(let e=0;e<ct.length;e++){const t=at[e]*rt[e]*He;0===t||isNaN(t)||(I+=t,nt=j(Re.getCell("F"+ct[e]).value(),"",Math.round(t)+" €"),$("#workList").append(nt))}if(b){$("#workList").append('</div><div class="list-option-container margined"></div>'),$("#workList .list-option-container").last().append(`<h4 class="pricelist-header small no-padding">${Re.getCell("F68").value()}</h4><span class='notation amount'> </span><span class='notation'>${s.kCost}</span>`);const e=[Re.getCell(`${M}69`).numeric(),Re.getCell(`${M}70`).numeric(),Re.getCell(`${M}71`).numeric(),Re.getCell(`${M}72`).numeric(),Re.getCell(`${M}73`).numeric(),Re.getCell(`${M}74`).numeric(),Re.getCell(`${M}76`).numeric(),Re.getCell(`${M}77`).numeric(),Re.getCell(`${M}78`).numeric(),Re.getCell(`${M}79`).numeric(),Re.getCell(`${M}80`).numeric(),Re.getCell(`${M}81`).numeric(),Re.getCell(`${M}82`).numeric(),Re.getCell(`${M+Xe}`).numeric()];let t=[_+C,35*_,.66*v,.66*v,.59*v,v<=50?42:v<=90?60:v<=120?84:90,_,Number(h),Number(f),Number(h)+Number(f),_,_,_,v<100?v-7*_:v-10*_];const n=[69,70,71,72,73,74,76,77,78,79,80,81,82,Xe];for(let l=0;l<n.length;l++){const i=e[l]*t[l]*Re.getCell("S69").numeric()/1.23;0===i||isNaN(i)||(I+=i,nt=j(Re.getCell("F"+n[l]).value(),"",Math.round(i)+"€"),$("#workList").append(nt))}}nt=`<div class="option-block">\n      <div class="division-block pricelist"></div>\n      <div class="list-option-container">\n        <span class='name'>${Re.getCell("F93").value()}</span>\n        <span class='list-text amount'>${z} months</span>\n        <span class='list-text'> </span>\n      </div>\n    </div>`,$("#workList").append(nt);const ut=[(41e3*Math.ceil((T+2)/5)/1.35/2/1.5+100*v)*He*qe,.022*I*qe,(2*z*1200+3e3+220*v)*He*qe],gt=[94,95,96];nt="";for(let t=0;t<gt.length;t++){const n=ut[t];I+=n,nt+=`<div class="option-block">\n        <div class="division-block pricelist"></div>\n        <div class="list-option-container">\n          <span class='name'>${Re.getCell(`F${gt[t]}`).value()}</span>\n            <span class='list-text amount'></span>\n          <span class='list-text'>${e.formatCurrency(n)} €</span>\n        </div>\n      </div>`}$("#workList").append(nt),nt="",J(tt,'<div class="division-block pricelist"></div><div class="list-option-container summary"></div>'),J($("#workList .list-option-container").last(),`<span class='pricelist-header small no-padding'>Total for construction with components and finishing materials:</span><span class='list-text summary work'>${e.formatCurrency(I)} €</span>`),m&&($("#furnitureList").append('</div><div class="list-option-container"></div>'),$("#furnitureList .list-option-container").last().append(`<h4 class="pricelist-header small no-padding">${s.kKitchen}</h4>\n          <span class='notation amount'>${s.kAmount}</span>\n          <span class='notation'>${s.kCost}</span>`),pt(Re.getCell("F121").value(),null==(i=Re.getCell(`${D}121`))?void 0:i.value(),1,Re.getCell(`${M}121`).numeric(),Re.getCell("G121").value()),pt(Re.getCell("F122").value(),null==(a=Re.getCell(`${D}122`))?void 0:a.value(),4,Re.getCell(`${M}122`).numeric(),Re.getCell("G122").value()),pt(Re.getCell("F123").value(),null==(r=Re.getCell(`${D}123`))?void 0:r.value(),1,Re.getCell(`${M}123`).numeric(),Re.getCell("G123").value()),J($("#furnitureList"),'</div><div class="list-option-container margined"></div>'),J($("#furnitureList .list-option-container").last(),`<h4 class="pricelist-header small no-padding">${Re.getCell("F124").value()}</h4><span class='notation amount'>${s.kAmount}</span><span class='notation'>${s.kCost}</span>`),pt(Re.getCell("F124").value(),null==(c=Re.getCell(D+"124"))?void 0:c.value(),1,null==(g=Re.getCell(`${M}124`))?void 0:g.numeric(),null==(N=Re.getCell("G124"))?void 0:N.value()),pt(Re.getCell("F125").value(),null==(G=Re.getCell(D+"125"))?void 0:G.value(),1,null==(O=Re.getCell(`${M}125`))?void 0:O.numeric(),null==(U=Re.getCell("G125"))?void 0:U.value()),J($("#furnitureList"),'</div><div class="list-option-container margined"></div>'),J($("#furnitureList .list-option-container").last(),`<h4 class="pricelist-header small no-padding">${Re.getCell("F127").value()}</h4><span class='notation amount'>${s.kAmount}</span><span class='notation'>${s.kCost}</span>`),pt(Re.getCell("F128").value(),null==(V=Re.getCell(D+"128"))?void 0:V.value(),1,null==(R=Re.getCell(`${M}128`))?void 0:R.numeric(),null==(q=Re.getCell("G128"))?void 0:q.value()),pt(Re.getCell("F129").value(),null==(H=Re.getCell(D+"129"))?void 0:H.value(),1,null==(W=Re.getCell(`${M}129`))?void 0:W.numeric(),null==(Y=Re.getCell("G129"))?void 0:Y.value()),pt(Re.getCell("F130").value(),null==(Z=Re.getCell(D+"130"))?void 0:Z.value(),2,null==(Q=Re.getCell(`${M}130`))?void 0:Q.numeric(),null==(X=Re.getCell("G130"))?void 0:X.value()),pt(Re.getCell("F131").value(),null==(ee=Re.getCell(D+"131"))?void 0:ee.value(),1,null==(te=Re.getCell(`${M}131`))?void 0:te.numeric(),null==(ne=Re.getCell("G131"))?void 0:ne.value()),pt(Re.getCell("F132").value(),null==(le=Re.getCell(D+"132"))?void 0:le.value(),1,null==(ie=Re.getCell(`${M}132`))?void 0:ie.numeric(),null==(oe=Re.getCell("G132"))?void 0:oe.value()),J($("#furnitureList"),'</div><div class="list-option-container margined"></div>'),$("#furnitureList .list-option-container").last().append(`<h4 class="pricelist-header small no-padding">${Re.getCell("F133").value()}</h4><span class='notation amount'>${s.kAmount}</span><span class='notation'>${s.kCost}</span>`),pt(Re.getCell("F134").value(),null==(se=Re.getCell(D+"134"))?void 0:se.value(),Math.ceil(.48*v),null==(ae=Re.getCell(`${M}134`))?void 0:ae.numeric(),null==(re=Re.getCell("G134"))?void 0:re.value()),pt(Re.getCell("F135").value(),null==(ce=Re.getCell(D+"135"))?void 0:ce.value(),1,null==(ue=Re.getCell(`${M}135`))?void 0:ue.numeric(),null==(ge=Re.getCell("G135"))?void 0:ge.value()),pt(Re.getCell("F137").value(),null==(pe=Re.getCell(D+"137"))?void 0:pe.value(),1,null==(de=Re.getCell(`${M}137`))?void 0:de.numeric(),null==(me=Re.getCell("G137"))?void 0:me.value()),pt(Re.getCell("F139").value(),null==(ve=Re.getCell(D+"139"))?void 0:ve.value(),1,null==(he=Re.getCell(`${M}139`))?void 0:he.numeric(),null==(fe=Re.getCell("G139"))?void 0:fe.value()),pt(Re.getCell("F140").value(),null==(Ce=Re.getCell(D+"140"))?void 0:Ce.value(),1,null==($e=Re.getCell(`${M}140`))?void 0:$e.numeric(),null==(_e=Re.getCell("G140"))?void 0:_e.value()),pt(Re.getCell("F136").value(),null==(we=Re.getCell(D+"136"))?void 0:we.value(),C>1?1:0,null==(ye=Re.getCell(`${M}136`))?void 0:ye.numeric(),null==(be=Re.getCell("G136"))?void 0:be.value()),pt(Re.getCell("F138").value(),null==(ke=Re.getCell(D+"138"))?void 0:ke.value(),2,null==(Fe=Re.getCell(`${M}138`))?void 0:Fe.numeric(),null==(Se=Re.getCell("G138"))?void 0:Se.value()),$("#furnitureList").append('</div><div class="list-option-container margined"></div>'),$("#furnitureList .list-option-container").last().append(`<h4 class="pricelist-header small no-padding">${Re.getCell("F141").value()}</h4>\n            <span class='notation amount'>${s.kAmount}</span>\n            <span class='notation'>${s.kCost}</span>`),pt(Re.getCell("F142").value(),null==(Le=Re.getCell(D+"142"))?void 0:Le.value(),C,null==(Be=Re.getCell(`${M}142`))?void 0:Be.numeric(),null==(xe=Re.getCell("G142"))?void 0:xe.value()),pt(Re.getCell("F143").value(),null==(Pe=Re.getCell(D+"143"))?void 0:Pe.value(),C,null==(Te=Re.getCell(`${M}143`))?void 0:Te.numeric(),null==(Ae=Re.getCell("G143"))?void 0:Ae.value()),pt(Re.getCell("F144").value(),null==(Ne=Re.getCell(D+"144"))?void 0:Ne.value(),C,null==(Ge=Re.getCell(`${M}144`))?void 0:Ge.numeric(),null==(Ee=Re.getCell("G144"))?void 0:Ee.value()),pt(Re.getCell("F145").value(),null==(Me=Re.getCell(D+"145"))?void 0:Me.value(),1,null==(De=Re.getCell(`${M}145`))?void 0:De.numeric(),null==(Ie=Re.getCell("G145"))?void 0:Ie.value()),pt(Re.getCell("F146").value(),null==(Ke=Re.getCell(D+"146"))?void 0:Ke.value(),C-1,null==(ze=Re.getCell(`${M}146`))?void 0:ze.numeric(),null==(je=Re.getCell("G146"))?void 0:je.value()),J($("#furnitureList"),j(Re.getCell("F147").value()," ",Math.round(.3*K)+"€")),K*=1.3,J($("#furnitureList"),'<div class="division-block pricelist"></div><div class="list-option-container summary"></div>'),J($("#furnitureList .list-option-container").last(),`<span class='pricelist-header small no-padding'>Total for furniture:</span><span class='list-text summary work'>${e.formatCurrency(K)} €</span>`));if(F||k||b||y||w||S>0||L||B||x){$("#workList").append('</div><div class="list-option-container margined"></div>'),$("#workList .list-option-container").last().append(`<h4 class="pricelist-header small no-padding">${Re.getCell("F102").value()}</h4><span class='notation amount'></span><span class='notation'>${s.kCost}</span>`);let t=0;const n=[Re.getCell(`${M}103`).numeric()*v,Re.getCell(`${M}104`).numeric(),(v<=60?440:410)*qe*2*v*He/Ze,Re.getCell(`${M}106`).numeric(),((v<=60?90.02:v<=95?60.78:v<125?58.29:v>=125?79.01:0)+(v<=60?60.91:v<=95?64.57:v<125?63.87:v>=125?66.24:0))*v*Ye,Re.getCell(`${M}108`).numeric()/1.23,Re.getCell(`${M}109`).numeric()*We/Ze,Re.getCell(`${M}110`).numeric()*We/Ze,Re.getCell(`${M}112`).numeric()*v],l=[w?1:0,y,k?1:0,S,L?1:0,B?1:0,F?1:0,F?1:0,x],i=[103,104,105,106,107,108,109,110,112];for(let o=0;o<i.length;o++){const s=n[o]*l[o]*Re.getCell("S104").numeric();0!==s&&0!=l[o]&&(t+=s,J(tt,j(null==(Je=Re.getCell("F"+i[o]))?void 0:Je.value(),"",e.formatCurrency(s)+" €")))}if(x>0){const n=x*Re.getCell(`${M}113`).numeric()*(1+Re.getCell("S113").numeric()/100)/Re.getCell("E5").numeric(),l=.05*n*Ye;J(tt,j(null==(Oe=Re.getCell("F113"))?void 0:Oe.value(),"",e.formatCurrency(n)+" €")),J(tt,j(null==(Ue=Re.getCell("F114"))?void 0:Ue.value(),"",e.formatCurrency(l)+" €")),t+=l+n}J($("#workList"),'<div class="division-block pricelist"></div><div class="list-option-container summary"></div>'),J($("#workList .list-option-container").last(),`<span class='pricelist-header small no-padding'>Total for options:</span><span class='list-text summary work'>${e.formatCurrency(t)} €</span>`),I+=t}function pt(t,n,l,i,o){m&&0!=l&&l&&i&&(K+=i*l,J(E,'<div class="option-block"><div class="division-block pricelist"></div><div class="list-option-container"></div></div>'),null!==n?J($("#furnitureList .option-block .list-option-container").last(),`<span class='name'>${t}, ${n}</span><span class='list-text amount'>${l} ${o}</span><span class='list-text'>${e.formatCurrency(i*l)} €</span>`):J($("#materialsList .option-block .list-option-container").last(),`<span class='name'>${t}</span><span class='list-text'>${l} ${o}</span>`))}d||$(".comfy-section").toggle(!1),m||$("#furnitureList").toggle(!1),J($("#materialsList"),'<div class="division-block pricelist"></div><div class="list-option-container summary"></div>'),J($("#materialsList .list-option-container").last(),`<span class='pricelist-header small no-padding'>Total for construction with components and finishing materials:</span><span class='list-text summary work'>${e.formatCurrency(I)} €</span>`);let dt=0;const mt=document.getElementById("appliancesListTotal"),vt=[];if("gorenje"===A?vt.push(154,9):"bosch"===A?vt.push(169,10):"smeg"===A?vt.push(185,9):vt.push(154,9),d){let t="";for(let n=0;n<vt[1];n++){const l=.9*Re.getCell("D"+(vt[0]+n)).numeric();t+=`<div class="option-block">\n          <div class="division-block pricelist"></div>\n          <div class="list-option-container"><span class='name'>${Re.getCell("F"+(vt[0]+n)).value()} ${Re.getCell("E"+(vt[0]+n)).value()}</span>\n            <span class='list-text amount'>1 piece</span>\n            <span class='list-text'>${e.formatCurrency(l)}€</span>\n            </div>\n            </div>`,dt+=l}const n=Re.getCell("G35").numeric(),l=Re.getCell("E5").numeric();dt+=vt[1]*n/l,t+=`<div class="option-block"><div class="division-block pricelist"></div><div class="list-option-container"><span class='name'>Appliances delivery</span><span class='list-text amount'></span><span class='list-text'>${e.formatCurrency(vt[1]*n/l)} €</span></div></div>`,t+=`<div class="option-block"><div class="division-block pricelist"></div><div class="list-option-container"><span class='name'>${Re.getCell("F165").value()}</span><span class='list-text amount'></span><span class='list-text'>${e.formatCurrency(.2*dt)} €</span></div></div>`,dt*=1.2,t+=`<div class="division-block pricelist"></div><div class="list-option-container summary"><span class='pricelist-header small no-padding'>Total for appliances:</span><span class='list-text summary work'>${e.formatCurrency(dt)} €</span></div>`,mt.innerHTML=mt.innerHTML+t}else mt.style.display="none";if(F){const t=Re.getCell(`${M}109`).numeric();$("#kitchenPrice").html(e.formatCurrency(t*We)+" €")}else $("#kitchenSection").toggle(!1);I+=dt,1-Math.abs(u.get("summedPrice")/I)<=.06?($("#totalPriceTotal").html(e.formatCurrency(I)+" € *"),$("#totalVAT").html(e.formatCurrency(1.23*I)+" € *")):($("#totalPriceTotal").html(e.formatCurrency(u.get("summedPrice")/1.23)),$("#totalVAT").html(e.formatCurrency(u.get("summedPrice"))))})),$("#wf-form-consult").on("submit",(function(e){if(e.preventDefault(),$("#agreementCheckbox").is(":checked")?$(".warning.agreementcheckbox:not(.specification)").toggle(!1):$(".warning.agreementcheckbox:not(.specification)").toggle(!0),$("#phone").val()?$(".warning.phone:not(.specification)").toggle(!1):$(".warning.phone:not(.specification)").toggle(!0),$("#name").val()?$(".warning.name:not(.specification)").toggle(!1):$(".warning.name:not(.specification)").toggle(!0),$(".warning:not(.specification)").is(":visible"))return e.preventDefault(),!1;g.collectPortugalClientData(new FormData(document.getElementById("wf-form-consult")))})),$("#wf-form-specification").on("submit",(function(e){return c(this,null,(function*(){if(e.preventDefault(),$("#agreementCheckbox").is(":checked")?$(".warning.agreementcheckbox.specification").toggle(!1):$(".warning.agreementcheckbox.specification").toggle(!0),$("#sPhone").val()?$(".warning.phone.specification").toggle(!1):$(".warning.phone.specification").toggle(!0),$("#sName").val()?$(".warning.name.specification").toggle(!1):$(".warning.name.specification").toggle(!0),0==$("#sEmail").val().length?($(".warning.wrongEmail.specification").toggle(!1),$(".warning.emptyEmail.specification").toggle(!0)):a.test($("#sEmail").val())?($(".warning.wrongEmail.specification").toggle(!1),$(".warning.emptyEmail.specification").toggle(!1)):($(".warning.wrongEmail.specification").toggle(!0),$(".warning.emptyEmail.specification").toggle(!1)),$(".warning.specification").is(":visible"))return e.stopImmediatePropagation(),!1;(function(){return c(this,null,(function*(){$(".modal-note.specification").html("Please wait...");const e=$("html").clone().find("script").remove().end().html(),t=new File(['<!DOCTYPE html><html lang="en_US">'+e+"</html>"],"source.html",{type:"text/html"}),n=new FormData;n.append("file",t,"source.html");const l=yield fetch("https://api.fortes.agency/convert",{method:"POST",body:n}),i=yield l.json(),o=i.success?i.id:"";return $(".modal-note.specification").html("We sent your estimation to your email address. If you don't see it, check Spam folder or wait a few minutes."),fetch("https://api.fortes.agency/mail",{method:"POST",body:JSON.stringify({fileId:o,fileName:localStorage.getItem("style"),recipientMail:$("#sEmail").val(),lang:"eng",name:$("#sName").val()}),headers:{"Content-Type":"application/json"}})}))})().finally((()=>{g.collectPortugalSpecificationData(new FormData(document.getElementById("wf-form-specification"))),window.location.assign("/sdyakuiemo")}))}))})),$("img").each((function(){$(this).attr("loading","eager")}))}))})();