(()=>{"use strict";class l{static formatCurrency(l,e){return Intl.NumberFormat("uk-UA",{maximumFractionDigits:null!=e?e:2}).format(l)}}class e{constructor(l,e){this.address=l,this._value=e}hasValue(){return null!==this._value&&this._value.length>0}value(){return this._value}numeric(){return parseFloat(this._value)}formattedNumerical(){return l.formatCurrency(parseFloat(this.value()))}}class t{constructor(l){this.cells=l}getCell(l){const e=this.cells.filter((e=>e.address===l));return 0==e.length?null:e[0]}}class n{get(l){try{return JSON.parse(localStorage.getItem(l))}catch(e){return localStorage.getItem(l)}}set(l,e){localStorage.setItem(l,e.toString())}init(){this.set("style","cozy"),this.set("bath",!0),this.set("shower",!1),this.set("ceiling","stretch ceiling"),this.set("flooring","laminat"),this.set("hygienic_shower",!1),this.set("second_gypsum_layer",!1),this.set("floor_screed",!1),this.set("heated_flooring",!1),this.set("denoising",!1),this.set("entrance_doors",!1),this.set("conditioning",!1),this.set("amount_of_rooms",2),this.set("amount_of_bathrooms",1),this.set("appliances","gorenje"),this.set("appliances_bool_total",!1),this.set("furniture_bool",!0),this.set("space",50)}storageToRequestBody(l){const e={};for(const t in l)"length"!==t&&("true"!==String(l[t])?"false"!==String(l[t])?isFinite(Number(l[t]))?e[t]=Number(l[t]):e[t]=l[t]:e[t]=0:e[t]=1);return JSON.stringify(e)}}class i{static numberToEncodedLetter(l){if(isNaN(l))return;let e,t=(l=Math.abs(Math.floor(l)))%26,n=l/26;return l<=26?this.numToLetter(l):(n>=1&&(0===t&&n--,e=this.numberToEncodedLetter(n)),0===t&&(t=26),e+this.numToLetter(t))}static numToLetter(l){if(!(l>26||l<0))return 0===l?"":this.alphabet.slice(l-1,l)}}i.alphabet="ABCDEFGHIJKLMNOPQRSTUVWXYZ",fetch("https://docs.google.com/spreadsheets/d/1KkkpKbytztt48mwP1RGgpVFpfke8-IqB0KLWA8Sn2FE/gviz/tq?tqx=out:json").then((l=>l.text())).then((s=>{var a,o,r,c,u,p,d,v,g,m,C,h,f,k,b,L,y,F,w,G,x,_,T,M,N,S,P,D,B,E,I,j,z,J,O,K,R,q,A,Q,V,U,W,H,X,Y,Z,ll,el,tl,nl,il,sl,al,ol,rl,cl,ul,pl,dl,vl,gl,ml,Cl,$l,hl,fl,kl,bl,Ll,yl,Fl,wl,Gl,xl,_l,Tl;const Ml=JSON.parse(s.substring(s.length-2,0).replace("/*O_o*/\ngoogle.visualization.Query.setResponse(","")).table.rows,Nl=new t(Ml.map(((l,t)=>l.c.map((function(l,n){var s;if(null!==l&&null!==l.v)return new e(`${i.numberToEncodedLetter(n+1)}${t+1}`,null!=(s=l.v)?s:l.f)})).filter((l=>null!=l)))).reduce(((l,e)=>[...l,...e]))),Sl=new n;let Pl=Sl.get("appliances");const Dl=Nl.getCell("G7").numeric();$("#course").html(l.formatCurrency(Dl));const Bl=Sl.get("style");let El=Boolean(Sl.get("appliances_bool_total")),Il=Boolean(Sl.get("furniture_bool")),jl=Sl.get("space"),zl=Boolean(Sl.get("bath")),Jl=Boolean(Sl.get("shower")),Ol=Sl.get("amount_of_rooms"),Kl=Sl.get("amount_of_bathrooms"),Rl="",ql="",Al=Sl.get("ceiling"),Ql=Sl.get("hygienic_shower"),Vl=Sl.get("second_gypsum_layer"),Ul=Sl.get("floor_screed"),Wl=Sl.get("heated_flooring"),Hl=Sl.get("denoising"),Xl=Sl.get("entrance_doors"),Yl=Sl.get("conditioning"),Zl=Sl.get("flooring"),le=0,ee=0,te=$("#furnitureList");const ne=1+Nl.getCell("S164").numeric()/100,ie=1+Nl.getCell("S120").numeric()/100;let se=jl<=40?3:jl<=80?4:jl<=100?5:jl<=130?6:jl<=150?7:jl<=175?8:9;"modern"!=Bl&&"neoclassic"!=Bl||(se+=1),$("#months").html(se.toString());const ae=Nl.getCell("S44").numeric(),oe=Nl.getCell("S42").numeric();"cozy"==Bl?(Rl="I",ql="A"):"japandi"==Bl?(Rl="K",ql="B"):"fusion"==Bl?(Rl="M",ql="C"):"modern"==Bl?(Rl="O",ql="D"):"neoclassic"==Bl&&(Rl="Q",ql="E");let re,ce,ue,pe,de=0,ve=0;"laminat"==Zl?(re="60",ue="91",ve=jl*(jl<=70?201.26:198.81)*ae):"vynil"==Zl?(re="61",ue="92",ve=jl*(jl<=70?220.33:161.8)*ae):"parket"==Zl&&(re="62",ue="93",ve=jl*(jl<=80?369.96:240.31)*ae),"stretch ceiling"==Al?(ce="56",pe=0,de=Nl.getCell(`${Rl}56`).numeric()*jl):"gapless"==Al?(ce="57",pe=0,de=jl*(jl<=60?611.64:jl<=95?548.9:jl<=1e3?581.94:0)*ae*1.65):"gypsum"==Al&&(ce="58",pe=1,de=jl*(jl<=60?283.08:jl<=95?281.22:jl<=125?338.33:362.47)*1.35*ae);let ge=$("#workList"),me="",Ce=2523*((Ol>0?6:0)+(zl?2:0)+(Jl?2:0)+2*Kl)*ae,$e=1974*((Ol>0?3:0)+(zl?1:0)+(Jl?1:0)+2*Kl)*ae,he=jl*Kl*(jl<=100?83.2:33.98);const fe=Nl.getCell(`${Rl}45`).numeric()*jl;console.log(`inflation: ${ae}`),console.log(`rooms: ${Ol}`),console.log(`baths: ${Kl}`),console.log(`bath: ${zl}`),console.log(`shower: ${Jl}`),console.log(`vents: ${he}`),console.log(`canalisation: ${$e}`),console.log(`water: ${Ce}`);const ke=[jl*(jl<=60?1142.78:jl<=95?883.87:jl<=125?819.43:925.61)*ae,jl*(jl<=60?700.67:jl<=100?687.36:jl<=130?341.25:317.36)*ae*1.1,Nl.getCell(`${Rl}50`).numeric(),jl*(jl<=50?1e3:990)*ae,140*(jl<=60?Nl.getCell(`${Rl}54`).numeric():jl<=80?50:jl<=120?78:jl<=180?114:162)*("modern"==Bl||"neoclassic"==Bl?1:0),jl*(jl<=60?418.86:jl<=100?416.29:jl<=135?443.73:481.67)*("gypsum"==Al?1:0)*ae,de,ve,jl*(jl<=70?114.47:86.84)*ae,jl*(jl<=70?206.59:170)*ae*("japandi"==Bl||"fusion"==Bl?1:0)],be=[1,Kl,Ol+Kl,1,1,pe,1,1,1,1],Le=[48,49,50,52,54,53,ce,re,64,66];le+=Ce*oe+((zl?Kl*Nl.getCell(`${Rl}47`).numeric():0)+(Jl?Kl*Nl.getCell(`${Rl}46`).numeric():0))*oe-1750*ae,me=Je(Nl.getCell("F42").value(),"",Math.round(Ce*oe+((zl?Kl*Nl.getCell(`${Rl}47`).numeric():0)+(Jl?Kl*Nl.getCell(`${Rl}46`).numeric():0))*oe-1750*ae)+" грн."),$("#workList").append(me),le+=$e*oe,me=Je(Nl.getCell("F43").value(),"",Math.round($e*oe)+" грн."),$("#workList").append(me),le+=he*oe*ae,me=Je(Nl.getCell("F44").value(),"",Math.round(he*oe*ae)+" грн."),$("#workList").append(me),le+=fe*oe,me=Je(Nl.getCell("F45").value(),"",Math.round(fe*oe)+" грн."),$("#workList").append(me),Jl&&(me=Je(Nl.getCell("F46").value(),"",Nl.getCell(Ke(Bl)+46).numeric().toString()+" грн."),$("#workList").append(me)),zl&&(me=Je(Nl.getCell("F47").value(),"",Nl.getCell(Ke(Bl)+47).numeric().toString()+" грн."),$("#workList").append(me));for(let l=0;l<Le.length;l++){const e=ke[l]*be[l]*oe;0===e||isNaN(e)||(le+=e,me=Je(Nl.getCell("F"+Le[l]).value(),"",Math.round(e)+" грн."),$("#workList").append(me))}me=Je(Nl.getCell("F66").value(),"",Math.round(.022*le*oe)+" грн."),$("#workList").append(me),le+=.022*le*oe,me=Je(Nl.getCell("F67").value(),"",Math.round((2*se*1200+3e3+100*jl+120*jl)*oe)+" грн."),$("#workList").append(me),le+=(2*se*1200+3e3+100*jl)*oe,$("#workList").append('</div><div class="list-option-container margined"></div>'),$("#workList .list-option-container").last().append("<h4 class=\"pricelist-header small no-padding\">Комплектуючі та чистові матеріали</h4><span class='notation amount'> </span><span class='notation'>Ціна</span>");let ye=[Nl.getCell(`${Rl}72`).numeric(),Nl.getCell(`${Rl}73`).numeric(),Nl.getCell(`${Rl}74`).numeric(),Nl.getCell(`${Rl}75`).numeric(),Nl.getCell(`${Rl}76`).numeric(),Nl.getCell(`${Rl}77`).numeric(),Nl.getCell(`${Rl}79`).numeric(),Nl.getCell(`${Rl}80`).numeric(),Nl.getCell(`${Rl}81`).numeric(),Nl.getCell(`${Rl}82`).numeric(),Nl.getCell(`${Rl}83`).numeric(),Nl.getCell(`${Rl}84`).numeric(),Nl.getCell(`${Rl}85`).numeric(),Nl.getCell(`${Rl}86`).numeric(),Nl.getCell(`${Rl}87`).numeric(),Nl.getCell(`${Rl}88`).numeric(),Nl.getCell(`${Rl}89`).numeric(),Nl.getCell(`${Rl+ue}`).numeric(),100*jl*Nl.getCell("S74").numeric()],Fe=[Kl+Ol,35*Kl,.66*jl,.66*jl,.59*jl,jl<=50?42:jl<=90?60:jl<=120?84:90,Kl,Kl,Kl,Kl,Number(zl),Number(Jl),Number(Jl),Kl,Kl,Kl,Kl,jl<100?jl-7*Kl:jl-10*Kl,1],we=[72,73,74,75,76,77,79,80,81,82,83,84,85,86,87,88,89,ue,94];for(let l=0;l<we.length;l++){let e=ye[l]*Fe[l]*Nl.getCell("S72").numeric();0===e||isNaN(e)||(le+=e,me=Je(Nl.getCell("F"+we[l]).value(),"",Math.round(e)+" грн."),$("#workList").append(me))}$("#workList").append('</div><div class="list-option-container margined"></div>'),$("#workList .list-option-container").last().append("<h4 class=\"pricelist-header small no-padding\">Витрати компанії</h4><span class='notation amount'>Кількість</span><span class='notation'>Ціна</span>"),me=`<div class="option-block"><div class="division-block pricelist"></div><div class="list-option-container"><span class='name'>${Nl.getCell("F100").value()}</span><span class='list-text amount'>${se} міс.</span><span class='list-text'> </span></div></div>`,$("#workList").append(me);const Ge=[Nl.getCell(`${Rl}101`).numeric(),Nl.getCell(`${Rl}102`).numeric()],xe=[se,se],_e=[101,102];for(let l=0;l<_e.length;l++){let e=Ge[l]*xe[l];le+=e,me=`<div class="option-block"><div class="division-block pricelist"></div><div class="list-option-container"><span class='name'>${Nl.getCell(`F${_e[l]}`).value()}</span><span class='list-text amount'>${Math.round(e/se)} грн./місяць</span><span class='list-text'>${Math.round(e)} грн.</span></div></div>`,$("#workList").append(me)}le+=Dl*jl*Nl.getCell("G37").numeric()+se*Nl.getCell(`${Rl}214`).numeric(),me=`<div class="option-block"><div class="division-block pricelist"></div><div class="list-option-container"><span class='name'>\n\t\t${Nl.getCell("F212").value()}\n\t\t\t</span><span class='list-text amount'></span><span class='list-text'>${l.formatCurrency(Dl*Nl.getCell("G37").numeric()*jl)} грн.</span></div></div>`,$("#workList").append(me),me=`<div class="option-block"><div class="division-block pricelist"></div><div class="list-option-container"><span class='name'>${Nl.getCell("F214").value()}</span><span class='list-text amount'>${Nl.getCell(`${Rl}214`).numeric()} грн./місяць</span><span class='list-text'>${Math.round(se*Nl.getCell(`${Rl}214`).numeric())} грн.</span></div></div>`,$("#workList").append(me),Il&&($("#furnitureList").append('</div><div class="list-option-container"></div>'),$("#furnitureList .list-option-container").last().append("<h4 class=\"pricelist-header small no-padding\">Кухня</h4><span class='notation amount'>Кількість</span><span class='notation'>Ціна</span>"),Pe(Nl.getCell("F127").value(),Nl.getCell(`${ql}127`),1,Nl.getCell(`${Rl}127`).numeric(),Nl.getCell("G120").value()),ee+=Math.round(Nl.getCell(`${Rl}129`).numeric()*ne)+Math.round(Nl.getCell(`${Rl}128`).numeric()*ne),te.append('<div class="option-block"><div class="division-block pricelist small-heading"></div><div class="list-option-container"></div></div>'),$("#furnitureList .option-block .list-option-container").last().append(`<span class='name'>${Nl.getCell("F127").value()}</span><span class='list-text amount'>1 шт.</span><span class='list-text'>${l.formatCurrency(Nl.getCell(`${Rl}128`).numeric()*ne)} грн.</span>`),te.append('<div class="option-block"><div class="division-block pricelist small-heading"></div><div class="list-option-container"></div></div>'),$("#furnitureList .option-block .list-option-container").last().append(`<span class='name'>${Nl.getCell("F128").value()}</span><span class='list-text amount'>1 шт.</span><span class='list-text'>${l.formatCurrency(Nl.getCell(`${Rl}129`).numeric()*ne)} грн.</span>`),Pe(Nl.getCell("F130").value(),null==(a=Nl.getCell(`${ql}130`))?void 0:a.value(),1,null==(o=Nl.getCell(`${Rl}130`))?void 0:o.numeric(),null==(r=Nl.getCell("G130"))?void 0:r.value()),Pe(Nl.getCell("F131").value(),null==(c=Nl.getCell(ql+"131"))?void 0:c.value(),1,null==(u=Nl.getCell(`${Rl}131`))?void 0:u.numeric(),null==(p=Nl.getCell("G131"))?void 0:p.value()),Pe(Nl.getCell("F132").value(),null==(d=Nl.getCell(ql+"132"))?void 0:d.value(),1,null==(v=Nl.getCell(`${Rl}132`))?void 0:v.numeric(),null==(g=Nl.getCell("G132"))?void 0:g.value()),Pe(Nl.getCell("F133").value(),null==(m=Nl.getCell(ql+"133"))?void 0:m.value(),4,null==(C=Nl.getCell(`${Rl}133`))?void 0:C.numeric(),null==(h=Nl.getCell("G133"))?void 0:h.value()),Pe(Nl.getCell("F134").value(),null==(f=Nl.getCell(ql+"134"))?void 0:f.value(),1,null==(k=Nl.getCell(`${Rl}134`))?void 0:k.numeric(),null==(b=Nl.getCell("G134"))?void 0:b.value()),Oe($("#furnitureList"),'</div><div class="list-option-container margined"></div>'),Oe($("#furnitureList .list-option-container").last(),"<h4 class=\"pricelist-header small no-padding\">Вітальня</h4><span class='notation amount'>Кількість</span><span class='notation'>Ціна</span>"),Pe(Nl.getCell("F138").value(),null==(L=Nl.getCell(ql+"138"))?void 0:L.value(),1,null==(y=Nl.getCell(`${Rl}138`))?void 0:y.numeric(),null==(F=Nl.getCell("G138"))?void 0:F.value()),Pe(Nl.getCell("F139").value(),null==(w=Nl.getCell(ql+"139"))?void 0:w.value(),1,null==(G=Nl.getCell(`${Rl}139`))?void 0:G.numeric(),null==(x=Nl.getCell("G139"))?void 0:x.value()),Oe($("#furnitureList"),'</div><div class="list-option-container margined"></div>'),Oe($("#furnitureList .list-option-container").last(),"<h4 class=\"pricelist-header small no-padding\">Спальня</h4><span class='notation amount'>Кількість</span><span class='notation'>Ціна</span>"),Pe(Nl.getCell("F141").value(),null==(_=Nl.getCell(ql+"141"))?void 0:_.value(),1,null==(T=Nl.getCell(`${Rl}141`))?void 0:T.numeric(),null==(M=Nl.getCell("G141"))?void 0:M.value()),Pe(Nl.getCell("F142").value(),null==(N=Nl.getCell(ql+"142"))?void 0:N.value(),1,null==(S=Nl.getCell(`${Rl}142`))?void 0:S.numeric(),null==(P=Nl.getCell("G142"))?void 0:P.value()),Pe(Nl.getCell("F143").value(),null==(D=Nl.getCell(ql+"143"))?void 0:D.value(),2,null==(B=Nl.getCell(`${Rl}143`))?void 0:B.numeric(),null==(E=Nl.getCell("G143"))?void 0:E.value()),Pe(Nl.getCell("F144").value(),null==(I=Nl.getCell(ql+"144"))?void 0:I.value(),1,null==(j=Nl.getCell(`${Rl}144`))?void 0:j.numeric(),null==(z=Nl.getCell("G144"))?void 0:z.value()),Pe(Nl.getCell("F145").value(),null==(J=Nl.getCell(ql+"145"))?void 0:J.value(),1,null==(O=Nl.getCell(`${Rl}145`))?void 0:O.numeric(),null==(K=Nl.getCell("G145"))?void 0:K.value()),Pe(Nl.getCell("F146").value(),null==(R=Nl.getCell(ql+"146"))?void 0:R.value(),1,null==(q=Nl.getCell(`${Rl}146`))?void 0:q.numeric(),null==(A=Nl.getCell("G146"))?void 0:A.value()),Oe($("#furnitureList"),'</div><div class="list-option-container margined"></div>'),$("#furnitureList .list-option-container").last().append("<h4 class=\"pricelist-header small no-padding\">Світильники</h4><span class='notation amount'>Кількість</span><span class='notation'>Ціна</span>"),Pe(Nl.getCell("F148").value(),null==(Q=Nl.getCell(ql+"148"))?void 0:Q.value(),Math.ceil(.48*jl),null==(V=Nl.getCell(`${Rl}148`))?void 0:V.numeric(),null==(U=Nl.getCell("G148"))?void 0:U.value()),Pe(Nl.getCell("F149").value(),null==(W=Nl.getCell(ql+"149"))?void 0:W.value(),1,null==(H=Nl.getCell(`${Rl}149`))?void 0:H.numeric(),null==(X=Nl.getCell("G149"))?void 0:X.value()),Pe(Nl.getCell("F151").value(),null==(Y=Nl.getCell(ql+"151"))?void 0:Y.value(),1,null==(Z=Nl.getCell(`${Rl}151`))?void 0:Z.numeric(),null==(ll=Nl.getCell("G151"))?void 0:ll.value()),Pe(Nl.getCell("F153").value(),null==(el=Nl.getCell(ql+"153"))?void 0:el.value(),1,null==(tl=Nl.getCell(`${Rl}153`))?void 0:tl.numeric(),null==(nl=Nl.getCell("G153"))?void 0:nl.value()),Pe(Nl.getCell("F154").value(),null==(il=Nl.getCell(ql+"154"))?void 0:il.value(),1,null==(sl=Nl.getCell(`${Rl}154`))?void 0:sl.numeric(),null==(al=Nl.getCell("G154"))?void 0:al.value()),Pe(Nl.getCell("F150").value(),null==(ol=Nl.getCell(ql+"150"))?void 0:ol.value(),Ol>1?1:0,null==(rl=Nl.getCell(`${Rl}150`))?void 0:rl.numeric(),null==(cl=Nl.getCell("G150"))?void 0:cl.value()),Pe(Nl.getCell("F152").value(),null==(ul=Nl.getCell(ql+"152"))?void 0:ul.value(),2,null==(pl=Nl.getCell(`${Rl}152`))?void 0:pl.numeric(),null==(dl=Nl.getCell("G152"))?void 0:dl.value()),$("#furnitureList").append('</div><div class="list-option-container margined"></div>'),$("#furnitureList .list-option-container").last().append("<h4 class=\"pricelist-header small no-padding\">Декор</h4><span class='notation amount'>Кількість</span><span class='notation'>Ціна</span>"),Pe(Nl.getCell("F156").value(),null==(vl=Nl.getCell(ql+"156"))?void 0:vl.value(),Ol,null==(gl=Nl.getCell(`${Rl}156`))?void 0:gl.numeric(),null==(ml=Nl.getCell("G156"))?void 0:ml.value()),Pe(Nl.getCell("F157").value(),null==(Cl=Nl.getCell(ql+"157"))?void 0:Cl.value(),Ol,null==($l=Nl.getCell(`${Rl}157`))?void 0:$l.numeric(),null==(hl=Nl.getCell("G157"))?void 0:hl.value()),Pe(Nl.getCell("F158").value(),null==(fl=Nl.getCell(ql+"158"))?void 0:fl.value(),Ol,null==(kl=Nl.getCell(`${Rl}158`))?void 0:kl.numeric(),null==(bl=Nl.getCell("G158"))?void 0:bl.value()),Pe(Nl.getCell("F159").value(),null==(Ll=Nl.getCell(ql+"159"))?void 0:Ll.value(),1,null==(yl=Nl.getCell(`${Rl}159`))?void 0:yl.numeric(),null==(Fl=Nl.getCell("G159"))?void 0:Fl.value()),Pe(Nl.getCell("F160").value(),null==(wl=Nl.getCell(ql+"160"))?void 0:wl.value(),Ol-1,null==(Gl=Nl.getCell(`${Rl}160`))?void 0:Gl.numeric(),null==(xl=Nl.getCell("G160"))?void 0:xl.value()),Oe($("#furnitureList"),Je(Nl.getCell("F162").value()," ",Math.round(.03*ee*ne)+" грн.")),ee+=.03*ee*ne,Oe($("#furnitureList"),'<div class="division-block pricelist"></div><div class="list-option-container summary"></div>'),Oe($("#furnitureList .list-option-container").last(),`<span class='name summary'>Всього по меблях:</span><span class='list-text summary work'>${l.formatCurrency(Math.round(ee))} грн.</span>`)),(Ql||Vl||Ul||Wl||Hl||Xl||Yl)&&($("#workList").append('</div><div class="list-option-container margined"></div>'),$("#workList .list-option-container").last().append("<h4 class=\"pricelist-header small no-padding\"> Опції</h4><span class='notation amount'> </span><span class='notation'>Ціна</span>"));const Te=Nl.getCell("T109").numeric();let Me=[jl*Nl.getCell(`${Rl}109`).numeric()*1.25,+Ql*Nl.getCell(`${Rl}110`).numeric()*1.25,1.25*Nl.getCell(`${Rl}111`).numeric(),1.25*jl*(jl<=60?306.26:jl<=95?246.43:jl<=125?221.2:277.29)*Te,(+Hl+pe==2?1:0)*jl*1.25*(jl<=60?60.91:jl<=95?64.57:jl<=125?63.87:66.24)*Te+(+Hl+pe===1?1:0)*jl*Nl.getCell(`${Rl}114`).numeric()*1.25,+Hl>0?1.25*jl*(jl<=60?90.02:jl<=95?60.78:jl<=125?58.29:79.01)*Te:0,1.1*Nl.getCell(`${Rl}116`).numeric()+1.25*Nl.getCell(`${Rl}117`).numeric(),Nl.getCell(`${Rl}119`).numeric()*jl*1.25+Nl.getCell(`${Rl}120`).numeric()*ie*1.05],Ne=[Ul,Ql?Kl:0,Wl,Vl,Hl,Hl,Xl,Yl],Se=[109,110,111,112,113,115,116,120];for(let l=0;l<Se.length;l++){let e=Me[l]*Number(Ne[l]);0===e||isNaN(e)||0==Ne[l]||null==Se[l]||(le+=e,Oe(ge,Je((null==(_l=Nl.getCell("F"+Se[l]))?void 0:_l.value())+", "+(null==(Tl=Nl.getCell(ql+Se[l]))?void 0:Tl.value()),"",Math.round(e)+" грн.")))}function Pe(e,t,n,i,s){Il&&0!=n&&n&&i&&(ee+=i*ne*n,Oe(te,'<div class="option-block"><div class="division-block pricelist"></div><div class="list-option-container"></div></div>'),null!==t?Oe($("#furnitureList .option-block .list-option-container").last(),`<span class='name'>${e}, ${t}</span><span class='list-text amount'>${n} ${s}</span><span class='list-text'>${l.formatCurrency(i*n*(1+Nl.getCell("S164").numeric()/100))} грн.</span>`):Oe($("#materialsList .option-block .list-option-container").last(),`<span class='name'>${e}</span><span class='list-text'>${n} ${s} </span>`))}El||$(".comfy-section").toggle(!1),Il||$("#furnitureList").toggle(!1),Oe($("#workList"),'<div class="division-block pricelist"></div><div class="list-option-container summary"></div>'),Oe($("#workList .list-option-container").last(),`<span class='name summary'>Всього по будівельній частині:</span><span class='list-text summary work'>${l.formatCurrency(le)} грн.</span>`),Oe($("#materialsList"),'<div class="division-block pricelist"></div><div class="list-option-container summary"></div>'),Oe($("#materialsList .list-option-container").last(),`<span class='name summary'>Всього по будівельній частині:</span><span class='list-text summary work'>${l.formatCurrency(le)} грн.</span>`);let De,Be=0,Ee=$("#appliancesList"),Ie=$("#appliancesListTotal");"gorenje"===Pl?De=[168,9]:"bosch"===Pl?De=[182,10]:"miele"===Pl&&(De=[197,9]);let je=0;if("undefined"!==Pl){je=1;for(let e=0;e<De[1];e++)Ee.append('<div class="option-block"><div class="division-block white"></div><div class="list-option-container appliances"></div></div>'),$("#appliancesList .option-block .list-option-container.appliances").last().append(`<span class='name white'>${Nl.getCell("F"+(De[0]+e)).value()} ${Nl.getCell("E"+(De[0]+e)).value()}</span><span class='list-text white'>${l.formatCurrency(Nl.getCell("D"+(De[0]+e)).numeric())} грн.</span>`),El&&(Ie.append('<div class="option-block"><div class="division-block pricelist"></div><div class="list-option-container"></div></div>'),$("#appliancesListTotal .option-block .list-option-container").last().append(`<span class='name'>${Nl.getCell("F"+(De[0]+e)).value()} ${Nl.getCell("E"+(De[0]+e)).value()}</span><span class='list-text amount'>1 шт.</span><span class='list-text'>${l.formatCurrency(Nl.getCell("D"+(De[0]+e)).numeric())} грн.</span>`)),Be+=Nl.getCell("D"+(De[0]+e)).numeric(),Be+=Nl.getCell("G37").numeric(),je++;if(El){const e=Nl.getCell("G37").numeric();Be+=e,Ie.append('<div class="option-block"><div class="division-block pricelist"></div><div class="list-option-container"></div></div>'),$("#appliancesListTotal .option-block .list-option-container").last().append(`<span class='name'>Доставка техніки</span><span class='list-text amount'></span><span class='list-text'>${je*e} грн.</span>`),Ee.append('<div class="option-block"><div class="division-block white"></div><div class="list-option-container appliances"></div></div>'),$("#appliancesList .option-block .list-option-container.appliances").last().append(`<span class='name white'>Доставка техніки</span><span class='list-text white'>${je*e} грн.</span>`),Ie.append('<div class="division-block pricelist"></div><div class="list-option-container summary"></div>'),$("#appliancesTotal").html(l.formatCurrency(Be)),$("#appliancesTotalDiscount").html(l.formatCurrency(.9*Be)),$("#appliancesListTotal .list-option-container").last().append(`<span class='name summary'>Всього по техніці:</span><span class='list-text summary work'>${l.formatCurrency(Be)} грн.</span>`),$("#appliancesListTotal .list-option-container").last().append(`<span class='name summary'><b>Всього по техніці, зі знижкою</b>:</span><span class='list-text summary work'>${l.formatCurrency(.9*Be)} грн.</span>`)}}El||$("#appliancesListTotal").toggle(!1);const ze=Ke(Bl);function Je(l,e,t){return`<div class="option-block"><div class="division-block pricelist"></div><div class="list-option-container"><span class='name'>${l}</span><span class='list-text amount'>${e}</span><span class='list-text'>${t}</span></div></div>`}function Oe(l,e){l.append(e)}function Ke(l){let e="J";return"cozy"==l?e="J":"japandi"==l?e="L":"fusion"==l?e="N":"modern"==l?e="P":"neoclassic"==l&&(e="R"),e}const Re=Nl.getCell(`${ze}127`).numeric(),qe=Nl.getCell(`${ze}128`).numeric(),Ae=Nl.getCell(`${ze}129`).numeric(),Qe=qe+Re+Ae;$("#kitchenPrice").html(l.formatCurrency(Re)+" грн."),$("#kitchenMontage").html(l.formatCurrency(qe)+" грн."),$("#kitchenDelivery").html(l.formatCurrency(Ae)+" грн."),$("#kitchenTotal").html(l.formatCurrency(Qe)+" грн"),$("#kitchenTotalPrice").html(l.formatCurrency(Be)+" грн."),Il&&(ee=0),$("#kitchenTotalPriceDiscount").html(l.formatCurrency(.9*Be)),$("#discountTotal").html(`<span class='bold-text-7'>${l.formatCurrency(Be-.9*Be)} грн.</span>`),Sl.get("summedPrice")*Dl<le?$("#totalPriceTotal").html(l.formatCurrency(le)+" грн. *"):$("#totalPriceTotal").html(l.formatCurrency(Sl.get("summedPrice")*Dl)+" грн. *")}))})();