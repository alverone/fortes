import { Cell } from "./models/Cell";
import { ResponseRow } from "./models/interfaces/Row";
import { Table } from "./models/Table";
import { Utils } from "./utils/Utils";
import { Formatter } from "./utils/Formatter";
import {
  LocalStorageDestination,
  LocalStorageHandler,
} from "./utils/LocalStorageHandler";

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
                  return new Cell("", "0");
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

      document.getElementById("dollarCourse")!.innerText = table
        .getCell("G7")
        .formattedNumerical();
    });

  const $floorScreed = <HTMLInputElement>(
    document.getElementById("floorscreed")!
  );
  const $doors = <HTMLInputElement>document.getElementById("doors")!;
  const $noise = <HTMLInputElement>document.getElementById("noise")!;
  const $bathtub = <HTMLInputElement>document.getElementById("bathtub")!;
  const $shower = <HTMLInputElement>document.getElementById("shower")!;
  const $conditioning = <HTMLInputElement>(
    document.getElementById("conditioning")!
  );
  const $secondGypsumLayer = <HTMLInputElement>(
    document.getElementById("secondGypsumLayer")!
  );
  const $hygienicShower = <HTMLInputElement>(
    document.getElementById("hygienicShower")!
  );
  const $furnitureBool = <HTMLInputElement>(
    document.getElementById("furnitureBool")!
  );
  const $appliancesBool = <HTMLInputElement>(
    document.getElementById("appliancesBool")!
  );
  const $flooringRadio = <HTMLInputElement>(
    document.querySelector(`input[type="radio"][name="flooring"]:checked`)!
  );
  const $ceilingRadio = <HTMLInputElement>(
    document.querySelector(`input[type="radio"][name="ceiling"]:checked`)!
  );

  const $total = document.getElementById("total");
  const $totalWhole = document.getElementById("totalWhole");
  const $space = <HTMLInputElement>document.getElementById("space");
  const $amountOfRooms = <HTMLInputElement>(
    document.getElementById("amountOfRooms")
  );
  const $amountOfBathrooms = <HTMLInputElement>(
    document.getElementById("amountOfBathrooms")
  );
  const $heatedFlooring = <HTMLInputElement>(
    document.getElementById("heatedFlooring")
  );
  const storage: LocalStorageHandler = new LocalStorageHandler(
    LocalStorageDestination.uk,
    true
  );

  $space.value = "50";

  calculate();

  document
    .querySelectorAll("div.calculator form input")
    .forEach((e) => e.addEventListener("change", () => calculate()));

  $("#space").on("focusout", function () {
    $(this).val(
      $(this)
        .val()!
        .toString()
        .match(/\d*\.?\d+/)!
    );
    storage.set("space", $space.value);

    if (parseInt($space.value) === 0 || parseInt($amountOfRooms.value) === 0) {
      $total!.innerText = "0";
      $totalWhole!.innerText = "0";

      return;
    }

    calculate();
  });

  $space.addEventListener("focusout", function () {
    if (
      this.value.length == 0 ||
      isNaN(parseInt(this.value)) ||
      parseInt(this.value) < 30
    ) {
      $space.value = "30";
      storage.set("space", 30);
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
      parseInt(<string>$(this).siblings(".increment-input").val()) > 0
    ) {
      $(this).siblings(".disabled").toggleClass("disabled");
    }

    if (storage.get("amount_of_rooms") == 0) {
      $total!.innerText = "0";
      $totalWhole!.innerText = "0";
      return;
    }

    calculate();
  });

  document
    .querySelectorAll(".calculator-tab, .tab-new")
    .forEach((elem) => elem.addEventListener("click", () => calculate()));

  /*$("#calculate").on("click", function () {
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
  });*/

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
      storage.set("appliances_bool_total", 1);
      storage.set("appliances", "gorenje");

      calculate();
    }
  });

  async function calculate(): Promise<void> {
    updateUserData();

    return fetch("https://api.fortes.agency/calc", {
      body: storage.storageToRequestBody(localStorage),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    })
      .then((response) => response.json())
      .then((json) => {
        const cost = parseFloat(json.cost_per_meter);

        storage.set("costPerMetre", cost);
        storage.set("summedPrice", json.cost_per_meter * storage.get("space"));

        $total!.innerText = Formatter.formatCurrency(cost);
        $totalWhole!.innerText = Formatter.formatCurrency(
          cost * storage.get("space")
        );
      });
  }

  function updateUserData(): void {
    storage.set("space", $space.value);
    storage.set("amount_of_rooms", $amountOfRooms.value);
    storage.set("amount_of_bathrooms", $amountOfBathrooms.value);
    storage.set("heated_flooring", $heatedFlooring.value);
    storage.set("conditioning", $conditioning.value);
    storage.set("hygienic_shower", $hygienicShower.checked);
    storage.set("second_gypsum_layer", $secondGypsumLayer.checked);
    storage.set("furniture_bool", $furnitureBool.checked);
    storage.set("bath", $bathtub.checked);
    storage.set("shower", $shower.checked);
    storage.set("appliances_bool_total", $appliancesBool.checked);
    storage.set("floor_screed", $floorScreed.checked);
    storage.set("denoising", $noise.checked);
    storage.set("entrance_doors", $doors.checked);
    storage.set("ceiling", $ceilingRadio.value);
    storage.set("flooring", $flooringRadio.value);
  }
});
