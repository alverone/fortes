let style="cozy",appliancesCookie="";$("#space").val(50);let space=+$("#space").val(),amountOfRooms=+$("#amountOfRooms").val(),amountOfBathrooms=+$("#amountOfBathrooms").val(),furnitureBool=+$("#furnitureBool").is(":checked"),appliancesBoolTotal=+$("#appliancesBool").is(":checked"),bathtub=+$("#bathtub").is(":checked"),shower=+$("#shower").is(":checked"),optionsBool={hygienicShower:+$("#hygienicShower").is(":checked"),secondGypsumLayer:+$("#secondGypsumLayer").is(":checked"),floorScreed:+$("#floorscreed").is(":checked"),heatedFlooring:+$("#heatedFlooring").val(),denoising:+$("#noise").is(":checked"),entranceDoors:+$("#doors").is(":checked"),conditioning:+$("#conditioning").val()},ceilingBool={ceiling1:+$("#ceiling1").is(":checked"),ceiling2:+$("#ceiling2").is(":checked"),ceiling3:+$("#ceiling3").is(":checked")},flooringBool={laminate:+$("#laminat").is(":checked"),vinyl:+$("#vynil").is(":checked"),parquet:+$("#parket").is(":checked")},appliancesBool={standardGorenje:1,standardBosch:0,premiumMiele:0};const onDataLoaded=e=>{let a="",o=0,i=">=",t="<=",n="=",l=0,s=0;function r(r,c){let p=e.feed.entry.find(e=>e.title.$t==r).gs$cell.inputValue;if(p.includes("=IF")){for(;")"==p[p.length-1];)p=p.substring(0,p.length-1);let e=p.split("IF");e=e.map(e=>e.split(";"));for(let r=1;r<e.length;r++){o=parseFloat(e[r][1]);let p=e[r][0].slice(1,e[r][0].length).split("=");if(s=e[r][0].slice(1,e[r][0].length).split("=")[1],a=p[0].indexOf(">")>-1?i:p[0].indexOf("<")>-1?t:n,l||(l=o),"<="===a&&+c<=+s)return l=o;">="===a&&+c>=+s&&(l=o)}return parseFloat(l)}return parseFloat(e.feed.entry.find(e=>e.title.$t==r).content.$t)}function c(e,a){let o="",i=0,t=0,n=0,l=0,s=0;"modern"==style?o=e.modern:"fusion"==style?o=e.fusion:"cozy"==style?o=e.cozy:"japandi"==style?o=e.japandi:"neoclassic"==style&&(o=e.neoclassic),l+=o.bedsideLight*r("H143")+o.kitchenCeilingLight*r("H145"),s+=(o.curtains+o.cornice+o.tulle)*amountOfRooms+o.coffeeTable*(amountOfRooms-1);let c=1.03*((i=o.kitchen+o.kitchenDelivery+o.kitchenMontage+o.kitchenSink+o.kitchenSinkMixer+o.table+4*o.chairs+o.otherKitchenFurniture)+(t=o.sofa+o.livingroomChair)+(n=(o.bed+o.matress)*(amountOfRooms-1)+o.cupboard+o.bedChair+o.mirror+o.shelves*amountOfRooms)+(l=o.spotlight*(.48*space)+o.chandelier*(amountOfRooms-1)+o.kitchenWallLight+o.livingroomFloorLight+o.hangingLight)+(s=o.jalousie+o.coffeeTable*(amountOfRooms-1)))*(1+a/100);return $("#furnitureBool").siblings(".label").html(`Так <span class="grey">+${Math.round(c/(28.5*space))}$/м²</span>`),furnitureBool?c:0}function p(e,a){let o="",i=0,t=0,n=0,l=0,s=0;return"modern"==style?o=e.modern:"fusion"==style?o=e.fusion:"cozy"==style?o=e.cozy:"japandi"==style?o=e.japandi:"neoclassic"==style&&(o=e.neoclassic),1.022*((s=(o.electricity+o.waterSupply+o.canalisation+o.ventilation*amountOfBathrooms)*space+o.kafel*amountOfBathrooms*space+o.bathtub*bathtub+o.shower*shower+o.gypsumMontage*space+o.doorInstallation*(amountOfBathrooms+amountOfRooms))+(i=(o.ceiling1*ceilingBool.ceiling1+o.ceiling2*ceilingBool.ceiling2+o.ceiling3*ceilingBool.ceiling3)*space)+(n=(o.laminate*flooringBool.laminate+o.vinyl*flooringBool.vinyl+o.parquet*flooringBool.parquet)*space)+(t=o.wallPainting*space+o.ceilingPainting*ceilingBool.ceiling3*space+o.mouldings)+(l=(o.plinth+o.plinthHidden)*space))+(100*space+2*a*1200+3e3)}function h(e){let a,o,i,t="",n=0,l=0,s=0,c=0;return"modern"==style?t=e.modern:"fusion"==style?t=e.fusion:"cozy"==style?t=e.cozy:"japandi"==style?t=e.japandi:"neoclassic"==style&&(t=e.neoclassic),n=t.door*(amountOfBathrooms+amountOfRooms)+t.kafel*amountOfBathrooms*35+.66*t.corniceWall*space+.66*t.corniceCeiling*space+.59*t.plinth*space+parseFloat(r("H77",space))*t.electricalFurniture,l=amountOfBathrooms*(t.sink+t.stand+t.waterMixer+t.bathShelf)+t.bathtub*bathtub+(t.shower+t.ladder)*shower+(bathtub+shower)*t.bathShowerMixer+amountOfBathrooms*t.toilet+(t.towelHolder+t.bathMirror)*amountOfBathrooms,space<100?a=i=o=space-7*amountOfBathrooms:space>=100&&(o=a=i=space-10*amountOfBathrooms),c=n+l+(s=t.laminate*o*flooringBool.laminate+t.quartzvinyl*a*flooringBool.vinyl+flooringBool.parquet*i*flooringBool.parquet)+parseFloat(100*r("I94"))*furnitureBool}function d(e){let a="",o=0;"modern"==style?a=e.modern:"fusion"==style?a=e.fusion:"cozy"==style?a=e.cozy:"japandi"==style?a=e.japandi:"neoclassic"==style&&(a=e.neoclassic);let i=optionsBool.floorScreed*a.floorScreed*space,t=amountOfBathrooms*a.hygienicShower*optionsBool.hygienicShower,n=optionsBool.heatedFlooring*a.heatedFlooring,l=a.partitions*optionsBool.secondGypsumLayer*space,s=(optionsBool.denoising+ceilingBool.ceiling3)*a.gypsumCeilingDenoising*space,c=a.denoising*optionsBool.denoising*space,p=optionsBool.conditioning*a.conditioningSplit*space+a.conditioner*(1+1/r("S113"))*1.05,h=optionsBool.entranceDoors*(a.entranceDoor+a.entranceDoorMontage);return $("#floorscreed").siblings(".label").html(`Стяжка підлоги <span class="grey">+${Math.round(a.floorScreed/28.5)}$/м²</span>`),$("#noise").siblings(".label").html(`Шумоізоляція <span class="grey">+${Math.round(a.floorScreed/28.5)}$/м²</span>`),$("#doors").siblings(".label").html(`Вхідні двері <span class="grey">+${Math.round((a.entranceDoor+a.entranceDoorMontage)/(28.5*space))}$/м²</span>`),$("#secondGypsumLayer").siblings(".label").html(`Другий шар гіпсокартону <span class="grey">+${Math.round(a.partitions/28.5)}$/м²</span>`),$("#hygienicShower").siblings(".label").html(`Гігієнічний душ <span class="grey">+${Math.round(amountOfBathrooms*a.hygienicShower/(28.5*space))}$/м²</span>`),o=i+t+n+l+s+c+p+h,optionsBool.denoising+ceilingBool.ceiling1+ceilingBool.ceiling2>2&&(optionsBool+=a.tensionCeilingDenoising*space),o}function g(e){let a="";appliancesBool.standardGorenje?a=e.gorenje:appliancesBool.standardBosch?a=e.bosch:appliancesBool.premiumMiele&&(a=e.miele);let o=0,i=1;for(let e in a)o+=+a[e],i++;i=1;let t=0,n=0,l=0;for(let a in e.gorenje)t+=e.gorenje[a],i++;i=1;for(let a in e.bosch)n+=e.bosch[a],i++;i=1;for(let a in e.miele)l+=e.miele[a],i++;return $(".choice[data-appliances='gorenje']").children(".grey").html(`${Math.round(t/(28.5*space))}$/м²`),$(".choice[data-appliances='bosch']").children(".grey").html(`${Math.round(n/(28.5*space))}$/м²`),$(".choice[data-appliances='miele']").children(".grey").html(`${Math.round(l/(28.5*space))}$/м²`),o+=i*parseFloat(r("G36"))}function u(){let e={cozy:{waterSupply:r("I42",space),canalisation:r("I43",space),ventilation:r("I44",space),electricity:r("I45"),shower:r("I46"),bathtub:r("I47"),gypsumMontage:r("I48",space),kafel:r("I49",space),doorInstallation:r("I50"),wallPainting:r("I52",space),ceilingPainting:r("I53",space),ceiling1:r("I56"),ceiling2:r("I57",space),ceiling3:r("I58",space),laminate:r("I60",space),vinyl:r("I61",space),parquet:r("I62",space),mouldings:r("I54",space),plinth:r("I64",space),plinthHidden:r("I65",space)},japandi:{waterSupply:r("K42",space),canalisation:r("K43",space),ventilation:r("K44",space),electricity:r("K45"),shower:r("K46"),bathtub:r("K47"),gypsumMontage:r("K48",space),kafel:r("K49",space),doorInstallation:r("K50"),wallPainting:r("K52",space),ceilingPainting:r("K53",space),ceiling1:r("K56"),ceiling2:r("K57",space),ceiling3:r("K58",space),laminate:r("K60",space),vinyl:r("K61",space),parquet:r("K62",space),mouldings:r("K54",space),plinth:r("K64",space),plinthHidden:r("K65",space)},fusion:{waterSupply:r("M42",space),canalisation:r("M43",space),ventilation:r("M44",space),electricity:r("M45"),shower:r("M46"),bathtub:r("M47"),gypsumMontage:r("M48",space),kafel:r("M49",space),doorInstallation:r("M50"),wallPainting:r("M52",space),ceilingPainting:r("M53",space),ceiling1:r("M56"),ceiling2:r("M57",space),ceiling3:r("M58",space),laminate:r("M60",space),vinyl:r("M61",space),parquet:r("M62",space),mouldings:140*r("M54",space),plinth:r("M64",space),plinthHidden:r("M65",space)},modern:{waterSupply:r("O42",space),canalisation:r("O43",space),ventilation:r("O44",space),electricity:r("O45"),shower:r("O46"),bathtub:r("O47"),gypsumMontage:r("O48",space),kafel:r("O49",space),doorInstallation:r("O50"),wallPainting:r("O52",space),ceilingPainting:r("O53",space),denoising:r("F42",space),ceiling1:r("O56"),ceiling2:r("O57",space),ceiling3:r("O58",space),laminate:r("O60",space),vinyl:r("O61",space),parquet:r("O62",space),mouldings:140*r("O54",space),plinth:r("O64",space),plinthHidden:r("O65",space)},neoclassic:{waterSupply:r("Q42",space),canalisation:r("Q43",space),ventilation:r("Q44",space),electricity:r("Q45"),shower:r("Q46"),bathtub:r("Q47"),gypsumMontage:r("Q48",space),kafel:r("Q49",space),doorInstallation:r("Q50"),wallPainting:r("Q52",space),ceilingPainting:r("Q53",space),ceiling1:r("Q56"),ceiling2:r("Q57",space),ceiling3:r("Q58",space),laminate:r("Q60",space),vinyl:r("Q61",space),parquet:r("Q62",space),mouldings:140*r("Q54",space),plinth:r("Q64",space),plinthHidden:r("Q65",space)}},a={cozy:{floorScreed:parseFloat(r("I102",space)),hygienicShower:parseFloat(r("I103")),heatedFlooring:parseFloat(r("I104")),partitions:parseFloat(r("I105",space)),gypsumCeilingDenoising:parseFloat(r("I106",space)),tensionCeilingDenoising:parseFloat(r("I107")),denoising:parseFloat(r("I108",space)),conditioningSplit:parseFloat(r("I112",space)),entranceDoor:parseFloat(r("I109")),entranceDoorMontage:parseFloat(r("I110")),conditioner:parseFloat(r("I113"))},japandi:{floorScreed:parseFloat(r("K102",space)),hygienicShower:parseFloat(r("K103")),heatedFlooring:parseFloat(r("K104")),partitions:parseFloat(r("K105",space)),gypsumCeilingDenoising:parseFloat(r("K106",space)),tensionCeilingDenoising:parseFloat(r("K107")),denoising:parseFloat(r("K108",space)),conditioningSplit:parseFloat(r("K112",space)),entranceDoor:parseFloat(r("K109")),entranceDoorMontage:parseFloat(r("K110")),conditioner:parseFloat(r("K113"))},fusion:{floorScreed:parseFloat(r("M102",space)),hygienicShower:parseFloat(r("M103")),heatedFlooring:parseFloat(r("M104")),partitions:parseFloat(r("M105",space)),gypsumCeilingDenoising:parseFloat(r("M106",space)),tensionCeilingDenoising:parseFloat(r("M107")),denoising:parseFloat(r("M108",space)),conditioningSplit:parseFloat(r("M112",space)),entranceDoor:parseFloat(r("M109")),entranceDoorMontage:parseFloat(r("M110")),conditioner:parseFloat(r("M113"))},modern:{floorScreed:parseFloat(r("O102",space)),hygienicShower:parseFloat(r("O103")),heatedFlooring:parseFloat(r("O104")),partitions:parseFloat(r("O105",space)),gypsumCeilingDenoising:parseFloat(r("O106",space)),tensionCeilingDenoising:parseFloat(r("O107")),denoising:parseFloat(r("O108",space)),conditioningSplit:parseFloat(r("O112",space)),entranceDoor:parseFloat(r("O109")),entranceDoorMontage:parseFloat(r("O110")),conditioner:parseFloat(r("O113"))},neoclassic:{floorScreed:parseFloat(r("Q102",space)),hygienicShower:parseFloat(r("Q103")),heatedFlooring:parseFloat(r("Q104")),partitions:parseFloat(r("Q105",space)),gypsumCeilingDenoising:parseFloat(r("Q106",space)),tensionCeilingDenoising:parseFloat(r("Q107")),wallsDenoising:parseFloat(r("Q108",space)),conditioningSplit:parseFloat(r("Q112",space)),entranceDoor:parseFloat(r("Q109")),entranceDoorMontage:parseFloat(r("Q110")),conditioner:parseFloat(r("Q113"))}},o={cozy:{door:parseFloat(r("I72")),kafel:parseFloat(r("I73")),corniceWall:parseFloat(r("I74")),corniceCeiling:parseFloat(r("I75")),plinth:parseFloat(r("I76")),electricalFurniture:parseFloat(r("I77")),sink:parseFloat(r("I79")),stand:parseFloat(r("I80")),waterMixer:parseFloat(r("I81")),bathShelf:parseFloat(r("I82")),bathtub:parseFloat(r("I83")),ladder:parseFloat(r("I84")),shower:parseFloat(r("I85")),bathShowerMixer:parseFloat(r("I86")),toilet:parseFloat(r("I87")),towelHolder:parseFloat(r("I88")),bathMirror:parseFloat(r("I89")),laminate:parseFloat(r("I91")),quartzvinyl:parseFloat(r("I92")),parquet:parseFloat(r("I93")),delivery:parseFloat(r("I94"))},japandi:{door:parseFloat(r("K72")),kafel:parseFloat(r("K73")),corniceWall:parseFloat(r("K74")),corniceCeiling:parseFloat(r("I75")),plinth:parseFloat(r("K76")),electricalFurniture:parseFloat(r("K77")),sink:parseFloat(r("K79")),stand:parseFloat(r("K80")),waterMixer:parseFloat(r("K81")),bathShelf:parseFloat(r("K82")),bathtub:parseFloat(r("K83")),ladder:parseFloat(r("K84")),shower:parseFloat(r("K85")),bathShowerMixer:parseFloat(r("K86")),toilet:parseFloat(r("K87")),towelHolder:parseFloat(r("K88")),bathMirror:parseFloat(r("K89")),laminate:parseFloat(r("K91")),quartzvinyl:parseFloat(r("K92")),parquet:parseFloat(r("K93")),delivery:parseFloat(r("K94"))},fusion:{door:parseFloat(r("M72")),kafel:parseFloat(r("M73")),corniceWall:parseFloat(r("M74")),corniceCeiling:parseFloat(r("M75")),plinth:parseFloat(r("M76")),electricalFurniture:parseFloat(r("M77")),sink:parseFloat(r("M79")),stand:parseFloat(r("M80")),waterMixer:parseFloat(r("M81")),bathShelf:parseFloat(r("M82")),bathtub:parseFloat(r("M83")),ladder:parseFloat(r("M84")),shower:parseFloat(r("M85")),bathShowerMixer:parseFloat(r("M86")),toilet:parseFloat(r("M87")),towelHolder:parseFloat(r("M88")),bathMirror:parseFloat(r("M89")),laminate:parseFloat(r("M91")),quartzvinyl:parseFloat(r("M92")),parquet:parseFloat(r("M93")),delivery:parseFloat(r("M94"))},modern:{door:parseFloat(r("O72")),kafel:parseFloat(r("O73")),corniceWall:parseFloat(r("O74")),corniceCeiling:parseFloat(r("O75")),plinth:parseFloat(r("O76")),electricalFurniture:parseFloat(r("O77")),sink:parseFloat(r("O79")),stand:parseFloat(r("O80")),waterMixer:parseFloat(r("O81")),bathShelf:parseFloat(r("O82")),bathtub:parseFloat(r("O83")),ladder:parseFloat(r("O84")),shower:parseFloat(r("O85")),bathShowerMixer:parseFloat(r("O86")),toilet:parseFloat(r("O87")),towelHolder:parseFloat(r("O88")),bathMirror:parseFloat(r("O89")),laminate:parseFloat(r("O91")),quartzvinyl:parseFloat(r("O92")),parquet:parseFloat(r("O93")),delivery:parseFloat(r("O94"))},neoclassic:{door:parseFloat(r("Q72")),kafel:parseFloat(r("Q73")),corniceWall:parseFloat(r("Q74")),corniceCeiling:parseFloat(r("Q75")),plinth:parseFloat(r("Q76")),electricalFurniture:parseFloat(r("Q77")),sink:parseFloat(r("Q79")),stand:parseFloat(r("Q80")),waterMixer:parseFloat(r("Q81")),bathShelf:parseFloat(r("Q82")),bathtub:parseFloat(r("Q83")),ladder:parseFloat(r("Q84")),shower:parseFloat(r("Q85")),bathShowerMixer:parseFloat(r("Q86")),toilet:parseFloat(r("Q87")),towelHolder:parseFloat(r("Q88")),bathMirror:parseFloat(r("Q89")),laminate:parseFloat(r("Q91")),quartzvinyl:parseFloat(r("Q92")),parquet:parseFloat(r("Q93")),delivery:parseFloat(r("Q94"))}},i={cozy:{kitchen:r("I120"),kitchenMontage:r("I121"),kitchenDelivery:r("I122"),kitchenSink:r("I123"),kitchenSinkMixer:r("I124"),table:r("I125"),chairs:r("I126"),otherKitchenFurniture:r("I127"),sofa:r("I131"),livingroomChair:r("I132"),bed:r("I134"),matress:r("I135"),shelves:r("I136"),cupboard:r("I137"),bedChair:r("I138"),mirror:r("I139"),spotlight:r("I141"),chandelier:r("I142"),bedsideLight:r("I143"),kitchenWallLight:r("I144"),kitchenCeilingLight:r("I145"),livingroomFloorLight:r("I146"),hangingLight:r("I147"),curtains:r("I149"),tulle:r("I150"),cornice:r("I151"),jalousie:r("I152"),coffeeTable:r("I153")},japandi:{kitchen:r("K120"),kitchenMontage:r("K121"),kitchenDelivery:r("K122"),kitchenSink:r("K123"),kitchenSinkMixer:r("K124"),table:r("K125"),chairs:r("K126"),otherKitchenFurniture:r("K127"),sofa:r("K131"),livingroomChair:r("K132"),bed:r("K134"),matress:r("K135"),shelves:r("K136"),cupboard:r("K137"),bedChair:r("K138"),mirror:r("K139"),spotlight:r("K141"),chandelier:r("K142"),bedsideLight:r("K143"),kitchenWallLight:r("K144"),kitchenCeilingLight:r("K145"),livingroomFloorLight:r("K146"),hangingLight:r("K147"),curtains:r("K149"),tulle:r("K150"),cornice:r("K151"),jalousie:r("K152"),coffeeTable:r("K153")},fusion:{kitchen:r("M120"),kitchenMontage:r("M121"),kitchenDelivery:r("M122"),kitchenSink:r("M123"),kitchenSinkMixer:r("M124"),table:r("M125"),chairs:r("M126"),otherKitchenFurniture:r("M127"),sofa:r("M131"),livingroomChair:r("M132"),bed:r("M134"),matress:r("M135"),shelves:r("M136"),cupboard:r("M137"),bedChair:r("M138"),mirror:r("M139"),spotlight:r("M141"),chandelier:r("M142"),bedsideLight:r("M143"),kitchenWallLight:r("M144"),kitchenCeilingLight:r("M145"),livingroomFloorLight:r("M146"),hangingLight:r("M147"),curtains:r("M149"),tulle:r("M150"),cornice:r("M151"),jalousie:r("M152"),coffeeTable:r("M153")},modern:{kitchen:r("O120"),kitchenMontage:r("O121"),kitchenDelivery:r("O122"),kitchenSink:r("O123"),kitchenSinkMixer:r("O124"),table:r("O125"),chairs:r("O126"),otherKitchenFurniture:r("O127"),sofa:r("O131"),livingroomChair:r("O132"),bed:r("O134"),matress:r("O135"),shelves:r("O136"),cupboard:r("O137"),bedChair:r("O138"),mirror:r("O139"),spotlight:r("O141"),chandelier:r("O142"),bedsideLight:r("O143"),kitchenWallLight:r("O144"),kitchenCeilingLight:r("O145"),livingroomFloorLight:r("O146"),hangingLight:r("O147"),curtains:r("O149"),tulle:r("O150"),cornice:r("O151"),jalousie:r("O152"),coffeeTable:r("O153")},neoclassic:{kitchen:r("Q120"),kitchenMontage:r("Q121"),kitchenDelivery:r("Q122"),kitchenSink:r("Q123"),kitchenSinkMixer:r("Q124"),table:r("Q125"),chairs:r("Q126"),otherKitchenFurniture:r("Q127"),sofa:r("Q131"),livingroomChair:r("Q132"),bed:r("Q134"),matress:r("Q135"),shelves:r("Q136"),cupboard:r("Q137"),bedChair:r("Q138"),mirror:r("Q139"),spotlight:r("Q141"),chandelier:r("Q142"),bedsideLight:r("Q143"),kitchenWallLight:r("Q144"),kitchenCeilingLight:r("Q145"),livingroomFloorLight:r("Q146"),hangingLight:r("Q147"),curtains:r("Q149"),tulle:r("Q150"),cornice:r("Q151"),jalousie:r("Q152"),coffeeTable:r("Q153")}},t={gorenje:{fridge:r("D161"),oven:r("D162"),varochnayaPanel:r("D163"),microwave:r("D164"),vytyazhka:r("D165"),washingMachine:r("D166"),dishwasher:r("D167"),boiler:r("D168"),TV:r("D169")},bosch:{fridge:r("D175"),oven:r("D176"),varochnayaPanel:r("D177"),microwave:r("D178"),vytyazhka:r("D179"),washingMachine:r("D180"),sushylnaMachina:r("D181"),dishwasher:r("D182"),boiler:r("D183"),TV:r("D184")},miele:{fridge:r("D190"),oven:r("D191"),varochnayaPanel:r("D192"),vytyazhka:r("D193"),washingMachine:r("D194"),sushylnaMachina:r("D195"),dishwasher:r("D196"),boiler:r("D197"),TV:r("D198")}},n=r("S99"),l=r("S157"),s=(r("S113"),parseFloat(r("G8",space)));console.log(.9*parseInt(g(t))+" "+parseInt(c(i,l))+" "+parseInt(h(o)+" "+p(e,s))*(1+n/100)+" "+parseInt(d(a))/(28.5*space)),console.log(style);let u=(.9*parseInt(g(t))+parseInt(c(i,l))+parseInt((h(o)+p(e,s))*(1+n/100))+parseInt(d(a)))/(28.5*space);return $("totalWhole").html(u*space*28.5),u}$("input").on("change",function(){space=+$("#space").val(),amountOfRooms=+$("#amountOfRooms").val(),amountOfBathrooms=+$("#amountOfBathrooms").val(),optionsBool.hygienicShower=+$("#hygienicShower").is(":checked"),optionsBool.secondGypsumLayer=+$("#secondGypsumLayer").is(":checked"),optionsBool.heatedFlooring=+$("#heatedFlooring").val(),optionsBool.conditioning=+$("#conditioning").val(),furnitureBool=+$("#furnitureBool").is(":checked"),bathtub=+$("#bathtub").is(":checked"),shower=+$("#shower").is(":checked"),appliancesBoolTotal=+$("#appliancesBool").is(":checked"),optionsBool.floorScreed=+$("#floorscreed").is(":checked"),optionsBool.denoising=+$("#noise").is(":checked"),optionsBool.entranceDoors=+$("#doors").is(":checked"),optionsBool.conditioning=+$("#conditioning").is(":checked"),ceilingBool.ceiling1=+$("#ceiling1").is(":checked"),ceilingBool.ceiling2=+$("#ceiling2").is(":checked"),ceilingBool.ceiling3=+$("#ceiling3").is(":checked"),flooringBool.laminate=+$("#laminat").is(":checked"),flooringBool.vinyl=+$("#vynil").is(":checked"),flooringBool.parquet=+$("#parket").is(":checked"),$("#total").html(Math.round(u()))}),$("input:text").on("keypress",function(e){space=+$("#space").val()}),$(".increment-field .increment").on("click",function(e){e.preventDefault(),$(this).siblings(".increment-input").val(parseInt($(this).siblings(".increment-input").val())+parseInt($(this).val())),"0"===$(this).siblings(".increment-input").val()?"1"===$(this).val()?$(this).siblings($(".increment")).toggleClass("disabled"):$(this).toggleClass("disabled"):parseInt($(this).siblings(".increment-input").val())>0&&$(this).siblings(".disabled").toggleClass("disabled"),space=+$("#space").val(),amountOfRooms=+$("#amountOfRooms").val(),amountOfBathrooms=+$("#amountOfBathrooms").val(),optionsBool.heatedFlooring=+$("#heatedFlooring").val(),optionsBool.conditioning=+$("#conditioning").val(),$("#total").html(Math.round(u()))}),$(".calculator-tab").on("click",function(e){number=parseInt($(this).attr("data-slider-index")),0==number?style="cozy":2==number?style="fusion":1==number?style="japandi":3==number?style="modern":4==number&&(style="neoclassic"),$(".calculator-slide").toggle(!1),$(".calculator-slide.main").toggle(!0),$(`.calculator-slide.${style}`).toggle(!0),$("#total").html(Math.round(u()))}),$("#calculate").on("click",function(){let e=$(".slider-tab.w--current").data("slider-index");0==e?style="cozy":2==e?style="fusion":1==e?style="japandi":3==e?style="modern":4==e&&(style="neoclassic"),$(".calculator-tab").removeClass("w--current"),$(`.calculator-tab[data-slider-index='${e}']`).addClass("w--current"),$("#total").html(Math.round(u()))}),$(".choice").on("click",function(){if($("#node").is(":checked"))return 0;appliancesBoolTotal=1,appliancesCookie=$(this).attr("data-appliances"),"bosch"==$(this).attr("data-appliances")?(appliancesBool.standardBosch=1,appliancesBool.premiumMiele=0,appliancesBool.standardGorenje=0):"gorenje"==$(this).attr("data-appliances")?(appliancesBool.standardBosch=0,appliancesBool.premiumMiele=0,appliancesBool.standardGorenje=1):(appliancesBool.standardBosch=0,appliancesBool.premiumMiele=1,appliancesBool.standardGorenje=0),$("#total").html(Math.round(u()))}),$("#node").on("click",function(){appliancesBoolTotal=0,appliancesBool.standardGorenje=0,appliancesBool.standardBosch=0,appliancesBool.premiumMiele=0,$("#total").html(Math.round(u()))}),$("#appliancesBool").on("click",function(){$(this).is(":checked")&&(document.querySelector(".choiceActiveBorder")||(appliancesBoolTotal=1,appliancesBool.standardGorenje=1,$("#total").html(Math.round(u()))))}),$("#total").html(Math.round(u()))};
