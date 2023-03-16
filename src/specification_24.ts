import { Cell } from "./models/Cell";
import { Table } from "./models/Table";
import { ResponseRow } from "./models/interfaces/Row";
import { LocalStorageHandler } from "./utils/LocalStorageHandler";
import { Utils } from "./utils/Utils";
import { Formatter } from "./utils/Formatter";

//TODO: add form submission data collection via
//https://script.google.com/macros/s/AKfycbyTfAJSAOSn1mB5Ua10w0AHAdKLb1weCd3ve139FkPzbqLEPnBeiE8gGGTq5S6XhmevIQ/exec
//macros

fetch(
  "https://docs.google.com/spreadsheets/d/1KkkpKbytztt48mwP1RGgpVFpfke8-IqB0KLWA8Sn2FE/gviz/tq?tqx=out:json?tq=SELECT *"
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

    //first cell of furniture price column + amount of items to count
    const gorenje: [number, number] = [168, 9];
    const bosch: [number, number] = [182, 10];
    const miele: [number, number] = [197, 9];
    const storage = new LocalStorageHandler();
    let appliances = storage.get("appliances");

    const hrnCourse = table.getCell("G7").numeric();
    $("#course").html(Formatter.formatCurrency(hrnCourse));

    const style: string = storage.get("style");
    let appliancesBoolTotal = Boolean(storage.get("appliances_bool_total")),
      furnitureBool: boolean = Boolean(storage.get("furniture_bool")),
      space: number = storage.get("space"),
      bath: boolean = Boolean(storage.get("bath")),
      shower: boolean = Boolean(storage.get("shower")),
      amountOfRooms: number = storage.get("amount_of_rooms"),
      amountOfBathrooms: number = storage.get("amount_of_bathrooms"),
      letter: string = "",
      letterModel: string = "",
      ceiling: string = storage.get("ceiling"),
      hygienicShower: boolean = storage.get("hygienic_shower"),
      secondGypsumLayer: boolean = storage.get("second_gypsum_layer"),
      floorScreed: boolean = storage.get("floor_screed"),
      heatedFlooring: number = storage.get("heated_flooring"),
      denoising: boolean = storage.get("denoising"),
      entranceDoors: boolean = storage.get("entrance_doors"),
      conditioning: number = storage.get("conditioning"),
      flooring = storage.get("flooring"),
      workSum = 0,
      furnitureSum = 0,
      $furniture = $("#furnitureList");

    const furnitureRate = 1 + table.getCell("S164").numeric() / 100;
    const conditionerRate = 1 + table.getCell("S120").numeric() / 100;
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
    const workInflation = table.getCell("S44").numeric();
    const s42 = table.getCell("S42").numeric();

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
    let ceilingPrice = 0,
      flooringPrice = 0;
    let flooringNum, ceilingNum, flooringNum2, mouldings;

    if (flooring == "laminat") {
      flooringNum = "60";
      flooringNum2 = "91";
      flooringPrice = space * (space <= 70 ? 201.26 : 198.81) * workInflation;
    } else if (flooring == "vynil") {
      flooringNum = "61";
      flooringNum2 = "92";
      flooringPrice = space * (space <= 70 ? 220.33 : 161.8) * workInflation;
    } else if (flooring == "parket") {
      flooringNum = "62";
      flooringNum2 = "93";
      flooringPrice = space * (space <= 80 ? 369.96 : 240.31) * workInflation;
    }

    if (ceiling == "stretch ceiling") {
      ceilingNum = "56";
      mouldings = 0;
      ceilingPrice = table.getCell(`${letter}56`).numeric() * space;
    } else if (ceiling == "gapless") {
      ceilingNum = "57";
      mouldings = 0;
      ceilingPrice =
        space *
        (space <= 60
          ? 611.64
          : space <= 95
          ? 548.9
          : space <= 1000
          ? 581.94
          : 0) *
        workInflation *
        1.65;
    } else if (ceiling == "gypsum") {
      ceilingNum = "58";
      mouldings = 1;
      ceilingPrice =
        space *
        (space <= 60
          ? 283.08
          : space <= 95
          ? 281.22
          : space <= 125
          ? 338.33
          : 362.47) *
        1.35 *
        workInflation;
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
      workInflation;
    let canalisation =
      1974 *
      ((amountOfRooms > 0 ? 3 : 0) +
        (bath ? 1 : 0) +
        (shower ? 1 : 0) +
        amountOfBathrooms * 2) *
      //inflation
      workInflation;
    let vents = space * amountOfBathrooms * (space <= 100 ? 83.2 : 33.98);
    const electricity = table.getCell(`${letter}45`).numeric() * space;
    console.log(`inflation: ${workInflation}`);
    console.log(`rooms: ${amountOfRooms}`);
    console.log(`baths: ${amountOfBathrooms}`);
    console.log(`bath: ${bath}`);
    console.log(`shower: ${shower}`);
    console.log(`vents: ${vents}`);
    console.log(`canalisation: ${canalisation}`);
    console.log(`water: ${water}`);

    const workPriceArray = [
      space *
        (space <= 60
          ? 1142.78
          : space <= 95
          ? 883.87
          : space <= 125
          ? 819.43
          : 925.61) *
        workInflation,
      space *
        (space <= 60
          ? 700.67
          : space <= 100
          ? 687.36
          : space <= 130
          ? 341.25
          : 317.36) *
        workInflation *
        1.1,
      table.getCell(`${letter}50`).numeric(),
      space * (space <= 50 ? 1000 : 990) * workInflation,
      140 *
        (space <= 60
          ? table.getCell(`${letter}54`).numeric()
          : space <= 80
          ? 50
          : space <= 120
          ? 78
          : space <= 180
          ? 114
          : 162) *
        (style == "modern" || style == "neoclassic" ? 1 : 0),
      space *
        (space <= 60
          ? 418.86
          : space <= 100
          ? 416.29
          : space <= 135
          ? 443.73
          : 481.67) *
        (ceiling == "gypsum" ? 1 : 0) *
        workInflation,
      ceilingPrice,
      flooringPrice,
      space * (space <= 70 ? 114.47 : 86.84) * workInflation,
      space *
        (space <= 70 ? 206.59 : 170) *
        workInflation *
        (style == "japandi" || style == "fusion" ? 1 : 0),
    ];
    const workAmountArray = [
      1,
      amountOfBathrooms,
      amountOfRooms + amountOfBathrooms,
      1,
      1,
      mouldings,
      1,
      1,
      1,
      1,
    ];
    const workAdressesArray = [
      48,
      49,
      50,
      52,
      54,
      53,
      ceilingNum,
      flooringNum,
      64,
      66,
    ];

    workSum +=
      water * s42 +
      ((bath ? amountOfBathrooms * table.getCell(`${letter}47`).numeric() : 0) +
        (shower
          ? amountOfBathrooms * table.getCell(`${letter}46`).numeric()
          : 0)) *
        s42 -
      (800 + 950) * workInflation;
    textObject = returnObject(
      table.getCell("F42").value(),
      "",
      Math.round(
        water * s42 +
          ((bath
            ? amountOfBathrooms * table.getCell(`${letter}47`).numeric()
            : 0) +
            (shower
              ? amountOfBathrooms * table.getCell(`${letter}46`).numeric()
              : 0)) *
            s42 -
          (800 + 950) * workInflation
      ) + " грн."
    );
    $("#workList").append(textObject);

    workSum += canalisation * s42;
    textObject = returnObject(
      table.getCell("F43").value(),
      "",
      Math.round(canalisation * s42) + " грн."
    );
    $("#workList").append(textObject);

    workSum += vents * s42 * workInflation;
    textObject = returnObject(
      table.getCell("F44").value(),
      "",
      Math.round(vents * s42 * workInflation) + " грн."
    );
    $("#workList").append(textObject);

    workSum += electricity * s42;
    textObject = returnObject(
      table.getCell("F45").value(),
      "",
      Math.round(electricity * s42) + " грн."
    );
    $("#workList").append(textObject);

    if (shower) {
      //workSum += Math.round(parseInt(shower));
      textObject = returnObject(
        table.getCell("F46").value(),
        "",
        table
          .getCell(getRightStyleLetter(style) + 46)
          .numeric()
          .toString() + " грн."
      );
      $("#workList").append(textObject);
    }

    if (bath) {
      //workSum += Math.round(parseInt(bath));
      textObject = returnObject(
        table.getCell("F47").value(),
        "",
        table
          .getCell(getRightStyleLetter(style) + 47)
          .numeric()
          .toString() + " грн."
      );
      $("#workList").append(textObject);
    }

    for (let i = 0; i < workAdressesArray.length; i++) {
      const price = workPriceArray[i] * workAmountArray[i] * s42;

      if (price === 0 || isNaN(price)) {
        continue;
      }

      workSum += price;
      textObject = returnObject(
        table.getCell("F" + workAdressesArray[i]).value(),
        "",
        Math.round(price) + " грн."
      );

      $("#workList").append(textObject);
    }
    textObject = returnObject(
      table.getCell("F66").value(),
      "",
      Math.round(workSum * 0.022 * s42) + " грн."
    );
    $("#workList").append(textObject);
    workSum += workSum * 0.022 * s42;

    textObject = returnObject(
      table.getCell("F67").value(),
      "",
      Math.round((months * 2 * 1200 + 3000 + space * 100 + space * 120) * s42) +
        " грн."
    );
    $("#workList").append(textObject);
    workSum += (months * 2 * 1200 + 3000 + space * 100) * s42;

    $("#workList").append(
      '</div><div class="list-option-container margined"></div>'
    );
    $("#workList .list-option-container")
      .last()
      .append(
        `<h4 class=\"pricelist-header small no-padding\">Комплектуючі та чистові матеріали</h4><span class=\'notation amount\'> </span><span class=\'notation\'>Ціна</span>`
      );

    let materialsPriceArray = [
      table.getCell(`${letter}72`).numeric(),
      table.getCell(`${letter}73`).numeric(),
      table.getCell(`${letter}74`).numeric(),
      table.getCell(`${letter}75`).numeric(),
      table.getCell(`${letter}76`).numeric(),
      table.getCell(`${letter}77`).numeric(),
      table.getCell(`${letter}79`).numeric(),
      table.getCell(`${letter}80`).numeric(),
      table.getCell(`${letter}81`).numeric(),
      table.getCell(`${letter}82`).numeric(),
      table.getCell(`${letter}83`).numeric(),
      table.getCell(`${letter}84`).numeric(),
      table.getCell(`${letter}85`).numeric(),
      table.getCell(`${letter}86`).numeric(),
      table.getCell(`${letter}87`).numeric(),
      table.getCell(`${letter}88`).numeric(),
      table.getCell(`${letter}89`).numeric(),
      table.getCell(`${letter + flooringNum2}`).numeric(),
      space * 100 * table.getCell("S74").numeric(),
    ];
    let materialsAmountArray = [
      amountOfBathrooms + amountOfRooms,
      amountOfBathrooms * 35,
      0.66 * space,
      0.66 * space,
      0.59 * space,
      space <= 50 ? 42 : space <= 90 ? 60 : space <= 120 ? 84 : 90,
      amountOfBathrooms,
      amountOfBathrooms,
      amountOfBathrooms,
      amountOfBathrooms,
      Number(bath),
      Number(shower),
      Number(shower),
      amountOfBathrooms,
      amountOfBathrooms,
      amountOfBathrooms,
      amountOfBathrooms,
      space < 100
        ? space - amountOfBathrooms * 7
        : space - amountOfBathrooms * 10,
      1,
    ];
    let materialsAdressesArray = [
      72,
      73,
      74,
      75,
      76,
      77,
      79,
      80,
      81,
      82,
      83,
      84,
      85,
      86,
      87,
      88,
      89,
      flooringNum2,
      94,
    ];
    let materialsDimArray = [
      null,
      null,
      null,
      null,
      null,
      null,
      79,
      80,
      81,
      82,
      83,
      84,
      85,
      86,
      87,
      88,
      89,
      flooringNum2,
      94,
    ];

    for (let i = 0; i < materialsAdressesArray.length; i++) {
      let price =
        materialsPriceArray[i] *
        materialsAmountArray[i] *
        table.getCell("S72").numeric();

      if (price === 0 || isNaN(price)) {
        continue;
      }

      workSum += price;
      textObject = returnObject(
        table.getCell("F" + materialsAdressesArray[i]).value(),
        "",
        Math.round(price) + " грн."
      );

      $("#workList").append(textObject);
    }

    /////
    $("#workList").append(
      '</div><div class="list-option-container margined"></div>'
    );
    $("#workList .list-option-container")
      .last()
      .append(
        `<h4 class=\"pricelist-header small no-padding\">Витрати компанії</h4><span class=\'notation amount\'>Кількість</span><span class=\'notation\'>Ціна</span>`
      );
    textObject = `<div class=\"option-block\"><div class=\"division-block pricelist\"></div><div class=\"list-option-container\"><span class=\'name\'>${table
      .getCell("F100")
      .value()}</span><span class=\'list-text amount\'>${months} міс.</span><span class=\'list-text\'> </span></div></div>`;
    $("#workList").append(textObject);

    const casualtiesPriceArray = [
      table.getCell(`${letter}101`).numeric(),
      table.getCell(`${letter}102`).numeric(),
    ];
    const casualtiesAmountArray = [months, months];
    const casualtiesAdressesArray = [101, 102];

    for (let i = 0; i < casualtiesAdressesArray.length; i++) {
      let price = casualtiesPriceArray[i] * casualtiesAmountArray[i];
      workSum += price;
      textObject = `<div class=\"option-block\"><div class=\"division-block pricelist\"></div><div class=\"list-option-container\"><span class=\'name\'>${table
        .getCell(`F${casualtiesAdressesArray[i]}`)
        .value()}</span><span class=\'list-text amount\'>${Math.round(
        price / months
      )} грн./місяць</span><span class=\'list-text\'>${Math.round(
        price
      )} грн.</span></div></div>`;
      $("#workList").append(textObject);
    }
    workSum +=
      hrnCourse * space * table.getCell("G37").numeric() +
      months * table.getCell(`${letter}214`).numeric();
    textObject = `<div class=\"option-block\"><div class=\"division-block pricelist\"></div><div class=\"list-option-container\"><span class=\'name\'>
		${table.getCell(`F212`).value()}
			</span><span class=\'list-text amount\'></span><span class=\'list-text\'>${Formatter.formatCurrency(
        hrnCourse * table.getCell("G37").numeric() * space
      )} грн.</span></div></div>`;
    $("#workList").append(textObject);
    textObject = `<div class=\"option-block\"><div class=\"division-block pricelist\"></div><div class=\"list-option-container\"><span class=\'name\'>${table
      .getCell("F214")
      .value()}</span><span class=\'list-text amount\'>${table
      .getCell(`${letter}214`)
      .numeric()} грн./місяць</span><span class=\'list-text\'>${Math.round(
      months * table.getCell(`${letter}214`).numeric()
    )} грн.</span></div></div>`;
    $("#workList").append(textObject);

    if (furnitureBool) {
      $("#furnitureList").append(
        '</div><div class="list-option-container"></div>'
      );
      $("#furnitureList .list-option-container")
        .last()
        .append(
          `<h4 class=\"pricelist-header small no-padding\">Кухня</h4><span class=\'notation amount\'>Кількість</span><span class=\'notation\'>Ціна</span>`
        );

      appendFurnitureOption(
        table.getCell("F127").value(),
        table.getCell(`${letterModel}127`)?.value(),
        1,
        table.getCell(`${letter}127`).numeric(),
        table.getCell("G120").value()
      );

      furnitureSum +=
        Math.round(table.getCell(`${letter}129`).numeric() * furnitureRate) +
        Math.round(table.getCell(`${letter}128`).numeric() * furnitureRate);
      $furniture.append(
        '<div class="option-block"><div class="division-block pricelist small-heading"></div><div class="list-option-container"></div></div>'
      );
      $("#furnitureList .option-block .list-option-container")
        .last()
        .append(
          `<span class=\'name\'>${table.getCell("F127").value()}
						</span><span class=\'list-text amount\'>1 шт.</span><span class=\'list-text\'>${Formatter.formatCurrency(
              table.getCell(`${letter}128`).numeric() * furnitureRate
            )} грн.</span>`
        );
      $furniture.append(
        '<div class="option-block"><div class="division-block pricelist small-heading"></div><div class="list-option-container"></div></div>'
      );
      $("#furnitureList .option-block .list-option-container")
        .last()
        .append(
          `<span class=\'name\'>${table
            .getCell("F128")
            .value()}</span><span class=\'list-text amount\'>1 шт.</span><span class=\'list-text\'>${Formatter.formatCurrency(
            table.getCell(`${letter}129`).numeric() * furnitureRate
          )} грн.</span>`
        );

      appendFurnitureOption(
        table.getCell("F130").value(),
        table.getCell(`${letterModel}130`)?.value(),
        1,
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
      appendFurnitureOption(
        table.getCell("F133").value(),
        table.getCell(letterModel + "133")?.value(),
        4,
        table.getCell(`${letter}133`)?.numeric(),
        table.getCell("G133")?.value()
      );
      appendFurnitureOption(
        table.getCell("F134").value(),
        table.getCell(letterModel + "134")?.value(),
        1,
        table.getCell(`${letter}134`)?.numeric(),
        table.getCell("G134")?.value()
      );

      appendObject(
        $("#furnitureList"),
        '</div><div class="list-option-container margined"></div>'
      );
      appendObject(
        $("#furnitureList .list-option-container").last(),
        `<h4 class=\"pricelist-header small no-padding\">Вітальня</h4><span class=\'notation amount\'>Кількість</span><span class=\'notation\'>Ціна</span>`
      );

      appendFurnitureOption(
        table.getCell("F138").value(),
        table.getCell(letterModel + "138")?.value(),
        1,
        table.getCell(`${letter}138`)?.numeric(),
        table.getCell("G138")?.value()
      );
      appendFurnitureOption(
        table.getCell("F139").value(),
        table.getCell(letterModel + "139")?.value(),
        1,
        table.getCell(`${letter}139`)?.numeric(),
        table.getCell("G139")?.value()
      );

      appendObject(
        $("#furnitureList"),
        '</div><div class="list-option-container margined"></div>'
      );
      appendObject(
        $("#furnitureList .list-option-container").last(),
        `<h4 class=\"pricelist-header small no-padding\">Спальня</h4><span class=\'notation amount\'>Кількість</span><span class=\'notation\'>Ціна</span>`
      );

      appendFurnitureOption(
        table.getCell("F141").value(),
        table.getCell(letterModel + "141")?.value(),
        1,
        table.getCell(`${letter}141`)?.numeric(),
        table.getCell("G141")?.value()
      );
      appendFurnitureOption(
        table.getCell("F142").value(),
        table.getCell(letterModel + "142")?.value(),
        1,
        table.getCell(`${letter}142`)?.numeric(),
        table.getCell("G142")?.value()
      );
      appendFurnitureOption(
        table.getCell("F143").value(),
        table.getCell(letterModel + "143")?.value(),
        2,
        table.getCell(`${letter}143`)?.numeric(),
        table.getCell("G143")?.value()
      );

      appendFurnitureOption(
        table.getCell("F144").value(),
        table.getCell(letterModel + "144")?.value(),
        1,
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
        1,
        table.getCell(`${letter}146`)?.numeric(),
        table.getCell("G146")?.value()
      );

      appendObject(
        $("#furnitureList"),
        '</div><div class="list-option-container margined"></div>'
      );
      $("#furnitureList .list-option-container")
        .last()
        .append(
          `<h4 class=\"pricelist-header small no-padding\">Світильники</h4><span class=\'notation amount\'>Кількість</span><span class=\'notation\'>Ціна</span>`
        );

      appendFurnitureOption(
        table.getCell("F148").value(),
        table.getCell(letterModel + "148")?.value(),
        Math.ceil(space * 0.48),
        table.getCell(`${letter}148`)?.numeric(),
        table.getCell("G148")?.value()
      );
      appendFurnitureOption(
        table.getCell("F149").value(),
        table.getCell(letterModel + "149")?.value(),
        1,
        table.getCell(`${letter}149`)?.numeric(),
        table.getCell("G149")?.value()
      );
      appendFurnitureOption(
        table.getCell("F151").value(),
        table.getCell(letterModel + "151")?.value(),
        1,
        table.getCell(`${letter}151`)?.numeric(),
        table.getCell("G151")?.value()
      );
      appendFurnitureOption(
        table.getCell("F153").value(),
        table.getCell(letterModel + "153")?.value(),
        1,
        table.getCell(`${letter}153`)?.numeric(),
        table.getCell("G153")?.value()
      );
      appendFurnitureOption(
        table.getCell("F154").value(),
        table.getCell(letterModel + "154")?.value(),
        1,
        table.getCell(`${letter}154`)?.numeric(),
        table.getCell("G154")?.value()
      );

      appendFurnitureOption(
        table.getCell("F150").value(),
        table.getCell(letterModel + "150")?.value(),
        amountOfRooms > 1 ? 1 : 0,
        table.getCell(`${letter}150`)?.numeric(),
        table.getCell("G150")?.value()
      );
      appendFurnitureOption(
        table.getCell("F152").value(),
        table.getCell(letterModel + "152")?.value(),
        2,
        table.getCell(`${letter}152`)?.numeric(),
        table.getCell("G152")?.value()
      );

      $("#furnitureList").append(
        '</div><div class="list-option-container margined"></div>'
      );
      $("#furnitureList .list-option-container")
        .last()
        .append(
          `<h4 class=\"pricelist-header small no-padding\">Декор</h4><span class=\'notation amount\'>Кількість</span><span class=\'notation\'>Ціна</span>`
        );

      appendFurnitureOption(
        table.getCell("F156").value(),
        table.getCell(letterModel + "156")?.value(),
        amountOfRooms,
        table.getCell(`${letter}156`)?.numeric(),
        table.getCell("G156")?.value()
      );
      appendFurnitureOption(
        table.getCell("F157").value(),
        table.getCell(letterModel + "157")?.value(),
        amountOfRooms,
        table.getCell(`${letter}157`)?.numeric(),
        table.getCell("G157")?.value()
      );
      appendFurnitureOption(
        table.getCell("F158").value(),
        table.getCell(letterModel + "158")?.value(),
        amountOfRooms,
        table.getCell(`${letter}158`)?.numeric(),
        table.getCell("G158")?.value()
      );

      appendFurnitureOption(
        table.getCell("F159").value(),
        table.getCell(letterModel + "159")?.value(),
        1,
        table.getCell(`${letter}159`)?.numeric(),
        table.getCell("G159")?.value()
      );
      appendFurnitureOption(
        table.getCell("F160").value(),
        table.getCell(letterModel + "160")?.value(),
        amountOfRooms - 1,
        table.getCell(`${letter}160`)?.numeric(),
        table.getCell("G160")?.value()
      );

      appendObject(
        $("#furnitureList"),
        returnObject(
          table.getCell("F162").value(),
          " ",
          Math.round(furnitureSum * 0.03 * furnitureRate) + " грн."
        )
      );
      furnitureSum += furnitureSum * 0.03 * furnitureRate;
      appendObject(
        $("#furnitureList"),
        '<div class="division-block pricelist"></div><div class="list-option-container summary"></div>'
      );
      appendObject(
        $("#furnitureList .list-option-container").last(),
        `<span class=\'name summary\'>Всього по меблях:</span><span class=\'list-text summary work\'>${Formatter.formatCurrency(
          Math.round(furnitureSum)
        )} грн.</span>`
      );
    }

    if (
      hygienicShower ||
      secondGypsumLayer ||
      floorScreed ||
      heatedFlooring ||
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
          `<h4 class=\"pricelist-header small no-padding\"> Опції</h4><span class=\'notation amount\'> </span><span class=\'notation\'>Ціна</span>`
        );
    }

    const optionInflation = table.getCell("T109").numeric();

    let optionsPriceArray = [
      space * table.getCell(`${letter}109`).numeric() * 1.25,
      +hygienicShower * table.getCell(`${letter}110`).numeric() * 1.25,
      table.getCell(`${letter}111`).numeric() * 1.25,
      space *
        1.25 *
        (space <= 60
          ? 306.26
          : space <= 95
          ? 246.43
          : space <= 125
          ? 221.2
          : 277.29) *
        optionInflation,
      (+denoising + mouldings == 2 ? 1 : 0) *
        space *
        1.25 *
        (space <= 60
          ? 60.91
          : space <= 95
          ? 64.57
          : space <= 125
          ? 63.87
          : 66.24) *
        optionInflation +
        (+denoising + mouldings === 1 ? 1 : 0) *
          space *
          table.getCell(`${letter}114`).numeric() *
          1.25,
      +denoising > 0
        ? space *
          1.25 *
          (space <= 60
            ? 90.02
            : space <= 95
            ? 60.78
            : space <= 125
            ? 58.29
            : 79.01) *
          optionInflation
        : 0,
      table.getCell(`${letter}116`).numeric() * 1.1 +
        table.getCell(`${letter}117`).numeric() * 1.25,
      table.getCell(`${letter}119`).numeric() * space * 1.25 +
        table.getCell(`${letter}120`).numeric() * conditionerRate * 1.05,
    ];
    let optionsAmountArray = [
      floorScreed,
      hygienicShower ? amountOfBathrooms : 0,
      heatedFlooring,
      secondGypsumLayer,
      denoising,
      denoising,
      entranceDoors,
      conditioning,
    ];
    let optionsAdressesArray = [109, 110, 111, 112, 113, 115, 116, 120];

    for (let i = 0; i < optionsAdressesArray.length; i++) {
      let price = optionsPriceArray[i] * Number(optionsAmountArray[i]);
      if (
        price === 0 ||
        isNaN(price) ||
        optionsAmountArray[i] == 0 ||
        optionsAdressesArray[i] == null
      ) {
        continue;
      }

      workSum += price;
      appendObject(
        $work,
        returnObject(
          table.getCell("F" + optionsAdressesArray[i])?.value() +
            ", " +
            table.getCell(`${letterModel}${optionsAdressesArray[i]}`)?.value(),
          "",
          Math.round(price) + " грн."
        )
      );
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
      `<span class=\'name summary\'>Всього по будівельній частині:</span><span class=\'list-text summary work\'>${Formatter.formatCurrency(
        workSum
      )} грн.</span>`
    );

    function appendFurnitureOption(
      name: string,
      manufacturer: string,
      amount: number,
      price: number,
      dim: string
    ) {
      if (!furnitureBool) {
        return;
      }

      if (amount == 0 || !amount || !price) {
        return;
      }
      furnitureSum += price * furnitureRate * amount;
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
          price * amount * (1 + table.getCell("S164").numeric() / 100)
        )} грн.</span>`
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
      )} грн.</span>`
    );
    let sum = 0;

    let $appliances = $("#appliancesList");
    let $appliancesList = $("#appliancesListTotal");
    let array;

    if (appliances === "gorenje") {
      array = gorenje;
    } else if (appliances === "bosch") {
      array = bosch;
    } else if (appliances === "miele") {
      array = miele;
    }

    let quantity = 0;
    if (appliances !== "undefined") {
      quantity = 1;
      for (let i = 0; i < array[1]; i++) {
        $appliances.append(
          '<div class="option-block"><div class="division-block white"></div><div class="list-option-container appliances"></div></div>'
        );
        $("#appliancesList .option-block .list-option-container.appliances")
          .last()
          .append(
            `<span class=\'name white\'>${table
              .getCell("F" + (array[0] + i))
              .value()} ${table
              .getCell("E" + (array[0] + i))
              .value()}</span><span class=\'list-text white\'>${Formatter.formatCurrency(
              table.getCell("D" + (array[0] + i)).numeric()
            )} грн.</span>`
          );

        if (appliancesBoolTotal) {
          $appliancesList.append(
            '<div class="option-block"><div class="division-block pricelist"></div><div class="list-option-container"></div></div>'
          );
          $("#appliancesListTotal .option-block .list-option-container")
            .last()
            .append(
              `<span class=\'name\'>${table
                .getCell("F" + (array[0] + i))
                .value()} ${table
                .getCell("E" + (array[0] + i))
                .value()}</span><span class=\'list-text amount\'>1 шт.</span><span class=\'list-text\'>${Formatter.formatCurrency(
                table.getCell("D" + (array[0] + i)).numeric()
              )} грн.</span>`
            );
        }
        sum += table.getCell("D" + (array[0] + i)).numeric();
        sum += table.getCell("G36").numeric();
        quantity++;
      }

      if (appliancesBoolTotal) {
        const g36 = table.getCell("G36").numeric();
        sum += g36;
        $appliancesList.append(
          '<div class="option-block"><div class="division-block pricelist"></div><div class="list-option-container"></div></div>'
        );
        $("#appliancesListTotal .option-block .list-option-container")
          .last()
          .append(
            `<span class=\'name\'>Доставка техніки</span><span class=\'list-text amount\'></span><span class=\'list-text\'>${
              quantity * g36
            } грн.</span>`
          );
        $appliances.append(
          '<div class="option-block"><div class="division-block white"></div><div class="list-option-container appliances"></div></div>'
        );
        $("#appliancesList .option-block .list-option-container.appliances")
          .last()
          .append(
            `<span class=\'name white\'>Доставка техніки</span><span class=\'list-text white\'>${
              quantity * g36
            } грн.</span>`
          );
        $appliancesList.append(
          '<div class="division-block pricelist"></div><div class="list-option-container summary"></div>'
        );

        $("#appliancesTotalDiscount").html(Formatter.formatCurrency(sum * 0.9));

        $("#appliancesListTotal .list-option-container")
          .last()
          .append(
            `<span class=\'name summary\'>Всього по техніці:</span><span class=\'list-text summary work\'>${Formatter.formatCurrency(
              sum
            )} грн.</span>`
          );
        $("#appliancesListTotal .list-option-container")
          .last()
          .append(
            `<span class=\'name summary\'><b>Всього по техніці, зі знижкою</b>:</span><span class=\'list-text summary work\'>${Formatter.formatCurrency(
              sum * 0.9
            )} грн.</span>`
          );
      }
    }
    if (!appliancesBoolTotal) {
      $("#appliancesListTotal").toggle(false);
    }

    const styleLetter = getRightStyleLetter(style);

    function returnObject(line1: string, line2: string, line3: string) {
      return `<div class=\"option-block\"><div class=\"division-block pricelist\"></div><div class=\"list-option-container\"><span class=\'name\'>${line1}</span><span class=\'list-text amount\'>${line2}</span><span class=\'list-text\'>${line3}</span></div></div>`;
    }

    function appendObject(obj: JQuery<HTMLElement>, text: string) {
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

    const kitchenPrice = table.getCell(`${styleLetter}127`).numeric();
    const kitchenMontage = table.getCell(`${styleLetter}128`).numeric();
    const kitchenDelivery = table.getCell(`${styleLetter}129`).numeric();
    const kitchenTotal = kitchenMontage + kitchenPrice + kitchenDelivery;

    $("#kitchenPrice").html(Formatter.formatCurrency(kitchenPrice) + " грн.");
    $("#kitchenMontage").html(
      Formatter.formatCurrency(kitchenMontage) + " грн."
    );
    $("#kitchenDelivery").html(
      Formatter.formatCurrency(kitchenDelivery) + " грн."
    );
    $("#kitchenTotal").html(Formatter.formatCurrency(kitchenTotal) + " грн");
    $("#kitchenTotalPrice").html(Formatter.formatCurrency(sum) + " грн.");
    if (furnitureBool) {
      furnitureSum = 0;
    }
    $("#kitchenTotalPriceDiscount").html(Formatter.formatCurrency(sum * 0.9));
    $("#discountTotal").html(
      `<span class='bold-text-7'>${Formatter.formatCurrency(
        sum - sum * 0.9
      )} грн.</span>`
    );
    //if (!furnitureBool && !appliancesBoolTotal) {
    //$("#totalPriceTotal").html(Formatter.formatCurrency(Math.round(workSum) + " грн. *"));
    //} else {

    if (storage.get("summedPrice") * hrnCourse < workSum) {
      $("#totalPriceTotal").html(Formatter.formatCurrency(workSum) + " грн. *");
    } else {
      $("#totalPriceTotal").html(
        Formatter.formatCurrency(storage.get("summedPrice") * hrnCourse) +
          " грн. *"
      );
    }
    //}
  });
