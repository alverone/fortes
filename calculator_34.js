    let style = "cozy";
    let appliancesCookie = "";
    $("#space").val(50);
let data = {
    space: +$("#space").val(),
    amountOfRooms: +$("#amountOfRooms").val(),
    amountOfBathrooms: +$("#amountOfBathrooms").val(),
    furnitureBool: +$("#furnitureBool").is(":checked"),
    appliancesBoolTotal: +$("#appliancesBool").is(":checked"),
    bathtub: +$("#bathtub").is(":checked"),
    shower: +$("#shower").is(":checked"),
    hygienicShower: +$("#hygienicShower").is(":checked"),
    secondGypsumLayer: +$("#secondGypsumLayer").is(":checked"),
    floorScreed: +$("#floorscreed").is(":checked"),
    heatedFlooring: +$("#heatedFlooring").val(),
    denoising: +$("#noise").is(":checked"),
    entranceDoors: +$("#doors").is(":checked"),
    conditioning: +$("#conditioning").val(),
    ceiling1: +$("#ceiling1").is(":checked"),
    ceiling2: +$("#ceiling2").is(":checked"),
    ceiling3: +$("#ceiling3").is(":checked"),
    aminate: +$("#laminat").is(":checked"),
    vinyl: +$("#vynil").is(":checked"),
    parquet: +$("#parket").is(":checked"),
    appliancesBool: 1,
    standardGorenje: 0,
    standardBosch: 0,
    premiumMiele: 1,
    styleLetter: "11"
};
        $("input").on("input", function () {
            updateUserData();
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
            updateUserData();
            if (amountOfRooms == 0) {
                $("#total").html(0);
                $("#totalWhole").html(0);
                return;
            }
            returnValue(space);
        });
        $(".calculator-tab").on("click", function (e) {
            number = parseInt($(this).attr("data-slider-index"));
            getUserStyle(number);
            $(".calculator-slide").toggle(false);
            $(".calculator-slide.main").toggle(true);
            $(`.calculator-slide.` + style).toggle(true);
            returnValue(space);
        });
        $("#calculate").on("click", function () {
            let slideNumber = parseInt($(".slider-tab.w--current").data("slider-index"));
            getUserStyle(slideNumber);
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
            let price = makeCall();
            $("#total").html(numberWithSpaces(Math.round(price)));
            $("#totalWhole").html(numberWithSpaces(Math.round(price * multiplier)));
            
            function numberWithSpaces(num) {
                return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");   
            }
        }

function updateUserData() {
    data.space = +$("#space").val();
    data.amountOfRooms = +$("#amountOfRooms").val();
    data.amountOfBathrooms = +$("#amountOfBathrooms").val();
    data.heatedFlooring = +$("#heatedFlooring").val();
    data.conditioning = +$("#conditioning").val();
    data.hygienicShower = +$("#hygienicShower").is(":checked");
    data.secondGypsumLayer = +$("#secondGypsumLayer").is(":checked");
    data.furnitureBool = +$("#furnitureBool").is(":checked");
    data.bathtub = +$("#bathtub").is(":checked");
    data.shower = +$("#shower").is(":checked");
    data.appliancesBoolTotal = +$("#appliancesBool").is(":checked");
    data.floorScreed = +$("#floorscreed").is(":checked");
    data.denoising = +$("#noise").is(":checked");
    data.entranceDoors = +$("#doors").is(":checked");
    data.ceiling1 = +$("#ceiling1").is(":checked");
    data.ceiling2 = +$("#ceiling2").is(":checked");
    data.ceiling3 = +$("#ceiling3").is(":checked");
    data.laminate = +$("#laminat").is(":checked");
    data.vinyl = +$("#vynil").is(":checked");
    data.parquet = +$("#parket").is(":checked");
}
        function getUserStyle(number) {
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
        }
        function returnRoundedPrice(price) {
            return Math.round(price / (space * 28.5)); 
        }
        
        returnValue(space);

async function makeCall() {
    let response = await fetch("https://api.fortes.agency/calc", {
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json"
        },
        method: "POST"
    });
    let result = await response.json();
    return(parseFloat(result.cost_per_meter));   
}

