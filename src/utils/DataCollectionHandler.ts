import { Formatter } from "./Formatter";
import { LocalStorageHandler } from "./LocalStorageHandler";

export class DataCollectionHandler {
  private _storage: LocalStorageHandler;

  constructor(storage: LocalStorageHandler) {
    this._storage = storage;
  }

  async collectPortugalClientData(fd: FormData): Promise<void | Response> {
    return fetch(
      "https://script.google.com/macros/s/AKfycbzyzzY4bi4yQoHdsTeVmm8BxGQ-bGW_-rK_erhrFA0zKak6rQ27p-k9Mx3HWk6vKEIatw/exec",
      {
        method: "POST",
        body: fd,
      }
    ).catch((error) =>
      console.error("Failed to collect consultation data!", error.message)
    );
  }

  async collectClientData(fd: FormData): Promise<void | Response> {
    return fetch(
      "https://script.google.com/macros/s/AKfycbyTfAJSAOSn1mB5Ua10w0AHAdKLb1weCd3ve139FkPzbqLEPnBeiE8gGGTq5S6XhmevIQ/exec",
      {
        method: "POST",
        body: fd,
      }
    ).catch((error) =>
      console.error("Failed to collect consultation data!", error.message)
    );
  }

  async collectCalcData(): Promise<void | Response> {
    const fd = new FormData();

    const style = this._storage.get("style");
    const ukrStyle =
      style === "cozy"
        ? "Козі"
        : style === "japandi"
        ? "Джапанді"
        : style === "fusion"
        ? "Фьюжн"
        : style === "modern"
        ? "Модерн"
        : "Нео Класика";

    const space = this._storage.get("space");
    const months =
      (space <= 40
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
        : 9) + (style == "modern" || style == "neoclassic" ? 1 : 0);

    fd.append("Стиль", ukrStyle);
    fd.append("Ціна за метр", this._storage.get("costPerMetre"));
    fd.append("Загальна ціна", this._storage.get("summedPrice"));
    fd.append("Площа", space);
    fd.append("Кількість кімнат", this._storage.get("amount_of_rooms"));
    fd.append("Кількість санвузлів", this._storage.get("amount_of_bathrooms"));
    fd.append("Ванна", this._storage.get("bath"));
    fd.append("Душ", this._storage.get("shower"));

    const ceilingVal = this._storage.get("ceiling");
    const flooringVal = this._storage.get("flooring");
    const appliancesEnabled = this._storage.get("appliances_bool_total");
    const ceiling =
        ceilingVal == "stretch ceiling"
          ? "Натяжна матова"
          : ceilingVal == "gapless"
          ? "Натяжна бесщелева матова"
          : "Гіпсокартон",
      flooring =
        flooringVal == "laminat"
          ? "Ламінат"
          : flooringVal == "vynil"
          ? "Вінілова підлога"
          : "Паркет",
      appliances = appliancesEnabled
        ? this._storage.get("appliances").charAt(0).toUpperCase() +
          this._storage.get("appliances").slice(1)
        : "Не обрано";

    fd.append("Стеля", ceiling);
    fd.append("Підлогове покриття", flooring);
    fd.append("Стяжка підлоги", this._storage.get("floor_screed"));
    fd.append("Шумоізоляція", this._storage.get("denoising"));
    fd.append("Вхідні двері", this._storage.get("entrance_doors"));
    fd.append(
      "Другий шар гіпсокартону",
      this._storage.get("second_gypsum_layer")
    );
    fd.append("Гігієнічний душ", this._storage.get("hygienic_shower"));
    fd.append("Тепла підлога", this._storage.get("heated_flooring"));
    fd.append("Кондиціювання", this._storage.get("conditioning"));
    fd.append("Меблі", appliancesEnabled);
    fd.append("Техніка", appliances);
    fd.append("Термін виконання робіт", months.toString());

    fetch(
      "https://script.google.com/macros/s/AKfycbyt7QOcA0Dp_2voHy2w1rVGCllwvW_SX_V8iDTD5E7zJohqH0C4/exec",
      {
        method: "POST",
        body: fd,
      }
    );
  }

