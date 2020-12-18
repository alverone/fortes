let appliancesBool = {
    standardGorenje: 1,
    standardBosch: 0,
    premiumMiele: 0,
};
const onDataLoaded = (data) => {
let sign = "",
    value = 0,
    morethan = ">=",
    lessthan = "<=",
    equals = "=",
    price = 0,
    threshold = 0;

function parseData(range, comparableData) {
    if (!data.feed.entry.find((entry) => entry.title.$t == range)) {
        return "";
    }

    let rawData = data.feed.entry.find((entry) => entry.title.$t == range).gs$cell.inputValue;
    if (rawData.includes("=IF")) {
        while (rawData[rawData.length - 1] == ")") {
            rawData = rawData.substring(0, rawData.length - 1);
            //console.log("e");
        }
        let formulaData = rawData.split("IF");
        //console.log(Fdata);
        formulaData = formulaData.map(item => item.split(";"));
        //console.log(formulaData[1][1]);
        for (let i = 1; i < formulaData.length; i++) {
            value = parseFloat(formulaData[i][1].replace(",", "."));
            //console.log(value);

            let item = formulaData[i][0].slice(1, formulaData[i][0].length).split("=");
            threshold = formulaData[i][0].slice(1, formulaData[i][0].length).split("=")[1];
            //console.log(threshold);
            if (item[0].indexOf(">") > -1) {
                sign = morethan;
            } else if (item[0].indexOf("<") > -1) {
                sign = lessthan;
            } else {
                sign = equals;
            }
            //console.log(sign);
            if (!price) {
                price = value;
            }
            if (sign === "<=") {
                if (+comparableData <= +threshold) {
                    price = value;
                    return price;
                }
            }
            if (sign === ">=") {
                if (+comparableData >= +threshold) {
                    price = value;
                }
            }
            //formulaRaw.splice(0, formulaRaw.length);
        }
        //console.log(price);
        return parseFloat(price);
    }
    if (isFinite(parseFloat(data.feed.entry.find((entry) => entry.title.$t == range).content.$t.replace(",", ".")))) {
        let result = data.feed.entry.find((entry) => entry.title.$t == range).content.$t.replace(",", ".");
        return parseFloat(result.replace(",", "."));
    }
    return data.feed.entry.find((entry) => entry.title.$t == range).content.$t;
}
let appliances = {
    gorenje: {
        fridge: parseData("D161"),
        oven: parseData("D162"),
        varochnayaPanel: parseData("D163"),
        microwave: parseData("D164"),
        vytyazhka: parseData("D165"),
        washingMachine: parseData("D166"),
        dishwasher: parseData("D167"),
        boiler: parseData("D168"),
        TV: parseData("D169"),
    },
    bosch: {
        fridge: parseData("D175"),
        oven: parseData("D176"),
        varochnayaPanel: parseData("D177"),
        microwave: parseData("D178"),
        vytyazhka: parseData("D179"),
        washingMachine: parseData("D180"),
        sushylnaMachina: parseData("D181"),
        dishwasher: parseData("D182"),
        boiler: parseData("D183"),
        TV: parseData("D184"),
    },
    miele: {
        fridge: parseData("D190"),
        oven: parseData("D191"),
        varochnayaPanel: parseData("D192"),
        vytyazhka: parseData("D193"),
        washingMachine: parseData("D194"),
        sushylnaMachina: parseData("D195"),
        dishwasher: parseData("D196"),
        boiler: parseData("D197"),
        TV: parseData("D198"),
    },
};
let cookies = document.cookie.split(";").map((cookie) => cookie.split("=")).reduce((accumulator, [key, value]) => ({
    ...accumulator,
    [key.trim()]: decodeURIComponent(value),
}), {});
let appliancesCookie = cookies._appliances;
if (!appliancesCookie) {
    appliancesCookie = "gorenje";
}
let appliancesBoolTotal = +cookies._appliancesBoolTotal,
    furnitureBool = +cookies._furnitureBool,
    style = cookies._style,
    space = +cookies._space,
    bath = cookies._bath,
    shower = cookies._shower,
    amountOfRooms = cookies._amountOfRooms,
    amountOfBathrooms = cookies._amountOfBathrooms,
    letter,
    letterModel,
    ceiling = cookies._ceiling,
    hygienicShower = +cookies._hygienicShower,
    secondGypsumLayer = +cookies._secondGypsumLayer,
    floorScreed = cookies._floorScreed,
    heatedFlooring = +cookies._heatedFlooring,
    denoising = cookies._denoising,
    entranceDoors = cookies._entranceDoors,
    conditioning = cookies._conditioning,
    flooring = cookies._flooring,
    workSum = 0,
    furnitureSum = 0,
    $furniture = $("#furnitureList");
    console.log(floorScreed+ " " +denoising+ " " +hygienicShower+ " " +secondGypsumLayer+ " " +heatedFlooring+ " " +entranceDoors+ " " +conditioning);
    if (style == "neoclassic") {
        $("#styleSpec").html("Neo Classic"); 
    } else {
        $("#styleSpec").html(style[0].toUpperCase() + style.slice(1, string.length));    
    }

if (style == "cozy") {
    letter = "I";
    letterModel = "A";
} else if (style == "japandi") {
    letter = "K";
    letterModel = "B";
} else if (style == "fusion") {
    letter = "M";
    letterModel = "C";
} else if (style == "modern") {
    letter = "O";
    letterModel = "D";
} else if (style == "neoclassic") {
    letter = "Q";
    letterModel = "E";
}
let flooringNum, ceilingNum, flooringNum2, mouldings, laminat = 0,
    parket = 0,
    vynil = 0,
    gapless = 0,
    stretch = 0,
    gypsum = 0;
if (flooring == "laminat") {
    flooringNum = "60";
    flooringNum2 = "91";
    laminat = 1;
} else if (flooring == "vynil") {
    flooringNum = "61";
    vynil = 1;
    flooringNum2 = "92";
} else if (flooring == "parket") {
    flooringNum = "62";
    parket = 1;
    flooringNum2 = "93";
}
if (ceiling == "stretch ceiling") {
    ceilingNum = "56";
    mouldings = 0
} else if (ceiling == "gapless") {
    ceilingNum = "57";
    mouldings = 0;
} else if (ceiling == "gypsum") {
    ceilingNum = "58";
    mouldings = 1;
}
console.log(flooring + " " + ceiling);
let water = parseFloat(parseData(`${letter+42}`, space)) * space,
    canalisation = parseFloat(parseData(`${letter+43}`, space)) * space,
    vents = parseFloat(parseData(`${letter+44}`, space)) * space,
    electricity = parseFloat(parseData(`${letter+45}`, space)) * space;

appendWorkOption(parseData("F42"), parseData("G42"), 1, water);
appendWorkOption(parseData("F43"), parseData("G43"), 1, canalisation);
appendWorkOption(parseData("F44"), parseData("G44"), parseFloat(amountOfBathrooms), vents);
appendWorkOption(parseData("F45"), parseData("G45"), 1, electricity);
//appendWorkOption(parseData("F46"), parseData("G46"), shower, parseFloat(parseData(`${letter + 46}`, space)));
//appendWorkOption(parseData("F47"), parseData("G47"), bath, parseFloat(parseData(`${letter + 47}`, space)));
appendWorkOption(parseData("F48"), parseData("G48"), 1, parseFloat(parseData(`${letter + 48}`, space)) * space);
appendWorkOption(parseData("F49"), parseData("G49"), amountOfBathrooms, parseFloat(parseData(`${letter + 49}`, space)) * space);
appendWorkOption(parseData("F50"), parseData("G50"), (parseFloat(amountOfBathrooms) + parseFloat(amountOfRooms)), parseFloat(parseData(`${letter + 50}`)));
appendWorkOption(parseData("F52"), parseData("G52"), 1, parseFloat(parseData(`${letter + 52}`, space)) * space);
appendWorkOption(parseData("F54"), parseData("G54"), 1, parseFloat(parseData(`${letter + 54}`)));
appendWorkOption(parseData("F53"), parseData("G53"), mouldings, parseFloat(parseData(`${letter + 53}`, space)) * 140);
appendWorkOption(parseData("F" + ceilingNum), parseData("G" + ceilingNum), 1, parseFloat(parseData(letter + ceilingNum, space)) * space);
appendWorkOption(parseData("F" + flooringNum), parseData("G" + flooringNum), 1, parseFloat(parseData(letter + flooringNum, space)) * space);
appendWorkOption(parseData("F64"), parseData("G64"), 1, parseFloat(parseData(`${letter + 64}`, space)) * space);
appendWorkOption(parseData("F66"), 0, 1, Math.round((parseFloat(workSum) / 100) * 1.56));
appendWorkOption(parseData("F67"), 0, 1, (parseFloat(parseData("G8", space) * 2 * 1200) + 3000 + (space * 100)));

$("#workList").append("</div><div class=\"list-option-container margined\"></div>");
$("#workList .list-option-container").last().append(`<h4 class=\"pricelist-header small no-padding\">Комплектуючі та чистові матеріали</h4><span class=\'notation amount\'> </span><span class=\'notation\'>Кількість</span>`);
    
appendMaterialsOption(parseData("F72"), parseData(letterModel + "72"), (parseFloat(amountOfBathrooms) + parseFloat(amountOfRooms)), parseFloat(parseData(`${letter+72}`, space)), null);
appendMaterialsOption(parseData("F73"), parseData(letterModel + "73"), parseFloat(amountOfBathrooms) * 35, parseFloat(parseData(`${letter+73}`, space)), null);
appendMaterialsOption(parseData("F74"), parseData(letterModel + "74"), 0.66 * space, parseFloat(parseData(`${letter+74}`, space)), null);
appendMaterialsOption(parseData("F75"), parseData(letterModel + "75"), 0.66 * space, parseFloat(parseData(`${letter+75}`, space)), null);
appendMaterialsOption(parseData("F76"), parseData(letterModel + "76"), 0.59 * space, parseFloat(parseData(`${letter+76}`, space)), null);
appendMaterialsOption(parseData("F77"), parseData(letterModel + "77"), parseFloat(parseData("H77", space)), parseFloat(parseData(`${letter+77}`, space)), null);
appendMaterialsOption(parseData("F79"), parseData(letterModel + "79"), 1, parseFloat(parseData(`${letter+79}`, space)), parseData("G79"));
appendMaterialsOption(parseData("F80"), parseData(letterModel + "80"), 1, parseFloat(parseData(`${letter+80}`, space)), parseData("G80"));
appendMaterialsOption(parseData("F81"), parseData(letterModel + "81"), 1, parseFloat(parseData(`${letter+81}`, space)), parseData("G81"));
appendMaterialsOption(parseData("F82"), parseData(letterModel + "82"), 1, parseFloat(parseData(`${letter+82}`, space)), parseData("G82"));
appendMaterialsOption(parseData("F83"), parseData(letterModel + "83"), parseFloat(bath), parseFloat(parseData(`${letter+83}`, space)), parseData("G83"));
appendMaterialsOption(parseData("F84"), parseData(letterModel + "84"), parseFloat(shower), parseFloat(parseData(`${letter+84}`, space)), parseData("G84"));
appendMaterialsOption(parseData("F85"), parseData(letterModel + "85"), shower, parseFloat(parseData(`${letter+85}`, space)), parseData("G85"));
appendMaterialsOption(parseData("F86"), parseData(letterModel + "86"), parseFloat(bath) + parseFloat(shower), parseFloat(parseData(`${letter+86}`, space)), parseData("G86"));
appendMaterialsOption(parseData("F87"), parseData(letterModel + "87"), parseFloat(amountOfBathrooms), parseFloat(parseData(`${letter+87}`, space)), parseData("G87"));
appendMaterialsOption(parseData("F88"), parseData(letterModel + "88"), parseFloat(amountOfBathrooms), parseFloat(parseData(`${letter+88}`, space)), parseData("G88"));
appendMaterialsOption(parseData("F89"), parseData(letterModel + "89"), parseFloat(amountOfBathrooms), parseFloat(parseData(`${letter+89}`, space)), parseData("G89"));
if (space < 100) {
    appendMaterialsOption(parseData(`F${flooringNum2}`), parseData(letterModel + flooringNum2), (space - parseFloat(amountOfBathrooms) * 7), parseFloat(parseData(`${letter+flooringNum2}`, space)), null);
} else {
    appendMaterialsOption(parseData(`F${flooringNum2}`), parseData(letterModel + flooringNum2), (space - parseFloat(amountOfBathrooms) * 10), parseFloat(parseData(`${letter+flooringNum2}`, space)), null);
}
if (furnitureBool) {
    appendMaterialsOption(parseData("F94"), parseData(letterModel + "94"), 1, space * 100, null);
}

workSum = Math.round(workSum * (1 + parseFloat(parseData("S99") / 100)));

    
if (furnitureBool) {
    $("#furnitureList").append("</div><div class=\"list-option-container\"></div>");
    $("#furnitureList .list-option-container").last().append(`<h4 class=\"pricelist-header small no-padding\">Кухня</h4><span class=\'notation amount\'>Кількість</span><span class=\'notation\'>Ціна</span>`);
    
    appendFurnitureOption(parseData("F120"), parseData(letterModel + "120"), 1, parseFloat(parseData(`${letter+120}`, space)), parseData("G120"));
    furnitureSum += Math.round( parseFloat(parseData(`${letter+122}`, space) * (1 +( parseData("S157")/100)))) + Math.round(parseFloat(parseData(`${letter+121}`, space) * (1 +( parseData("S157")/100))));
    $furniture.append("<div class=\"option-block\"><div class=\"division-block pricelist small-heading\"></div><div class=\"list-option-container\"></div></div>");
    $("#furnitureList .option-block .list-option-container").last().append(`<span class=\'name\'>${parseData("F121")}</span><span class=\'list-text amount\'>1 шт.</span><span class=\'list-text\'>${Math.round(parseFloat(parseData(`${letter+121}`, space) * (1 +( parseData("S157")/100)))) } грн.</span>`);
    $furniture.append("<div class=\"option-block\"><div class=\"division-block pricelist small-heading\"></div><div class=\"list-option-container\"></div></div>");
    $("#furnitureList .option-block .list-option-container").last().append(`<span class=\'name\'>${parseData("F122")}</span><span class=\'list-text amount\'>1 шт.</span><span class=\'list-text\'>${Math.round( parseFloat(parseData(`${letter+122}`, space) * (1 +( parseData("S157")/100)))) } грн.</span>`);
    
    appendFurnitureOption(parseData("F123"), parseData(letterModel + "123"), 1, parseFloat(parseData(`${letter+123}`, space)), parseData("G123"));
    appendFurnitureOption(parseData("F124"), parseData(letterModel + "124"), 1, parseFloat(parseData(`${letter+124}`, space)), parseData("G124"));
    appendFurnitureOption(parseData("F125"), parseData(letterModel + "125"), 1, parseFloat(parseData(`${letter+125}`, space)), parseData("G125"));
    appendFurnitureOption(parseData("F126"), parseData(letterModel + "126"), 4, parseFloat(parseData(`${letter+126}`, space)), parseData("G126"));
    appendFurnitureOption(parseData("F127"), parseData(letterModel + "127"), 1, parseFloat(parseData(`${letter+127}`, space)), parseData("G127"));
    
    $("#furnitureList").append("</div><div class=\"list-option-container margined\"></div>");
    $("#furnitureList .list-option-container").last().append(`<h4 class=\"pricelist-header small no-padding\">Вітальня</h4><span class=\'notation amount\'>Кількість</span><span class=\'notation\'>Ціна</span>`);
    appendFurnitureOption(parseData("F131"), parseData(letterModel + "131"), 1, parseFloat(parseData(`${letter+131}`, space)), parseData("G131"));
    appendFurnitureOption(parseData("F132"), parseData(letterModel + "132"), 1, parseFloat(parseData(`${letter+132}`, space)), parseData("G132"));
}

    
$("#furnitureList").append("</div><div class=\"list-option-container margined\"></div>");
$("#furnitureList .list-option-container").last().append(`<h4 class=\"pricelist-header small no-padding\">Спальня</h4><span class=\'notation amount\'>Кількість</span><span class=\'notation\'>Ціна</span>`);

appendFurnitureOption(parseData("F134"), parseData(letterModel + "134"), 1, parseFloat(parseData(`${letter+134}`, space)), parseData("G134"));
appendFurnitureOption(parseData("F135"), parseData(letterModel + "135"), 1, parseFloat(parseData(`${letter+135}`, space)), parseData("G135"));
appendFurnitureOption(parseData("F136"), parseData(letterModel + "136"), 2, parseFloat(parseData(`${letter+136}`, space)), parseData("G136"));
if (furnitureBool) {
    appendFurnitureOption(parseData("F137"), parseData(letterModel + "137"), 1, parseFloat(parseData(`${letter+137}`, space)), parseData("G137"));
    appendFurnitureOption(parseData("F138"), parseData(letterModel + "138"), 1, parseFloat(parseData(`${letter+138}`, space)), parseData("G138"));
    appendFurnitureOption(parseData("F139"), parseData(letterModel + "139"), 1, parseFloat(parseData(`${letter+139}`, space)), parseData("G139"));
}
    
$("#furnitureList").append("</div><div class=\"list-option-container margined\"></div>");
$("#furnitureList .list-option-container").last().append(`<h4 class=\"pricelist-header small no-padding\">Світильники</h4><span class=\'notation amount\'>Кількість</span><span class=\'notation\'>Ціна</span>`);
    
if (furnitureBool) {
    appendFurnitureOption(parseData("F141"), parseData(letterModel + "141"), Math.round(space * 0.48), parseFloat(parseData(`${letter+141}`, space)), parseData("G141"));
    appendFurnitureOption(parseData("F142"), parseData(letterModel + "142"), 1, parseFloat(parseData(`${letter+142}`, space)), parseData("G142"));
    appendFurnitureOption(parseData("F144"), parseData(letterModel + "144"), 1, parseFloat(parseData(`${letter+144}`, space)), parseData("G144"));
    appendFurnitureOption(parseData("F146"), parseData(letterModel + "146"), 1, parseFloat(parseData(`${letter+146}`, space)), parseData("G146"));
    appendFurnitureOption(parseData("F147"), parseData(letterModel + "147"), 1, parseFloat(parseData(`${letter+147}`, space)), parseData("G147"));
}
appendFurnitureOption(parseData("F143"), parseData(letterModel + "143"), 2, parseFloat(parseData(`${letter+143}`, space)), parseData("G143"));
appendFurnitureOption(parseData("F145"), parseData(letterModel + "145"), 2, parseFloat(parseData(`${letter+145}`, space)), parseData("G145"));
    
$("#furnitureList").append("</div><div class=\"list-option-container margined\"></div>");
$("#furnitureList .list-option-container").last().append(`<h4 class=\"pricelist-header small no-padding\">Декор</h4><span class=\'notation amount\'>Кількість</span><span class=\'notation\'>Ціна</span>`);
    
    

appendFurnitureOption(parseData("F149"), parseData(letterModel + "149"), amountOfRooms, parseFloat(parseData(`${letter+149}`, space)), parseData("G149"));
appendFurnitureOption(parseData("F150"), parseData(letterModel + "150"), amountOfRooms, parseFloat(parseData(`${letter+150}`, space)), parseData("G150"));
appendFurnitureOption(parseData("F151"), parseData(letterModel + "151"), amountOfRooms, parseFloat(parseData(`${letter+151}`, space)), parseData("G151"));
if (furnitureBool) {
appendFurnitureOption(parseData("F152"), parseData(letterModel + "152"), 1, parseFloat(parseData(`${letter+152}`, space)), parseData("G152"));
}
appendFurnitureOption(parseData("F153"), parseData(letterModel + "153"), amountOfRooms - 1, parseFloat(parseData(`${letter+153}`, space)), parseData("G153"));


$("#furnitureList").append("<div class=\"division-block pricelist\"></div><div class=\"list-option-container summary\"></div>");
$("#furnitureList .list-option-container").last().append(`<span class=\'name summary\'>Всього по меблях:</span><span class=\'list-text summary work\'>${furnitureSum} грн.</span>`);
furnitureSum = furnitureSum + (furnitureSum * 0.03 * (1 + (parseData("S157")/100)));     
    
function appendWorkOption(name, manufacturer, amount, price) {
    if ((amount == 0) || (amount == undefined) || (price == 0) || !(price)) {
        return;
    }
    let $work = $("#workList");
    workSum += price * amount;
    $work.append("<div class=\"option-block\"><div class=\"division-block pricelist\"></div><div class=\"list-option-container\"></div></div>");
    $("#workList .option-block .list-option-container").last().append(`<span class=\'name\'>${name}</span>`);
}

function appendMaterialsOption(name, manufacturer, amount, price, dim) {
    let $materials = $("#workList");
    if (dim == null) {
        workSum += price * amount;
        $materials.append("<div class=\"option-block\"><div class=\"division-block pricelist\"></div><div class=\"list-option-container materials\"></div></div>");
        $("#workList .option-block .list-option-container").last().append(`<span class=\'name\'>${name}</span>`);
        return;
    }
    if ((amount == 0) || (!amount) || !(price)) {
        return;
    }
    
    workSum += price * amount;
    $materials.append("<div class=\"option-block\"><div class=\"division-block pricelist\"></div><div class=\"list-option-container materials\"></div></div>");
    if (!manufacturer) {
        $("#workList .option-block .list-option-container").last().append(`<span class=\'name\'>${name}</span><span class=\'list-text\'>${amount} ${dim} </span>`);
        return;
    }
    console.log(price*amount + " " + name +" "+ workSum);
    $("#workList .option-block .list-option-container").last().append(`<span class=\'name\'>${name}, ${manufacturer}</span><span class=\'list-text\'>${amount} ${dim} </span>`);
}
$("#workList").append("</div><div class=\"list-option-container margined\"></div>");
$("#workList .list-option-container").last().append(`<h4 class=\"pricelist-header small no-padding\"> Опції</h4><span class=\'notation amount\'> </span><span class=\'notation\'>Кількість</span>`);
appendOptionsOption(parseData("F102"), parseData(letterModel + "102"), +floorScreed, space * parseFloat(parseData(`${letter+102}`, space)));
appendOptionsOption(parseData("F103"), parseData(letterModel + "103"), +hygienicShower * parseFloat(amountOfBathrooms), +hygienicShower * parseFloat(parseData(`${letter+103}`, space)));
appendOptionsOption(parseData("F104"), parseData(letterModel + "104"), +heatedFlooring, +heatedFlooring * parseFloat(parseData(`${letter+104}`, space)));
appendOptionsOption(parseData("F105"), parseData(letterModel + "105"), +secondGypsumLayer, space * parseFloat(parseData(`${letter+105}`, space)));
appendOptionsOption(parseData("F106"), parseData(letterModel + "106"), +denoising + mouldings, (+denoising + mouldings) * space * parseFloat(parseData(`${letter+106}`, space)));
if ((+denoising + + gapless + stretch) > 2) {
    appendOptionsOption(parseData("F107"), parseData(letterModel + "107"), +floorScreed, +floorScreed * parseFloat(parseData(`${letter+107}`, space)));
}

appendOptionsOption(parseData("F108"), parseData(letterModel + "108"), +floorScreed, +floorScreed * parseFloat(parseData(`${letter+108}`, space)));
appendOptionsOption(parseData("F113"), parseData(letterModel + "113"), +conditioning, +conditioning * parseFloat(parseData(`${letter+113}`, space)) * (1 + parseFloat(parseData("S113")/100)));
    
$("#workList").append("<div class=\"division-block pricelist\"></div><div class=\"list-option-container summary\"></div>");
$("#workList .list-option-container").last().append(`<span class=\'name summary\'>Всього по будівельній частині:</span><span class=\'list-text summary work\'>${Math.round(workSum)} грн.</span>`);

function appendOptionsOption(name, manufacturer, amount, price) {
    if ((amount == 0) || (!amount) || !(price)) {
        return;
    }
    let $workList = $("#workList");
    workSum += price * amount;
    $workList.append("<div class=\"option-block\"><div class=\"division-block pricelist\"></div><div class=\"list-option-container margined\"></div></div>");
    if (!manufacturer) {
        $("#workList .option-block .list-option-container margined").last().append(`<span class=\'name\'>${name}</span><span class=\'list-text\'>${amount}</span>`);
        return;
    }
    $("#workList .option-block .list-option-container margined").last().append(`<span class=\'name\'>${name}, ${manufacturer}</span><span class=\'list-text\'>${amount} шт.</span>`);
}

function appendFurnitureOption(name, manufacturer, amount, price, dim) {
    
    if ((amount == 0) || (!amount) || !(price)) {
        return;
    }
    furnitureSum += price * (1 + parseFloat(parseData("S157") / 100)) * amount;
    $furniture.append("<div class=\"option-block\"><div class=\"division-block pricelist\"></div><div class=\"list-option-container\"></div></div>");
    if (!manufacturer) {
        $("#materialsList .option-block .list-option-container").last().append(`<span class=\'name\'>${name}</span><span class=\'list-text\'>${amount} ${dim} </span>`);
        return;
    }
    $("#furnitureList .option-block .list-option-container").last().append(`<span class=\'name\'>${name}, ${manufacturer}</span><span class=\'list-text amount\'>${amount} ${dim}</span><span class=\'list-text\'>${Math.round(price * amount * (1 + parseFloat(parseData("S157")/100)))} грн.</span>`);
}

function appendOptionsOption(name, manufacturer, amount, price, dim) {
    if ((amount == 0) || (!amount) || !(price)) {
        return;
    }
    let $materials = $("#workList");
    workSum += price * amount;
    $materials.append("<div class=\"option-block\"><div class=\"division-block pricelist\"></div><div class=\"list-option-container materials\"></div></div>");
    if (!manufacturer) {
        $("#workList .option-block .list-option-container").last().append(`<span class=\'name\'>${name}</span><span class=\'list-text\'>${amount}</span>`);
        return;
    }
    $("#workList .option-block .list-option-container").last().append(`<span class=\'name\'>${name}, ${manufacturer}</span><span class=\'list-text\'>${amount}</span>`);
}

    
$("#materialsList").append("<div class=\"division-block pricelist\"></div><div class=\"list-option-container summary\"></div>");
$("#materialsList .list-option-container").last().append(`<span class=\'name summary\'>Всього по будівельній частині:</span><span class=\'list-text summary work\'>${Math.round(workSum)} грн.</span>`);
if (!appliancesBoolTotal) {
    $(".comfy-section").css("display", "none");
    $("#appliancesListTotal").css("display", "none");
}
if (!!appliancesBoolTotal) {
    let $appliances = $("#appliancesList");
    let $appliancesList = $("#appliancesListTotal");
    var sum = 0;
    if (appliancesCookie == "gorenje") {
        let element = appliances.gorenje;
        let i = 0;

        for (let key in element) {
            $appliances.append("<div class=\"option-block\"><div class=\"division-block white\"></div><div class=\"list-option-container appliances\"></div></div>");
            $("#appliancesList .option-block .list-option-container.appliances").last().append(`<span class=\'name white\'>${parseData("F" + (161 + i))} ${parseData("E" + (161 + i))}</span><span class=\'list-text white\'>${parseFloat(parseData("D"+ (161+i)))} грн.</span>`);
            $appliancesList.append("<div class=\"option-block\"><div class=\"division-block pricelist\"></div><div class=\"list-option-container\"></div></div>");
            $("#appliancesListTotal .option-block .list-option-container").last().append(`<span class=\'name\'>${parseData("F" + (161 + i))} ${parseData("E" + (161 + i))}</span><span class=\'list-text amount\'>1 шт.</span><span class=\'list-text\'>${parseFloat(parseData("D"+ (161+i)))} грн.</span>`);
            sum += parseFloat(parseData("D" + (161 + i)));
            i++;
        }

    } else if (appliancesCookie == "bosch") {
        let element = appliances.bosch;
        let i = 0;
        for (let key in element) {
            $appliances.append("<div class=\"option-block\"><div class=\"division-block white\"></div><div class=\"list-option-container appliances\"></div></div>");
            $("#appliancesList .option-block .list-option-container.appliances").last().append(`<span class=\'name white\'>${parseData("F" + (175 + i))} ${parseData("E" + (175 + i))}</span><span class=\'list-text white\'>${parseFloat(parseData("D"+ (175+i)))} грн.</span>`);
            $appliancesList.append("<div class=\"option-block\"><div class=\"division-block pricelist\"></div><div class=\"list-option-container\"></div></div>");
            $("#appliancesListTotal .option-block .list-option-container").last().append(`<span class=\'name\'>${parseData("F" + (175 + i))} ${parseData("E" + (175 + i))}</span><span class=\'list-text amount\'>1 шт.</span><span class=\'list-text\'>${parseFloat(parseData("D"+ (175+i)))} грн.</span>`);
            sum += parseFloat(parseData("D" + (175 + i)));
            i++;
        }
    } else if (appliancesCookie == "miele") {
        let element = appliances.miele;
        let i = 0;
        for (let key in element) {
            $appliances.append("<div class=\"option-block\"><div class=\"division-block white\"></div><div class=\"list-option-container appliances\"></div></div>");
            $("#appliancesList .option-block .list-option-container.appliances").last().append(`<span class=\'name white\'>${parseData("F" + (190 + i))} ${parseData("E" + (190 + i))}</span><span class=\'list-text white\'>${parseFloat(parseData("D"+ (190+i)))} грн.</span>`);
            $appliancesList.append("<div class=\"option-block\"><div class=\"division-block pricelist\"></div><div class=\"list-option-container\"></div></div>");
            $("#appliancesListTotal .option-block .list-option-container").last().append(`<span class=\'name\'>${parseData("F" + (190 + i))} ${parseData("E" + (190 + i))}</span><span class=\'list-text amount\'>1 шт.</span><span class=\'list-text\'>${parseFloat(parseData("D"+ (190+i)))} грн.</span>`);
            sum += parseFloat(parseData("D" + (190 + i)));
            i++;
        }
    }
    $appliancesList.append("<div class=\"division-block pricelist\"></div><div class=\"list-option-container summary\"></div>");
    $("#appliancesListTotal .list-option-container").last().append(`<span class=\'name summary\'>Всього по техніці:</span><span class=\'list-text summary work\'>${sum} грн.</span>`);
    $("#appliancesListTotal .list-option-container").last().append(`<span class=\'name summary\'><b>Всього по техніці, зі знижкою</b>:</span><span class=\'list-text summary work\'>${Math.round(sum * 0.9)} грн.</span>`);
    i = 0;
}
if (!furnitureBool) {
    $("#kitchenSection").css("display", "none");
}
let styleLetter = "J";
if (style == "cozy") {
    styleLetter = "J";
} else if (style == "japandi") {
    styleLetter = "L";
} else if (style == "fusion") {
    styleLetter = "N";
} else if (style == "modern") {
    styleLetter = "P";
} else if (style == "neoclassic") {
    styleLetter = "R";
}


let kitchenMontage = parseFloat(parseData(`${letter + 121}`));
let kitchenDelivery = parseFloat(parseData(`${letter + 122}`));
let kitchenPrice = parseFloat(parseData(`${letter + 120}`));
let kitchenTotal = kitchenMontage + kitchenPrice + kitchenDelivery;
$("#kitchenPrice").html(kitchenPrice + " грн.");
$("#kitchenMontage").html(kitchenMontage + " грн.");
$("#kitchenDelivery").html(kitchenDelivery + " грн.");
$("#kitchenTotal, #kitchenTotalPrice").html(kitchenTotal + " грн");
$("#kitchenTotalPriceDiscount").html(kitchenTotal * 0.9);
    $("#totalPriceTotal").html(Math.round(furnitureSum + workSum + sum) + " грн. *");
};