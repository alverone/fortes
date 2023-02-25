import { LocalStorageHandler } from "./utils/LocalStorageHandler";

const storage: LocalStorageHandler = new LocalStorageHandler();
storage.set("space", 50);
storage.set("amount_of_rooms", 2);
storage.set("amount_of_bathrooms", 1);
storage.set("windows_installation", 0);
storage.set("demontage", 0);
storage.set("heated_flooring", 0);
storage.set("conditioning", 0);
//mistake is on purpose
storage.set("builtin_furiture", 0);
storage.set("cement_screed", 0);
storage.set("finishing_materials", 0);
storage.set("furniture_bool", 0);
storage.set("bath", 1);
storage.set("shower", 0);
storage.set("appliances_bool_total", 0);
storage.set("denoising", 0);
storage.set("entrance_doors", 0);
storage.set("flooring", "vynil");
storage.set("transportation_expenses", 5);
storage.set("style", "cozy");