  async collectPortugalCalcData(style: string): Promise<void | Response> {
    const appliancesBoolTotal = Boolean(
        this._storage.get("appliances_bool_total")
      ),
      furnitureBool: boolean = Boolean(this._storage.get("furniture_bool")),
      space: number = this._storage.get("space"),
      bath: boolean = Boolean(this._storage.get("bath")),
      shower: boolean = Boolean(this._storage.get("shower")),
      amountOfRooms: number = this._storage.get("amount_of_rooms"),
      amountOfBathrooms: number = this._storage.get("amount_of_bathrooms"),
      demontage: boolean = Boolean(this._storage.get("demontage")),
      windows: number = this._storage.get("windows_installation"),
      finishingMaterials: boolean = Boolean(
        this._storage.get("finishing_materials")
      ),
      cementScreed: boolean = Boolean(this._storage.get("cement_screed")),
      builtinFurniture: boolean = Boolean(
        this._storage.get("builtin_furiture")
      ),
      heatedFlooring: number = this._storage.get("heated_flooring"),
      denoising: boolean = Boolean(this._storage.get("denoising")),
      entranceDoors: boolean = Boolean(this._storage.get("entrance_doors")),
      conditioning: number = this._storage.get("conditioning"),
      flooring: string = this._storage.get("flooring"),
      transportationExpenses: number = this._storage.get(
        "transportation_expenses"
      ),
      appliances: string = this._storage.get("appliances"),
      summedPrice: number = this._storage.get("summedPrice"),
      costPerMetre: number = this._storage.get("costPerMetre"),
      months =
        (space <= 40
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
          : 9) + (style == "modern" || style == "neoclassic" ? 1 : 0);

    const dataCollectionFd = new FormData();
    dataCollectionFd.append("Style", style);
    dataCollectionFd.append(
      "Total cost VAT",
      Formatter.formatCurrency(summedPrice)
    );
    dataCollectionFd.append(
      "Total cost",
      Formatter.formatCurrency(summedPrice / 1.23)
    );
    dataCollectionFd.append(
      "Cost per metre",
      Formatter.formatCurrency(costPerMetre)
    );
    dataCollectionFd.append(
      "Cost per metre VAT",
      Formatter.formatCurrency(costPerMetre * 1.23)
    );
    dataCollectionFd.append("Area", space.toString());
    dataCollectionFd.append("Number of bedrooms", amountOfRooms.toString());
    dataCollectionFd.append(
      "Number of bathrooms",
      amountOfBathrooms.toString()
    );
    dataCollectionFd.append("Bath", bath ? "1" : "0");
    dataCollectionFd.append("Shower", shower ? "1" : "0");
    dataCollectionFd.append(
      "Distance from Lisbon",
      transportationExpenses.toString()
    );
    dataCollectionFd.append("Flooring", flooring);
    dataCollectionFd.append(
      "Finishing materials",
      finishingMaterials ? "1" : "0"
    );
    dataCollectionFd.append("Dismantling works", demontage ? "1" : "0");
    dataCollectionFd.append("Cement screed", cementScreed ? "1" : "0");
    dataCollectionFd.append("Entrance doors", entranceDoors ? "1" : "0");
    dataCollectionFd.append("Soundproofing", denoising ? "1" : "0");
    dataCollectionFd.append("Built-in furniture", builtinFurniture ? "1" : "0");

    dataCollectionFd.append("Underfloor heating", heatedFlooring.toString());
    dataCollectionFd.append("Air conditioning", conditioning.toString());
    dataCollectionFd.append("Window installation", windows.toString());

    dataCollectionFd.append("Decorating", furnitureBool ? "1" : "0");
    dataCollectionFd.append(
      "Appliances",
      appliancesBoolTotal ? appliances : "0"
    );
    dataCollectionFd.append("Time to completion", months.toString());

    return fetch(
      "https://script.google.com/macros/s/AKfycbwnwi3SZ8gK3zSYW2DEoc6BtY9HS1stpRSHPW6pATmX2UawetpC-74YPZ5LjjX282Ki/exec",
      { method: "POST", body: dataCollectionFd }
    ).catch((error) => console.error(error));
  }

