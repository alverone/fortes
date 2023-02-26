(()=>{"use strict";class e{static formatCurrency(e){return Intl.NumberFormat("uk-UA",{maximumFractionDigits:2}).format(e)}}class t{constructor(e,t){this.address=e,this._value=t}hasValue(){return null!==this._value&&this._value.length>0}value(){return this._value}numeric(){return parseFloat(this._value)}formattedNumerical(){return e.formatCurrency(parseFloat(this.value()))}}class l{constructor(e){this.cells=e}getCell(e){const l=this.cells.filter((t=>t.address===e));return 0==l.length?new t(e,"0"):l[0]}}class n{get(e){try{return JSON.parse(localStorage.getItem(e))}catch(t){return localStorage.getItem(e)}}set(e,t){localStorage.setItem(e,t.toString())}init(){this.set("style","cozy"),this.set("bath",!0),this.set("shower",!1),this.set("ceiling","stretch ceiling"),this.set("flooring","laminat"),this.set("hygienic_shower",!1),this.set("second_gypsum_layer",!1),this.set("floor_screed",!1),this.set("heated_flooring",!1),this.set("denoising",!1),this.set("entrance_doors",!1),this.set("conditioning",!1),this.set("amount_of_rooms",2),this.set("amount_of_bathrooms",1),this.set("appliances","gorenje"),this.set("appliances_bool_total",!1),this.set("furniture_bool",!0),this.set("space",50)}initPortugal(){this.set("style","cozy"),this.set("space",50),this.set("amount_of_rooms",2),this.set("amount_of_bathrooms",1),this.set("bath",!0),this.set("shower",!1),this.set("flooring","laminat"),this.set("finishing_materials",!1),this.set("demontage",!1),this.set("cement_screed",!1),this.set("heated_flooring",0),this.set("denoising",!1),this.set("entrance_doors",!1),this.set("windows_installation",0),this.set("builtin_furniture",!1),this.set("conditioning",0),this.set("furniture_bool",!1),this.set("appliances_bool_total",!1),this.set("appliances","gorenje"),this.set("transportation_expenses",5)}storageToRequestBody(e){const t={};for(const l in e)"length"!==l&&"costPerMetre"!=l&&("true"!==String(e[l])?"false"!==String(e[l])?isFinite(Number(e[l]))?t[l]=Number(e[l]):t[l]=e[l]:t[l]=0:t[l]=1);return JSON.stringify(t)}}class i{static numberToEncodedLetter(e){if(isNaN(e))return;let t,l=(e=Math.abs(Math.floor(e)))%26,n=e/26;return e<=26?this.numToLetter(e):(n>=1&&(0===l&&n--,t=this.numberToEncodedLetter(n)),0===l&&(l=26),t+this.numToLetter(l))}static numToLetter(e){if(!(e>26||e<0))return 0===e?"":this.alphabet.slice(e-1,e)}}i.alphabet="ABCDEFGHIJKLMNOPQRSTUVWXYZ";class s{}s.kCost="Cost",s.kAmount="Amount",s.kKitchen="Kitchen",s.kLMonth="month";var a=(e,t,l)=>new Promise(((n,i)=>{var s=e=>{try{o(l.next(e))}catch(e){i(e)}},a=e=>{try{o(l.throw(e))}catch(e){i(e)}},o=e=>e.done?n(e.value):Promise.resolve(e.value).then(s,a);o((l=l.apply(e,t)).next())}));$((function(){const o=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,r=new n,u=r.get("style"),c=function(e){let t="J";"cozy"==e?t="J":"japandi"==e?t="L":"fusion"==e?t="N":"modern"==e?t="P":"neoclassic"==e&&(t="R");return t}(u),d=Boolean(r.get("appliances_bool_total")),g=Boolean(r.get("furniture_bool")),p=r.get("space"),m=Boolean(r.get("bath")),v=Boolean(r.get("shower")),h=r.get("amount_of_rooms"),C=r.get("amount_of_bathrooms"),f=Boolean(r.get("demontage")),y=r.get("windows_installation"),k=Boolean(r.get("finishing_materials")),w=Boolean(r.get("cement_screed")),b=Boolean(r.get("builtin_furiture")),F=r.get("heated_flooring"),L=Boolean(r.get("denoising")),_=Boolean(r.get("entrance_doors")),x=r.get("conditioning"),T=r.get("flooring"),S=r.get("transportation_expenses"),G=r.get("appliances"),M=r.get("summedPrice"),N=r.get("costPerMetre"),E=$("#furnitureList");let P="",A="",B=0,z=0;const j=(p<=40?3:p<=80?4:p<=100?5:p<=130?6:p<=150?7:p<=175?8:9)+("modern"==u||"neoclassic"==u?1:0);function I(e,t,l){return`<div class="option-block"><div class="division-block pricelist"></div><div class="list-option-container"><span class='name'>${e}</span><span class='list-text amount'>${t}</span><span class='list-text'>${l}</span></div></div>`}function O(e,t){e.append(t)}$("#months").html(j.toString()),$("#total").html(e.formatCurrency(M)),$("#space").html(p.toString()),$("#pricePerMetre").html(e.formatCurrency(N)),fetch("https://docs.google.com/spreadsheets/d/1KkkpKbytztt48mwP1RGgpVFpfke8-IqB0KLWA8Sn2FE/gviz/tq?tqx=out:json&gid=1219923480").then((e=>e.text())).then((n=>{var a,o,M,N,J,D,K,q,R,V,H,Q,U,W,Z,Y,X,ee,te,le,ne,ie,se,ae,oe,re,ue,ce,de,ge,pe,me,ve,he,Ce,$e,fe,ye,ke,we,be,Fe,Le,_e,xe,Te,Se,Ge,Me,Ne,Ee,Pe,Ae,Be,ze,je,Ie,Oe,Je,De,Ke,qe,Re;const Ve=JSON.parse(n.substring(n.length-2,0).replace("/*O_o*/\ngoogle.visualization.Query.setResponse(","")).table.rows,He=new l(Ve.map(((e,l)=>e.c.map((function(e,n){var s;if(null!==e&&null!==e.v)return new t(`${i.numberToEncodedLetter(n+1)}${l+1}`,null!=(s=e.v)?s:e.f)})).filter((e=>null!=e)))).reduce(((e,t)=>[...e,...t]))),Qe=He.getCell("S46").numeric(),Ue=He.getCell("S44").numeric(),We=He.getCell("S69").numeric(),Ze=He.getCell("T103").numeric(),Ye=He.getCell("S104").numeric();"cozy"==u?(P="I",A="A"):"japandi"==u?(P="K",A="B"):"fusion"==u?(P="M",A="C"):"modern"==u?(P="O",A="D"):"neoclassic"==u&&(P="Q",A="E");let Xe,et,tt=0;"vynil"==T?(Xe="60",et="86",tt=p*(p<70?220.33:161.8)*Qe*3):"parket"==T?(Xe="61",et="87",tt=p*(p<80?369.96:240.31)*Qe*2):(Xe="59",et="85",tt=p*(p<70?201.26:198.81)*Qe*2);const lt=$("#workList");let nt="";const it=2523*((h>0?6:0)+(m?2:0)+(v?2:0)+2*C)*Qe*2*Ue+(m?1:0)*C*2500*2*Ue*Qe-950*Qe/41+4e3*(v?1:0)*C*2*Ue*Qe-800*Qe/41,st=1974*((h>0?3:0)+(m?1:0)+(v?1:0)+2*C)*Qe*2*Ue,at=p*C*(p<=100?83.2:33.98)*Ue*Qe*2,ot=(p/h<=50?850*p:24*h*3519)*Qe*Ue,rt=[He.getCell("J47").numeric()/Ue,He.getCell("J48").numeric()/Ue,p/h<=50?p*(p<=60?1142.78:p<=95?883.87:819.43)*Qe*1.45:4*Math.sqrt(p)*3*600*Qe,p*(p<=60?283.08:p<=95?281.22:p<=124?338.33:362.47)*Qe*1.35*1.45,p*(p<=60?700.67:p<=100?687.36:p<=130?341.25:317.36)*Qe*1.1*1.5/2,2100*Qe,(p/h<50?1.77*(p<=50?1e3*p:990*p):4*Math.sqrt(p)*3*600)*Qe,p*(p<=60?418.86:p<=100?416.29:p<=135?416.73:416.67)*1.77*Qe,140*(p<=60?He.getCell(`${P}55`).numeric():p<=80?50:p<=120?78:p<=180?114:162)*("modern"==u||"neoclassic"==u?1:0),tt,p*(p<=70?114.47:86.84)*Qe*2,p*(p<=70?206.59:170)*Qe*2*("japandi"==u||"fusion"==u?1:0)],ut=[v?C:0,m?C:0,1,1,C,C+h,1,1,1,1,"japandi"!==u&&"fusion"!==u?1:0,"japandi"===u||"fusion"===u?1:0],ct=[47,48,50,51,52,53,55,56,57,Xe,63,64];B+=it,nt=I(He.getCell("F44").value(),"",Math.round(it)+" €"),$("#workList").append(nt),B+=st,nt=I(He.getCell("F45").value(),"",Math.round(st)+" €"),$("#workList").append(nt),B+=at,nt=I(He.getCell("F46").value(),"",Math.round(at)+" €"),$("#workList").append(nt),B+=ot,nt=I(He.getCell("F49").value(),"",Math.round(ot)+" €"),$("#workList").append(nt);for(let e=0;e<ct.length;e++){const t=rt[e]*ut[e]*Ue;0===t||isNaN(t)||(B+=t,nt=I(He.getCell("F"+ct[e]).value(),"",Math.round(t)+" €"),$("#workList").append(nt))}if(k){$("#workList").append('</div><div class="list-option-container margined"></div>'),$("#workList .list-option-container").last().append(`<h4 class="pricelist-header small no-padding">${He.getCell("F68").value()}</h4><span class='notation amount'> </span><span class='notation'>${s.kCost}</span>`);const t=[He.getCell(`${P}69`).numeric(),He.getCell(`${P}70`).numeric(),He.getCell(`${P}71`).numeric(),He.getCell(`${P}72`).numeric(),He.getCell(`${P}73`).numeric(),He.getCell(`${P}74`).numeric(),He.getCell(`${P}76`).numeric(),He.getCell(`${P}77`).numeric(),He.getCell(`${P}78`).numeric(),He.getCell(`${P}79`).numeric(),He.getCell(`${P}80`).numeric(),He.getCell(`${P}81`).numeric(),He.getCell(`${P}82`).numeric(),He.getCell(`${P+et}`).numeric()];let l=[C+h,35*C,.66*p,.66*p,.59*p,p<=50?42:p<=90?60:p<=120?84:90,C,Number(m),Number(v),Number(m)+Number(v),C,C,C,p<100?p-7*C:p-10*C];const n=[69,70,71,72,73,74,76,77,78,79,80,81,82,et];for(let e=0;e<n.length;e++){const i=t[e]*l[e]*He.getCell("S69").numeric()/1.23;0===i||isNaN(i)||(B+=i,nt=I(He.getCell("F"+n[e]).value(),"",Math.round(i)+"€"),$("#workList").append(nt))}O(lt,'<div class="division-block pricelist"></div><div class="list-option-container summary"></div>'),O($("#workList .list-option-container").last(),`<span class='pricelist-header small no-padding'>Total for construction with components and finishing materials:</span><span class='list-text summary work'>${e.formatCurrency(B)} €</span>`)}nt=`<div class="option-block">\n      <div class="division-block pricelist"></div>\n      <div class="list-option-container">\n        <span class='name'>${He.getCell("F93").value()}</span>\n        <span class='list-text amount'>${j} months</span>\n        <span class='list-text'> </span>\n      </div>\n    </div>`,$("#workList").append(nt);const dt=[(41e3*Math.ceil((S+2)/5)/1.35/2/1.5+100*p)*Ue*Qe,.022*B*Qe,(2*j*1200+3e3+220*p)*Ue*Qe],gt=[94,95,96];nt="";for(let t=0;t<gt.length;t++){const l=dt[t];B+=l,nt+=`<div class="option-block">\n        <div class="division-block pricelist"></div>\n        <div class="list-option-container">\n          <span class='name'>${He.getCell(`F${gt[t]}`).value()}</span>\n            <span class='list-text amount'></span>\n          <span class='list-text'>${e.formatCurrency(l)} €</span>\n        </div>\n      </div>`}$("#workList").append(nt),nt="",lt.append(`<div class="division-block pricelist"></div><div class="list-option-container summary"><span class='pricelist-header small no-padding'>Total for construction:</span><span class='list-text summary work'>${e.formatCurrency(B)} €</span></div>`),g&&($("#furnitureList").append('</div><div class="list-option-container"></div>'),$("#furnitureList .list-option-container").last().append(`<h4 class="pricelist-header small no-padding">${s.kKitchen}</h4>\n          <span class='notation amount'>${s.kAmount}</span>\n          <span class='notation'>${s.kCost}</span>`),pt(He.getCell("F121").value(),null==(a=He.getCell(`${A}121`))?void 0:a.value(),1,He.getCell(`${P}121`).numeric(),He.getCell("G121").value()),pt(He.getCell("F122").value(),null==(o=He.getCell(`${A}122`))?void 0:o.value(),4,He.getCell(`${P}122`).numeric(),He.getCell("G122").value()),pt(He.getCell("F123").value(),null==(M=He.getCell(`${A}123`))?void 0:M.value(),1,He.getCell(`${P}123`).numeric(),He.getCell("G123").value()),O($("#furnitureList"),'</div><div class="list-option-container margined"></div>'),O($("#furnitureList .list-option-container").last(),`<h4 class="pricelist-header small no-padding">${He.getCell("F124").value()}</h4><span class='notation amount'>${s.kAmount}</span><span class='notation'>${s.kCost}</span>`),pt(He.getCell("F124").value(),null==(N=He.getCell(A+"124"))?void 0:N.value(),1,null==(J=He.getCell(`${P}124`))?void 0:J.numeric(),null==(D=He.getCell("G124"))?void 0:D.value()),pt(He.getCell("F125").value(),null==(K=He.getCell(A+"125"))?void 0:K.value(),1,null==(q=He.getCell(`${P}125`))?void 0:q.numeric(),null==(R=He.getCell("G125"))?void 0:R.value()),O($("#furnitureList"),'</div><div class="list-option-container margined"></div>'),O($("#furnitureList .list-option-container").last(),`<h4 class="pricelist-header small no-padding">${He.getCell("F127").value()}</h4><span class='notation amount'>${s.kAmount}</span><span class='notation'>${s.kCost}</span>`),pt(He.getCell("F128").value(),null==(V=He.getCell(A+"128"))?void 0:V.value(),1,null==(H=He.getCell(`${P}128`))?void 0:H.numeric(),null==(Q=He.getCell("G128"))?void 0:Q.value()),pt(He.getCell("F129").value(),null==(U=He.getCell(A+"129"))?void 0:U.value(),1,null==(W=He.getCell(`${P}129`))?void 0:W.numeric(),null==(Z=He.getCell("G129"))?void 0:Z.value()),pt(He.getCell("F130").value(),null==(Y=He.getCell(A+"130"))?void 0:Y.value(),2,null==(X=He.getCell(`${P}130`))?void 0:X.numeric(),null==(ee=He.getCell("G130"))?void 0:ee.value()),pt(He.getCell("F131").value(),null==(te=He.getCell(A+"131"))?void 0:te.value(),1,null==(le=He.getCell(`${P}131`))?void 0:le.numeric(),null==(ne=He.getCell("G131"))?void 0:ne.value()),pt(He.getCell("F132").value(),null==(ie=He.getCell(A+"132"))?void 0:ie.value(),1,null==(se=He.getCell(`${P}132`))?void 0:se.numeric(),null==(ae=He.getCell("G132"))?void 0:ae.value()),O($("#furnitureList"),'</div><div class="list-option-container margined"></div>'),$("#furnitureList .list-option-container").last().append(`<h4 class="pricelist-header small no-padding">${He.getCell("F133").value()}</h4><span class='notation amount'>${s.kAmount}</span><span class='notation'>${s.kCost}</span>`),pt(He.getCell("F134").value(),null==(oe=He.getCell(A+"134"))?void 0:oe.value(),Math.ceil(.48*p),null==(re=He.getCell(`${P}134`))?void 0:re.numeric(),null==(ue=He.getCell("G134"))?void 0:ue.value()),pt(He.getCell("F135").value(),null==(ce=He.getCell(A+"135"))?void 0:ce.value(),1,null==(de=He.getCell(`${P}135`))?void 0:de.numeric(),null==(ge=He.getCell("G135"))?void 0:ge.value()),pt(He.getCell("F137").value(),null==(pe=He.getCell(A+"137"))?void 0:pe.value(),1,null==(me=He.getCell(`${P}137`))?void 0:me.numeric(),null==(ve=He.getCell("G137"))?void 0:ve.value()),pt(He.getCell("F139").value(),null==(he=He.getCell(A+"139"))?void 0:he.value(),1,null==(Ce=He.getCell(`${P}139`))?void 0:Ce.numeric(),null==($e=He.getCell("G139"))?void 0:$e.value()),pt(He.getCell("F140").value(),null==(fe=He.getCell(A+"140"))?void 0:fe.value(),1,null==(ye=He.getCell(`${P}140`))?void 0:ye.numeric(),null==(ke=He.getCell("G140"))?void 0:ke.value()),pt(He.getCell("F136").value(),null==(we=He.getCell(A+"136"))?void 0:we.value(),h>1?1:0,null==(be=He.getCell(`${P}136`))?void 0:be.numeric(),null==(Fe=He.getCell("G136"))?void 0:Fe.value()),pt(He.getCell("F138").value(),null==(Le=He.getCell(A+"138"))?void 0:Le.value(),2,null==(_e=He.getCell(`${P}138`))?void 0:_e.numeric(),null==(xe=He.getCell("G138"))?void 0:xe.value()),$("#furnitureList").append('</div><div class="list-option-container margined"></div>'),$("#furnitureList .list-option-container").last().append(`<h4 class="pricelist-header small no-padding">${He.getCell("F141").value()}</h4>\n            <span class='notation amount'>${s.kAmount}</span>\n            <span class='notation'>${s.kCost}</span>`),pt(He.getCell("F142").value(),null==(Te=He.getCell(A+"142"))?void 0:Te.value(),h,null==(Se=He.getCell(`${P}142`))?void 0:Se.numeric(),null==(Ge=He.getCell("G142"))?void 0:Ge.value()),pt(He.getCell("F143").value(),null==(Me=He.getCell(A+"143"))?void 0:Me.value(),h,null==(Ne=He.getCell(`${P}143`))?void 0:Ne.numeric(),null==(Ee=He.getCell("G143"))?void 0:Ee.value()),pt(He.getCell("F144").value(),null==(Pe=He.getCell(A+"144"))?void 0:Pe.value(),h,null==(Ae=He.getCell(`${P}144`))?void 0:Ae.numeric(),null==(Be=He.getCell("G144"))?void 0:Be.value()),pt(He.getCell("F145").value(),null==(ze=He.getCell(A+"145"))?void 0:ze.value(),1,null==(je=He.getCell(`${P}145`))?void 0:je.numeric(),null==(Ie=He.getCell("G145"))?void 0:Ie.value()),pt(He.getCell("F146").value(),null==(Oe=He.getCell(A+"146"))?void 0:Oe.value(),h-1,null==(Je=He.getCell(`${P}146`))?void 0:Je.numeric(),null==(De=He.getCell("G146"))?void 0:De.value()),O($("#furnitureList"),I(He.getCell("F147").value()," ",Math.round(.3*z)+"€")),z*=1.3,O($("#furnitureList"),'<div class="division-block pricelist"></div><div class="list-option-container summary"></div>'),O($("#furnitureList .list-option-container").last(),`<span class='pricelist-header small no-padding'>Total for furniture:</span><span class='list-text summary work'>${e.formatCurrency(z)} €</span>`));if(b||w||k||y||f||F>0||L||_||x){$("#workList").append('</div><div class="list-option-container margined"></div>'),$("#workList .list-option-container").last().append(`<h4 class="pricelist-header small no-padding">${He.getCell("F102").value()}</h4><span class='notation amount'></span><span class='notation'>${s.kCost}</span>`);let t=0;const l=[He.getCell(`${P}103`).numeric()*p,He.getCell(`${P}104`).numeric(),(p<=60?440:410)*Qe*2*p*Ue/Ye,He.getCell(`${P}106`).numeric(),((p<=60?90.02:p<=95?60.78:p<125?58.29:p>=125?79.01:0)+(p<=60?60.91:p<=95?64.57:p<125?63.87:p>=125?66.24:0))*p*Ze,He.getCell(`${P}108`).numeric()/("cozy"===u?1.23:1),He.getCell(`${P}109`).numeric()/("cozy"===u?1.23:1)*We/Ye,He.getCell(`${P}110`).numeric()/("cozy"===u?1.23:1)*We/Ye,He.getCell(`${P}112`).numeric()*p],n=[f?1:0,y,w?1:0,F,L?1:0,_?1:0,b?1:0,b?1:0,x],i=[103,104,105,106,107,108,109,110,112];for(let s=0;s<i.length;s++){const a=l[s]*n[s]*He.getCell("S104").numeric();0!==a&&0!=n[s]&&(t+=a,O(lt,I(null==(Ke=He.getCell("F"+i[s]))?void 0:Ke.value(),"",e.formatCurrency(a)+" €")))}if(x>0){const l=x*He.getCell(`${P}113`).numeric()*(1+He.getCell("S113").numeric()/100)/He.getCell("E5").numeric(),n=.05*l*Ze;O(lt,I(null==(qe=He.getCell("F113"))?void 0:qe.value(),"",e.formatCurrency(l)+" €")),O(lt,I(null==(Re=He.getCell("F114"))?void 0:Re.value(),"",e.formatCurrency(n)+" €")),t+=n+l}O($("#workList"),'<div class="division-block pricelist"></div><div class="list-option-container summary"></div>'),O($("#workList .list-option-container").last(),`<span class='pricelist-header small no-padding'>Total for options:</span><span class='list-text summary work'>${e.formatCurrency(t)} €</span>`),B+=t}function pt(t,l,n,i,s){g&&0!=n&&n&&i&&(z+=i*n,O(E,'<div class="option-block"><div class="division-block pricelist"></div><div class="list-option-container"></div></div>'),null!==l?O($("#furnitureList .option-block .list-option-container").last(),`<span class='name'>${t}, ${l}</span><span class='list-text amount'>${n} ${s}</span><span class='list-text'>${e.formatCurrency(i*n)} €</span>`):O($("#materialsList .option-block .list-option-container").last(),`<span class='name'>${t}</span><span class='list-text'>${n} ${s}</span>`))}d||$(".comfy-section").toggle(!1),g||$("#furnitureList").toggle(!1),O($("#materialsList"),'<div class="division-block pricelist"></div><div class="list-option-container summary"></div>'),O($("#materialsList .list-option-container").last(),`<span class='pricelist-header small no-padding'>Total for construction with components and finishing materials:</span><span class='list-text summary work'>${e.formatCurrency(B)} €</span>`);let mt=0;const vt=document.getElementById("appliancesListTotal"),ht=[];if("gorenje"===G?ht.push(154,9):"bosch"===G?ht.push(169,10):"smeg"===G?ht.push(185,9):ht.push(154,9),d){let t="";for(let l=0;l<ht[1];l++){const n=.9*He.getCell("D"+(ht[0]+l)).numeric();t+=`<div class="option-block">\n          <div class="division-block pricelist"></div>\n          <div class="list-option-container"><span class='name'>${He.getCell("F"+(ht[0]+l)).value()} ${He.getCell("E"+(ht[0]+l)).value()}</span>\n            <span class='list-text amount'>1 piece</span>\n            <span class='list-text'>${e.formatCurrency(n)}€</span>\n            </div>\n            </div>`,mt+=n}const l=He.getCell("G35").numeric(),n=He.getCell("E5").numeric();mt+=ht[1]*l/n,t+=`<div class="option-block"><div class="division-block pricelist"></div><div class="list-option-container"><span class='name'>Appliances delivery</span><span class='list-text amount'></span><span class='list-text'>${e.formatCurrency(ht[1]*l/n)} €</span></div></div>`,t+=`<div class="option-block"><div class="division-block pricelist"></div><div class="list-option-container"><span class='name'>${He.getCell("F165").value()}</span><span class='list-text amount'></span><span class='list-text'>${e.formatCurrency(.2*mt)} €</span></div></div>`,mt*=1.2,t+=`<div class="division-block pricelist"></div><div class="list-option-container summary"><span class='pricelist-header small no-padding'>Total for appliances:</span><span class='list-text summary work'>${e.formatCurrency(mt)} €</span></div>`,vt.innerHTML=vt.innerHTML+t}else vt.style.display="none";if(b){const t=He.getCell(`${c}109`).numeric()/("cozy"===u?1.23:1);$("#kitchenPrice").html(e.formatCurrency(t*We)+" €")}B+=mt,1-Math.abs(r.get("summedPrice")/B)<=.06?($("#totalPriceTotal").html(e.formatCurrency(B)+" € *"),$("#totalVAT").html(e.formatCurrency(1.23*B)+" € *")):($("#totalPriceTotal").html(e.formatCurrency(r.get("summedPrice")/1.23)),$("#totalVAT").html(e.formatCurrency(r.get("summedPrice"))))})),$(".form-2").on("submit",(function(e){return a(this,null,(function*(){if(e.preventDefault(),$("#agreementCheckbox").is(":checked")?$(".warning.agreementcheckbox").toggle(!1):$(".warning.agreementcheckbox").toggle(!0),$("#sPhone").val()||$("#sEmail").val()?$(".warning.inputs.phone").toggle(!1):$(".warning.inputs.phone").toggle(!0),$("#sName").val()?$(".warning.inputs.name").toggle(!1):$(".warning.inputs.name").toggle(!0),0==$("#sEmail").val().length?($(".warning.inputs.wrongEmail").toggle(!1),$(".warning.inputs.emptyEmail").toggle(!0)):o.test($("#sEmail").val())?($(".warning.inputs.wrongEmail").toggle(!1),$(".warning.inputs.emptyEmail").toggle(!1)):($(".warning.inputs.wrongEmail").toggle(!0),$(".warning.inputs.emptyEmail").toggle(!1)),$(".warning").is(":visible"))return e.preventDefault(),!1;!function(){a(this,null,(function*(){$(".modal-note").html("Please wait...");const e=$("html").clone().find("script").remove().end().html(),t=new File(['<!DOCTYPE html><html lang="en_US">'+e+"</html>"],"source.html",{type:"text/html"}),l=new FormData;l.append("file",t,"source.html");const n=yield fetch("https://api.fortes.agency/convert",{method:"POST",body:l}),i=yield n.json(),s=i.success?i.id:"";$(".modal-note").html("We sent your estimation to your email address. If you don't see it, check Spam folder or wait a few minutes."),fetch("https://api.fortes.agency/mail",{method:"POST",body:JSON.stringify({fileId:s,fileName:localStorage.getItem("style"),recipientMail:$("#sEmail").val()}),headers:{"Content-Type":"application/json"}}).finally((()=>setTimeout((()=>{window.location.assign("/sdyakuiemo")}),5e3)))}))}()}))})),$("img").each((function(){$(this).attr("loading","eager")}))}))})();