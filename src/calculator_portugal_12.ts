import { DesignStyle } from "./models/Style";
import { Formatter } from "./utils/Formatter";
import { LocalStorageHandler } from "./utils/LocalStorageHandler";
import { debounce } from "ts-debounce";

$(function () {
  const storage: LocalStorageHandler = new LocalStorageHandler();

  const $space = $("#space");
  const $total = $("#total");
  const $totalWhole = $("#totalWhole");

  const debounceCalculate = debounce(calculate, 300);

  $space.val(50);
  storage.initPortugal();
  debounceCalculate();

  $(".calculator input")
    .not(".form-2 input")
    .on("change", () => {
      updateUserData();
      debounceCalculate();
    });

  $space.on("focusout", function () {
    $(this).val(
      $(this)
        .val()
        .toString()
        .match(/\d*\.?\d+/)
    );

    storage.set("space", $space.val());

    if (storage.get("space") === 0 || storage.get("amount_of_rooms") === 0) {
      $total.html("0");
      $totalWhole.html("0");
      return;
    }

    debounceCalculate();
  });

  $(".slider-tab").on("click", function () {
    storage.set("style", DesignStyle.fromNumber($(this).data("slider-index")));
    debounceCalculate();
  });

  $space.on("focusout", function () {
    if (parseInt($(this).val().toString()) < 30 || !$(this).val()) {
      $(this).val(30);
      storage.set("space", $space.val());

      debounceCalculate();
    }
  });

  $(".increment-field .increment").on("click", function (e) {
    e.preventDefault();

    const input = $(this).siblings(".increment-input");

    input.val(
      parseInt(input.val() as string) + parseInt($(this).val() as string)
    );

    if (input.val() === "0") {
      if ($(this).val() === "1") {
        $(this).siblings(".increment").toggleClass("disabled");
      } else {
        $(this).toggleClass("disabled");
      }
    } else if (parseInt(input.val() as string) > 0) {
      $(this).siblings(".disabled").toggleClass("disabled");
    }

    if (storage.get("amount_of_rooms") == 0) {
      $total.html("0");
      $totalWhole.html("0");
      return;
    }

    debounceCalculate();
  });

  $(".calculator-tab, .tab-new").on("click", function () {
    const num: number = parseInt($(this).data("slider-index"));
    storage.set("style", DesignStyle.fromNumber(num));

    debounceCalculate();
  });

  $("#calculate").on("click", function () {
    const slideNumber: number = parseInt(
      $(".slider-tab.w--current").data("slider-index")
    );
    storage.set("style", DesignStyle.fromNumber(slideNumber));
    $(".calculator-tab").removeClass("w--current");
    $(".calculator-tab[data-slider-index='" + slideNumber + "']").addClass(
      "w--current"
    );
    debounceCalculate();
    $(".calculator-slide").toggle(false);
    $(".calculator-slide.main").toggle(true);
    $(".calculator-slide." + storage.get("style")).toggle(true);
    $(".calculator-slider-option.active").removeClass("active");
    $(".calculator-slider-option:eq(0)").addClass("active");
  });

  $(".calculatecozy").on("click", function () {
    storage.set("style", DesignStyle.Cozy);
    $("calculator-tab.w--current").removeClass("w--current");
    $(".wrap-border.calculator-tab .custom-style").css("color", "black");
    $(".wrap-border.calculator-tab .custom-style").css("background", "white");
    $("calculator-tab:eq(0)").addClass("w--current");
    $(".calculator-tab").removeClass("w--current");
    $(".calculator-tab:eq(0)").addClass("w--current");
    debounceCalculate();

    $(".calculator-slide").toggle(false);
    $(".calculator-slide.main, .calculator-slide.cozy").toggle(true);
    $(".calculator-slider-option.active").removeClass("active");
    $(".calculator-slider-option:eq(0)").addClass("active");
  });

  $(".choice").on("click", function () {
    if ($("#node").is(":checked")) {
      $(".choiceActiveBorder").removeClass("choiceActiveBorder");
      $(this).parent().toggleClass("choiceActiveBorder");
      $("#appliancesBool").prop("checked", true);
      $("#node").siblings("div").removeClass("w--redirected-checked");
      $("#appliancesBool").siblings("div").addClass("w--redirected-checked");
    }

    storage.set("appliances_bool_total", true);
    storage.set("appliances", $(this).data("appliances"));
    debounceCalculate();
  });

  $("#node").on("click", function () {
    storage.set("appliances_bool_total", false);

    debounceCalculate();
  });

  $("#appliancesBool").on("click", function () {
    if (!$(this).is(":checked")) {
      return;
    }
    if (!document.querySelector(".choiceActiveBorder")) {
      storage.set("appliances_bool_total", 1);
      storage.set("appliances", "gorenje");

      debounceCalculate();
    }
  });

  $("#appliancesBool").on("change", function () {
    if ($(this).is(":checked")) {
      storage.set("appliances_bool_total", true);
      debounceCalculate();
    }
  });

  async function calculate() {
    updateUserData();

    const result = await fetch(
      "https://api.fortes.agency/calc?country=portugal",
      {
        body: storage.storageToRequestBody(localStorage),
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
      }
    );

    const json = await result.json();
    const cost = parseFloat(json.cost_per_meter);

    storage.set("costPerMetre", cost);
    storage.set("summedPrice", cost * storage.get("space") * 1.23);

    $total.html(Formatter.formatCurrency(cost));
    $totalWhole.html(Formatter.formatCurrency(cost * storage.get("space")));
    $("#totalWholeVAT").html(
      Formatter.formatCurrency(cost * storage.get("space") * 1.23)
    );

    return;
  }

  if ($(window).width() < 992) {
    $(".calculator-tab.w--current, .slider-tab.w--current").toggleClass(
      "w--current"
    );
    $(
      ".slide, .calculator-slide, .header-cozy, .wrap-border.calculator-btn"
    ).toggle(false);
    $(
      ".slide.main, .calculator-slide.main, .slide.japandi, .calculator-slide.japandi, .wrap-border.calculator-btn.specification-japandi.color-1"
    ).toggle(true);
    $(".calculator-tab:eq(1), .slider-tab:eq(1)").toggleClass("w--current");
    $(".header-japandi").toggle(true);

    storage.set("style", DesignStyle.Japandi);
    calculate();
  }

  function updateUserData() {
    storage.set("space", $space.val());
    storage.set("amount_of_rooms", $("#amountOfRooms").val());
    storage.set("amount_of_bathrooms", $("#amountOfBathrooms").val());
    storage.set("windows_installation", $("#amountOfWindows").val());
    storage.set("demontage", $("#dismantlingWorks").is(":checked"));
    storage.set("heated_flooring", $("#heatedFlooring").val());
    storage.set("conditioning", $("#conditioning").val());
    //mistake is on purpose
    storage.set("builtin_furiture", $("#builtinFurniture").is(":checked"));
    storage.set("cement_screed", $("#cementScreed").is(":checked"));
    storage.set("finishing_materials", $("#finishingMaterials").is(":checked"));
    storage.set("furniture_bool", $("#furnitureBool").is(":checked"));
    storage.set("bath", $("#bathtub").is(":checked"));
    storage.set("shower", $("#shower").is(":checked"));
    storage.set("appliances_bool_total", $("#appliancesBool").is(":checked"));
    storage.set("denoising", $("#noise").is(":checked"));
    storage.set("entrance_doors", $("#doors").is(":checked"));
    storage.set("flooring", $(":radio[name='flooring']:checked").val());
    storage.set("transportation_expenses", $("#distance").val());
  }
});
