(()=>{"use strict";class e{static formatCurrency(e,l){return Intl.NumberFormat("uk-UA",{maximumFractionDigits:null!=l?l:2}).format(e)}}class l{constructor(e,l){this.address=e,this._value=l}hasValue(){return null!==this._value&&this._value.length>0}value(){return this._value}numeric(){return parseFloat(this._value)}formattedNumerical(){return e.formatCurrency(parseFloat(this.value()))}}class t{constructor(e){this.cells=e}getCell(e){const l=this.cells.filter((l=>l.address===e));return 0==l.length?null:l[0]}}class i{get(e){try{return JSON.parse(localStorage.getItem(e))}catch(l){return localStorage.getItem(e)}}set(e,l){localStorage.setItem(e,l.toString())}init(){this.set("style","cozy"),this.set("bath",!0),this.set("shower",!1),this.set("ceiling","stretch ceiling"),this.set("flooring","laminat"),this.set("hygienic_shower",!1),this.set("second_gypsum_layer",!1),this.set("floor_screed",!1),this.set("heated_flooring",!1),this.set("denoising",!1),this.set("entrance_doors",!1),this.set("conditioning",!1),this.set("amount_of_rooms",2),this.set("amount_of_bathrooms",1),this.set("appliances","gorenje"),this.set("appliances_bool_total",!1),this.set("furniture_bool",!0),this.set("space",50)}initPortugal(){this.set("style","cozy"),this.set("bath",!0),this.set("shower",!1),this.set("flooring","laminat"),this.set("hygienic_shower",!1),this.set("demontage",!1),this.set("windows_installtion",0),this.set("heated_flooring",!1),this.set("denoising",!1),this.set("entrance_doors",!1),this.set("conditioning",!1),this.set("amount_of_rooms",2),this.set("amount_of_bathrooms",1),this.set("appliances","gorenje"),this.set("appliances_bool_total",!1),this.set("furniture_bool",!0),this.set("space",50)}storageToRequestBody(e){const l={};for(const t in e)"length"!==t&&("true"!==String(e[t])?"false"!==String(e[t])?isFinite(Number(e[t]))?l[t]=Number(e[t]):l[t]=e[t]:l[t]=0:l[t]=1);return JSON.stringify(l)}}class n{static numberToEncodedLetter(e){if(isNaN(e))return;let l,t=(e=Math.abs(Math.floor(e)))%26,i=e/26;return e<=26?this.numToLetter(e):(i>=1&&(0===t&&i--,l=this.numberToEncodedLetter(i)),0===t&&(t=26),l+this.numToLetter(t))}static numToLetter(e){if(!(e>26||e<0))return 0===e?"":this.alphabet.slice(e-1,e)}}n.alphabet="ABCDEFGHIJKLMNOPQRSTUVWXYZ",fetch("https://docs.google.com/spreadsheets/d/1KkkpKbytztt48mwP1RGgpVFpfke8-IqB0KLWA8Sn2FE/gviz/tq?tqx=out:json&gid=1219923480").then((e=>e.text())).then((s=>{var a,o,r,u,c,d,v,p,g,m,C,h,f,y,k,b,L,F,w,_,x,G,S,N,T,M,E,P,B,I,j,z,D,J,O,K,R,q,A,H,Q,V,U,W,X,Y,Z,ee,le,te,ie,ne,se,ae,oe,re,ue,ce,de,ve,pe,ge,me;const Ce=JSON.parse(s.substring(s.length-2,0).replace("/*O_o*/\ngoogle.visualization.Query.setResponse(","")).table.rows,he=new t(Ce.map(((e,t)=>e.c.map((function(e,i){var s;if(null!==e&&null!==e.v)return new l(`${n.numberToEncodedLetter(i+1)}${t+1}`,null!=(s=e.v)?s:e.f)})).filter((e=>null!=e)))).reduce(((e,l)=>[...e,...l]))),$e=new i;let fe=$e.get("appliances");const ye=$e.get("style"),ke=Cl(ye);let be=Boolean($e.get("appliances_bool_total")),Le=Boolean($e.get("furniture_bool")),Fe=$e.get("space"),we=Boolean($e.get("bath")),_e=Boolean($e.get("shower")),xe=$e.get("amount_of_rooms"),Ge=$e.get("amount_of_bathrooms"),Se="",Ne="",Te=$e.get("ceiling"),Me=$e.get("hygienic_shower"),Ee=$e.get("demontage"),Pe=$e.get("windows_installtion"),Be=$e.get("heated_flooring"),Ie=$e.get("denoising"),je=$e.get("entrance_doors"),ze=$e.get("conditioning"),De=$e.get("flooring"),Je=0,Oe=0,Ke=$("#furnitureList");he.getCell("S111").numeric();let Re=Fe<=40?3:Fe<=80?4:Fe<=100?5:Fe<=130?6:Fe<=150?7:Fe<=175?8:9;"modern"!=ye&&"neoclassic"!=ye||(Re+=1),$("#months").html(Re.toString());const qe=he.getCell("S44").numeric(),Ae=he.getCell("S42").numeric();"cozy"==ye?(Se="I",Ne="A"):"japandi"==ye?(Se="K",Ne="B"):"fusion"==ye?(Se="M",Ne="C"):"modern"==ye?(Se="O",Ne="D"):"neoclassic"==ye&&(Se="Q",Ne="E");let He,Qe,Ve=0;"laminat"==De?(He="61",Qe="87",Ve=Fe*(Fe<=70?201.26:198.81)*qe):"vynil"==De?(He="61",Qe="87",Ve=Fe*(Fe<=70?220.33:161.8)*qe):"parket"==De&&(He="62",Qe="87",Ve=Fe*(Fe<=80?369.96:240.31)*qe);let Ue=$("#workList"),We="",Xe=2523*((xe>0?6:0)+(we?2:0)+(_e?2:0)+2*Ge)*qe,Ye=1974*((xe>0?3:0)+(we?1:0)+(_e?1:0)+2*Ge)*qe,Ze=Fe*Ge*(Fe<=100?83.2:33.98);const el=he.getCell(`${Se}45`).numeric()*Fe,ll=[Fe*(Fe<=60?1142.78:Fe<=95?883.87:Fe<=125?819.43:925.61)*qe,Fe*(Fe<=60?700.67:Fe<=100?687.36:Fe<=130?341.25:317.36)*qe*1.1,he.getCell(`${Se}50`).numeric(),Fe*(Fe<=50?1e3:990)*qe,140*(Fe<=60?he.getCell(`${Se}54`).numeric():Fe<=80?50:Fe<=120?78:Fe<=180?114:162)*("modern"==ye||"neoclassic"==ye?1:0),Fe*(Fe<=60?418.86:Fe<=100?416.29:Fe<=135?443.73:481.67)*("gypsum"==Te?1:0)*qe,Ve,Fe*(Fe<=70?114.47:86.84)*qe,Fe*(Fe<=70?206.59:170)*qe*("japandi"==ye||"fusion"==ye?1:0)],tl=[1,Ge,xe+Ge,1,1,void 0,1,1,1],il=[48,49,50,52,54,53,He,60,60];Je+=Xe*Ae+((we?Ge*he.getCell(`${Se}47`).numeric():0)+(_e?Ge*he.getCell(`${Se}46`).numeric():0))*Ae-1750*qe,We=gl(he.getCell("F42").value(),"",Math.round(Xe*Ae+((we?Ge*he.getCell(`${Se}47`).numeric():0)+(_e?Ge*he.getCell(`${Se}46`).numeric():0))*Ae-1750*qe)+" €"),$("#workList").append(We),Je+=Ye*Ae,We=gl(he.getCell("F43").value(),"",Math.round(Ye*Ae)+" €"),$("#workList").append(We),Je+=Ze*Ae*qe,We=gl(he.getCell("F44").value(),"",Math.round(Ze*Ae*qe)+" €"),$("#workList").append(We),Je+=el*Ae,We=gl(he.getCell("F45").value(),"",Math.round(el*Ae)+" €"),$("#workList").append(We),_e&&(We=gl(he.getCell("F46").value(),"",he.getCell(Cl(ye)+46).numeric().toString()+" €"),$("#workList").append(We)),we&&(We=gl(he.getCell("F47").value(),"",he.getCell(Cl(ye)+47).numeric().toString()+" €"),$("#workList").append(We));for(let e=0;e<il.length;e++){const l=ll[e]*tl[e]*Ae;0===l||isNaN(l)||(Je+=l,We=gl(he.getCell("F"+il[e]).value(),"",Math.round(l)+" €"),$("#workList").append(We))}$("#workList").append('</div><div class="list-option-container margined"></div>'),$("#workList .list-option-container").last().append("<h4 class=\"pricelist-header small no-padding\">Комплектуючі та чистові матеріали</h4><span class='notation amount'> </span><span class='notation'>Ціна</span>");let nl=[he.getCell(`${Se}72`).numeric(),he.getCell(`${Se}73`).numeric(),he.getCell(`${Se}74`).numeric(),he.getCell(`${Se}75`).numeric(),he.getCell(`${Se}77`).numeric(),he.getCell(`${Se}77`).numeric(),he.getCell(`${Se}79`).numeric(),he.getCell(`${Se}80`).numeric(),he.getCell(`${Se}81`).numeric(),he.getCell(`${Se}82`).numeric(),he.getCell(`${Se}85`).numeric(),he.getCell(`${Se}85`).numeric(),he.getCell(`${Se}85`).numeric(),he.getCell(`${Se}86`).numeric(),he.getCell(`${Se}87`).numeric(),he.getCell(`${Se}87`).numeric(),he.getCell(`${Se}87`).numeric(),he.getCell(`${Se+Qe}`).numeric(),100*Fe*he.getCell("S72").numeric()],sl=[Ge+xe,35*Ge,.66*Fe,.66*Fe,.59*Fe,Fe<=50?42:Fe<=90?60:Fe<=120?84:90,Ge,Ge,Ge,Ge,Number(we),Number(_e),Number(_e),Ge,Ge,Ge,Ge,Fe<100?Fe-7*Ge:Fe-10*Ge,1],al=[72,73,74,75,75,77,79,80,81,82,85,84,85,86,87,88,89,Qe,94];for(let e=0;e<al.length;e++){let l=nl[e]*sl[e]*he.getCell("S72").numeric()*he.getCell("S70").numeric();0===l||isNaN(l)||(Je+=l,We=gl(he.getCell("F"+al[e]).value(),"",Math.round(l)+"€"),$("#workList").append(We))}$("#workList").append('</div><div class="list-option-container margined"></div>'),$("#workList .list-option-container").last().append(`<h4 class="pricelist-header small no-padding">${he.getCell("F92").value()}</h4><span class='notation amount'>Кількість</span><span class='notation'>Price</span>`),We=`<div class="option-block"><div class="division-block pricelist"></div><div class="list-option-container"><span class='name'>${he.getCell("F93").value()}</span><span class='list-text amount'>${Re} months</span><span class='list-text'> </span></div></div>`,$("#workList").append(We);const ol=[41e3*Math.round((Re+1)/5)*qe*Ae/1.35/2/1.5*100*Fe/he.getCell("E5").numeric(),.022*Je*qe,2*Re*1200+3e3+220*Fe*Ae*qe],rl=[94,95,96];for(let l=0;l<rl.length;l++){const t=ol[l];Je+=t,We=`<div class="option-block"><div class="division-block pricelist"></div><div class="list-option-container"><span class='name'>${he.getCell(`F${rl[l]}`).value()}</span><span class='list-text amount'>${e.formatCurrency(t/Re)} €/місяць</span><span class='list-text'>${e.formatCurrency(t)} €</span></div></div>`,$("#workList").append(We)}if(Le&&($("#furnitureList").append('</div><div class="list-option-container"></div>'),$("#furnitureList .list-option-container").last().append("<h4 class=\"pricelist-header small no-padding\">Кухня</h4><span class='notation amount'>Кількість</span><span class='notation'>Ціна</span>"),ul(he.getCell("F118").value(),null==(a=he.getCell(`${Ne}118`))?void 0:a.value(),1,he.getCell(`${Se}118`).numeric(),he.getCell("G118").value()),ul(he.getCell("F119").value(),null==(o=he.getCell(`${Ne}119`))?void 0:o.value(),4,he.getCell(`${Se}119`).numeric(),he.getCell("G119").value()),ul(he.getCell("F120").value(),null==(r=he.getCell(`${Ne}120`))?void 0:r.value(),1,he.getCell(`${Se}120`).numeric(),he.getCell("G120").value()),ml($("#furnitureList"),'</div><div class="list-option-container margined"></div>'),ml($("#furnitureList .list-option-container").last(),"<h4 class=\"pricelist-header small no-padding\">Вітальня</h4><span class='notation amount'>Кількість</span><span class='notation'>Ціна</span>"),ul(he.getCell("F122").value(),null==(u=he.getCell(Ne+"122"))?void 0:u.value(),1,null==(c=he.getCell(`${Se}122`))?void 0:c.numeric(),null==(d=he.getCell("G122"))?void 0:d.value()),ul(he.getCell("F123").value(),null==(v=he.getCell(Ne+"123"))?void 0:v.value(),1,null==(p=he.getCell(`${Se}123`))?void 0:p.numeric(),null==(g=he.getCell("G123"))?void 0:g.value()),ml($("#furnitureList"),'</div><div class="list-option-container margined"></div>'),ml($("#furnitureList .list-option-container").last(),"<h4 class=\"pricelist-header small no-padding\">Спальня</h4><span class='notation amount'>Кількість</span><span class='notation'>Ціна</span>"),ul(he.getCell("F125").value(),null==(m=he.getCell(Ne+"125"))?void 0:m.value(),1,null==(C=he.getCell(`${Se}125`))?void 0:C.numeric(),null==(h=he.getCell("G125"))?void 0:h.value()),ul(he.getCell("F126").value(),null==(f=he.getCell(Ne+"126"))?void 0:f.value(),1,null==(y=he.getCell(`${Se}126`))?void 0:y.numeric(),null==(k=he.getCell("G126"))?void 0:k.value()),ul(he.getCell("F127").value(),null==(b=he.getCell(Ne+"127"))?void 0:b.value(),2,null==(L=he.getCell(`${Se}127`))?void 0:L.numeric(),null==(F=he.getCell("G127"))?void 0:F.value()),ul(he.getCell("F128").value(),null==(w=he.getCell(Ne+"128"))?void 0:w.value(),1,null==(_=he.getCell(`${Se}128`))?void 0:_.numeric(),null==(x=he.getCell("G128"))?void 0:x.value()),ul(he.getCell("F129").value(),null==(G=he.getCell(Ne+"129"))?void 0:G.value(),1,null==(S=he.getCell(`${Se}129`))?void 0:S.numeric(),null==(N=he.getCell("G129"))?void 0:N.value()),ml($("#furnitureList"),'</div><div class="list-option-container margined"></div>'),$("#furnitureList .list-option-container").last().append("<h4 class=\"pricelist-header small no-padding\">Світильники</h4><span class='notation amount'>Кількість</span><span class='notation'>Ціна</span>"),ul(he.getCell("F131").value(),null==(T=he.getCell(Ne+"131"))?void 0:T.value(),Math.ceil(.48*Fe),null==(M=he.getCell(`${Se}131`))?void 0:M.numeric(),null==(E=he.getCell("G131"))?void 0:E.value()),ul(he.getCell("F132").value(),null==(P=he.getCell(Ne+"132"))?void 0:P.value(),1,null==(B=he.getCell(`${Se}132`))?void 0:B.numeric(),null==(I=he.getCell("G132"))?void 0:I.value()),ul(he.getCell("F134").value(),null==(j=he.getCell(Ne+"134"))?void 0:j.value(),1,null==(z=he.getCell(`${Se}134`))?void 0:z.numeric(),null==(D=he.getCell("G134"))?void 0:D.value()),ul(he.getCell("F136").value(),null==(J=he.getCell(Ne+"136"))?void 0:J.value(),1,null==(O=he.getCell(`${Se}136`))?void 0:O.numeric(),null==(K=he.getCell("G136"))?void 0:K.value()),ul(he.getCell("F137").value(),null==(R=he.getCell(Ne+"137"))?void 0:R.value(),1,null==(q=he.getCell(`${Se}137`))?void 0:q.numeric(),null==(A=he.getCell("G137"))?void 0:A.value()),ul(he.getCell("F133").value(),null==(H=he.getCell(Ne+"133"))?void 0:H.value(),xe>1?1:0,null==(Q=he.getCell(`${Se}133`))?void 0:Q.numeric(),null==(V=he.getCell("G133"))?void 0:V.value()),ul(he.getCell("F135").value(),null==(U=he.getCell(Ne+"135"))?void 0:U.value(),2,null==(W=he.getCell(`${Se}135`))?void 0:W.numeric(),null==(X=he.getCell("G135"))?void 0:X.value()),$("#furnitureList").append('</div><div class="list-option-container margined"></div>'),$("#furnitureList .list-option-container").last().append("<h4 class=\"pricelist-header small no-padding\">Декор</h4><span class='notation amount'>Кількість</span><span class='notation'>Ціна</span>"),ul(he.getCell("F139").value(),null==(Y=he.getCell(Ne+"139"))?void 0:Y.value(),xe,null==(Z=he.getCell(`${Se}139`))?void 0:Z.numeric(),null==(ee=he.getCell("G139"))?void 0:ee.value()),ul(he.getCell("F140").value(),null==(le=he.getCell(Ne+"140"))?void 0:le.value(),xe,null==(te=he.getCell(`${Se}140`))?void 0:te.numeric(),null==(ie=he.getCell("G140"))?void 0:ie.value()),ul(he.getCell("F141").value(),null==(ne=he.getCell(Ne+"141"))?void 0:ne.value(),xe,null==(se=he.getCell(`${Se}141`))?void 0:se.numeric(),null==(ae=he.getCell("G141"))?void 0:ae.value()),ul(he.getCell("F142").value(),null==(oe=he.getCell(Ne+"142"))?void 0:oe.value(),1,null==(re=he.getCell(`${Se}142`))?void 0:re.numeric(),null==(ue=he.getCell("G142"))?void 0:ue.value()),ul(he.getCell("F143").value(),null==(ce=he.getCell(Ne+"143"))?void 0:ce.value(),xe-1,null==(de=he.getCell(`${Se}143`))?void 0:de.numeric(),null==(ve=he.getCell("G143"))?void 0:ve.value()),ml($("#furnitureList"),gl(he.getCell("F144").value()," ",Math.round(.3*Oe)+"€")),Oe*=1.3,ml($("#furnitureList"),'<div class="division-block pricelist"></div><div class="list-option-container summary"></div>'),ml($("#furnitureList .list-option-container").last(),`<span class='name summary'>Всього по меблях:</span><span class='list-text summary work'>${e.formatCurrency(Oe)} €</span>`)),Me||Pe||Ee||Be>0||Ie||je||ze){$("#workList").append('</div><div class="list-option-container margined"></div>'),$("#workList .list-option-container").last().append("<h4 class=\"pricelist-header small no-padding\"> Опції</h4><span class='notation amount'> </span><span class='notation'>Ціна</span>");const l=[he.getCell(`${Se}103`).numeric()*Fe,he.getCell(`${Se}104`).numeric(),he.getCell(`${Se}105`).numeric(),he.getCell(`${Se}106`).numeric(),((Fe<=60?90.02:Fe<=95?60.78:Fe<125?58.29:Fe>=125?79.01:0)+(Fe<=60?60.91:Fe<=95?64.57:Fe<125?63.87:Fe>=125?66.24:0))*Fe*he.getCell("T103").numeric(),he.getCell(`${Se}108`).numeric(),he.getCell(`${Se}110`).numeric()*Fe],t=[Ee?1:0,Pe,Me?1:0,Be,Ie?1:0,je?1:0,ze],i=[103,104,105,106,107,108,110];for(let n=0;n<i.length;n++){const s=l[n]*t[n]*he.getCell("S103").numeric();0!==s&&0!=t[n]&&(Je+=s,ml(Ue,gl(null==(pe=he.getCell("F"+i[n]))?void 0:pe.value(),"",e.formatCurrency(s)+"€")))}if(ze>0){const l=ze*he.getCell(`${Se}111`).numeric()*(1+he.getCell("S111").numeric()/100)/he.getCell("E5").numeric(),t=.05*l*he.getCell("T103").numeric();ml(Ue,gl(null==(ge=he.getCell("F111"))?void 0:ge.value(),"",e.formatCurrency(l)+"€")),ml(Ue,gl(null==(me=he.getCell("F112"))?void 0:me.value(),"",e.formatCurrency(t)+"€")),Je+=t+l}}function ul(l,t,i,n,s){Le&&0!=i&&i&&n&&(Oe+=n*i,ml(Ke,'<div class="option-block"><div class="division-block pricelist"></div><div class="list-option-container"></div></div>'),null!==t?ml($("#furnitureList .option-block .list-option-container").last(),`<span class='name'>${l}, ${t}</span><span class='list-text amount'>${i} ${s}</span><span class='list-text'>${e.formatCurrency(n*i)} €</span>`):ml($("#materialsList .option-block .list-option-container").last(),`<span class='name'>${l}</span><span class='list-text'>${i} ${s} </span>`))}be||$(".comfy-section").toggle(!1),Le||$("#furnitureList").toggle(!1),ml($("#workList"),'<div class="division-block pricelist"></div><div class="list-option-container summary"></div>'),ml($("#workList .list-option-container").last(),`<span class='name summary'>Всього по будівельній частині:</span><span class='list-text summary work'>${e.formatCurrency(Je)} €</span>`),ml($("#materialsList"),'<div class="division-block pricelist"></div><div class="list-option-container summary"></div>'),ml($("#materialsList .list-option-container").last(),`<span class='name summary'>Всього по будівельній частині:</span><span class='list-text summary work'>${e.formatCurrency(Je)} €</span>`);let cl=0;const dl=document.getElementById("appliancesList"),vl=document.getElementById("appliancesListTotal"),pl=[];if("gorenje"===fe?pl.push(151,9):"bosch"===fe?pl.push(166,10):"smeg"===fe?pl.push(182,9):pl.push(151,9),be){let l="",t="";for(let i=0;i<pl[1];i++)l+=`<div class="option-block"><div class="division-block white"></div><div class="list-option-container appliances"><span class='name white'>${he.getCell("F"+(pl[0]+i)).value()} ${he.getCell("E"+(pl[0]+i)).value()}</span><span class='list-text white'>${e.formatCurrency(.9*he.getCell("D"+(pl[0]+i)).numeric())} €</span></div></div>`,t+=`<div class="option-block"><div class="division-block pricelist"></div><div class="list-option-container"><span class='name'>${he.getCell("F"+(pl[0]+i)).value()} ${he.getCell("E"+(pl[0]+i)).value()}</span><span class='list-text amount'>1 piece</span><span class='list-text'>${e.formatCurrency(.9*he.getCell("D"+(pl[0]+i)).numeric())}€</span></div></div>`,cl+=.9*he.getCell("D"+(pl[0]+i)).numeric();const i=he.getCell("G33").numeric(),n=he.getCell("E5").numeric();cl+=pl[1]*i/n*.9,t+=`<div class="option-block"><div class="division-block pricelist"></div><div class="list-option-container"><span class='name'>Доставка техніки</span><span class='list-text amount'></span><span class='list-text'>${e.formatCurrency(pl[1]*i/n*.9)} €</span></div></div>`,t+=`<div class="option-block"><div class="division-block pricelist"></div><div class="list-option-container"><span class='name'>${he.getCell("F162").value()}</span><span class='list-text amount'></span><span class='list-text'>${e.formatCurrency(.2*cl)} €</span></div></div>`,l+=`<div class="option-block"><div class="division-block white"></div><div class="list-option-container appliances"><span class='name white'>Доставка техніки</span><span class='list-text white'>${e.formatCurrency(pl[1]*i/n*.9)} €</span></div></div>`,l+=`<div class="option-block"><div class="division-block white"></div><div class="list-option-container appliances"><span class='name white'>${he.getCell("F162").value()}</span><span class='list-text white'>${e.formatCurrency(.2*cl)} €</span></div></div>`,cl*=1.2,t+=`<div class="division-block pricelist"></div>< div class="list-option-container summary"></><span class='name summary'>Всього по техніці:</span><span class='list-text summary work'>${e.formatCurrency(cl)} €</span>`,dl.innerHTML=l,vl.innerHTML=t}else vl.style.display="none";function gl(e,l,t){return`<div class="option-block"><div class="division-block pricelist"></div><div class="list-option-container"><span class='name'>${e}</span><span class='list-text amount'>${l}</span><span class='list-text'>${t}</span></div></div>`}function ml(e,l){e.append(l)}function Cl(e){let l="J";return"cozy"==e?l="J":"japandi"==e?l="L":"fusion"==e?l="N":"modern"==e?l="P":"neoclassic"==e&&(l="R"),l}const hl=he.getCell(`${ke}118`).numeric(),$l=he.getCell(`${ke}119`).numeric(),fl=he.getCell(`${ke}120`).numeric(),yl=$l+hl+fl;$("#kitchenPrice").html(e.formatCurrency(hl)+" €"),$("#kitchenMontage").html(e.formatCurrency($l)+" €"),$("#kitchenDelivery").html(e.formatCurrency(fl)+" €"),$("#kitchenTotal").html(e.formatCurrency(yl)+" €"),$("#kitchenTotalPrice").html(e.formatCurrency(cl)+" €"),Le&&(Oe=0),$e.get("summedPrice")<Je?$("#totalPriceTotal").html(e.formatCurrency(Je)+" € *"):$("#totalPriceTotal").html(e.formatCurrency($e.get("summedPrice")))}))})();