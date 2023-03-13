import { Formatter } from "./Formatter";
import { LocalStorageHandler } from "./LocalStorageHandler";

export abstract class DataCollectionHandler {
  static collectPortugalClientData(fd: FormData): Promise<void | Response> {
    return fetch(
      "https://script.google.com/macros/s/AKfycbw8iA1vk33T5UIZo_SAFw2gvvI1-sMY9UEQ3i8sDTaNsB2yJ2MKGphRa8PkJmqhgxB51A/exec",
      {
        method: "POST",
        body: fd,
      }
    ).catch((error) => console.error("Error!", error.message));
  }

  static collectPortugalCalcData(): Promise<void | Response> {
    const storage = new LocalStorageHandler();
    const style: string = storage.get("style"),
      appliancesBoolTotal = Boolean(storage.get("appliances_bool_total")),
      furnitureBool: boolean = Boolean(storage.get("furniture_bool")),
      space: number = storage.get("space"),
      bath: boolean = Boolean(storage.get("bath")),
      shower: boolean = Boolean(storage.get("shower")),
      amountOfRooms: number = storage.get("amount_of_rooms"),
      amountOfBathrooms: number = storage.get("amount_of_bathrooms"),
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
      transportationExpenses: number = storage.get("transportation_expenses"),
      appliances: string = storage.get("appliances"),
      summedPrice: number = storage.get("summedPrice"),
      costPerMetre: number = storage.get("costPerMetre"),
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
    dataCollectionFd.append("Construction term, months", months.toString());

    return fetch(
      "https://script.google.com/macros/s/AKfycbwnwi3SZ8gK3zSYW2DEoc6BtY9HS1stpRSHPW6pATmX2UawetpC-74YPZ5LjjX282Ki/exec",
      { method: "POST", body: dataCollectionFd }
    ).catch((error) => console.error(error));
  }
}