  async collectPortugalSpecificationData(
    fd: FormData
  ): Promise<void | Response> {
    const style: string = this._storage.get("style"),
      appliancesBoolTotal = Boolean(this._storage.get("appliances_bool_total")),
      furnitureBool: boolean = Boolean(this._storage.get("furniture_bool")),
      space: number = this._storage.get("space"),
      bath: boolean = Boolean(this._storage.get("bath")),
      shower: boolean = Boolean(this._storage.get("shower")),
      amountOfRooms: number = this._storage.get("amount_of_rooms"),
      amountOfBathrooms: number = this._storage.get("amount_of_bathrooms"),
      demontage: boolean = Boolean(this._storage.get("demontage")),
      windows: number = this._storage.get("windows_installation"),
      finishingMaterials: boolean = Boolean(
        this._storage.get("finishing_materials")
      ),
      cementScreed: boolean = Boolean(this._storage.get("cement_screed")),
      builtinFurniture: boolean = Boolean(
        this._storage.get("builtin_furiture")
      ),
      heatedFlooring: number = this._storage.get("heated_flooring"),
      denoising: boolean = Boolean(this._storage.get("denoising")),
      entranceDoors: boolean = Boolean(this._storage.get("entrance_doors")),
      conditioning: number = this._storage.get("conditioning"),
      flooring: string = this._storage.get("flooring"),
      transportationExpenses: number = this._storage.get(
        "transportation_expenses"
      ),
      appliances: string = this._storage.get("appliances"),
      summedPrice: number = this._storage.get("summedPrice"),
      costPerMetre: number = this._storage.get("costPerMetre"),
      months =
        (space <= 40
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
          : 9) + (style == "modern" || style == "neoclassic" ? 1 : 0);

    fd.append("Style", style);
    fd.append("Total cost VAT", Formatter.formatCurrency(summedPrice));
    fd.append("Total cost", Formatter.formatCurrency(summedPrice / 1.23));
    fd.append("Cost per metre", Formatter.formatCurrency(costPerMetre));
    fd.append(
      "Cost per metre VAT",
      Formatter.formatCurrency(costPerMetre * 1.23)
    );
    fd.append("Area", space.toString());
    fd.append("Number of bedrooms", amountOfRooms.toString());
    fd.append("Number of bathrooms", amountOfBathrooms.toString());
    fd.append("Bath", bath ? "1" : "0");
    fd.append("Shower", shower ? "1" : "0");
    fd.append("Distance from Lisbon", transportationExpenses.toString());
    fd.append("Flooring", flooring);
    fd.append("Finishing materials", finishingMaterials ? "1" : "0");
    fd.append("Dismantling works", demontage ? "1" : "0");
    fd.append("Cement screed", cementScreed ? "1" : "0");
    fd.append("Entrance doors", entranceDoors ? "1" : "0");
    fd.append("Soundproofing", denoising ? "1" : "0");
    fd.append("Built-in furniture", builtinFurniture ? "1" : "0");

    fd.append("Underfloor heating", heatedFlooring.toString());
    fd.append("Air conditioning", conditioning.toString());
    fd.append("Window installation", windows.toString());

    fd.append("Decorating", furnitureBool ? "1" : "0");
    fd.append("Appliances", appliancesBoolTotal ? appliances : "0");
    fd.append("Time to completion", months.toString());

    return fetch(
      "https://script.google.com/macros/s/AKfycbzwN8RKdZRUWDBLNnvUwxxK9FXHUVPeqPpGFJYu9NT9zLsc34JKzIHgHz1CwFbNYGzs/exec",
      { method: "POST", body: fd }
    ).catch((error) => console.error(error));
  }
}
