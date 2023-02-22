import { Cell } from "./models/Cell";
import { Table } from "./models/Table";
import { ResponseRow } from "./models/interfaces/Row";
import { LocalStorageHandler } from "./utils/LocalStorageHandler";
import { Utils } from "./utils/Utils";
import { Formatter } from "./utils/Formatter";
import { StringConsts } from "./utils/StringConsts";

fetch(
  "https://docs.google.com/spreadsheets/d/1KkkpKbytztt48mwP1RGgpVFpfke8-IqB0KLWA8Sn2FE/gviz/tq?tqx=out:json&gid=1219923480"
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
                cell.v ?? cell.f
              );
            })
            .filter((cell) => cell != null);
        })
        .reduce((pv, cv) => [...pv, ...cv])
    );

    const storage = new LocalStorageHandler();
    let appliances = storage.get("appliances");

    const style: string = storage.get("style");
    const styleLetter = getRightStyleLetter(style);
    let appliancesBoolTotal = Boolean(storage.get("appliances_bool_total")),
      furnitureBool: boolean = Boolean(storage.get("furniture_bool")),
      space: number = storage.get("space"),
      bath: boolean = Boolean(storage.get("bath")),
      shower: boolean = Boolean(storage.get("shower")),
      amountOfRooms: number = storage.get("amount_of_rooms"),
      amountOfBathrooms: number = storage.get("amount_of_bathrooms"),
      letter: string = "",
      letterModel: string = "",
      demontage: boolean = Boolean(storage.get("demontage")),
      windows: number = storage.get("windows_installation"),
      finishingMaterials: boolean = Boolean(storage.get("finishing_materials")),
      cementScreed: boolean = Boolean(storage.get("cement_screed")),
      builtinFurniture: boolean = Boolean(storage.get("builtin_furiture")),
      heatedFlooring: number = storage.get("heated_flooring"),
      denoising: boolean = Boolean(storage.get("denoising")),
      entranceDoors: boolean = Boolean(storage.get("entrance_doors")),
      conditioning: number = storage.get("conditioning"),
      flooring: string = storage.get("flooring"),
      workSum = 0,
      furnitureSum = 0,
      $furniture = $("#furnitureList");

    let months =
      space <= 40
        ? 3
        : space <= 80
        ? 4
        : space <= 100
        ? 5
        : space <= 130
        ? 6
        : space <= 150
        ? 7
        : space <= 175
        ? 8
        : 9;

    if (style == "modern" || style == "neoclassic") {
      months += 1;
    }

    $("#months").html(months.toString());
    const S46 = table.getCell("S46").numeric();
    const S44 = table.getCell("S44").numeric();

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

    let flooringPrice: number = 0;
    let flooringNum: string, flooringNum2: string;

    if (flooring == "vynil") {
      flooringNum = "60";
      flooringNum2 = "86";
      flooringPrice = space * (space <= 70 ? 220.33 : 161.8) * S46 * 2;
    } else if (flooring == "parket") {
      flooringNum = "61";
      flooringNum2 = "87";
      flooringPrice = space * (space <= 80 ? 369.96 : 240.31) * S46 * 2;
    } else {
      //laminat
      flooringNum = "59";
      flooringNum2 = "85";
      flooringPrice = space * (space <= 70 ? 201.26 : 198.81) * S46 * 2;
    }

    let $work = $("#workList");
    let textObject = "";
    let water =
      2523 *
        ((amountOfRooms > 0 ? 6 : 0) +
          (bath ? 2 : 0) +
          (shower ? 2 : 0) +
          amountOfBathrooms * 2) *
        //inflation
        S46 *
        2 *
        S44 +
      (bath ? 1 : 0) * amountOfBathrooms * 2500 * 2 * S44 * S46 -
      (950 * S46) / 41 +
      (shower ? 1 : 0) * 4000 * amountOfBathrooms * 2 * S44 * S46 -
      (800 * S46) / 41;
    let canalisation =
      1974 *
      ((amountOfRooms > 0 ? 3 : 0) +
        (bath ? 1 : 0) +
        (shower ? 1 : 0) +
        amountOfBathrooms * 2) *
      S46 *
      2 *
      S44;
    const vents =
      space * amountOfBathrooms * (space <= 100 ? 83.2 : 33.98) * S44 * S46 * 2;
    const electricity =
      (space / amountOfRooms <= 50 ? 850 * space : amountOfRooms * 24 * 3519) *
      S46 *
      S44;

    const workPriceArray = [
      space / amountOfRooms <= 50
        ? space *
          (space <= 60
            ? 1142.78
            : space <= 95
            ? 883.87
            : space <= 125
            ? 819.43
            : 819.43) *
          S46 *
          1.45
        : Math.sqrt(space) * 4 * 3 * 600 * S46,
      space *
        (space <= 60
          ? 283.08
          : space <= 95
          ? 281.22
          : space <= 124
          ? 338.33
          : 362.47) *
        S46 *
        1.35 *
        1.45,
      (space *
        (space <= 60
          ? 700.67
          : space <= 100
          ? 687.36
          : space <= 130
          ? 341.25
          : 317.36) *
        S46 *
        1.1 *
        1.5) /
        2,
      (space / amountOfRooms < 50
        ? (space <= 50 ? 1000 * space : 990 * space) * 1.77
        : Math.sqrt(space) * 4 * 3 * 600) * S46,
      space *
        (space <= 60
          ? 418.86
          : space <= 100
          ? 416.29
          : space <= 135
          ? 416.73
          : 416.67) *
        1.77 *
        S46,
      140 *
        (space <= 60
          ? table.getCell(`${letter}55`).numeric()
          : space <= 80
          ? 50
          : space <= 120
          ? 78
          : space <= 180
          ? 114
          : 162) *
        (style == "modern" || style == "neoclassic" ? 1 : 0),
      flooringPrice,
      space * (space <= 70 ? 114.47 : 86.84) * S46 * 2,
      space *
        (space <= 70 ? 206.59 : 170) *
        S46 *
        2 *
        (style == "japandi" || style == "fusion" ? 1 : 0),
    ];
    const workAmountArray = [1, 1, amountOfBathrooms, 1, 1, 1, 1, 1, 1];
    const workAdressesArray = [50, 51, 52, 55, 56, 57, flooringNum, 63, 64];

    workSum += water;
    textObject = returnObject(
      table.getCell("F44").value(),
      "",
      Math.round(water) + " €"
    );
    $("#workList").append(textObject);

    workSum += canalisation;
    textObject = returnObject(
      table.getCell("F45").value(),
      "",
      Math.round(canalisation) + " €"
    );
    $("#workList").append(textObject);

    workSum += vents;
    textObject = returnObject(
      table.getCell("F46").value(),
      "",
      Math.round(vents) + " €"
    );
    $("#workList").append(textObject);

    workSum += electricity;
    textObject = returnObject(
      table.getCell("F49").value(),
      "",
      Math.round(electricity) + " €"
    );
    $("#workList").append(textObject);

    for (let i = 0; i < workAdressesArray.length; i++) {
      const price = workPriceArray[i] * workAmountArray[i] * S44;

      if (price === 0 || isNaN(price)) {
        continue;
      }

      workSum += price;
      textObject = returnObject(
        table.getCell("F" + workAdressesArray[i]).value(),
        "",
        Math.round(price) + " €"
      );

      $("#workList").append(textObject);
    }

    if (finishingMaterials) {
      $("#workList").append(
        '</div><div class="list-option-container margined"></div>'
      );
      $("#workList .list-option-container")
        .last()
        .append(
          `<h4 class=\"pricelist-header small no-padding\">${table
            .getCell("F68")
            .value()}</h4><span class=\'notation amount\'> </span><span class=\'notation\'>${
            StringConsts.kCost
          }</span>`
        );

      let materialsPriceArray = [
        table.getCell(`${letter}69`).numeric(),
        table.getCell(`${letter}70`).numeric(),
        table.getCell(`${letter}71`).numeric(),
        table.getCell(`${letter}72`).numeric(),
        table.getCell(`${letter}73`).numeric(),
        64 * table.getCell("S71").numeric(),
        table.getCell(`${letter}76`).numeric(),
        table.getCell(`${letter}77`).numeric(),
        table.getCell(`${letter}78`).numeric(),
        table.getCell(`${letter}79`).numeric(),
        table.getCell(`${letter}80`).numeric(),
        table.getCell(`${letter}81`).numeric(),
        table.getCell(`${letter}82`).numeric(),
        table.getCell(`${letter}83`).numeric(),
        table.getCell(`${letter + flooringNum2}`).numeric(),
      ];
      let materialsAmountArray = [
        amountOfBathrooms + amountOfRooms,
        amountOfBathrooms * 35,
        0.66 * space,
        0.66 * space,
        0.59 * space,
        space <= 50 ? 42 : space <= 90 ? 60 : space <= 120 ? 84 : 90,
        amountOfBathrooms,
        Number(bath),
        Number(shower),
        Number(bath) + Number(shower),
        amountOfBathrooms,
        amountOfBathrooms,
        amountOfBathrooms,
        amountOfBathrooms,
        space < 100
          ? space - amountOfBathrooms * 7
          : space - amountOfBathrooms * 10,
      ];
      let materialsAdressesArray = [
        69,
        70,
        71,
        72,
        73,
        74,
        76,
        77,
        78,
        79,
        80,
        82,
        83,
        84,
        flooringNum2,
      ];

      for (let i = 0; i < materialsAdressesArray.length; i++) {
        const price =
          (materialsPriceArray[i] *
            materialsAmountArray[i] *
            //table.getCell("S70").numeric() *
            table.getCell("S69").numeric()) /
          1.23;

        if (price === 0 || isNaN(price)) {
          continue;
        }

        workSum += price;
        textObject = returnObject(
          table.getCell("F" + materialsAdressesArray[i]).value(),
          "",
          Math.round(price) + "€"
        );

        $("#workList").append(textObject);
      }
    }

    $("#workList").append(
      '</div><div class="list-option-container margined"></div>'
    );
    $("#workList .list-option-container")
      .last()
      .append(
        `<h4 class=\"pricelist-header small no-padding\">${table
          .getCell("F93")
          .value()}</h4>
        <span class=\'notation amount\'>${StringConsts.kAmount}</span>
        <span class=\'notation\'>${StringConsts.kCost}</span>`
      );
    textObject = `<div class=\"option-block\">
      <div class=\"division-block pricelist\"></div>
      <div class=\"list-option-container\">
        <span class=\'name\'>${table.getCell("F94").value()}</span>
        <span class=\'list-text amount\'>${months} months</span>
        <span class=\'list-text\'> </span>
      </div>
    </div>`;
    $("#workList").append(textObject);

    const casualtiesPriceArray = [
      ((41000 * Math.ceil((table.getCell("G18").numeric() + 1 + 1) / 5)) /
        1.35 /
        2 /
        1.5 +
        100 * space) *
        S44 *
        S46,
      workSum * 0.022 * S46,
      (months * 2 * 1200 + 3000 + space * 220) * S44 * S46,
    ];
    const casualtiesAdressesArray = [95, 96, 97];

    for (let i = 0; i < casualtiesAdressesArray.length; i++) {
      const price = casualtiesPriceArray[i];
      workSum += price;
      textObject = `<div class=\"option-block\">
        <div class=\"division-block pricelist\"></div>
        <div class=\"list-option-container\">
          <span class=\'name\'>${table
            .getCell(`F${casualtiesAdressesArray[i]}`)
            .value()}</span>
            <span class=\'list-text amount\'>${Formatter.formatCurrency(
              price / months
            )} €/${StringConsts.kLMonth}</span>
          <span class=\'list-text\'>${Formatter.formatCurrency(price)} €</span>
        </div>
      </div>`;
      $("#workList").append(textObject);
    }

    if (furnitureBool) {
      $("#furnitureList").append(
        '</div><div class="list-option-container"></div>'
      );
      $("#furnitureList .list-option-container")
        .last()
        .append(
          `<h4 class=\"pricelist-header small no-padding\">${StringConsts.kKitchen}</h4>
          <span class=\'notation amount\'>${StringConsts.kAmount}</span>
          <span class=\'notation\'>${StringConsts.kCost}</span>`
        );

      appendFurnitureOption(
        table.getCell("F121").value(),
        table.getCell(`${letterModel}121`)?.value(),
        1,
        table.getCell(`${letter}121`).numeric(),
        table.getCell("G121").value()
      );

      appendFurnitureOption(
        table.getCell("F122").value(),
        table.getCell(`${letterModel}122`)?.value(),
        4,
        table.getCell(`${letter}122`).numeric(),
        table.getCell("G122").value()
      );

      appendFurnitureOption(
        table.getCell("F123").value(),
        table.getCell(`${letterModel}123`)?.value(),
        1,
        table.getCell(`${letter}123`).numeric(),
        table.getCell("G123").value()
      );

      appendObject(
        $("#furnitureList"),
        '</div><div class="list-option-container margined"></div>'
      );
      appendObject(
        $("#furnitureList .list-option-container").last(),
        `<h4 class=\"pricelist-header small no-padding\">${table
          .getCell("F124")
          .value()}</h4><span class=\'notation amount\'>${
          StringConsts.kAmount
        }</span><span class=\'notation\'>${StringConsts.kCost}</span>`
      );

      appendFurnitureOption(
        table.getCell("F124").value(),
        table.getCell(letterModel + "124")?.value(),
        1,
        table.getCell(`${letter}124`)?.numeric(),
        table.getCell("G124")?.value()
      );
      appendFurnitureOption(
        table.getCell("F125").value(),
        table.getCell(letterModel + "125")?.value(),
        1,
        table.getCell(`${letter}125`)?.numeric(),
        table.getCell("G125")?.value()
      );

      appendObject(
        $("#furnitureList"),
        '</div><div class="list-option-container margined"></div>'
      );
      appendObject(
        $("#furnitureList .list-option-container").last(),
        `<h4 class=\"pricelist-header small no-padding\">${table
          .getCell("F127")
          .value()}</h4><span class=\'notation amount\'>${
          StringConsts.kAmount
        }</span><span class=\'notation\'>${StringConsts.kCost}</span>`
      );

      appendFurnitureOption(
        table.getCell("F128").value(),
        table.getCell(letterModel + "128")?.value(),
        1,
        table.getCell(`${letter}128`)?.numeric(),
        table.getCell("G128")?.value()
      );
      appendFurnitureOption(
        table.getCell("F129").value(),
        table.getCell(letterModel + "129")?.value(),
        1,
        table.getCell(`${letter}129`)?.numeric(),
        table.getCell("G129")?.value()
      );
      appendFurnitureOption(
        table.getCell("F130").value(),
        table.getCell(letterModel + "130")?.value(),
        2,
        table.getCell(`${letter}130`)?.numeric(),
        table.getCell("G130")?.value()
      );

      appendFurnitureOption(
        table.getCell("F131").value(),
        table.getCell(letterModel + "131")?.value(),
        1,
        table.getCell(`${letter}131`)?.numeric(),
        table.getCell("G131")?.value()
      );
      appendFurnitureOption(
        table.getCell("F132").value(),
        table.getCell(letterModel + "132")?.value(),
        1,
        table.getCell(`${letter}132`)?.numeric(),
        table.getCell("G132")?.value()
      );

      appendObject(
        $("#furnitureList"),
        '</div><div class="list-option-container margined"></div>'
      );
      $("#furnitureList .list-option-container")
        .last()
        .append(
          `<h4 class=\"pricelist-header small no-padding\">${table
            .getCell("F133")
            .value()}</h4><span class=\'notation amount\'>${
            StringConsts.kAmount
          }</span><span class=\'notation\'>${StringConsts.kCost}</span>`
        );

      appendFurnitureOption(
        table.getCell("F134").value(),
        table.getCell(letterModel + "134")?.value(),
        Math.ceil(space * 0.48),
        table.getCell(`${letter}134`)?.numeric(),
        table.getCell("G134")?.value()
      );
      appendFurnitureOption(
        table.getCell("F135").value(),
        table.getCell(letterModel + "135")?.value(),
        1,
        table.getCell(`${letter}135`)?.numeric(),
        table.getCell("G135")?.value()
      );
      appendFurnitureOption(
        table.getCell("F137").value(),
        table.getCell(letterModel + "137")?.value(),
        1,
        table.getCell(`${letter}137`)?.numeric(),
        table.getCell("G137")?.value()
      );
      appendFurnitureOption(
        table.getCell("F139").value(),
        table.getCell(letterModel + "139")?.value(),
        1,
        table.getCell(`${letter}139`)?.numeric(),
        table.getCell("G139")?.value()
      );
      appendFurnitureOption(
        table.getCell("F140").value(),
        table.getCell(letterModel + "140")?.value(),
        1,
        table.getCell(`${letter}140`)?.numeric(),
        table.getCell("G140")?.value()
      );

      appendFurnitureOption(
        table.getCell("F136").value(),
        table.getCell(letterModel + "136")?.value(),
        amountOfRooms > 1 ? 1 : 0,
        table.getCell(`${letter}136`)?.numeric(),
        table.getCell("G136")?.value()
      );
      appendFurnitureOption(
        table.getCell("F138").value(),
        table.getCell(letterModel + "138")?.value(),
        2,
        table.getCell(`${letter}138`)?.numeric(),
        table.getCell("G138")?.value()
      );

      $("#furnitureList").append(
        '</div><div class="list-option-container margined"></div>'
      );
      $("#furnitureList .list-option-container")
        .last()
        .append(
          `<h4 class=\"pricelist-header small no-padding\">${table
            .getCell("F141")
            .value()}</h4>
            <span class=\'notation amount\'>${StringConsts.kAmount}</span>
            <span class=\'notation\'>${StringConsts.kCost}</span>`
        );

      appendFurnitureOption(
        table.getCell("F142").value(),
        table.getCell(letterModel + "142")?.value(),
        amountOfRooms,
        table.getCell(`${letter}142`)?.numeric(),
        table.getCell("G142")?.value()
      );
      appendFurnitureOption(
        table.getCell("F143").value(),
        table.getCell(letterModel + "143")?.value(),
        amountOfRooms,
        table.getCell(`${letter}143`)?.numeric(),
        table.getCell("G143")?.value()
      );
      appendFurnitureOption(
        table.getCell("F144").value(),
        table.getCell(letterModel + "144")?.value(),
        amountOfRooms,
        table.getCell(`${letter}144`)?.numeric(),
        table.getCell("G144")?.value()
      );

      appendFurnitureOption(
        table.getCell("F145").value(),
        table.getCell(letterModel + "145")?.value(),
        1,
        table.getCell(`${letter}145`)?.numeric(),
        table.getCell("G145")?.value()
      );
      appendFurnitureOption(
        table.getCell("F146").value(),
        table.getCell(letterModel + "146")?.value(),
        amountOfRooms - 1,
        table.getCell(`${letter}146`)?.numeric(),
        table.getCell("G146")?.value()
      );

      appendObject(
        $("#furnitureList"),
        returnObject(
          table.getCell("F147").value(),
          " ",
          Math.round(furnitureSum * 0.3) + "€"
        )
      );

      furnitureSum *= 1.3;
      appendObject(
        $("#furnitureList"),
        '<div class="division-block pricelist"></div><div class="list-option-container summary"></div>'
      );
      appendObject(
        $("#furnitureList .list-option-container").last(),
        `<span class=\'name summary\'>Total for appliances:</span><span class=\'list-text summary work\'>${Formatter.formatCurrency(
          furnitureSum
        )} €</span>`
      );
    }

    if (
      builtinFurniture ||
      cementScreed ||
      finishingMaterials ||
      windows ||
      demontage ||
      heatedFlooring > 0 ||
      denoising ||
      entranceDoors ||
      conditioning
    ) {
      $("#workList").append(
        '</div><div class="list-option-container margined"></div>'
      );
      $("#workList .list-option-container")
        .last()
        .append(
          `<h4 class=\"pricelist-header small no-padding\">${table
            .getCell("F102")
            .value()}</h4><span class=\'notation amount\'></span><span class=\'notation\'>${
            StringConsts.kCost
          }</span>`
        );

      const optionsPriceArray: number[] = [
        table.getCell(`${letter}103`).numeric() * space,
        table.getCell(`${letter}104`).numeric(),
        space <= 60 ? 440 : 410 * S46 * 2,
        table.getCell(`${letter}106`).numeric(),
        ((space <= 60
          ? 90.02
          : space <= 95
          ? 60.78
          : space < 125
          ? 58.29
          : space >= 125
          ? 79.01
          : 0) +
          (space <= 60
            ? 60.91
            : space <= 95
            ? 64.57
            : space < 125
            ? 63.87
            : space >= 125
            ? 66.24
            : 0)) *
          space *
          table.getCell("T103").numeric(),
        table.getCell(`${letter}108`).numeric() / 1.23,
        table.getCell(`${letter}109`).numeric() / 1.23,
        table.getCell(`${letter}110`).numeric() / 1.23,
      ];
      const optionsAmountArray: number[] = [
        demontage ? 1 : 0,
        windows,
        cementScreed ? 1 : 0,
        heatedFlooring,
        denoising ? 1 : 0,
        entranceDoors ? 1 : 0,
        builtinFurniture ? 1 : 0,
        builtinFurniture ? 1 : 0,
      ];
      const optionsAdressesArray: number[] = [
        103, 104, 105, 106, 107, 108, 109, 110,
      ];

      for (let i = 0; i < optionsAdressesArray.length; i++) {
        const price =
          optionsPriceArray[i] *
          optionsAmountArray[i] *
          table.getCell("S104").numeric();
        if (price === 0 || optionsAmountArray[i] == 0) {
          continue;
        }

        workSum += price;
        appendObject(
          $work,
          returnObject(
            table.getCell("F" + optionsAdressesArray[i])?.value(),
            "",
            Formatter.formatCurrency(price) + "€"
          )
        );
      }

      if (conditioning > 0) {
        const conditioningAppl =
          (conditioning *
            table.getCell(`${letter}113`).numeric() *
            (1 + table.getCell("S113").numeric() / 100)) /
          table.getCell("E5").numeric();
        const conditioningDelivery =
          conditioningAppl * 0.05 * table.getCell("T103").numeric();

        appendObject(
          $work,
          returnObject(
            table.getCell("F113")?.value(),
            "",
            Formatter.formatCurrency(conditioningAppl) + "€"
          )
        );
        appendObject(
          $work,
          returnObject(
            table.getCell("F114")?.value(),
            "",
            Formatter.formatCurrency(conditioningDelivery) + "€"
          )
        );

        workSum += conditioningDelivery + conditioningAppl;
      }
    }

    if (!appliancesBoolTotal) {
      $(".comfy-section").toggle(false);
    }
    if (!furnitureBool) {
      $("#furnitureList").toggle(false);
    }

    appendObject(
      $("#workList"),
      '<div class="division-block pricelist"></div><div class="list-option-container summary"></div>'
    );
    appendObject(
      $("#workList .list-option-container").last(),
      `<span class=\'name summary\'>Total for construction:</span><span class=\'list-text summary work\'>${Formatter.formatCurrency(
        workSum
      )} €</span>`
    );

    function appendFurnitureOption(
      name: string,
      manufacturer: string | null,
      amount: number | null,
      price: number | null,
      dim: string | null
    ) {
      if (!furnitureBool || amount == 0 || !amount || !price) {
        return;
      }

      furnitureSum += price * amount;
      appendObject(
        $furniture,
        '<div class="option-block"><div class="division-block pricelist"></div><div class="list-option-container"></div></div>'
      );
      if (manufacturer === null) {
        appendObject(
          $("#materialsList .option-block .list-option-container").last(),
          `<span class=\'name\'>${name}</span><span class=\'list-text\'>${amount} ${dim} </span>`
        );
        return;
      }
      appendObject(
        $("#furnitureList .option-block .list-option-container").last(),
        `<span class=\'name\'>${name}, ${manufacturer}</span><span class=\'list-text amount\'>${amount} ${dim}</span><span class=\'list-text\'>${Formatter.formatCurrency(
          price * amount
        )} €</span>`
      );
    }
    appendObject(
      $("#materialsList"),
      '<div class="division-block pricelist"></div><div class="list-option-container summary"></div>'
    );
    appendObject(
      $("#materialsList .list-option-container").last(),
      `<span class=\'name summary\'>Всього по будівельній частині:</span><span class=\'list-text summary work\'>${Formatter.formatCurrency(
        workSum
      )} €</span>`
    );
    let applianceSum = 0;

    const $appliancesList = document.getElementById("appliancesList");
    const $appliancesListTotal = document.getElementById("appliancesListTotal");
    const appliancesTuple: number[] = [];

    if (appliances === "gorenje") {
      appliancesTuple.push(...[154, 9]);
    } else if (appliances === "bosch") {
      appliancesTuple.push(...[169, 10]);
    } else if (appliances === "smeg") {
      appliancesTuple.push(...[185, 9]);
    } else {
      appliancesTuple.push(...[154, 9]);
    }

    if (appliancesBoolTotal) {
      let appliancesListString: string = "";
      let appliancesListTotalString: string = "";

      for (let i = 0; i < appliancesTuple[1]; i++) {
        appliancesListString += `<div class="option-block"><div class="division-block white"></div><div class="list-option-container appliances"><span class=\'name white\'>${table
          .getCell("F" + (appliancesTuple[0] + i))
          .value()} ${table
          .getCell("E" + (appliancesTuple[0] + i))
          .value()}</span><span class=\'list-text white\'>${Formatter.formatCurrency(
          table.getCell("D" + (appliancesTuple[0] + i)).numeric() * 0.9
        )} €</span></div></div>`;

        appliancesListTotalString += `<div class="option-block"><div class="division-block pricelist"></div><div class="list-option-container"><span class=\'name\'>${table
          .getCell("F" + (appliancesTuple[0] + i))
          .value()} ${table
          .getCell("E" + (appliancesTuple[0] + i))
          .value()}</span><span class=\'list-text amount\'>1 piece</span><span class=\'list-text\'>${Formatter.formatCurrency(
          table.getCell("D" + (appliancesTuple[0] + i)).numeric() * 0.9
        )}€</span></div></div>`;

        applianceSum +=
          table.getCell("D" + (appliancesTuple[0] + i)).numeric() * 0.9;
      }

      const g35 = table.getCell("G35").numeric();
      const e5 = table.getCell("E5").numeric();
      applianceSum += ((appliancesTuple[1] * g35) / e5) * 0.9;

      appliancesListTotalString += `<div class="option-block"><div class="division-block pricelist"></div><div class="list-option-container"><span class=\'name\'>Доставка техніки</span><span class=\'list-text amount\'></span><span class=\'list-text\'>${Formatter.formatCurrency(
        ((appliancesTuple[1] * g35) / e5) * 0.9
      )} €</span></div></div>`;

      appliancesListTotalString += `<div class="option-block"><div class="division-block pricelist"></div><div class="list-option-container"><span class=\'name\'>${table
        .getCell("F164")
        .value()}</span><span class=\'list-text amount\'></span><span class=\'list-text\'>${Formatter.formatCurrency(
        applianceSum * 0.2
      )} €</span></div></div>`;

      appliancesListString += `<div class="option-block"><div class="division-block white"></div><div class="list-option-container appliances"><span class=\'name white\'>Доставка техніки</span><span class=\'list-text white\'>${Formatter.formatCurrency(
        ((appliancesTuple[1] * g35) / e5) * 0.9
      )} €</span></div></div>`;

      appliancesListString += `<div class="option-block"><div class="division-block white"></div><div class="list-option-container appliances"><span class=\'name white\'>${table
        .getCell("F164")
        .value()}</span><span class=\'list-text white\'>${Formatter.formatCurrency(
        applianceSum * 0.2
      )} €</span></div></div>`;

      applianceSum *= 1.2;

      appliancesListTotalString += `<div class="division-block pricelist"></div><div class="list-option-container summary"><span class=\'name summary\'>Всього по техніці:</span><span class=\'list-text summary work\'>${Formatter.formatCurrency(
        applianceSum
      )} €</span></div>`;

      $appliancesList.innerHTML = appliancesListString;
      $appliancesListTotal.innerHTML = appliancesListTotalString;
    } else {
      $appliancesListTotal.style.display = "none";
    }

    function returnObject(line1: string, line2: string, line3: string): string {
      return `<div class=\"option-block\"><div class=\"division-block pricelist\"></div><div class=\"list-option-container\"><span class=\'name\'>${line1}</span><span class=\'list-text amount\'>${line2}</span><span class=\'list-text\'>${line3}</span></div></div>`;
    }

    function appendObject(obj: JQuery<HTMLElement>, text: any) {
      obj.append(text);
    }

    function getRightStyleLetter(style: string) {
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

      return styleLetter;
    }

    const kitchenPrice = table.getCell(`${styleLetter}121`).numeric();
    const kitchenMontage = table.getCell(`${styleLetter}122`).numeric();
    const kitchenDelivery = table.getCell(`${styleLetter}123`).numeric();
    const kitchenTotal = kitchenMontage + kitchenPrice + kitchenDelivery;

    $("#kitchenPrice").html(Formatter.formatCurrency(kitchenPrice) + " €");
    $("#kitchenMontage").html(Formatter.formatCurrency(kitchenMontage) + " €");
    $("#kitchenDelivery").html(
      Formatter.formatCurrency(kitchenDelivery) + " €"
    );
    $("#kitchenTotal").html(Formatter.formatCurrency(kitchenTotal) + " €");
    $("#kitchenTotalPrice").html(Formatter.formatCurrency(applianceSum) + " €");
    if (furnitureBool) {
      furnitureSum = 0;
    }
    //$("#kitchenTotalPriceDiscount").html(Formatter.formatCurrency(applianceSum * 0.9));

    if (storage.get("summedPrice") < workSum) {
      $("#totalPriceTotal").html(
        Formatter.formatCurrency(workSum / 1.23) + " € *"
      );
      $("#totalVAT").html(Formatter.formatCurrency(workSum) + " € *");
    } else {
      $("#totalPriceTotal").html(
        Formatter.formatCurrency(storage.get("summedPrice") / 1.23)
      );
      $("#totalVAT").html(Formatter.formatCurrency(storage.get("summedPrice")));
    }
  });
