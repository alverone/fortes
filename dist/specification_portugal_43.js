(()=>{"use strict";class e{static formatCurrency(e,l){return Intl.NumberFormat("uk-UA",{maximumFractionDigits:null!=l?l:2}).format(e)}}class l{constructor(e,l){this.address=e,this._value=l}hasValue(){return null!==this._value&&this._value.length>0}value(){return this._value}numeric(){return parseFloat(this._value)}formattedNumerical(){return e.formatCurrency(parseFloat(this.value()))}}class t{constructor(e){this.cells=e}getCell(e){const l=this.cells.filter((l=>l.address===e));return 0==l.length?null:l[0]}}class n{get(e){try{return JSON.parse(localStorage.getItem(e))}catch(l){return localStorage.getItem(e)}}set(e,l){localStorage.setItem(e,l.toString())}init(){this.set("style","cozy"),this.set("bath",!0),this.set("shower",!1),this.set("ceiling","stretch ceiling"),this.set("flooring","laminat"),this.set("hygienic_shower",!1),this.set("second_gypsum_layer",!1),this.set("floor_screed",!1),this.set("heated_flooring",!1),this.set("denoising",!1),this.set("entrance_doors",!1),this.set("conditioning",!1),this.set("amount_of_rooms",2),this.set("amount_of_bathrooms",1),this.set("appliances","gorenje"),this.set("appliances_bool_total",!1),this.set("furniture_bool",!0),this.set("space",50)}initPortugal(){this.set("style","cozy"),this.set("space",50),this.set("amount_of_rooms",2),this.set("amount_of_bathrooms",1),this.set("bath",!0),this.set("shower",!1),this.set("flooring","laminat"),this.set("finishing_materials",!1),this.set("demontage",!1),this.set("cement_screed",!1),this.set("heated_flooring",0),this.set("denoising",!1),this.set("entrance_doors",!1),this.set("windows_installation",0),this.set("builtin_furniture",!1),this.set("conditioning",0),this.set("furniture_bool",!1),this.set("appliances_bool_total",!1),this.set("appliances","gorenje"),this.set("transportation_expenses",5)}storageToRequestBody(e){const l={};for(const t in e)"length"!==t&&"costPerMetre"!=t&&("true"!==String(e[t])?"false"!==String(e[t])?isFinite(Number(e[t]))?l[t]=Number(e[t]):l[t]=e[t]:l[t]=0:l[t]=1);return JSON.stringify(l)}}class s{static numberToEncodedLetter(e){if(isNaN(e))return;let l,t=(e=Math.abs(Math.floor(e)))%26,n=e/26;return e<=26?this.numToLetter(e):(n>=1&&(0===t&&n--,l=this.numberToEncodedLetter(n)),0===t&&(t=26),l+this.numToLetter(t))}static numToLetter(e){if(!(e>26||e<0))return 0===e?"":this.alphabet.slice(e-1,e)}}s.alphabet="ABCDEFGHIJKLMNOPQRSTUVWXYZ";class i{}i.kCost="Cost",i.kAmount="Amount",i.kKitchen="Kitchen",i.kLMonth="month",fetch("https://docs.google.com/spreadsheets/d/1KkkpKbytztt48mwP1RGgpVFpfke8-IqB0KLWA8Sn2FE/gviz/tq?tqx=out:json&gid=1219923480").then((e=>e.text())).then((a=>{var o,r,u,c,d,v,p,m,g,C,h,f,k,y,b,F,L,_,w,x,G,T,M,N,S,B,A,E,P,I,K,j,z,D,q,J,O,R,V,H,Q,U,W,X,Y,Z,ee,le,te,ne,se,ie,ae,oe,re,ue,ce,de,ve,pe,me,ge,Ce;const he=JSON.parse(a.substring(a.length-2,0).replace("/*O_o*/\ngoogle.visualization.Query.setResponse(","")).table.rows,$e=new t(he.map(((e,t)=>e.c.map((function(e,n){var i;if(null!==e&&null!==e.v)return new l(`${s.numberToEncodedLetter(n+1)}${t+1}`,null!=(i=e.v)?i:e.f)})).filter((e=>null!=e)))).reduce(((e,l)=>[...e,...l]))),fe=new n;let ke=fe.get("appliances");const ye=fe.get("style"),be=function(e){let l="J";"cozy"==e?l="J":"japandi"==e?l="L":"fusion"==e?l="N":"modern"==e?l="P":"neoclassic"==e&&(l="R");return l}(ye);let Fe=Boolean(fe.get("appliances_bool_total")),Le=Boolean(fe.get("furniture_bool")),_e=fe.get("space"),we=Boolean(fe.get("bath")),xe=Boolean(fe.get("shower")),Ge=fe.get("amount_of_rooms"),Te=fe.get("amount_of_bathrooms"),Me="",Ne="",Se=Boolean(fe.get("demontage")),Be=fe.get("windows_installation"),Ae=Boolean(fe.get("finishing_materials")),Ee=Boolean(fe.get("cement_screed")),Pe=Boolean(fe.get("builtin_furiture")),Ie=fe.get("heated_flooring"),Ke=Boolean(fe.get("denoising")),je=Boolean(fe.get("entrance_doors")),ze=fe.get("conditioning"),De=fe.get("flooring"),qe=0,Je=0,Oe=fe.get("transportation_expenses"),Re=$("#furnitureList"),Ve=_e<=40?3:_e<=80?4:_e<=100?5:_e<=130?6:_e<=150?7:_e<=175?8:9;"modern"!=ye&&"neoclassic"!=ye||(Ve+=1),$("#months").html(Ve.toString());const He=$e.getCell("S46").numeric(),Qe=$e.getCell("S44").numeric();"cozy"==ye?(Me="I",Ne="A"):"japandi"==ye?(Me="K",Ne="B"):"fusion"==ye?(Me="M",Ne="C"):"modern"==ye?(Me="O",Ne="D"):"neoclassic"==ye&&(Me="Q",Ne="E");let Ue,We,Xe=0;"vynil"==De?(Ue="60",We="86",Xe=_e*(_e<=70?220.33:161.8)*He*2):"parket"==De?(Ue="61",We="87",Xe=_e*(_e<=80?369.96:240.31)*He*2):(Ue="59",We="85",Xe=_e*(_e<=70?201.26:198.81)*He*2);let Ye=$("#workList"),Ze="",el=2523*((Ge>0?6:0)+(we?2:0)+(xe?2:0)+2*Te)*He*2*Qe+(we?1:0)*Te*2500*2*Qe*He-950*He/41+4e3*(xe?1:0)*Te*2*Qe*He-800*He/41,ll=1974*((Ge>0?3:0)+(we?1:0)+(xe?1:0)+2*Te)*He*2*Qe;const tl=_e*Te*(_e<=100?83.2:33.98)*Qe*He*2,nl=(_e/Ge<=50?850*_e:24*Ge*3519)*He*Qe,sl=[_e/Ge<=50?_e*(_e<=60?1142.78:_e<=95?883.87:819.43)*He*1.45:4*Math.sqrt(_e)*3*600*He,_e*(_e<=60?283.08:_e<=95?281.22:_e<=124?338.33:362.47)*He*1.35*1.45,_e*(_e<=60?700.67:_e<=100?687.36:_e<=130?341.25:317.36)*He*1.1*1.5/2,(_e/Ge<50?1.77*(_e<=50?1e3*_e:990*_e):4*Math.sqrt(_e)*3*600)*He,_e*(_e<=60?418.86:_e<=100?416.29:_e<=135?416.73:416.67)*1.77*He,140*(_e<=60?$e.getCell(`${Me}55`).numeric():_e<=80?50:_e<=120?78:_e<=180?114:162)*("modern"==ye||"neoclassic"==ye?1:0),Xe,_e*(_e<=70?114.47:86.84)*He*2,_e*(_e<=70?206.59:170)*He*2*("japandi"==ye||"fusion"==ye?1:0)],il=[1,1,Te,1,1,1,1,1,1],al=[50,51,52,55,56,57,Ue,63,64];qe+=el,Ze=ml($e.getCell("F44").value(),"",Math.round(el)+" €"),$("#workList").append(Ze),qe+=ll,Ze=ml($e.getCell("F45").value(),"",Math.round(ll)+" €"),$("#workList").append(Ze),qe+=tl,Ze=ml($e.getCell("F46").value(),"",Math.round(tl)+" €"),$("#workList").append(Ze),qe+=nl,Ze=ml($e.getCell("F49").value(),"",Math.round(nl)+" €"),$("#workList").append(Ze);for(let e=0;e<al.length;e++){const l=sl[e]*il[e]*Qe;0===l||isNaN(l)||(qe+=l,Ze=ml($e.getCell("F"+al[e]).value(),"",Math.round(l)+" €"),$("#workList").append(Ze))}if(Ae){$("#workList").append('</div><div class="list-option-container margined"></div>'),$("#workList .list-option-container").last().append(`<h4 class="pricelist-header small no-padding">${$e.getCell("F68").value()}</h4><span class='notation amount'> </span><span class='notation'>${i.kCost}</span>`);let e=[$e.getCell(`${Me}69`).numeric(),$e.getCell(`${Me}70`).numeric(),$e.getCell(`${Me}71`).numeric(),$e.getCell(`${Me}72`).numeric(),$e.getCell(`${Me}73`).numeric(),$e.getCell(`${Me}74`).numeric(),$e.getCell(`${Me}76`).numeric(),$e.getCell(`${Me}77`).numeric(),$e.getCell(`${Me}78`).numeric(),$e.getCell(`${Me}79`).numeric(),$e.getCell(`${Me}80`).numeric(),$e.getCell(`${Me}81`).numeric(),$e.getCell(`${Me}82`).numeric(),$e.getCell(`${Me}83`).numeric(),$e.getCell(`${Me+We}`).numeric()],l=[Te+Ge,35*Te,.66*_e,.66*_e,.59*_e,_e<=50?42:_e<=90?60:_e<=120?84:90,Te,Number(we),Number(xe),Number(we)+Number(xe),Te,Te,Te,Te,_e<100?_e-7*Te:_e-10*Te],t=[69,70,71,72,73,74,76,77,78,79,80,82,83,84,We];for(let n=0;n<t.length;n++){const s=e[n]*l[n]*$e.getCell("S69").numeric()/1.23;0===s||isNaN(s)||(qe+=s,Ze=ml($e.getCell("F"+t[n]).value(),"",Math.round(s)+"€"),$("#workList").append(Ze))}}$("#workList").append('</div><div class="list-option-container margined"></div>'),$("#workList .list-option-container").last().append(`<h4 class="pricelist-header small no-padding">${$e.getCell("F93").value()}</h4>\n        <span class='notation amount'>${i.kAmount}</span>\n        <span class='notation'>${i.kCost}</span>`),Ze=`<div class="option-block">\n      <div class="division-block pricelist"></div>\n      <div class="list-option-container">\n        <span class='name'>${$e.getCell("F94").value()}</span>\n        <span class='list-text amount'>${Ve} months</span>\n        <span class='list-text'> </span>\n      </div>\n    </div>`,$("#workList").append(Ze);const ol=[(41e3*Math.ceil((Oe+2)/5)/1.35/2/1.5+100*_e)*Qe*He,.022*qe*He,(2*Ve*1200+3e3+220*_e)*Qe*He],rl=[95,96,97];Ze="";for(let l=0;l<rl.length;l++){const t=ol[l];qe+=t,Ze+=`<div class="option-block">\n        <div class="division-block pricelist"></div>\n        <div class="list-option-container">\n          <span class='name'>${$e.getCell(`F${rl[l]}`).value()}</span>\n            <span class='list-text amount'>${e.formatCurrency(t/Ve)} €/${i.kLMonth}</span>\n          <span class='list-text'>${e.formatCurrency(t)} €</span>\n        </div>\n      </div>`}$("#workList").append(Ze),gl($("#workList"),'<div class="division-block pricelist"></div><div class="list-option-container summary"></div>'),gl($("#workList .list-option-container").last(),`<span class='name summary'>Total for construction:</span><span class='list-text summary work'>${e.formatCurrency(qe)} €</span>`),Le&&($("#furnitureList").append('</div><div class="list-option-container"></div>'),$("#furnitureList .list-option-container").last().append(`<h4 class="pricelist-header small no-padding">${i.kKitchen}</h4>\n          <span class='notation amount'>${i.kAmount}</span>\n          <span class='notation'>${i.kCost}</span>`),ul($e.getCell("F121").value(),null==(o=$e.getCell(`${Ne}121`))?void 0:o.value(),1,$e.getCell(`${Me}121`).numeric(),$e.getCell("G121").value()),ul($e.getCell("F122").value(),null==(r=$e.getCell(`${Ne}122`))?void 0:r.value(),4,$e.getCell(`${Me}122`).numeric(),$e.getCell("G122").value()),ul($e.getCell("F123").value(),null==(u=$e.getCell(`${Ne}123`))?void 0:u.value(),1,$e.getCell(`${Me}123`).numeric(),$e.getCell("G123").value()),gl($("#furnitureList"),'</div><div class="list-option-container margined"></div>'),gl($("#furnitureList .list-option-container").last(),`<h4 class="pricelist-header small no-padding">${$e.getCell("F124").value()}</h4><span class='notation amount'>${i.kAmount}</span><span class='notation'>${i.kCost}</span>`),ul($e.getCell("F124").value(),null==(c=$e.getCell(Ne+"124"))?void 0:c.value(),1,null==(d=$e.getCell(`${Me}124`))?void 0:d.numeric(),null==(v=$e.getCell("G124"))?void 0:v.value()),ul($e.getCell("F125").value(),null==(p=$e.getCell(Ne+"125"))?void 0:p.value(),1,null==(m=$e.getCell(`${Me}125`))?void 0:m.numeric(),null==(g=$e.getCell("G125"))?void 0:g.value()),gl($("#furnitureList"),'</div><div class="list-option-container margined"></div>'),gl($("#furnitureList .list-option-container").last(),`<h4 class="pricelist-header small no-padding">${$e.getCell("F127").value()}</h4><span class='notation amount'>${i.kAmount}</span><span class='notation'>${i.kCost}</span>`),ul($e.getCell("F128").value(),null==(C=$e.getCell(Ne+"128"))?void 0:C.value(),1,null==(h=$e.getCell(`${Me}128`))?void 0:h.numeric(),null==(f=$e.getCell("G128"))?void 0:f.value()),ul($e.getCell("F129").value(),null==(k=$e.getCell(Ne+"129"))?void 0:k.value(),1,null==(y=$e.getCell(`${Me}129`))?void 0:y.numeric(),null==(b=$e.getCell("G129"))?void 0:b.value()),ul($e.getCell("F130").value(),null==(F=$e.getCell(Ne+"130"))?void 0:F.value(),2,null==(L=$e.getCell(`${Me}130`))?void 0:L.numeric(),null==(_=$e.getCell("G130"))?void 0:_.value()),ul($e.getCell("F131").value(),null==(w=$e.getCell(Ne+"131"))?void 0:w.value(),1,null==(x=$e.getCell(`${Me}131`))?void 0:x.numeric(),null==(G=$e.getCell("G131"))?void 0:G.value()),ul($e.getCell("F132").value(),null==(T=$e.getCell(Ne+"132"))?void 0:T.value(),1,null==(M=$e.getCell(`${Me}132`))?void 0:M.numeric(),null==(N=$e.getCell("G132"))?void 0:N.value()),gl($("#furnitureList"),'</div><div class="list-option-container margined"></div>'),$("#furnitureList .list-option-container").last().append(`<h4 class="pricelist-header small no-padding">${$e.getCell("F133").value()}</h4><span class='notation amount'>${i.kAmount}</span><span class='notation'>${i.kCost}</span>`),ul($e.getCell("F134").value(),null==(S=$e.getCell(Ne+"134"))?void 0:S.value(),Math.ceil(.48*_e),null==(B=$e.getCell(`${Me}134`))?void 0:B.numeric(),null==(A=$e.getCell("G134"))?void 0:A.value()),ul($e.getCell("F135").value(),null==(E=$e.getCell(Ne+"135"))?void 0:E.value(),1,null==(P=$e.getCell(`${Me}135`))?void 0:P.numeric(),null==(I=$e.getCell("G135"))?void 0:I.value()),ul($e.getCell("F137").value(),null==(K=$e.getCell(Ne+"137"))?void 0:K.value(),1,null==(j=$e.getCell(`${Me}137`))?void 0:j.numeric(),null==(z=$e.getCell("G137"))?void 0:z.value()),ul($e.getCell("F139").value(),null==(D=$e.getCell(Ne+"139"))?void 0:D.value(),1,null==(q=$e.getCell(`${Me}139`))?void 0:q.numeric(),null==(J=$e.getCell("G139"))?void 0:J.value()),ul($e.getCell("F140").value(),null==(O=$e.getCell(Ne+"140"))?void 0:O.value(),1,null==(R=$e.getCell(`${Me}140`))?void 0:R.numeric(),null==(V=$e.getCell("G140"))?void 0:V.value()),ul($e.getCell("F136").value(),null==(H=$e.getCell(Ne+"136"))?void 0:H.value(),Ge>1?1:0,null==(Q=$e.getCell(`${Me}136`))?void 0:Q.numeric(),null==(U=$e.getCell("G136"))?void 0:U.value()),ul($e.getCell("F138").value(),null==(W=$e.getCell(Ne+"138"))?void 0:W.value(),2,null==(X=$e.getCell(`${Me}138`))?void 0:X.numeric(),null==(Y=$e.getCell("G138"))?void 0:Y.value()),$("#furnitureList").append('</div><div class="list-option-container margined"></div>'),$("#furnitureList .list-option-container").last().append(`<h4 class="pricelist-header small no-padding">${$e.getCell("F141").value()}</h4>\n            <span class='notation amount'>${i.kAmount}</span>\n            <span class='notation'>${i.kCost}</span>`),ul($e.getCell("F142").value(),null==(Z=$e.getCell(Ne+"142"))?void 0:Z.value(),Ge,null==(ee=$e.getCell(`${Me}142`))?void 0:ee.numeric(),null==(le=$e.getCell("G142"))?void 0:le.value()),ul($e.getCell("F143").value(),null==(te=$e.getCell(Ne+"143"))?void 0:te.value(),Ge,null==(ne=$e.getCell(`${Me}143`))?void 0:ne.numeric(),null==(se=$e.getCell("G143"))?void 0:se.value()),ul($e.getCell("F144").value(),null==(ie=$e.getCell(Ne+"144"))?void 0:ie.value(),Ge,null==(ae=$e.getCell(`${Me}144`))?void 0:ae.numeric(),null==(oe=$e.getCell("G144"))?void 0:oe.value()),ul($e.getCell("F145").value(),null==(re=$e.getCell(Ne+"145"))?void 0:re.value(),1,null==(ue=$e.getCell(`${Me}145`))?void 0:ue.numeric(),null==(ce=$e.getCell("G145"))?void 0:ce.value()),ul($e.getCell("F146").value(),null==(de=$e.getCell(Ne+"146"))?void 0:de.value(),Ge-1,null==(ve=$e.getCell(`${Me}146`))?void 0:ve.numeric(),null==(pe=$e.getCell("G146"))?void 0:pe.value()),gl($("#furnitureList"),ml($e.getCell("F147").value()," ",Math.round(.3*Je)+"€")),Je*=1.3,gl($("#furnitureList"),'<div class="division-block pricelist"></div><div class="list-option-container summary"></div>'),gl($("#furnitureList .list-option-container").last(),`<span class='name summary'>Total for appliances:</span><span class='list-text summary work'>${e.formatCurrency(Je)} €</span>`));if(Pe||Ee||Ae||Be||Se||Ie>0||Ke||je||ze){$("#workList").append('</div><div class="list-option-container margined"></div>'),$("#workList .list-option-container").last().append(`<h4 class="pricelist-header small no-padding">${$e.getCell("F102").value()}</h4><span class='notation amount'></span><span class='notation'>${i.kCost}</span>`);const l=[$e.getCell(`${Me}103`).numeric()*_e,$e.getCell(`${Me}104`).numeric(),_e<=60?440:410*He*2*_e*Qe,$e.getCell(`${Me}106`).numeric(),((_e<=60?90.02:_e<=95?60.78:_e<125?58.29:_e>=125?79.01:0)+(_e<=60?60.91:_e<=95?64.57:_e<125?63.87:_e>=125?66.24:0))*_e*$e.getCell("T103").numeric(),$e.getCell(`${Me}108`).numeric()/1.23,$e.getCell(`${Me}109`).numeric()/1.23,$e.getCell(`${Me}110`).numeric()/1.23],t=[Se?1:0,Be,Ee?1:0,Ie,Ke?1:0,je?1:0,Pe?1:0,Pe?1:0],n=[103,104,105,106,107,108,109,110];for(let s=0;s<n.length;s++){const i=l[s]*t[s]*$e.getCell("S104").numeric();0!==i&&0!=t[s]&&(qe+=i,gl(Ye,ml(null==(me=$e.getCell("F"+n[s]))?void 0:me.value(),"",e.formatCurrency(i)+"€")))}if(ze>0){const l=ze*$e.getCell(`${Me}113`).numeric()*(1+$e.getCell("S113").numeric()/100)/$e.getCell("E5").numeric(),t=.05*l*$e.getCell("T103").numeric();gl(Ye,ml(null==(ge=$e.getCell("F113"))?void 0:ge.value(),"",e.formatCurrency(l)+"€")),gl(Ye,ml(null==(Ce=$e.getCell("F114"))?void 0:Ce.value(),"",e.formatCurrency(t)+"€")),qe+=t+l}gl($("#workList"),'<div class="division-block pricelist"></div><div class="list-option-container summary"></div>'),gl($("#workList .list-option-container").last(),`<span class='name summary'>Total for renovation:</span><span class='list-text summary work'>${e.formatCurrency(qe)} €</span>`)}function ul(l,t,n,s,i){Le&&0!=n&&n&&s&&(Je+=s*n,gl(Re,'<div class="option-block"><div class="division-block pricelist"></div><div class="list-option-container"></div></div>'),null!==t?gl($("#furnitureList .option-block .list-option-container").last(),`<span class='name'>${l}, ${t}</span><span class='list-text amount'>${n} ${i}</span><span class='list-text'>${e.formatCurrency(s*n)} €</span>`):gl($("#materialsList .option-block .list-option-container").last(),`<span class='name'>${l}</span><span class='list-text'>${n} ${i} </span>`))}Fe||$(".comfy-section").toggle(!1),Le||$("#furnitureList").toggle(!1),gl($("#materialsList"),'<div class="division-block pricelist"></div><div class="list-option-container summary"></div>'),gl($("#materialsList .list-option-container").last(),`<span class='name summary'>Всього по будівельній частині:</span><span class='list-text summary work'>${e.formatCurrency(qe)} €</span>`);let cl=0;const dl=document.getElementById("appliancesList"),vl=document.getElementById("appliancesListTotal"),pl=[];if("gorenje"===ke?pl.push(154,9):"bosch"===ke?pl.push(169,10):"smeg"===ke?pl.push(185,9):pl.push(154,9),Fe){let l="",t="";for(let n=0;n<pl[1];n++)l+=`<div class="option-block"><div class="division-block white"></div><div class="list-option-container appliances"><span class='name white'>${$e.getCell("F"+(pl[0]+n)).value()} ${$e.getCell("E"+(pl[0]+n)).value()}</span><span class='list-text white'>${e.formatCurrency(.9*$e.getCell("D"+(pl[0]+n)).numeric())} €</span></div></div>`,t+=`<div class="option-block"><div class="division-block pricelist"></div><div class="list-option-container"><span class='name'>${$e.getCell("F"+(pl[0]+n)).value()} ${$e.getCell("E"+(pl[0]+n)).value()}</span><span class='list-text amount'>1 piece</span><span class='list-text'>${e.formatCurrency(.9*$e.getCell("D"+(pl[0]+n)).numeric())}€</span></div></div>`,cl+=.9*$e.getCell("D"+(pl[0]+n)).numeric();const n=$e.getCell("G35").numeric(),s=$e.getCell("E5").numeric();cl+=pl[1]*n/s*.9,t+=`<div class="option-block"><div class="division-block pricelist"></div><div class="list-option-container"><span class='name'>Доставка техніки</span><span class='list-text amount'></span><span class='list-text'>${e.formatCurrency(pl[1]*n/s*.9)} €</span></div></div>`,t+=`<div class="option-block"><div class="division-block pricelist"></div><div class="list-option-container"><span class='name'>${$e.getCell("F164").value()}</span><span class='list-text amount'></span><span class='list-text'>${e.formatCurrency(.2*cl)} €</span></div></div>`,l+=`<div class="option-block"><div class="division-block white"></div><div class="list-option-container appliances"><span class='name white'>Доставка техніки</span><span class='list-text white'>${e.formatCurrency(pl[1]*n/s*.9)} €</span></div></div>`,l+=`<div class="option-block"><div class="division-block white"></div><div class="list-option-container appliances"><span class='name white'>${$e.getCell("F164").value()}</span><span class='list-text white'>${e.formatCurrency(.2*cl)} €</span></div></div>`,cl*=1.2,t+=`<div class="division-block pricelist"></div><div class="list-option-container summary"><span class='name summary'>Всього по техніці:</span><span class='list-text summary work'>${e.formatCurrency(cl)} €</span></div>`,dl.innerHTML=l,vl.innerHTML=t}else vl.style.display="none";function ml(e,l,t){return`<div class="option-block"><div class="division-block pricelist"></div><div class="list-option-container"><span class='name'>${e}</span><span class='list-text amount'>${l}</span><span class='list-text'>${t}</span></div></div>`}function gl(e,l){e.append(l)}const Cl=$e.getCell(`${be}121`).numeric(),hl=$e.getCell(`${be}122`).numeric(),$l=$e.getCell(`${be}123`).numeric(),fl=hl+Cl+$l;$("#kitchenPrice").html(e.formatCurrency(Cl)+" €"),$("#kitchenMontage").html(e.formatCurrency(hl)+" €"),$("#kitchenDelivery").html(e.formatCurrency($l)+" €"),$("#kitchenTotal").html(e.formatCurrency(fl)+" €"),$("#kitchenTotalPrice").html(e.formatCurrency(cl)+" €"),Le&&(Je=0),fe.get("summedPrice")<qe?($("#totalPriceTotal").html(e.formatCurrency(qe/1.23)+" € *"),$("#totalVAT").html(e.formatCurrency(qe)+" € *")):($("#totalPriceTotal").html(e.formatCurrency(fe.get("summedPrice")/1.23)),$("#totalVAT").html(e.formatCurrency(fe.get("summedPrice"))))}))})();