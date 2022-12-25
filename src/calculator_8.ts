import { Cell } from "./models/Cell";
import { ResponseRow } from "./interfaces/Row";
import { Table } from "./models/Table";
import { Utils } from "./helpers/Utils";

import * as $ from "jquery";
import { Formatter } from "./helpers/Formatter";
import { LocalStorageHandler } from "./helpers/LocalStoragehandler";

$(function () {
  fetch(
    "https://docs.google.com/spreadsheets/d/1KkkpKbytztt48mwP1RGgpVFpfke8-IqB0KLWA8Sn2FE/gviz/tq?tqx=out:json"
  )
    .then((res: Response) => res.text())
    .then((text: string) => {
      const response = JSON.parse(
        text
          .substring(text.length - 2, 0)
          .replace(`/*O_o*/\ngoogle.visualization.Query.setResponse(`, "")
      );

      const responseRows: Array<ResponseRow> = response.table.rows;

      const table: Table = new Table(
        responseRows
          .map((row: ResponseRow, outerIndex: number) => {
            return row.c
              .map(function (cell, index: number): Cell {
                if (cell === null || cell.v === null) {
                  return;
                }

                return new Cell(
                  `${Utils.numberToEncodedLetter(index + 1)}${outerIndex + 1}`,
                  cell.v
                );
              })
              .filter((cell) => cell != null);
          })
          .reduce((pv, cv) => [...pv, ...cv])
      );

      $("#dollarCourse").html(table.getCell("G6").formattedNumerical());
    });

  const storage: LocalStorageHandler = new LocalStorageHandler();
  storage.init();
  calculate();

  $("#space").val(50);

  $(".calculator input")
    .not(".form-2 input")
    .on("change", () => {
      updateUserData();
      calculate();
    });

  $("#space").on("focusout", function () {
    $(this).val(
      $(this)
        .val()
        .toString()
        .match(/\d*\.?\d+/)
    );
    storage.set("space", $("#space").val());
    if (storage.get("space") === 0 || storage.get("amount_of_rooms") === 0) {
      $("#total").html("0");
      $("#totalWhole").html("0");
      return;
    }
    calculate();
  });

  $(".slider-tab").on("click", function () {
    getUserStyle($(this).data("slider-index"));
    calculate();
  });

  $("#space").on("focusout", function () {
    if (parseInt($(this).val().toString()) < 30 || !$(this).val()) {
      $(this).val(30);
      storage.set("space", $("#space").val());

      calculate();
    }
  });

  $(".increment-field .increment").on("click", function (e) {
    e.preventDefault();
    $(this)
      .siblings(".increment-input")
      .val(
        parseInt($(this).siblings(".increment-input").val() as string) +
          parseInt($(this).val() as string)
      );

    if ($(this).siblings(".increment-input").val() === "0") {
      if ($(this).val() === "1") {
        $(this).siblings(".increment").toggleClass("disabled");
      } else {
        $(this).toggleClass("disabled");
      }
    } else if (
      parseInt($(this).siblings(".increment-input").val() as string) > 0
    ) {
      $(this).siblings(".disabled").toggleClass("disabled");
    }
    if (storage.get("amount_of_rooms") == 0) {
      $("#total").html("0");
      $("#totalWhole").html("0");
      return;
    }
    calculate();
  });

  $(".calculator-tab, .tab-new").on("click", function () {
    const num: number = parseInt($(this).data("slider-index"));
    getUserStyle(num);

    calculate();
  });

  $("#calculate").on("click", function () {
    const slideNumber: number = parseInt(
      $(".slider-tab.w--current").data("slider-index")
    );
    getUserStyle(slideNumber);
    $(".calculator-tab").removeClass("w--current");
    $(".calculator-tab[data-slider-index='" + slideNumber + "']").addClass(
      "w--current"
    );
    calculate();
    $(".calculator-slide").toggle(false);
    $(".calculator-slide.main").toggle(true);
    $(".calculator-slide." + storage.get("style")).toggle(true);
    $(".calculator-slider-option.active").removeClass("active");
    $(".calculator-slider-option:eq(0)").addClass("active");
  });

  $(".calculatecozy").on("click", function () {
    storage.set("style", "cozy");
    $("calculator-tab.w--current").removeClass("w--current");
    $(".wrap-border.calculator-tab .custom-style").css("color", "black");
    $(".wrap-border.calculator-tab .custom-style").css("background", "white");
    $("calculator-tab:eq(0)").addClass("w--current");
    $(".calculator-tab").removeClass("w--current");
    $(".calculator-tab:eq(0)").addClass("w--current");
    calculate();

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
    calculate();
  });

  $("#node").on("click", function () {
    storage.set("appliances_bool_total", false);
    calculate();
  });

  $("#appliancesBool").on("click", function () {
    if (!$(this).is(":checked")) {
      return;
    }
    if (!document.querySelector(".choiceActiveBorder")) {
      localStorage.seetItem("appliances_bool_total", 1);
      localStorage.seetItem("appliances", "gorenje");
      calculate();
    }
  });

  $("#appliancesBool").on("change", function () {
    if ($(this).is(":checked")) {
      storage.set("appliances_bool_total", true);
      calculate();
    }
  });

  async function calculate() {
    updateUserData();

    let response = await fetch("https://api.fortes.agency/calc", {
      body: storage.storageToRequestBody(localStorage),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });
    let result = await response.json();
    const cost = parseFloat(result.cost_per_meter);

    $("#total").html(Formatter.formatCurrency(cost));
    $("#totalWhole").html(
      Formatter.formatCurrency(cost * parseFloat(storage.get("space")))
    );
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

    storage.set("style", "japandi");
    calculate();
  }

  function updateUserData() {
    storage.set("space", $("#space").val());
    storage.set("amount_of_rooms", $("#amountOfRooms").val());
    storage.set("amount_of_bathrooms", $("#amountOfBathrooms").val());
    storage.set("heated_flooring", $("#heatedFlooring").val());
    storage.set("conditioning", $("#conditioning").val());
    storage.set("hygienic_shower", $("#hygienicShower").is(":checked"));
    storage.set("second_gypsum_layer", $("#secondGypsumLayer").is(":checked"));
    storage.set("furniture_bool", $("#furnitureBool").is(":checked"));
    storage.set("bath", $("#bathtub").is(":checked"));
    storage.set("shower", $("#shower").is(":checked"));
    storage.set("appliances_bool_total", $("#appliancesBool").is(":checked"));
    storage.set("floor_screed", $("#floorscreed").is(":checked"));
    storage.set("denoising", $("#noise").is(":checked"));
    storage.set("entrance_doors", $("#doors").is(":checked"));
    storage.set("ceiling", $(":radio[name='ceiling']:checked").val());
    storage.set("flooring", $(":radio[name='flooring']:checked").val());
  }

  function getUserStyle(number: number): void {
    if (number == 0) {
      storage.set("style", "cozy");
    } else if (number == 2) {
      storage.set("style", "fusion");
    } else if (number == 1) {
      storage.set("style", "japandi");
    } else if (number == 3) {
      storage.set("style", "modern");
    } else if (number == 4) {
      storage.set("style", "neoclassic");
    }
  }
});
