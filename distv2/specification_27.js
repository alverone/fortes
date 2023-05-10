(()=>{"use strict";class e{static formatCurrency(e){return Intl.NumberFormat("uk-UA",{maximumFractionDigits:2}).format(e)}}class l{constructor(e,l){this.address=e,this._value=l}hasValue(){return null!==this._value&&this._value.length>0}value(){return this._value}numeric(){return parseFloat(this._value)}formattedNumerical(){return e.formatCurrency(parseFloat(this.value()))}}class t{constructor(e){this.cells=e}getCell(e){const t=this.cells.filter((l=>l.address===e));return 0==t.length?new l(e,"0"):t[0]}}var n=(e=>(e[e.uk=0]="uk",e[e.en=1]="en",e))(n||{});class i{constructor(e,l=!1){if(l)switch(e){case 0:this._init();case 1:this._initPortugal();default:this._init()}}get(e){try{return JSON.parse(localStorage.getItem(e))}catch(l){return localStorage.getItem(e)}}set(e,l){localStorage.setItem(e,l.toString())}_init(){this.set("style","cozy"),this.set("bath",!0),this.set("shower",!1),this.set("ceiling","stretch ceiling"),this.set("flooring","laminat"),this.set("hygienic_shower",!1),this.set("second_gypsum_layer",!1),this.set("floor_screed",!1),this.set("heated_flooring",!1),this.set("denoising",!1),this.set("entrance_doors",!1),this.set("conditioning",!1),this.set("amount_of_rooms",2),this.set("amount_of_bathrooms",1),this.set("appliances","gorenje"),this.set("appliances_bool_total",!1),this.set("furniture_bool",!0),this.set("space",50),this.set("color",1)}_initPortugal(){this.set("style","cozy"),this.set("color",1),this.set("space",50),this.set("amount_of_rooms",2),this.set("amount_of_bathrooms",1),this.set("bath",!0),this.set("shower",!1),this.set("flooring","laminat"),this.set("finishing_materials",!1),this.set("demontage",!1),this.set("cement_screed",!1),this.set("heated_flooring",0),this.set("denoising",!1),this.set("entrance_doors",!1),this.set("windows_installation",0),this.set("builtin_furniture",!1),this.set("conditioning",0),this.set("furniture_bool",!1),this.set("appliances_bool_total",!1),this.set("appliances","gorenje"),this.set("transportation_expenses",5)}storageToRequestBody(e){const l={};for(const t in e)"length"!==t&&"costPerMetre"!=t&&"color"!=t&&("true"!==String(e[t])?"false"!==String(e[t])?isFinite(Number(e[t]))?l[t]=Number(e[t]):l[t]=e[t]:l[t]=0:l[t]=1);return JSON.stringify(l)}}class s{static numberToEncodedLetter(e){if(isNaN(e))return;let l,t=(e=Math.abs(Math.floor(e)))%26,n=e/26;return e<=26?this.numToLetter(e):(n>=1&&(0===t&&n--,l=this.numberToEncodedLetter(n)),0===t&&(t=26),l+this.numToLetter(t))}static numToLetter(e){if(!(e>26||e<0))return 0===e?"":this.alphabet.slice(e-1,e)}}s.alphabet="ABCDEFGHIJKLMNOPQRSTUVWXYZ";var a=(e,l,t)=>new Promise(((n,i)=>{var s=e=>{try{o(t.next(e))}catch(e){i(e)}},a=e=>{try{o(t.throw(e))}catch(e){i(e)}},o=e=>e.done?n(e.value):Promise.resolve(e.value).then(s,a);o((t=t.apply(e,l)).next())}));fetch("https://docs.google.com/spreadsheets/d/1KkkpKbytztt48mwP1RGgpVFpfke8-IqB0KLWA8Sn2FE/gviz/tq?tqx=out:json?tq=SELECT *").then((e=>e.text())).then((o=>{var r,c,u,p,d,g,v,m,C,h,f,k,y,b,w,L,F,_,x,G,T,S,M,N,P,E,D,I,O,j,z,B,J,A,q,K,R,Q,V,Z,U,W,Y,H,X,ee,le,te,ne,ie,se,ae,oe,re,ce,ue,pe,de,ge,ve,me,Ce,$e,he,fe,ke,ye,be,we,Le,Fe,_e,xe,Ge,Te,Se,Me,Ne;const Pe=JSON.parse(o.substring(o.length-2,0).replace("/*O_o*/\ngoogle.visualization.Query.setResponse(","")).table.rows,Ee=new t(Pe.map(((e,t)=>e.c.map((function(e,n){var i;if(null!==e&&null!==e.v)return new l(`${s.numberToEncodedLetter(n+1)}${t+1}`,null!=(i=e.v)?i:e.f)})).filter((e=>null!=e)))).reduce(((e,l)=>[...e,...l]))),De=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;$("img").each((function(){$(this).attr("loading","eager")}));const Ie=[168,9],Oe=[182,10],je=[197,9],ze=new i(n.uk,!0);let Be=ze.get("appliances");const Je=Ee.getCell("G7").numeric();$("#course").html(e.formatCurrency(Je));const Ae=ze.get("style");let qe=Boolean(ze.get("appliances_bool_total")),Ke=Boolean(ze.get("furniture_bool")),Re=ze.get("space"),Qe=Boolean(ze.get("bath")),Ve=Boolean(ze.get("shower")),Ze=ze.get("amount_of_rooms"),Ue=ze.get("amount_of_bathrooms"),We="",Ye="",He=ze.get("ceiling"),Xe=ze.get("hygienic_shower"),el=ze.get("second_gypsum_layer"),ll=ze.get("floor_screed"),tl=ze.get("heated_flooring"),nl=ze.get("denoising"),il=ze.get("entrance_doors"),sl=ze.get("conditioning"),al=ze.get("flooring"),ol=0,rl=0,cl=ze.get("summedPrice"),ul=ze.get("costPerMetre"),pl=$("#furnitureList");$("#total").html(e.formatCurrency(cl)),$("#space").html(Re.toString()),$("#pricePerMetre").html(e.formatCurrency(ul));const dl=1+Ee.getCell("S164").numeric()/100,gl=1+Ee.getCell("S120").numeric()/100;let vl=Re<=40?3:Re<=80?4:Re<=100?5:Re<=130?6:Re<=150?7:Re<=175?8:9;"modern"!=Ae&&"neoclassic"!=Ae||(vl+=1),$("#months").html(vl.toString());const ml=Ee.getCell("S44").numeric(),Cl=Ee.getCell("S42").numeric();"cozy"==Ae?(We="I",Ye="A"):"japandi"==Ae?(We="K",Ye="B"):"fusion"==Ae?(We="M",Ye="C"):"modern"==Ae?(We="O",Ye="D"):"neoclassic"==Ae&&(We="Q",Ye="E");let $l,hl,fl,kl,yl=0,bl=0;"laminat"==al?($l="60",fl="91",bl=Re*(Re<=70?201.26:198.81)*ml):"vynil"==al?($l="61",fl="92",bl=Re*(Re<=70?220.33:161.8)*ml):"parket"==al&&($l="62",fl="93",bl=Re*(Re<=80?369.96:240.31)*ml),"stretch ceiling"==He?(hl="56",kl=0,yl=Ee.getCell(`${We}56`).numeric()*Re):"gapless"==He?(hl="57",kl=0,yl=Re*(Re<=60?611.64:Re<=95?548.9:Re<=1e3?581.94:0)*ml*1.65):"gypsum"==He&&(hl="58",kl=1,yl=Re*(Re<=60?283.08:Re<=95?281.22:Re<=125?338.33:362.47)*1.35*ml);let wl=$("#workList"),Ll="",Fl=2523*((Ze>0?6:0)+(Qe?2:0)+(Ve?2:0)+2*Ue)*ml,_l=1974*((Ze>0?3:0)+(Qe?1:0)+(Ve?1:0)+2*Ue)*ml,xl=Re*Ue*(Re<=100?83.2:33.98);const Gl=Ee.getCell(`${We}45`).numeric()*Re;console.log(`inflation: ${ml}`),console.log(`rooms: ${Ze}`),console.log(`baths: ${Ue}`),console.log(`bath: ${Qe}`),console.log(`shower: ${Ve}`),console.log(`vents: ${xl}`),console.log(`canalisation: ${_l}`),console.log(`water: ${Fl}`);const Tl=[Re*(Re<=60?1142.78:Re<=95?883.87:Re<=125?819.43:925.61)*ml,Re*(Re<=60?700.67:Re<=100?687.36:Re<=130?341.25:317.36)*ml*1.1,Ee.getCell(`${We}50`).numeric(),Re*(Re<=50?1e3:990)*ml,140*(Re<=60?Ee.getCell(`${We}54`).numeric():Re<=80?50:Re<=120?78:Re<=180?114:162)*("modern"==Ae||"neoclassic"==Ae?1:0),Re*(Re<=60?418.86:Re<=100?416.29:Re<=135?443.73:481.67)*("gypsum"==He?1:0)*ml,yl,bl,Re*(Re<=70?114.47:86.84)*ml,Re*(Re<=70?206.59:170)*ml*("japandi"==Ae||"fusion"==Ae?1:0)],Sl=[1,Ue,Ze+Ue,1,1,kl,1,1,1,1],Ml=[48,49,50,52,54,53,hl,$l,64,66];ol+=Fl*Cl+((Qe?Ue*Ee.getCell(`${We}47`).numeric():0)+(Ve?Ue*Ee.getCell(`${We}46`).numeric():0))*Cl-1750*ml,Ll=Ul(Ee.getCell("F42").value(),"",Math.round(Fl*Cl+((Qe?Ue*Ee.getCell(`${We}47`).numeric():0)+(Ve?Ue*Ee.getCell(`${We}46`).numeric():0))*Cl-1750*ml)+" грн."),$("#workList").append(Ll),ol+=_l*Cl,Ll=Ul(Ee.getCell("F43").value(),"",Math.round(_l*Cl)+" грн."),$("#workList").append(Ll),ol+=xl*Cl*ml,Ll=Ul(Ee.getCell("F44").value(),"",Math.round(xl*Cl*ml)+" грн."),$("#workList").append(Ll),ol+=Gl*Cl,Ll=Ul(Ee.getCell("F45").value(),"",Math.round(Gl*Cl)+" грн."),$("#workList").append(Ll),Ve&&(Ll=Ul(Ee.getCell("F46").value(),"",Ee.getCell(Yl(Ae)+46).numeric().toString()+" грн."),$("#workList").append(Ll)),Qe&&(Ll=Ul(Ee.getCell("F47").value(),"",Ee.getCell(Yl(Ae)+47).numeric().toString()+" грн."),$("#workList").append(Ll));for(let e=0;e<Ml.length;e++){const l=Tl[e]*Sl[e]*Cl;0===l||isNaN(l)||(ol+=l,Ll=Ul(Ee.getCell("F"+Ml[e]).value(),"",Math.round(l)+" грн."),$("#workList").append(Ll))}Ll=Ul(Ee.getCell("F66").value(),"",Math.round(.022*ol*Cl)+" грн."),$("#workList").append(Ll),ol+=.022*ol*Cl,Ll=Ul(Ee.getCell("F67").value(),"",Math.round((2*vl*1200+3e3+100*Re+120*Re)*Cl)+" грн."),$("#workList").append(Ll),ol+=(2*vl*1200+3e3+100*Re)*Cl,$("#workList").append('</div><div class="list-option-container margined"></div>'),$("#workList .list-option-container").last().append("<h4 class=\"pricelist-header small no-padding\">Комплектуючі та чистові матеріали</h4><span class='notation amount'> </span><span class='notation'>Ціна</span>");let Nl=[Ee.getCell(`${We}72`).numeric(),Ee.getCell(`${We}73`).numeric(),Ee.getCell(`${We}74`).numeric(),Ee.getCell(`${We}75`).numeric(),Ee.getCell(`${We}76`).numeric(),Ee.getCell(`${We}77`).numeric(),Ee.getCell(`${We}79`).numeric(),Ee.getCell(`${We}80`).numeric(),Ee.getCell(`${We}81`).numeric(),Ee.getCell(`${We}82`).numeric(),Ee.getCell(`${We}83`).numeric(),Ee.getCell(`${We}84`).numeric(),Ee.getCell(`${We}85`).numeric(),Ee.getCell(`${We}86`).numeric(),Ee.getCell(`${We}87`).numeric(),Ee.getCell(`${We}88`).numeric(),Ee.getCell(`${We}89`).numeric(),Ee.getCell(`${We+fl}`).numeric(),100*Re*Ee.getCell("S74").numeric()],Pl=[Ue+Ze,35*Ue,.66*Re,.66*Re,.59*Re,Re<=50?42:Re<=90?60:Re<=120?84:90,Ue,Ue,Ue,Ue,Number(Qe),Number(Ve),Number(Ve),Ue,Ue,Ue,Ue,Re<100?Re-7*Ue:Re-10*Ue,1],El=[72,73,74,75,76,77,79,80,81,82,83,84,85,86,87,88,89,fl,94];for(let e=0;e<El.length;e++){let l=Nl[e]*Pl[e]*Ee.getCell("S72").numeric();0===l||isNaN(l)||(ol+=l,Ll=Ul(Ee.getCell("F"+El[e]).value(),"",Math.round(l)+" грн."),$("#workList").append(Ll))}$("#workList").append('</div><div class="list-option-container margined"></div>'),$("#workList .list-option-container").last().append("<h4 class=\"pricelist-header small no-padding\">Витрати компанії</h4><span class='notation amount'>Кількість</span><span class='notation'>Ціна</span>"),Ll=`<div class="option-block"><div class="division-block pricelist"></div><div class="list-option-container"><span class='name'>${Ee.getCell("F100").value()}</span><span class='list-text amount'>${vl} міс.</span><span class='list-text'> </span></div></div>`,$("#workList").append(Ll);const Dl=[Ee.getCell(`${We}101`).numeric(),Ee.getCell(`${We}102`).numeric()],Il=[vl,vl],Ol=[101,102];for(let e=0;e<Ol.length;e++){let l=Dl[e]*Il[e];ol+=l,Ll=`<div class="option-block"><div class="division-block pricelist"></div><div class="list-option-container"><span class='name'>${Ee.getCell(`F${Ol[e]}`).value()}</span><span class='list-text amount'>${Math.round(l/vl)} грн./місяць</span><span class='list-text'>${Math.round(l)} грн.</span></div></div>`,$("#workList").append(Ll)}ol+=Je*Re*Ee.getCell("G37").numeric()+vl*Ee.getCell(`${We}214`).numeric(),Ll=`<div class="option-block"><div class="division-block pricelist"></div><div class="list-option-container"><span class='name'>\n\t\t${Ee.getCell("F212").value()}\n\t\t\t</span><span class='list-text amount'></span><span class='list-text'>${e.formatCurrency(Je*Ee.getCell("G37").numeric()*Re)} грн.</span></div></div>`,$("#workList").append(Ll),Ll=`<div class="option-block"><div class="division-block pricelist"></div><div class="list-option-container"><span class='name'>${Ee.getCell("F214").value()}</span><span class='list-text amount'>${Ee.getCell(`${We}214`).numeric()} грн./місяць</span><span class='list-text'>${Math.round(vl*Ee.getCell(`${We}214`).numeric())} грн.</span></div></div>`,$("#workList").append(Ll),Ke&&($("#furnitureList").append('</div><div class="list-option-container"></div>'),$("#furnitureList .list-option-container").last().append("<h4 class=\"pricelist-header small no-padding\">Кухня</h4><span class='notation amount'>Кількість</span><span class='notation'>Ціна</span>"),Al(Ee.getCell("F127").value(),null==(r=Ee.getCell(`${Ye}127`))?void 0:r.value(),1,Ee.getCell(`${We}127`).numeric(),Ee.getCell("G120").value()),rl+=Math.round(Ee.getCell(`${We}129`).numeric()*dl)+Math.round(Ee.getCell(`${We}128`).numeric()*dl),pl.append('<div class="option-block"><div class="division-block pricelist small-heading"></div><div class="list-option-container"></div></div>'),$("#furnitureList .option-block .list-option-container").last().append(`<span class='name'>${Ee.getCell("F127").value()}\n\t\t\t\t\t\t</span><span class='list-text amount'>1 шт.</span><span class='list-text'>${e.formatCurrency(Ee.getCell(`${We}128`).numeric()*dl)} грн.</span>`),pl.append('<div class="option-block"><div class="division-block pricelist small-heading"></div><div class="list-option-container"></div></div>'),$("#furnitureList .option-block .list-option-container").last().append(`<span class='name'>${Ee.getCell("F128").value()}</span><span class='list-text amount'>1 шт.</span><span class='list-text'>${e.formatCurrency(Ee.getCell(`${We}129`).numeric()*dl)} грн.</span>`),Al(Ee.getCell("F130").value(),null==(c=Ee.getCell(`${Ye}130`))?void 0:c.value(),1,null==(u=Ee.getCell(`${We}130`))?void 0:u.numeric(),null==(p=Ee.getCell("G130"))?void 0:p.value()),Al(Ee.getCell("F131").value(),null==(d=Ee.getCell(Ye+"131"))?void 0:d.value(),1,null==(g=Ee.getCell(`${We}131`))?void 0:g.numeric(),null==(v=Ee.getCell("G131"))?void 0:v.value()),Al(Ee.getCell("F132").value(),null==(m=Ee.getCell(Ye+"132"))?void 0:m.value(),1,null==(C=Ee.getCell(`${We}132`))?void 0:C.numeric(),null==(h=Ee.getCell("G132"))?void 0:h.value()),Al(Ee.getCell("F133").value(),null==(f=Ee.getCell(Ye+"133"))?void 0:f.value(),4,null==(k=Ee.getCell(`${We}133`))?void 0:k.numeric(),null==(y=Ee.getCell("G133"))?void 0:y.value()),Al(Ee.getCell("F134").value(),null==(b=Ee.getCell(Ye+"134"))?void 0:b.value(),1,null==(w=Ee.getCell(`${We}134`))?void 0:w.numeric(),null==(L=Ee.getCell("G134"))?void 0:L.value()),Wl($("#furnitureList"),'</div><div class="list-option-container margined"></div>'),Wl($("#furnitureList .list-option-container").last(),"<h4 class=\"pricelist-header small no-padding\">Вітальня</h4><span class='notation amount'>Кількість</span><span class='notation'>Ціна</span>"),Al(Ee.getCell("F138").value(),null==(F=Ee.getCell(Ye+"138"))?void 0:F.value(),1,null==(_=Ee.getCell(`${We}138`))?void 0:_.numeric(),null==(x=Ee.getCell("G138"))?void 0:x.value()),Al(Ee.getCell("F139").value(),null==(G=Ee.getCell(Ye+"139"))?void 0:G.value(),1,null==(T=Ee.getCell(`${We}139`))?void 0:T.numeric(),null==(S=Ee.getCell("G139"))?void 0:S.value()),Wl($("#furnitureList"),'</div><div class="list-option-container margined"></div>'),Wl($("#furnitureList .list-option-container").last(),"<h4 class=\"pricelist-header small no-padding\">Спальня</h4><span class='notation amount'>Кількість</span><span class='notation'>Ціна</span>"),Al(Ee.getCell("F141").value(),null==(M=Ee.getCell(Ye+"141"))?void 0:M.value(),1,null==(N=Ee.getCell(`${We}141`))?void 0:N.numeric(),null==(P=Ee.getCell("G141"))?void 0:P.value()),Al(Ee.getCell("F142").value(),null==(E=Ee.getCell(Ye+"142"))?void 0:E.value(),1,null==(D=Ee.getCell(`${We}142`))?void 0:D.numeric(),null==(I=Ee.getCell("G142"))?void 0:I.value()),Al(Ee.getCell("F143").value(),null==(O=Ee.getCell(Ye+"143"))?void 0:O.value(),2,null==(j=Ee.getCell(`${We}143`))?void 0:j.numeric(),null==(z=Ee.getCell("G143"))?void 0:z.value()),Al(Ee.getCell("F144").value(),null==(B=Ee.getCell(Ye+"144"))?void 0:B.value(),1,null==(J=Ee.getCell(`${We}144`))?void 0:J.numeric(),null==(A=Ee.getCell("G144"))?void 0:A.value()),Al(Ee.getCell("F145").value(),null==(q=Ee.getCell(Ye+"145"))?void 0:q.value(),1,null==(K=Ee.getCell(`${We}145`))?void 0:K.numeric(),null==(R=Ee.getCell("G145"))?void 0:R.value()),Al(Ee.getCell("F146").value(),null==(Q=Ee.getCell(Ye+"146"))?void 0:Q.value(),1,null==(V=Ee.getCell(`${We}146`))?void 0:V.numeric(),null==(Z=Ee.getCell("G146"))?void 0:Z.value()),Wl($("#furnitureList"),'</div><div class="list-option-container margined"></div>'),$("#furnitureList .list-option-container").last().append("<h4 class=\"pricelist-header small no-padding\">Світильники</h4><span class='notation amount'>Кількість</span><span class='notation'>Ціна</span>"),Al(Ee.getCell("F148").value(),null==(U=Ee.getCell(Ye+"148"))?void 0:U.value(),Math.ceil(.48*Re),null==(W=Ee.getCell(`${We}148`))?void 0:W.numeric(),null==(Y=Ee.getCell("G148"))?void 0:Y.value()),Al(Ee.getCell("F149").value(),null==(H=Ee.getCell(Ye+"149"))?void 0:H.value(),1,null==(X=Ee.getCell(`${We}149`))?void 0:X.numeric(),null==(ee=Ee.getCell("G149"))?void 0:ee.value()),Al(Ee.getCell("F151").value(),null==(le=Ee.getCell(Ye+"151"))?void 0:le.value(),1,null==(te=Ee.getCell(`${We}151`))?void 0:te.numeric(),null==(ne=Ee.getCell("G151"))?void 0:ne.value()),Al(Ee.getCell("F153").value(),null==(ie=Ee.getCell(Ye+"153"))?void 0:ie.value(),1,null==(se=Ee.getCell(`${We}153`))?void 0:se.numeric(),null==(ae=Ee.getCell("G153"))?void 0:ae.value()),Al(Ee.getCell("F154").value(),null==(oe=Ee.getCell(Ye+"154"))?void 0:oe.value(),1,null==(re=Ee.getCell(`${We}154`))?void 0:re.numeric(),null==(ce=Ee.getCell("G154"))?void 0:ce.value()),Al(Ee.getCell("F150").value(),null==(ue=Ee.getCell(Ye+"150"))?void 0:ue.value(),Ze>1?1:0,null==(pe=Ee.getCell(`${We}150`))?void 0:pe.numeric(),null==(de=Ee.getCell("G150"))?void 0:de.value()),Al(Ee.getCell("F152").value(),null==(ge=Ee.getCell(Ye+"152"))?void 0:ge.value(),2,null==(ve=Ee.getCell(`${We}152`))?void 0:ve.numeric(),null==(me=Ee.getCell("G152"))?void 0:me.value()),$("#furnitureList").append('</div><div class="list-option-container margined"></div>'),$("#furnitureList .list-option-container").last().append("<h4 class=\"pricelist-header small no-padding\">Декор</h4><span class='notation amount'>Кількість</span><span class='notation'>Ціна</span>"),Al(Ee.getCell("F156").value(),null==(Ce=Ee.getCell(Ye+"156"))?void 0:Ce.value(),Ze,null==($e=Ee.getCell(`${We}156`))?void 0:$e.numeric(),null==(he=Ee.getCell("G156"))?void 0:he.value()),Al(Ee.getCell("F157").value(),null==(fe=Ee.getCell(Ye+"157"))?void 0:fe.value(),Ze,null==(ke=Ee.getCell(`${We}157`))?void 0:ke.numeric(),null==(ye=Ee.getCell("G157"))?void 0:ye.value()),Al(Ee.getCell("F158").value(),null==(be=Ee.getCell(Ye+"158"))?void 0:be.value(),Ze,null==(we=Ee.getCell(`${We}158`))?void 0:we.numeric(),null==(Le=Ee.getCell("G158"))?void 0:Le.value()),Al(Ee.getCell("F159").value(),null==(Fe=Ee.getCell(Ye+"159"))?void 0:Fe.value(),1,null==(_e=Ee.getCell(`${We}159`))?void 0:_e.numeric(),null==(xe=Ee.getCell("G159"))?void 0:xe.value()),Al(Ee.getCell("F160").value(),null==(Ge=Ee.getCell(Ye+"160"))?void 0:Ge.value(),Ze-1,null==(Te=Ee.getCell(`${We}160`))?void 0:Te.numeric(),null==(Se=Ee.getCell("G160"))?void 0:Se.value()),Wl($("#furnitureList"),Ul(Ee.getCell("F162").value()," ",Math.round(.03*rl*dl)+" грн.")),rl+=.03*rl*dl,Wl($("#furnitureList"),'<div class="division-block pricelist"></div><div class="list-option-container summary"></div>'),Wl($("#furnitureList .list-option-container").last(),`<span class='name summary'>Всього по меблях:</span><span class='list-text summary work'>${e.formatCurrency(Math.round(rl))} грн.</span>`)),(Xe||el||ll||tl||nl||il||sl)&&($("#workList").append('</div><div class="list-option-container margined"></div>'),$("#workList .list-option-container").last().append("<h4 class=\"pricelist-header small no-padding\"> Опції</h4><span class='notation amount'> </span><span class='notation'>Ціна</span>"));const jl=Ee.getCell("T109").numeric();let zl=[Re*Ee.getCell(`${We}109`).numeric()*1.25,+Xe*Ee.getCell(`${We}110`).numeric()*1.25,1.25*Ee.getCell(`${We}111`).numeric(),1.25*Re*(Re<=60?306.26:Re<=95?246.43:Re<=125?221.2:277.29)*jl,(+nl+kl==2?1:0)*Re*1.25*(Re<=60?60.91:Re<=95?64.57:Re<=125?63.87:66.24)*jl+(+nl+kl===1?1:0)*Re*Ee.getCell(`${We}114`).numeric()*1.25,+nl>0?1.25*Re*(Re<=60?90.02:Re<=95?60.78:Re<=125?58.29:79.01)*jl:0,1.1*Ee.getCell(`${We}116`).numeric()+1.25*Ee.getCell(`${We}117`).numeric(),Ee.getCell(`${We}119`).numeric()*Re*1.25+Ee.getCell(`${We}120`).numeric()*gl*1.05],Bl=[ll,Xe?Ue:0,tl,el,nl,nl,il,sl],Jl=[109,110,111,112,113,115,116,120];for(let e=0;e<Jl.length;e++){let l=zl[e]*Number(Bl[e]);0===l||isNaN(l)||0==Bl[e]||null==Jl[e]||(ol+=l,Wl(wl,Ul((null==(Me=Ee.getCell("F"+Jl[e]))?void 0:Me.value())+", "+(null==(Ne=Ee.getCell(`${Ye}${Jl[e]}`))?void 0:Ne.value()),"",Math.round(l)+" грн.")))}function Al(l,t,n,i,s){Ke&&0!=n&&n&&i&&(rl+=i*dl*n,Wl(pl,'<div class="option-block"><div class="division-block pricelist"></div><div class="list-option-container"></div></div>'),null!==t?Wl($("#furnitureList .option-block .list-option-container").last(),`<span class='name'>${l}, ${t}</span><span class='list-text amount'>${n} ${s}</span><span class='list-text'>${e.formatCurrency(i*n*(1+Ee.getCell("S164").numeric()/100))} грн.</span>`):Wl($("#materialsList .option-block .list-option-container").last(),`<span class='name'>${l}</span><span class='list-text'>${n} ${s} </span>`))}qe||$(".comfy-section").toggle(!1),Ke||$("#furnitureList").toggle(!1),Wl($("#workList"),'<div class="division-block pricelist"></div><div class="list-option-container summary"></div>'),Wl($("#workList .list-option-container").last(),`<span class='name summary'>Всього по будівельній частині:</span><span class='list-text summary work'>${e.formatCurrency(ol)} грн.</span>`),Wl($("#materialsList"),'<div class="division-block pricelist"></div><div class="list-option-container summary"></div>'),Wl($("#materialsList .list-option-container").last(),`<span class='name summary'>Всього по будівельній частині:</span><span class='list-text summary work'>${e.formatCurrency(ol)} грн.</span>`);let ql,Kl=0,Rl=$("#appliancesList"),Ql=$("#appliancesListTotal");"gorenje"===Be?ql=Ie:"bosch"===Be?ql=Oe:"miele"===Be&&(ql=je);let Vl=0;if("undefined"!==Be){Vl=1;for(let l=0;l<ql[1];l++)Rl.append('<div class="option-block"><div class="division-block white"></div><div class="list-option-container appliances"></div></div>'),$("#appliancesList .option-block .list-option-container.appliances").last().append(`<span class='name white'>${Ee.getCell("F"+(ql[0]+l)).value()} ${Ee.getCell("E"+(ql[0]+l)).value()}</span><span class='list-text white'>${e.formatCurrency(Ee.getCell("D"+(ql[0]+l)).numeric())} грн.</span>`),qe&&(Ql.append('<div class="option-block"><div class="division-block pricelist"></div><div class="list-option-container"></div></div>'),$("#appliancesListTotal .option-block .list-option-container").last().append(`<span class='name'>${Ee.getCell("F"+(ql[0]+l)).value()} ${Ee.getCell("E"+(ql[0]+l)).value()}</span><span class='list-text amount'>1 шт.</span><span class='list-text'>${e.formatCurrency(Ee.getCell("D"+(ql[0]+l)).numeric())} грн.</span>`)),Kl+=Ee.getCell("D"+(ql[0]+l)).numeric(),Kl+=Ee.getCell("G36").numeric(),Vl++;if(qe){const l=Ee.getCell("G36").numeric();Kl+=l,Ql.append('<div class="option-block"><div class="division-block pricelist"></div><div class="list-option-container"></div></div>'),$("#appliancesListTotal .option-block .list-option-container").last().append(`<span class='name'>Доставка техніки</span><span class='list-text amount'></span><span class='list-text'>${Vl*l} грн.</span>`),Rl.append('<div class="option-block"><div class="division-block white"></div><div class="list-option-container appliances"></div></div>'),$("#appliancesList .option-block .list-option-container.appliances").last().append(`<span class='name white'>Доставка техніки</span><span class='list-text white'>${Vl*l} грн.</span>`),Ql.append('<div class="division-block pricelist"></div><div class="list-option-container summary"></div>'),$("#appliancesTotalDiscount").html(e.formatCurrency(.9*Kl)),$("#appliancesListTotal .list-option-container").last().append(`<span class='name summary'>Всього по техніці:</span><span class='list-text summary work'>${e.formatCurrency(Kl)} грн.</span>`),$("#appliancesListTotal .list-option-container").last().append(`<span class='name summary'><b>Всього по техніці, зі знижкою</b>:</span><span class='list-text summary work'>${e.formatCurrency(.9*Kl)} грн.</span>`)}}qe||$("#appliancesListTotal").toggle(!1);const Zl=Yl(Ae);function Ul(e,l,t){return`<div class="option-block"><div class="division-block pricelist"></div><div class="list-option-container"><span class='name'>${e}</span><span class='list-text amount'>${l}</span><span class='list-text'>${t}</span></div></div>`}function Wl(e,l){e.append(l)}function Yl(e){let l="J";return"cozy"==e?l="J":"japandi"==e?l="L":"fusion"==e?l="N":"modern"==e?l="P":"neoclassic"==e&&(l="R"),l}const Hl=Ee.getCell(`${Zl}127`).numeric(),Xl=Ee.getCell(`${Zl}128`).numeric(),et=Ee.getCell(`${Zl}129`).numeric(),lt=Xl+Hl+et;$("#kitchenPrice").html(e.formatCurrency(Hl)+" грн."),$("#kitchenMontage").html(e.formatCurrency(Xl)+" грн."),$("#kitchenDelivery").html(e.formatCurrency(et)+" грн."),$("#kitchenTotal").html(e.formatCurrency(lt)+" грн"),$("#kitchenTotalPrice").html(e.formatCurrency(Kl)+" грн."),Ke&&(rl=0),$("#kitchenTotalPriceDiscount").html(e.formatCurrency(.9*Kl)),$("#discountTotal").html(`<span class='bold-text-7'>${e.formatCurrency(Kl-.9*Kl)} грн.</span>`),cl*Je<ol?$("#totalPriceTotal").html(e.formatCurrency(ol)+" грн. *"):$("#totalPriceTotal").html(e.formatCurrency(cl*Je)+" грн. *"),$("#wf-form-client-info").on("submit",(function(e){return a(this,null,(function*(){return e.preventDefault(),$("#agreementCheckbox").is(":checked")?$(".warning.agreementcheckbox").toggle(!1):$(".warning.agreementcheckbox").toggle(!0),$("#sPhone").val()?$(".warning.inputs.phone").toggle(!1):$(".warning.inputs.phone").toggle(!0),$("#sName").val()?$(".warning.inputs.name").toggle(!1):$(".warning.inputs.name").toggle(!0),0==$("#sEmail").val().length?($(".warning.inputs.wrongEmail").toggle(!1),$(".warning.inputs.emptyEmail").toggle(!0)):De.test($("#sEmail").val())?($(".warning.inputs.wrongEmail").toggle(!1),$(".warning.inputs.emptyEmail").toggle(!1)):($(".warning.inputs.wrongEmail").toggle(!0),$(".warning.inputs.emptyEmail").toggle(!1)),$(".warning").is(":visible")?(e.preventDefault(),e.stopImmediatePropagation(),!1):(yield function(){return a(this,null,(function*(){$(".modal-note").html("Зачекайте...");const e=$("html").clone().find("script").remove().end().html(),l=new File(['<!DOCTYPE html><html lang="uk">'+e+"</html>"],"source.html",{type:"text/html"}),t=new FormData;t.append("file",l,"source.html");const n=yield fetch("https://api.fortes.agency/convert",{method:"POST",body:t}),i=yield n.json(),s=i.success?i.id:"";$(".modal-note").html("Ми надіслали вам лист на електронну пошту. Якщо ви не бачите його у списку, перевірте папку Спам або зачекайте декілька хвилин."),fetch("https://api.fortes.agency/mail",{method:"POST",body:JSON.stringify({fileId:s,fileName:localStorage.getItem("style"),recipientMail:$("#sEmail").val()}),headers:{"Content-Type":"application/json"}}).finally((()=>{setTimeout((()=>{window.location.assign("/sdyakuiemo")}),2e3)}))}))}(),!1)}))}))}))})();