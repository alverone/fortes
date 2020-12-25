    let style = "cozy";
    let appliancesCookie = "";
    $("#space").val(50);
    let space = +$("#space").val(),
        amountOfRooms = +$("#amountOfRooms").val(),
        amountOfBathrooms = +$("#amountOfBathrooms").val(),
        furnitureBool = +$("#furnitureBool").is(":checked"),
        appliancesBoolTotal = +$("#appliancesBool").is(":checked"),
        bathtub = +$("#bathtub").is(":checked"),
        shower = +$("#shower").is(":checked"),
        optionsBool = {
            hygienicShower: +$("#hygienicShower").is(":checked"),
            secondGypsumLayer: +$("#secondGypsumLayer").is(":checked"),
            floorScreed: +$("#floorscreed").is(":checked"),
            heatedFlooring: +$("#heatedFlooring").val(),
            denoising: +$("#noise").is(":checked"),
            entranceDoors: +$("#doors").is(":checked"),
            conditioning: +$("#conditioning").val(),
        },
        ceilingBool = {
            ceiling1: +$("#ceiling1").is(":checked"),
            ceiling2: +$("#ceiling2").is(":checked"),
            ceiling3: +$("#ceiling3").is(":checked"),
        },
        flooringBool = {
            laminate: +$("#laminat").is(":checked"),
            vinyl: +$("#vynil").is(":checked"),
            parquet: +$("#parket").is(":checked"),
        },
        appliancesBool = {
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
            let rawData = data.feed.entry.find((entry) => entry.title.$t == range).gs$cell.inputValue;
            if (rawData.includes("=IF")) {
                while (rawData[rawData.length - 1] == ")") {
                    rawData = rawData.substring(0, rawData.length - 1);
                }
                let formulaData = rawData.split("IF");
                formulaData = formulaData.map(item => item.split(";"));
                for (let i = 1; i < formulaData.length; i++) {
                    value = parseFloat(formulaData[i][1].replace(",", "."));

                    let item = formulaData[i][0].slice(1, formulaData[i][0].replace(",", ".").length).split("=");
                    threshold = formulaData[i][0].slice(1, formulaData[i][0].replace(",", ".").length).split("=")[1];
                    if (item[0].indexOf(">") > -1) {
                        sign = morethan;
                    } else if (item[0].indexOf("<") > -1) {
                        sign = lessthan;
                    } else {
                        sign = equals;
                    }
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
                }
                return parseFloat(price);
            }
            if (isFinite(parseFloat(data.feed.entry.find((entry) => entry.title.$t == range).content.$t.replace(",", ".")))) {
                let result = data.feed.entry.find((entry) => entry.title.$t == range).content.$t.replace(",", ".");
                return parseFloat(result.replace(",", "."));
            }
            return parseFloat(data.feed.entry.find((entry) => entry.title.$t == range).content.$t);
        }

        function handleFurniture(furniture, FurnitureMarkup) {
            let element = "",
                kitchenTotal = 0,
                livingroomTotal = 0,
                bedroomTotal = 0,
                lightingTotal = 0,
                decorationsTotal = 0;
            if (style == "modern") {
                element = furniture.modern;
            } else if (style == "fusion") {
                element = furniture.fusion;
            } else if (style == "cozy") {
                element = furniture.cozy;
            } else if (style == "japandi") {
                element = furniture.japandi;
            } else if (style == "neoclassic") {
                element = furniture.neoclassic;
            }
            kitchenTotal = (element.kitchen + element.kitchenDelivery + element.kitchenMontage + element.kitchenSink + element.kitchenSinkMixer + element.table + (element.chairs * 4) + element.otherKitchenFurniture) * furnitureBool;
            livingroomTotal = (element.sofa + element.livingroomChair) * furnitureBool;
            bedroomTotal = element.bed + element.matress + (element.cupboard + element.bedChair + element.mirror) * furnitureBool + element.shelves * 2;
            lightingTotal = ((element.spotlight * (0.48 * space)) + element.kitchenWallLight + element.livingroomFloorLight + element.hangingLight)*furnitureBool + element.kitchenCeilingLight * 2 + element.bedsideLight * 2 + element.chandelier;
            decorationsTotal = element.jalousie * furnitureBool + element.coffeeTable * (amountOfRooms - 1) + (element.cornice + element.tulle + element.curtains) * amountOfRooms;
            let showPrice = ((element.kitchen + element.kitchenDelivery + element.kitchenMontage + element.kitchenSink + element.kitchenSinkMixer + element.table + (element.chairs * 4) + element.otherKitchenFurniture) + (element.sofa + element.livingroomChair) + (element.cupboard + element.bedChair + element.mirror) + (((element.spotlight * (0.48 * space)) + element.kitchenWallLight + element.livingroomFloorLight + element.hangingLight)) + (element.jalousie));
            let furnitureTotal = (kitchenTotal + livingroomTotal + bedroomTotal + lightingTotal + decorationsTotal)*(1 + (parseData("S157") / 100));
            if (furnitureBool) {
                furnitureTotal = furnitureTotal + furnitureTotal * 0.03 * 1.26;   
            }
            $("#furnitureBool").siblings(".label").html(`Так <span class=\"grey\">+${Math.round(showPrice / (28.5 * space))}$/м²</span>`);
            return furnitureTotal;
        }

        function handleWork(work, months) {
            let ceilingTotal = 0,
                paintingTotal = 0,
                flooringTotal = 0,
                plinthTotal = 0,
                generalTotal = 0,
                mainWorks = 0,
                element = work;
            mainWorks = (element.electricity + element.waterSupply + element.canalisation + (element.ventilation * amountOfBathrooms)) * space;
            generalTotal = (element.kafel * amountOfBathrooms * space) + (element.bathtub * bathtub) + (element.shower * shower) + element.gypsumMontage * space + element.doorInstallation * (amountOfBathrooms + amountOfRooms);
            ceilingTotal = (element.ceiling1 * ceilingBool.ceiling1 + element.ceiling2 * ceilingBool.ceiling2 + element.ceiling3 * ceilingBool.ceiling3) * space;
            flooringTotal = (element.laminate * flooringBool.laminate + element.vinyl * flooringBool.vinyl + element.parquet * flooringBool.parquet) * space;
            paintingTotal = element.wallPainting * space + element.ceilingPainting * ceilingBool.ceiling3 * space + element.mouldings;
            plinthTotal = (element.plinth + element.plinthHidden) * space;
            let workTotal = (generalTotal + ceilingTotal + flooringTotal + paintingTotal + plinthTotal);
            workTotal += workTotal * 0.022 + ((space * 100) + (parseData("G8", space) * 2 * 1200) + 3000) + mainWorks;
            return workTotal;
        }

        function handleMaterials(materials) {
            let element = "",
                generalTotal = 0,
                bathroomTotal = 0,
                flooringTotal = 0,
                materialsTotal = 0;
            if (style == "modern") {
                element = materials.modern;
            } else if (style == "fusion") {
                element = materials.fusion;
            } else if (style == "cozy") {
                element = materials.cozy;
            } else if (style == "japandi") {
                element = materials.japandi;
            } else if (style == "neoclassic") {
                element = materials.neoclassic;
            }
            generalTotal = element.door * (amountOfBathrooms + amountOfRooms) + element.kafel * amountOfBathrooms * 35 + 0.66 * element.corniceWall * space + 0.66 * element.corniceCeiling * space + 0.59 * element.plinth * space + parseData("H77", space) * element.electricalFurniture;
            bathroomTotal = amountOfBathrooms * (element.sink + element.stand + element.waterMixer + element.bathShelf) + element.bathtub * bathtub + (element.shower + element.ladder) * shower + (bathtub + shower) * element.bathShowerMixer + amountOfBathrooms * element.toilet + (element.towelHolder + element.bathMirror) * amountOfBathrooms;
            let vinylAmount, laminateAmount, parquetAmount;
            if (space < 100) {
                vinylAmount = parquetAmount = laminateAmount = space - (amountOfBathrooms * 7);
            } else if (space >= 100) {
                laminateAmount = vinylAmount = parquetAmount = space - (amountOfBathrooms * 10);
            }
            flooringTotal = element.laminate * laminateAmount * flooringBool.laminate + element.quartzvinyl * vinylAmount * flooringBool.vinyl + element.parquet * parquetAmount * flooringBool.parquet;
            materialsTotal = generalTotal + bathroomTotal + flooringTotal + space * 100 * furnitureBool;
            return (materialsTotal);
        }

        function handleOptions(options) {
            let element = "",
                optionsTotal = 0;
            if (style == "modern") {
                element = options.modern;
            } else if (style == "fusion") {
                element = options.fusion;
            } else if (style == "cozy") {
                element = options.cozy;
            } else if (style == "japandi") {
                element = options.japandi;
            } else if (style == "neoclassic") {
                element = options.neoclassic;
            }
            let denoising1 = 0,
                denoising2 = 0;
            let floorScreed = optionsBool.floorScreed * element.floorScreed * space;
            let shower = (amountOfBathrooms * element.hygienicShower * optionsBool.hygienicShower);
            let heatedFlooring = optionsBool.heatedFlooring * element.heatedFlooring;
            let secondGypsumLayer = element.partitions * optionsBool.secondGypsumLayer * space;
            if ((optionsBool.denoising + ceilingBool.ceiling3 ) > 1) {
                denoising1 = element.gypsumCeilingDenoising * space;
            }
            if ((optionsBool.denoising + ceilingBool.ceiling1 + ceilingBool.ceiling2 ) > 1) {
                denoising2 = element.tensionCeilingDenoising * space;
            }
            let denoising3 = element.denoising * optionsBool.denoising * space;
            let conditioning = 0;
            if (optionsBool.conditioning) {
                conditioning = element.conditioner * optionsBool.conditioning * (1 + parseData("S113") / 100) * 1.05 + element.conditioningSplit * space;
            }
            let entranceDoors = optionsBool.entranceDoors * (element.entranceDoor + element.entranceDoorMontage);
            $("#floorscreed").siblings(".label").html(`Стяжка підлоги <span class=\"grey\">+${Math.round(element.floorScreed / (28.5))}$/м²</span>`);
            $("#noise").siblings(".label").html(`Шумоізоляція <span class=\"grey\">+${Math.round(((element.denoising * space) + (element.tensionCeilingDenoising * space * (ceilingBool.ceiling1 + ceilingBool.ceiling2)) + (element.gypsumCeilingDenoising * space * ceilingBool.ceiling3)) / (28.5*50))}$/м²</span>`);
            $("#doors").siblings(".label").html(`Вхідні двері <span class=\"grey\">+${Math.round((element.entranceDoor + element.entranceDoorMontage) / (space * 28.5))}$/м²</span>`);
            $("#secondGypsumLayer").siblings(".label").html(`Другий шар гіпсокартону <span class=\"grey\">+${Math.round(element.partitions / (28.5))}$/м²</span>`);
            $("#hygienicShower").siblings(".label").html(`Гігієнічний душ <span class=\"grey\">+${Math.round((amountOfBathrooms * element.hygienicShower) / (space * 28.5))}$/м²</span>`);
            optionsTotal = floorScreed + shower + heatedFlooring + secondGypsumLayer + denoising1 + denoising2 + denoising3 + conditioning + entranceDoors;
            return optionsTotal;
        }

        function handleAppliances(appliances) {
            let element = "";
            if (appliancesBool.standardGorenje) {
                element = appliances.gorenje;
            } else if (appliancesBool.standardBosch) {
                element = appliances.bosch;
            } else if (appliancesBool.premiumMiele) {
                element = appliances.miele;
            }
            let sum = 0,
                i = 1;
            if (appliancesBoolTotal) {
                            for (let key in element) {
                sum += +element[key];
                i++;
            }
            i = 1;
            }
            let gorenjePrice = 0,
                boschPrice = 0,
                mielePrice = 0;
            for (let nkey in appliances.gorenje) {
                gorenjePrice += appliances.gorenje[nkey];
                i++;
            }
            i = 1;
            for (let ikey in appliances.bosch) {
                boschPrice += appliances.bosch[ikey];
                i++;
            }
            i = 1;
            for (let jkey in appliances.miele) {
                mielePrice += appliances.miele[jkey];
                i++;
            }
            $(".choice[data-appliances='gorenje']").children(".grey").html(`${Math.round(gorenjePrice/(space*28.5))}$/м²`);
            $(".choice[data-appliances='bosch']").children(".grey").html(`${Math.round(boschPrice/(space*28.5))}$/м²`);
            $(".choice[data-appliances='miele']").children(".grey").html(`${Math.round(mielePrice/(space*28.5))}$/м²`);
            sum += i * parseFloat(parseData("G36"));
            return (sum * appliancesBoolTotal);
        }

        function handleTotal() {
            if (style == "modern") {
                letter = "O";
            } else if (style == "fusion") {
                letter = "M";
            } else if (style == "cozy") {
                letter = "I";
            } else if (style == "japandi") {
                letter = "K";
            } else if (style == "neoclassic") {
                letter = "Q";
            }
            let work = {};
            let workArrNum = [42, 43, 44, 45, 46, 47, 48, 49, 50, 52, 53, 54, 56, 57, 58, 60, 61, 62, 64, 65];
            let workPropArr = ["waterSupply", "canalisation", "ventilation", "electricity", "shower", "bathtub", "gypsumMontage", "kafel", "doorInstallation", "wallPainting", "ceilingPainting", "mouldings", "ceiling1", "ceiling2", "ceiling3", "laminate", "vinyl", "parquet", "plinth", "plinthHidden"];
            for (let i = 0; i < workPropArr.length; i++) {
                work[`${workPropArr[i]}`] = parseData(`${letter}${workArrNum[i]}`, space);
            }
            
            let options = {};
            let optionsArrNum = [102, 103, 104, 105, 106, 107, 108, 109, 110, 112, 113];
            let optionsPropArr = ["floorScreed", "hygienicShower", "heatedFlooring", "partitions", "gypsumCeilingDenoising", "tensionCeilingDenoising", "denoising", "entranceDoor", "entranceDoorMontage", "conditioningSplit", "conditioner"];
            for (let i = 0; i < optionsPropArr.length; i++) {
                work[`${optionsPropArr[i]}`] = parseData(`${letter}${optionsArrNum[i]}`, space);
            }
            
            let materials = {
                cozy: {
                    door: parseFloat(parseData("I72")),
                    kafel: parseFloat(parseData("I73")),
                    corniceWall: parseFloat(parseData("I74")),
                    corniceCeiling: parseFloat(parseData("I75")),
                    plinth: parseFloat(parseData("I76")),
                    electricalFurniture: parseFloat(parseData("I77")),
                    sink: parseFloat(parseData("I79")),
                    stand: parseFloat(parseData("I80")),
                    waterMixer: parseFloat(parseData("I81")),
                    bathShelf: parseFloat(parseData("I82")),
                    bathtub: parseFloat(parseData("I83")),
                    ladder: parseFloat(parseData("I84")),
                    shower: parseFloat(parseData("I85")),
                    bathShowerMixer: parseFloat(parseData("I86")),
                    toilet: parseFloat(parseData("I87")),
                    towelHolder: parseFloat(parseData("I88")),
                    bathMirror: parseFloat(parseData("I89")),
                    laminate: parseFloat(parseData("I91")),
                    quartzvinyl: parseFloat(parseData("I92")),
                    parquet: parseFloat(parseData("I93")),
                    delivery: parseFloat(parseData("I94")),
                },
                japandi: {
                    door: parseFloat(parseData("K72")),
                    kafel: parseFloat(parseData("K73")),
                    corniceWall: parseFloat(parseData("K74")),
                    corniceCeiling: parseFloat(parseData("I75")),
                    plinth: parseFloat(parseData("K76")),
                    electricalFurniture: parseFloat(parseData("K77")),
                    sink: parseFloat(parseData("K79")),
                    stand: parseFloat(parseData("K80")),
                    waterMixer: parseFloat(parseData("K81")),
                    bathShelf: parseFloat(parseData("K82")),
                    bathtub: parseFloat(parseData("K83")),
                    ladder: parseFloat(parseData("K84")),
                    shower: parseFloat(parseData("K85")),
                    bathShowerMixer: parseFloat(parseData("K86")),
                    toilet: parseFloat(parseData("K87")),
                    towelHolder: parseFloat(parseData("K88")),
                    bathMirror: parseFloat(parseData("K89")),
                    laminate: parseFloat(parseData("K91")),
                    quartzvinyl: parseFloat(parseData("K92")),
                    parquet: parseFloat(parseData("K93")),
                    delivery: parseFloat(parseData("K94")),
                },
                fusion: {
                    door: parseFloat(parseData("M72")),
                    kafel: parseFloat(parseData("M73")),
                    corniceWall: parseFloat(parseData("M74")),
                    corniceCeiling: parseFloat(parseData("M75")),
                    plinth: parseFloat(parseData("M76")),
                    electricalFurniture: parseFloat(parseData("M77")),
                    sink: parseFloat(parseData("M79")),
                    stand: parseFloat(parseData("M80")),
                    waterMixer: parseFloat(parseData("M81")),
                    bathShelf: parseFloat(parseData("M82")),
                    bathtub: parseFloat(parseData("M83")),
                    ladder: parseFloat(parseData("M84")),
                    shower: parseFloat(parseData("M85")),
                    bathShowerMixer: parseFloat(parseData("M86")),
                    toilet: parseFloat(parseData("M87")),
                    towelHolder: parseFloat(parseData("M88")),
                    bathMirror: parseFloat(parseData("M89")),
                    laminate: parseFloat(parseData("M91")),
                    quartzvinyl: parseFloat(parseData("M92")),
                    parquet: parseFloat(parseData("M93")),
                    delivery: parseFloat(parseData("M94")),
                },
                modern: {
                    door: parseFloat(parseData("O72")),
                    kafel: parseFloat(parseData("O73")),
                    corniceWall: parseFloat(parseData("O74")),
                    corniceCeiling: parseFloat(parseData("O75")),
                    plinth: parseFloat(parseData("O76")),
                    electricalFurniture: parseFloat(parseData("O77")),
                    sink: parseFloat(parseData("O79")),
                    stand: parseFloat(parseData("O80")),
                    waterMixer: parseFloat(parseData("O81")),
                    bathShelf: parseFloat(parseData("O82")),
                    bathtub: parseFloat(parseData("O83")),
                    ladder: parseFloat(parseData("O84")),
                    shower: parseFloat(parseData("O85")),
                    bathShowerMixer: parseFloat(parseData("O86")),
                    toilet: parseFloat(parseData("O87")),
                    towelHolder: parseFloat(parseData("O88")),
                    bathMirror: parseFloat(parseData("O89")),
                    laminate: parseFloat(parseData("O91")),
                    quartzvinyl: parseFloat(parseData("O92")),
                    parquet: parseFloat(parseData("O93")),
                    delivery: parseFloat(parseData("O94")),
                },
                neoclassic: {
                    door: parseFloat(parseData("Q72")),
                    kafel: parseFloat(parseData("Q73")),
                    corniceWall: parseFloat(parseData("Q74")),
                    corniceCeiling: parseFloat(parseData("Q75")),
                    plinth: parseFloat(parseData("Q76")),
                    electricalFurniture: parseFloat(parseData("Q77")),
                    sink: parseFloat(parseData("Q79")),
                    stand: parseFloat(parseData("Q80")),
                    waterMixer: parseFloat(parseData("Q81")),
                    bathShelf: parseFloat(parseData("Q82")),
                    bathtub: parseFloat(parseData("Q83")),
                    ladder: parseFloat(parseData("Q84")),
                    shower: parseFloat(parseData("Q85")),
                    bathShowerMixer: parseFloat(parseData("Q86")),
                    toilet: parseFloat(parseData("Q87")),
                    towelHolder: parseFloat(parseData("Q88")),
                    bathMirror: parseFloat(parseData("Q89")),
                    laminate: parseFloat(parseData("Q91")),
                    quartzvinyl: parseFloat(parseData("Q92")),
                    parquet: parseFloat(parseData("Q93")),
                    delivery: parseFloat(parseData("Q94")),
                },
            };
            let furniture = {
                cozy: {
                    kitchen: parseData("I120"),
                    kitchenMontage: parseData("I121"),
                    kitchenDelivery: parseData("I122"),
                    kitchenSink: parseData("I123"),
                    kitchenSinkMixer: parseData("I124"),
                    table: parseData("I125"),
                    chairs: parseData("I126"),
                    otherKitchenFurniture: parseData("I127"),
                    sofa: parseData("I131"),
                    livingroomChair: parseData("I132"),
                    bed: parseData("I134"),
                    matress: parseData("I135"),
                    shelves: parseData("I136"),
                    cupboard: parseData("I137"),
                    bedChair: parseData("I138"),
                    mirror: parseData("I139"),
                    spotlight: parseData("I141"),
                    chandelier: parseData("I142"),
                    bedsideLight: parseData("I143"),
                    kitchenWallLight: parseData("I144"),
                    kitchenCeilingLight: parseData("I145"),
                    livingroomFloorLight: parseData("I146"),
                    hangingLight: parseData("I147"),
                    curtains: parseData("I149"),
                    tulle: parseData("I150"),
                    cornice: parseData("I151"),
                    jalousie: parseData("I152"),
                    coffeeTable: parseData("I153"),
                },
                japandi: {
                    kitchen: parseData("K120"),
                    kitchenMontage: parseData("K121"),
                    kitchenDelivery: parseData("K122"),
                    kitchenSink: parseData("K123"),
                    kitchenSinkMixer: parseData("K124"),
                    table: parseData("K125"),
                    chairs: parseData("K126"),
                    otherKitchenFurniture: parseData("K127"),
                    sofa: parseData("K131"),
                    livingroomChair: parseData("K132"),
                    bed: parseData("K134"),
                    matress: parseData("K135"),
                    shelves: parseData("K136"),
                    cupboard: parseData("K137"),
                    bedChair: parseData("K138"),
                    mirror: parseData("K139"),
                    spotlight: parseData("K141"),
                    chandelier: parseData("K142"),
                    bedsideLight: parseData("K143"),
                    kitchenWallLight: parseData("K144"),
                    kitchenCeilingLight: parseData("K145"),
                    livingroomFloorLight: parseData("K146"),
                    hangingLight: parseData("K147"),
                    curtains: parseData("K149"),
                    tulle: parseData("K150"),
                    cornice: parseData("K151"),
                    jalousie: parseData("K152"),
                    coffeeTable: parseData("K153"),
                },
                fusion: {
                    kitchen: parseData("M120"),
                    kitchenMontage: parseData("M121"),
                    kitchenDelivery: parseData("M122"),
                    kitchenSink: parseData("M123"),
                    kitchenSinkMixer: parseData("M124"),
                    table: parseData("M125"),
                    chairs: parseData("M126"),
                    otherKitchenFurniture: parseData("M127"),
                    sofa: parseData("M131"),
                    livingroomChair: parseData("M132"),
                    bed: parseData("M134"),
                    matress: parseData("M135"),
                    shelves: parseData("M136"),
                    cupboard: parseData("M137"),
                    bedChair: parseData("M138"),
                    mirror: parseData("M139"),
                    spotlight: parseData("M141"),
                    chandelier: parseData("M142"),
                    bedsideLight: parseData("M143"),
                    kitchenWallLight: parseData("M144"),
                    kitchenCeilingLight: parseData("M145"),
                    livingroomFloorLight: parseData("M146"),
                    hangingLight: parseData("M147"),
                    curtains: parseData("M149"),
                    tulle: parseData("M150"),
                    cornice: parseData("M151"),
                    jalousie: parseData("M152"),
                    coffeeTable: parseData("M153"),
                },
                modern: {
                    kitchen: parseData("O120"),
                    kitchenMontage: parseData("O121"),
                    kitchenDelivery: parseData("O122"),
                    kitchenSink: parseData("O123"),
                    kitchenSinkMixer: parseData("O124"),
                    table: parseData("O125"),
                    chairs: parseData("O126"),
                    otherKitchenFurniture: parseData("O127"),
                    sofa: parseData("O131"),
                    livingroomChair: parseData("O132"),
                    bed: parseData("O134"),
                    matress: parseData("O135"),
                    shelves: parseData("O136"),
                    cupboard: parseData("O137"),
                    bedChair: parseData("O138"),
                    mirror: parseData("O139"),
                    spotlight: parseData("O141"),
                    chandelier: parseData("O142"),
                    bedsideLight: parseData("O143"),
                    kitchenWallLight: parseData("O144"),
                    kitchenCeilingLight: parseData("O145"),
                    livingroomFloorLight: parseData("O146"),
                    hangingLight: parseData("O147"),
                    curtains: parseData("O149"),
                    tulle: parseData("O150"),
                    cornice: parseData("O151"),
                    jalousie: parseData("O152"),
                    coffeeTable: parseData("O153"),
                },
                neoclassic: {
                    kitchen: parseData("Q120"),
                    kitchenMontage: parseData("Q121"),
                    kitchenDelivery: parseData("Q122"),
                    kitchenSink: parseData("Q123"),
                    kitchenSinkMixer: parseData("Q124"),
                    table: parseData("Q125"),
                    chairs: parseData("Q126"),
                    otherKitchenFurniture: parseData("Q127"),
                    sofa: parseData("Q131"),
                    livingroomChair: parseData("Q132"),
                    bed: parseData("Q134"),
                    matress: parseData("Q135"),
                    shelves: parseData("Q136"),
                    cupboard: parseData("Q137"),
                    bedChair: parseData("Q138"),
                    mirror: parseData("Q139"),
                    spotlight: parseData("Q141"),
                    chandelier: parseData("Q142"),
                    bedsideLight: parseData("Q143"),
                    kitchenWallLight: parseData("Q144"),
                    kitchenCeilingLight: parseData("Q145"),
                    livingroomFloorLight: parseData("Q146"),
                    hangingLight: parseData("Q147"),
                    curtains: parseData("Q149"),
                    tulle: parseData("Q150"),
                    cornice: parseData("Q151"),
                    jalousie: parseData("Q152"),
                    coffeeTable: parseData("Q153"),
                },
            };
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
            let AccessorriesMarkup = parseData("S99"),
                FurnitureMarkup = parseData("S157"),
                ClimaticMarkup = parseData("S113");
            let months = parseFloat(parseData("G8", space));
            let result = (handleAppliances(appliances) * 0.9 + handleFurniture(furniture, FurnitureMarkup) + ((handleMaterials(materials) + handleWork(work, months)) * (1 + (AccessorriesMarkup / 100))) + handleOptions(options)) / (28.5 * space);
            return result;
        }

        $("input").on("input", function () {
            space = +$("#space").val();
            amountOfRooms = +$("#amountOfRooms").val();
            amountOfBathrooms = +$("#amountOfBathrooms").val();
            optionsBool.hygienicShower = +$("#hygienicShower").is(":checked");
            optionsBool.secondGypsumLayer = +$("#secondGypsumLayer").is(":checked");
            optionsBool.heatedFlooring = +$("#heatedFlooring").val();
            furnitureBool = +$("#furnitureBool").is(":checked");
            bathtub = +$("#bathtub").is(":checked");
            shower = +$("#shower").is(":checked");
            appliancesBoolTotal = +$("#appliancesBool").is(":checked");
            optionsBool.floorScreed = +$("#floorscreed").is(":checked");
            optionsBool.denoising = +$("#noise").is(":checked");
            optionsBool.entranceDoors = +$("#doors").is(":checked");
            optionsBool.conditioning = +$("#conditioning").val();
            ceilingBool.ceiling1 = +$("#ceiling1").is(":checked");
            ceilingBool.ceiling2 = +$("#ceiling2").is(":checked");
            ceilingBool.ceiling3 = +$("#ceiling3").is(":checked");
            flooringBool.laminate = +$("#laminat").is(":checked");
            flooringBool.vinyl = +$("#vynil").is(":checked");
            flooringBool.parquet = +$("#parket").is(":checked");
            returnValue(space);
        });
        $("#space").on("input", function (e) {
            $(this).val($(this).val().match(/\d*\.?\d+/));
            space = +$("#space").val();
            returnValue(space);
            if ((space == 0) || (amountOfRooms == 0)) {
                $("#total").html(0);
                $("#totalWhole").html(0);
                return;
            }
        });
        $("#space").on("focusout", function (e) {
            if ((parseInt($(this).val()) < 30) || (!$(this).val())) {
                $(this).val(30);
                space = +$("#space").val();
                returnValue(30);
            }
        });
        $(".increment-field .increment").on("click", function (e) {
            e.preventDefault();
            $(this)
                .siblings(".increment-input")
                .val(
                    parseInt($(this).siblings(".increment-input").val()) +
                    parseInt($(this).val())
                );

            if ($(this).siblings(".increment-input").val() === "0") {
                if ($(this).val() === "1") {
                    $(this).siblings($(".increment")).toggleClass("disabled");
                } else {
                    $(this).toggleClass("disabled");
                }
            } else if (parseInt($(this).siblings(".increment-input").val()) > 0) {
                $(this).siblings(".disabled").toggleClass("disabled");
            }
            space = +$("#space").val();
            amountOfRooms = +$("#amountOfRooms").val();
            amountOfBathrooms = +$("#amountOfBathrooms").val();
            optionsBool.heatedFlooring = +$("#heatedFlooring").val();
            optionsBool.conditioning = +$("#conditioning").val();
            if (amountOfRooms == 0) {
                $("#total").html(0);
                $("#totalWhole").html(0);
                return;
            }
            returnValue(space);
        });
        $(".calculator-tab").on("click", function (e) {
            number = parseInt($(this).attr("data-slider-index"));
            if (number == 0) {
                style = "cozy";
            } else if (number == 2) {
                style = "fusion";
            } else if (number == 1) {
                style = "japandi";
            } else if (number == 3) {
                style = "modern";
            } else if (number == 4) {
                style = "neoclassic";
            }
            $(".calculator-slide").toggle(false);
            $(".calculator-slide.main").toggle(true);
            $(`.calculator-slide.` + style).toggle(true);
            returnValue(space);
        });
        $("#calculateHeader")
        $("#calculate").on("click", function () {
            let slideNumber = parseInt($(".slider-tab.w--current").data("slider-index"));
            if (slideNumber == 0) {
                style = "cozy";
            } else if (slideNumber == 2) {
                style = "fusion";
            } else if (slideNumber == 1) {
                style = "japandi";
            } else if (slideNumber == 3) {
                style = "modern";
            } else if (slideNumber == 4) {
                style = "neoclassic";
            }
            $(".calculator-tab").removeClass("w--current");
            $(".calculator-tab[data-slider-index='" + slideNumber + "']").addClass("w--current");
            returnValue(space);
            $(".calculator-slider-side").slick("slickGoTo", 0);
            $(".calculator-slide").toggle(false);
            $(".calculator-slide.main").toggle(true);
            $(".calculator-slide." + style).toggle(true);
            $(".calculator-slider-option.active").removeClass("active");
            $(".calculator-slider-option:eq(0)").addClass("active");
        });
        $(".calculatecozy").on("click", function () {
            style = "cozy";
            $("calculator-tab.w--current").removeClass("w--current");
            $(".wrap-border.calculator-tab .custom-style").css("color", "black");
            $(".wrap-border.calculator-tab .custom-style").css("background", "white");
            $("calculator-tab:eq(0)").addClass("w--current");
            $(".calculator-tab").removeClass("w--current");
            $(".calculator-tab:eq(0)").addClass("w--current");
            returnValue(space);
            $(".calculator-slider-side").slick("slickGoTo", 0);
            $(".calculator-slide").toggle(false);
            $(".calculator-slide.main, .calculator-slide.cozy").toggle(true);
            $(".calculator-slider-option.active").removeClass("active");
            $(".calculator-slider-option:eq(0)").addClass("active");
        });
        $(".choice").on("click", function () {
            if ($("#node").is(":checked")) {
                return 0;
            }
            appliancesBoolTotal = 1;
            appliancesCookie = $(this).attr("data-appliances");
            if ($(this).attr("data-appliances") == "bosch") {
                appliancesBool.standardBosch = 1;
                appliancesBool.premiumMiele = 0;
                appliancesBool.standardGorenje = 0;
            } else if ($(this).attr("data-appliances") == "gorenje") {
                appliancesBool.standardBosch = 0;
                appliancesBool.premiumMiele = 0;
                appliancesBool.standardGorenje = 1;
            } else {
                appliancesBool.standardBosch = 0;
                appliancesBool.premiumMiele = 1;
                appliancesBool.standardGorenje = 0;
            }
            returnValue(space);
        });
        $("#node").on("click", function () {
            appliancesBoolTotal = 0;
            appliancesBool.standardGorenje = 0;
            appliancesBool.standardBosch = 0;
            appliancesBool.premiumMiele = 0;
            returnValue(space);
        });
        $("#appliancesBool").on("click", function () {
            if (!($(this).is(":checked"))) {
                return;
            }
            if (!(document.querySelector(".choiceActiveBorder"))) {
                appliancesBoolTotal = 1;
                appliancesBool.standardGorenje = 1;
                returnValue(space);
            }
        });
        function returnValue(multiplier) {
            
            $("#total").html(numberWithSpaces(Math.round(handleTotal())));
            $("#totalWhole").html(numberWithSpaces(Math.round(handleTotal() * multiplier)));
            
            function numberWithSpaces(num) {
                return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");   
            }
        }
        returnValue(space);
    };