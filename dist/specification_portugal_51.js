(()=>{"use strict";class e{static formatCurrency(e){return Intl.NumberFormat("uk-UA",{maximumFractionDigits:2}).format(e)}}class l{constructor(e,l){this.address=e,this._value=l}hasValue(){return null!==this._value&&this._value.length>0}value(){return this._value}numeric(){return parseFloat(this._value)}formattedNumerical(){return e.formatCurrency(parseFloat(this.value()))}}class t{constructor(e){this.cells=e}getCell(e){const t=this.cells.filter((l=>l.address===e));return 0==t.length?new l(e,"0"):t[0]}}class n{get(e){try{return JSON.parse(localStorage.getItem(e))}catch(l){return localStorage.getItem(e)}}set(e,l){localStorage.setItem(e,l.toString())}init(){this.set("style","cozy"),this.set("bath",!0),this.set("shower",!1),this.set("ceiling","stretch ceiling"),this.set("flooring","laminat"),this.set("hygienic_shower",!1),this.set("second_gypsum_layer",!1),this.set("floor_screed",!1),this.set("heated_flooring",!1),this.set("denoising",!1),this.set("entrance_doors",!1),this.set("conditioning",!1),this.set("amount_of_rooms",2),this.set("amount_of_bathrooms",1),this.set("appliances","gorenje"),this.set("appliances_bool_total",!1),this.set("furniture_bool",!0),this.set("space",50)}initPortugal(){this.set("style","cozy"),this.set("space",50),this.set("amount_of_rooms",2),this.set("amount_of_bathrooms",1),this.set("bath",!0),this.set("shower",!1),this.set("flooring","laminat"),this.set("finishing_materials",!1),this.set("demontage",!1),this.set("cement_screed",!1),this.set("heated_flooring",0),this.set("denoising",!1),this.set("entrance_doors",!1),this.set("windows_installation",0),this.set("builtin_furniture",!1),this.set("conditioning",0),this.set("furniture_bool",!1),this.set("appliances_bool_total",!1),this.set("appliances","gorenje"),this.set("transportation_expenses",5)}storageToRequestBody(e){const l={};for(const t in e)"length"!==t&&"costPerMetre"!=t&&("true"!==String(e[t])?"false"!==String(e[t])?isFinite(Number(e[t]))?l[t]=Number(e[t]):l[t]=e[t]:l[t]=0:l[t]=1);return JSON.stringify(l)}}class s{static numberToEncodedLetter(e){if(isNaN(e))return;let l,t=(e=Math.abs(Math.floor(e)))%26,n=e/26;return e<=26?this.numToLetter(e):(n>=1&&(0===t&&n--,l=this.numberToEncodedLetter(n)),0===t&&(t=26),l+this.numToLetter(t))}static numToLetter(e){if(!(e>26||e<0))return 0===e?"":this.alphabet.slice(e-1,e)}}s.alphabet="ABCDEFGHIJKLMNOPQRSTUVWXYZ";class i{}i.kCost="Cost",i.kAmount="Amount",i.kKitchen="Kitchen",i.kLMonth="month",fetch("https://docs.google.com/spreadsheets/d/1KkkpKbytztt48mwP1RGgpVFpfke8-IqB0KLWA8Sn2FE/gviz/tq?tqx=out:json&gid=1219923480").then((e=>e.text())).then((a=>{var o,r,c,u,d,p,v,m,g,C,h,f,k,y,b,F,L,_,w,x,G,M,T,N,S,A,B,E,P,z,j,I,J,K,D,q,O,R,V,H,Q,U,W,X,Y,Z,ee,le,te,ne,se,ie,ae,oe,re,ce,ue,de,pe,ve,me,ge,Ce;const $e=JSON.parse(a.substring(a.length-2,0).replace("/*O_o*/\ngoogle.visualization.Query.setResponse(","")).table.rows,he=new t($e.map(((e,t)=>e.c.map((function(e,n){var i;if(null!==e&&null!==e.v)return new l(`${s.numberToEncodedLetter(n+1)}${t+1}`,null!=(i=e.v)?i:e.f)})).filter((e=>null!=e)))).reduce(((e,l)=>[...e,...l]))),fe=new n;let ke=fe.get("appliances");const ye=fe.get("style"),be=function(e){let l="J";"cozy"==e?l="J":"japandi"==e?l="L":"fusion"==e?l="N":"modern"==e?l="P":"neoclassic"==e&&(l="R");return l}(ye);let Fe=Boolean(fe.get("appliances_bool_total")),Le=Boolean(fe.get("furniture_bool")),_e=fe.get("space"),we=Boolean(fe.get("bath")),xe=Boolean(fe.get("shower")),Ge=fe.get("amount_of_rooms"),Me=fe.get("amount_of_bathrooms"),Te="",Ne="",Se=Boolean(fe.get("demontage")),Ae=fe.get("windows_installation"),Be=Boolean(fe.get("finishing_materials")),Ee=Boolean(fe.get("cement_screed")),Pe=Boolean(fe.get("builtin_furiture")),ze=fe.get("heated_flooring"),je=Boolean(fe.get("denoising")),Ie=Boolean(fe.get("entrance_doors")),Je=fe.get("conditioning"),Ke=fe.get("flooring"),De=0,qe=0,Oe=fe.get("transportation_expenses"),Re=$("#furnitureList"),Ve=_e<=40?3:_e<=80?4:_e<=100?5:_e<=130?6:_e<=150?7:_e<=175?8:9;"modern"!=ye&&"neoclassic"!=ye||(Ve+=1),$("#months").html(Ve.toString());const He=he.getCell("S46").numeric(),Qe=he.getCell("S44").numeric(),Ue=he.getCell("S69").numeric(),We=he.getCell("T103").numeric(),Xe=he.getCell("S104").numeric();"cozy"==ye?(Te="I",Ne="A"):"japandi"==ye?(Te="K",Ne="B"):"fusion"==ye?(Te="M",Ne="C"):"modern"==ye?(Te="O",Ne="D"):"neoclassic"==ye&&(Te="Q",Ne="E");let Ye,Ze,el=0;"vynil"==Ke?(Ye="60",Ze="86",el=_e*(_e<70?220.33:161.8)*He*3):"parket"==Ke?(Ye="61",Ze="87",el=_e*(_e<80?369.96:240.31)*He*2):(Ye="59",Ze="85",el=_e*(_e<70?201.26:198.81)*He*2);const ll=$("#workList");let tl="",nl=2523*((Ge>0?6:0)+(we?2:0)+(xe?2:0)+2*Me)*He*2*Qe+(we?1:0)*Me*2500*2*Qe*He-950*He/41+4e3*(xe?1:0)*Me*2*Qe*He-800*He/41,sl=1974*((Ge>0?3:0)+(we?1:0)+(xe?1:0)+2*Me)*He*2*Qe;const il=_e*Me*(_e<=100?83.2:33.98)*Qe*He*2,al=(_e/Ge<=50?850*_e:24*Ge*3519)*He*Qe,ol=[he.getCell("J47").numeric()/Qe,he.getCell("J48").numeric()/Qe,_e/Ge<=50?_e*(_e<=60?1142.78:_e<=95?883.87:819.43)*He*1.45:4*Math.sqrt(_e)*3*600*He,_e*(_e<=60?283.08:_e<=95?281.22:_e<=124?338.33:362.47)*He*1.35*1.45,_e*(_e<=60?700.67:_e<=100?687.36:_e<=130?341.25:317.36)*He*1.1*1.5/2,2100*He,(_e/Ge<50?1.77*(_e<=50?1e3*_e:990*_e):4*Math.sqrt(_e)*3*600)*He,_e*(_e<=60?418.86:_e<=100?416.29:_e<=135?416.73:416.67)*1.77*He,140*(_e<=60?he.getCell(`${Te}55`).numeric():_e<=80?50:_e<=120?78:_e<=180?114:162)*("modern"==ye||"neoclassic"==ye?1:0),el,_e*(_e<=70?114.47:86.84)*He*2,_e*(_e<=70?206.59:170)*He*2*("japandi"==ye||"fusion"==ye?1:0)],rl=[xe?Me:0,we?Me:0,1,1,Me,Me+Ge,1,1,1,1,"japandi"!==ye&&"fusion"!==ye?1:0,"japandi"===ye||"fusion"===ye?1:0],cl=[47,48,50,51,52,53,55,56,57,Ye,63,64];De+=nl,tl=$l(he.getCell("F44").value(),"",Math.round(nl)+" €"),$("#workList").append(tl),De+=sl,tl=$l(he.getCell("F45").value(),"",Math.round(sl)+" €"),$("#workList").append(tl),De+=il,tl=$l(he.getCell("F46").value(),"",Math.round(il)+" €"),$("#workList").append(tl),De+=al,tl=$l(he.getCell("F49").value(),"",Math.round(al)+" €"),$("#workList").append(tl);for(let e=0;e<cl.length;e++){const l=ol[e]*rl[e]*Qe;0===l||isNaN(l)||(De+=l,tl=$l(he.getCell("F"+cl[e]).value(),"",Math.round(l)+" €"),$("#workList").append(tl))}if(Be){$("#workList").append('</div><div class="list-option-container margined"></div>'),$("#workList .list-option-container").last().append(`<h4 class="pricelist-header small no-padding">${he.getCell("F68").value()}</h4><span class='notation amount'> </span><span class='notation'>${i.kCost}</span>`);let e=[he.getCell(`${Te}69`).numeric(),he.getCell(`${Te}70`).numeric(),he.getCell(`${Te}71`).numeric(),he.getCell(`${Te}72`).numeric(),he.getCell(`${Te}73`).numeric(),he.getCell(`${Te}74`).numeric(),he.getCell(`${Te}76`).numeric(),he.getCell(`${Te}77`).numeric(),he.getCell(`${Te}78`).numeric(),he.getCell(`${Te}79`).numeric(),he.getCell(`${Te}80`).numeric(),he.getCell(`${Te}81`).numeric(),he.getCell(`${Te}82`).numeric(),he.getCell(`${Te}83`).numeric(),he.getCell(`${Te+Ze}`).numeric()],l=[Me+Ge,35*Me,.66*_e,.66*_e,.59*_e,_e<=50?42:_e<=90?60:_e<=120?84:90,Me,Number(we),Number(xe),Number(we)+Number(xe),Me,Me,Me,Me,_e<100?_e-7*Me:_e-10*Me],t=[69,70,71,72,73,74,76,77,78,79,80,82,83,84,Ze];for(let n=0;n<t.length;n++){const s=e[n]*l[n]*he.getCell("S69").numeric()/1.23;0===s||isNaN(s)||(De+=s,tl=$l(he.getCell("F"+t[n]).value(),"",Math.round(s)+"€"),$("#workList").append(tl))}}$("#workList").append('</div><div class="list-option-container margined"></div>'),$("#workList .list-option-container").last().append(`<h4 class="pricelist-header small no-padding">${he.getCell("F93").value()}</h4>\n        <span class='notation amount'>${i.kAmount}</span>\n        <span class='notation'>${i.kCost}</span>`),tl=`<div class="option-block">\n      <div class="division-block pricelist"></div>\n      <div class="list-option-container">\n        <span class='name'>${he.getCell("F94").value()}</span>\n        <span class='list-text amount'>${Ve} months</span>\n        <span class='list-text'> </span>\n      </div>\n    </div>`,$("#workList").append(tl);const ul=[(41e3*Math.ceil((Oe+2)/5)/1.35/2/1.5+100*_e)*Qe*He,.022*De*He,(2*Ve*1200+3e3+220*_e)*Qe*He],dl=[95,96,97];tl="";for(let l=0;l<dl.length;l++){const t=ul[l];De+=t,tl+=`<div class="option-block">\n        <div class="division-block pricelist"></div>\n        <div class="list-option-container">\n          <span class='name'>${he.getCell(`F${dl[l]}`).value()}</span>\n            <span class='list-text amount'>${e.formatCurrency(t/Ve)} €/${i.kLMonth}</span>\n          <span class='list-text'>${e.formatCurrency(t)} €</span>\n        </div>\n      </div>`}$("#workList").append(tl),hl($("#workList"),'<div class="division-block pricelist"></div><div class="list-option-container summary"></div>'),hl($("#workList .list-option-container").last(),`<span class='name summary'>Total for construction:</span><span class='list-text summary work'>${e.formatCurrency(De)} €</span>`),Le&&($("#furnitureList").append('</div><div class="list-option-container"></div>'),$("#furnitureList .list-option-container").last().append(`<h4 class="pricelist-header small no-padding">${i.kKitchen}</h4>\n          <span class='notation amount'>${i.kAmount}</span>\n          <span class='notation'>${i.kCost}</span>`),pl(he.getCell("F121").value(),null==(o=he.getCell(`${Ne}121`))?void 0:o.value(),1,he.getCell(`${Te}121`).numeric(),he.getCell("G121").value()),pl(he.getCell("F122").value(),null==(r=he.getCell(`${Ne}122`))?void 0:r.value(),4,he.getCell(`${Te}122`).numeric(),he.getCell("G122").value()),pl(he.getCell("F123").value(),null==(c=he.getCell(`${Ne}123`))?void 0:c.value(),1,he.getCell(`${Te}123`).numeric(),he.getCell("G123").value()),hl($("#furnitureList"),'</div><div class="list-option-container margined"></div>'),hl($("#furnitureList .list-option-container").last(),`<h4 class="pricelist-header small no-padding">${he.getCell("F124").value()}</h4><span class='notation amount'>${i.kAmount}</span><span class='notation'>${i.kCost}</span>`),pl(he.getCell("F124").value(),null==(u=he.getCell(Ne+"124"))?void 0:u.value(),1,null==(d=he.getCell(`${Te}124`))?void 0:d.numeric(),null==(p=he.getCell("G124"))?void 0:p.value()),pl(he.getCell("F125").value(),null==(v=he.getCell(Ne+"125"))?void 0:v.value(),1,null==(m=he.getCell(`${Te}125`))?void 0:m.numeric(),null==(g=he.getCell("G125"))?void 0:g.value()),hl($("#furnitureList"),'</div><div class="list-option-container margined"></div>'),hl($("#furnitureList .list-option-container").last(),`<h4 class="pricelist-header small no-padding">${he.getCell("F127").value()}</h4><span class='notation amount'>${i.kAmount}</span><span class='notation'>${i.kCost}</span>`),pl(he.getCell("F128").value(),null==(C=he.getCell(Ne+"128"))?void 0:C.value(),1,null==(h=he.getCell(`${Te}128`))?void 0:h.numeric(),null==(f=he.getCell("G128"))?void 0:f.value()),pl(he.getCell("F129").value(),null==(k=he.getCell(Ne+"129"))?void 0:k.value(),1,null==(y=he.getCell(`${Te}129`))?void 0:y.numeric(),null==(b=he.getCell("G129"))?void 0:b.value()),pl(he.getCell("F130").value(),null==(F=he.getCell(Ne+"130"))?void 0:F.value(),2,null==(L=he.getCell(`${Te}130`))?void 0:L.numeric(),null==(_=he.getCell("G130"))?void 0:_.value()),pl(he.getCell("F131").value(),null==(w=he.getCell(Ne+"131"))?void 0:w.value(),1,null==(x=he.getCell(`${Te}131`))?void 0:x.numeric(),null==(G=he.getCell("G131"))?void 0:G.value()),pl(he.getCell("F132").value(),null==(M=he.getCell(Ne+"132"))?void 0:M.value(),1,null==(T=he.getCell(`${Te}132`))?void 0:T.numeric(),null==(N=he.getCell("G132"))?void 0:N.value()),hl($("#furnitureList"),'</div><div class="list-option-container margined"></div>'),$("#furnitureList .list-option-container").last().append(`<h4 class="pricelist-header small no-padding">${he.getCell("F133").value()}</h4><span class='notation amount'>${i.kAmount}</span><span class='notation'>${i.kCost}</span>`),pl(he.getCell("F134").value(),null==(S=he.getCell(Ne+"134"))?void 0:S.value(),Math.ceil(.48*_e),null==(A=he.getCell(`${Te}134`))?void 0:A.numeric(),null==(B=he.getCell("G134"))?void 0:B.value()),pl(he.getCell("F135").value(),null==(E=he.getCell(Ne+"135"))?void 0:E.value(),1,null==(P=he.getCell(`${Te}135`))?void 0:P.numeric(),null==(z=he.getCell("G135"))?void 0:z.value()),pl(he.getCell("F137").value(),null==(j=he.getCell(Ne+"137"))?void 0:j.value(),1,null==(I=he.getCell(`${Te}137`))?void 0:I.numeric(),null==(J=he.getCell("G137"))?void 0:J.value()),pl(he.getCell("F139").value(),null==(K=he.getCell(Ne+"139"))?void 0:K.value(),1,null==(D=he.getCell(`${Te}139`))?void 0:D.numeric(),null==(q=he.getCell("G139"))?void 0:q.value()),pl(he.getCell("F140").value(),null==(O=he.getCell(Ne+"140"))?void 0:O.value(),1,null==(R=he.getCell(`${Te}140`))?void 0:R.numeric(),null==(V=he.getCell("G140"))?void 0:V.value()),pl(he.getCell("F136").value(),null==(H=he.getCell(Ne+"136"))?void 0:H.value(),Ge>1?1:0,null==(Q=he.getCell(`${Te}136`))?void 0:Q.numeric(),null==(U=he.getCell("G136"))?void 0:U.value()),pl(he.getCell("F138").value(),null==(W=he.getCell(Ne+"138"))?void 0:W.value(),2,null==(X=he.getCell(`${Te}138`))?void 0:X.numeric(),null==(Y=he.getCell("G138"))?void 0:Y.value()),$("#furnitureList").append('</div><div class="list-option-container margined"></div>'),$("#furnitureList .list-option-container").last().append(`<h4 class="pricelist-header small no-padding">${he.getCell("F141").value()}</h4>\n            <span class='notation amount'>${i.kAmount}</span>\n            <span class='notation'>${i.kCost}</span>`),pl(he.getCell("F142").value(),null==(Z=he.getCell(Ne+"142"))?void 0:Z.value(),Ge,null==(ee=he.getCell(`${Te}142`))?void 0:ee.numeric(),null==(le=he.getCell("G142"))?void 0:le.value()),pl(he.getCell("F143").value(),null==(te=he.getCell(Ne+"143"))?void 0:te.value(),Ge,null==(ne=he.getCell(`${Te}143`))?void 0:ne.numeric(),null==(se=he.getCell("G143"))?void 0:se.value()),pl(he.getCell("F144").value(),null==(ie=he.getCell(Ne+"144"))?void 0:ie.value(),Ge,null==(ae=he.getCell(`${Te}144`))?void 0:ae.numeric(),null==(oe=he.getCell("G144"))?void 0:oe.value()),pl(he.getCell("F145").value(),null==(re=he.getCell(Ne+"145"))?void 0:re.value(),1,null==(ce=he.getCell(`${Te}145`))?void 0:ce.numeric(),null==(ue=he.getCell("G145"))?void 0:ue.value()),pl(he.getCell("F146").value(),null==(de=he.getCell(Ne+"146"))?void 0:de.value(),Ge-1,null==(pe=he.getCell(`${Te}146`))?void 0:pe.numeric(),null==(ve=he.getCell("G146"))?void 0:ve.value()),hl($("#furnitureList"),$l(he.getCell("F147").value()," ",Math.round(.3*qe)+"€")),qe*=1.3,hl($("#furnitureList"),'<div class="division-block pricelist"></div><div class="list-option-container summary"></div>'),hl($("#furnitureList .list-option-container").last(),`<span class='name summary'>Total for appliances:</span><span class='list-text summary work'>${e.formatCurrency(qe)} €</span>`));if(Pe||Ee||Be||Ae||Se||ze>0||je||Ie||Je){$("#workList").append('</div><div class="list-option-container margined"></div>'),$("#workList .list-option-container").last().append(`<h4 class="pricelist-header small no-padding">${he.getCell("F102").value()}</h4><span class='notation amount'></span><span class='notation'>${i.kCost}</span>`);const l=[he.getCell(`${Te}103`).numeric()*_e,he.getCell(`${Te}104`).numeric(),(_e<=60?440:410)*He*2*_e*Qe/Xe,he.getCell(`${Te}106`).numeric(),((_e<=60?90.02:_e<=95?60.78:_e<125?58.29:_e>=125?79.01:0)+(_e<=60?60.91:_e<=95?64.57:_e<125?63.87:_e>=125?66.24:0))*_e*We,he.getCell(`${Te}108`).numeric()/("cozy"===ye?1.23:1),he.getCell(`${Te}109`).numeric()/("cozy"===ye?1.23:1)*Ue/Xe,he.getCell(`${Te}110`).numeric()/("cozy"===ye?1.23:1)*Ue/Xe,he.getCell(`${Te}112`).numeric()*_e],t=[Se?1:0,Ae,Ee?1:0,ze,je?1:0,Ie?1:0,Pe?1:0,Pe?1:0,Je],n=[103,104,105,106,107,108,109,110,112];for(let s=0;s<n.length;s++){const i=l[s]*t[s]*he.getCell("S104").numeric();0!==i&&0!=t[s]&&(De+=i,hl(ll,$l(null==(me=he.getCell("F"+n[s]))?void 0:me.value(),"",e.formatCurrency(i)+" €")))}if(Je>0){const l=Je*he.getCell(`${Te}113`).numeric()*(1+he.getCell("S113").numeric()/100)/he.getCell("E5").numeric(),t=.05*l*We;hl(ll,$l(null==(ge=he.getCell("F113"))?void 0:ge.value(),"",e.formatCurrency(l)+" €")),hl(ll,$l(null==(Ce=he.getCell("F114"))?void 0:Ce.value(),"",e.formatCurrency(t)+" €")),De+=t+l}hl($("#workList"),'<div class="division-block pricelist"></div><div class="list-option-container summary"></div>'),hl($("#workList .list-option-container").last(),`<span class='name summary'>Total for renovation:</span><span class='list-text summary work'>${e.formatCurrency(De)} €</span>`)}function pl(l,t,n,s,i){Le&&0!=n&&n&&s&&(qe+=s*n,hl(Re,'<div class="option-block"><div class="division-block pricelist"></div><div class="list-option-container"></div></div>'),null!==t?hl($("#furnitureList .option-block .list-option-container").last(),`<span class='name'>${l}, ${t}</span><span class='list-text amount'>${n} ${i}</span><span class='list-text'>${e.formatCurrency(s*n)} €</span>`):hl($("#materialsList .option-block .list-option-container").last(),`<span class='name'>${l}</span><span class='list-text'>${n} ${i}</span>`))}Fe||$(".comfy-section").toggle(!1),Le||$("#furnitureList").toggle(!1),hl($("#materialsList"),'<div class="division-block pricelist"></div><div class="list-option-container summary"></div>'),hl($("#materialsList .list-option-container").last(),`<span class='name summary'>Total for construction works:</span><span class='list-text summary work'>${e.formatCurrency(De)} €</span>`);let vl=0;const ml=document.getElementById("appliancesList"),gl=document.getElementById("appliancesListTotal"),Cl=[];if("gorenje"===ke?Cl.push(154,9):"bosch"===ke?Cl.push(169,10):"smeg"===ke?Cl.push(185,9):Cl.push(154,9),Fe){let l="",t="";for(let n=0;n<Cl[1];n++)l+=`<div class="option-block"><div class="division-block"></div><div class="list-option-container appliances"><span class='name'>${he.getCell("F"+(Cl[0]+n)).value()} ${he.getCell("E"+(Cl[0]+n)).value()}</span><span class='list-text'>${e.formatCurrency(.9*he.getCell("D"+(Cl[0]+n)).numeric())} €</span></div></div>`,t+=`<div class="option-block"><div class="division-block pricelist"></div><div class="list-option-container"><span class='name'>${he.getCell("F"+(Cl[0]+n)).value()} ${he.getCell("E"+(Cl[0]+n)).value()}</span><span class='list-text amount'>1 piece</span><span class='list-text'>${e.formatCurrency(.9*he.getCell("D"+(Cl[0]+n)).numeric())}€</span></div></div>`,vl+=.9*he.getCell("D"+(Cl[0]+n)).numeric();const n=he.getCell("G35").numeric(),s=he.getCell("E5").numeric();vl+=Cl[1]*n/s*.9,t+=`<div class="option-block"><div class="division-block pricelist"></div><div class="list-option-container"><span class='name'>Appliances delivery</span><span class='list-text amount'></span><span class='list-text'>${e.formatCurrency(Cl[1]*n/s*.9)} €</span></div></div>`,t+=`<div class="option-block"><div class="division-block pricelist"></div><div class="list-option-container"><span class='name'>${he.getCell("F164").value()}</span><span class='list-text amount'></span><span class='list-text'>${e.formatCurrency(.2*vl)} €</span></div></div>`,l+=`<div class="option-block"><div class="division-block"></div><div class="list-option-container appliances"><span class='name'>Appliances delivery</span><span class='list-text'>${e.formatCurrency(Cl[1]*n/s*.9)} €</span></div></div>`,l+=`<div class="option-block"><div class="division-block"></div><div class="list-option-container appliances"><span class='name'>${he.getCell("F164").value()}</span><span class='list-text'>${e.formatCurrency(.2*vl)} €</span></div></div>`,vl*=1.2,t+=`<div class="division-block pricelist"></div><div class="list-option-container summary"><span class='name summary'>Total for appliances:</span><span class='list-text summary work'>${e.formatCurrency(vl)} €</span></div>`,ml.innerHTML=l,gl.innerHTML=t}else gl.style.display="none";function $l(e,l,t){return`<div class="option-block"><div class="division-block pricelist"></div><div class="list-option-container"><span class='name'>${e}</span><span class='list-text amount'>${l}</span><span class='list-text'>${t}</span></div></div>`}function hl(e,l){e.append(l)}const fl=he.getCell(`${be}121`).numeric(),kl=he.getCell(`${be}122`).numeric(),yl=he.getCell(`${be}123`).numeric(),bl=kl+fl+yl;$("#kitchenPrice").html(e.formatCurrency(fl)+" €"),$("#kitchenMontage").html(e.formatCurrency(kl)+" €"),$("#kitchenDelivery").html(e.formatCurrency(yl)+" €"),$("#kitchenTotal").html(e.formatCurrency(bl)+" €"),$("#appliancesPrice").html(e.formatCurrency(vl)+" €"),Le&&(qe=0),1-Math.abs(fe.get("summedPrice")/De)<=.06?($("#totalPriceTotal").html(e.formatCurrency(De/1.23)+" € *"),$("#totalVAT").html(e.formatCurrency(De)+" € *")):($("#totalPriceTotal").html(e.formatCurrency(fe.get("summedPrice")/1.23)),$("#totalVAT").html(e.formatCurrency(fe.get("summedPrice"))))}))})();