enum LocalStorageDestination {
  uk,
  en,
}

class LocalStorageHandler {
  constructor(
    destination: LocalStorageDestination,
    shouldInit: boolean = false
  ) {
    if (shouldInit) {
      switch (destination) {
        case LocalStorageDestination.uk:
          this._init();
        case LocalStorageDestination.en:
          this._initPortugal();
        default:
          this._init();
      }
    }
  }

  get(name: string): any {
    try {
      return JSON.parse(localStorage.getItem(name));
    } catch {
      return localStorage.getItem(name);
    }
  }

  set(name: string, value: any): void {
    localStorage.setItem(name, value.toString());
  }

  private _init(): void {
    this.set("style", "cozy");
    this.set("bath", true);
    this.set("shower", false);
    this.set("ceiling", "stretch ceiling");
    this.set("flooring", "laminat");
    this.set("hygienic_shower", false);
    this.set("second_gypsum_layer", false);
    this.set("floor_screed", false);
    this.set("heated_flooring", false);
    this.set("denoising", false);
    this.set("entrance_doors", false);
    this.set("conditioning", false);
    this.set("amount_of_rooms", 2);
    this.set("amount_of_bathrooms", 1);
    this.set("appliances", "gorenje");
    this.set("appliances_bool_total", false);
    this.set("furniture_bool", true);
    this.set("space", 50);
    this.set("color", 1);
  }

  private _initPortugal(): void {
    this.set("style", "cozy");
    this.set("color", 1);
    this.set("space", 50);
    this.set("amount_of_rooms", 2);
    this.set("amount_of_bathrooms", 1);
    this.set("bath", true);
    this.set("shower", false);
    this.set("flooring", "laminat");
    this.set("finishing_materials", false);
    this.set("demontage", false);
    this.set("cement_screed", false);
    this.set("heated_flooring", 0);
    this.set("denoising", false);
    this.set("entrance_doors", false);
    this.set("windows_installation", 0);
    this.set("builtin_furniture", false);
    this.set("conditioning", 0);
    this.set("furniture_bool", false);
    this.set("appliances_bool_total", false);
    this.set("appliances", "gorenje");
    this.set("transportation_expenses", 5);
  }

  storageToRequestBody(storage: Storage): string {
    const result = {};

    for (const key in storage) {
      if (key === "length" || key == "costPerMetre" || key == "color") {
        continue;
      }

      if (String(storage[key]) === "true") {
        result[key] = 1;
        continue;
      } else if (String(storage[key]) === "false") {
        result[key] = 0;
        continue;
      }

      if (isFinite(Number(storage[key]))) {
        result[key] = Number(storage[key]);
        continue;
      }

      result[key] = storage[key];
    }

    return JSON.stringify(result);
  }
}

export { LocalStorageHandler, LocalStorageDestination };
