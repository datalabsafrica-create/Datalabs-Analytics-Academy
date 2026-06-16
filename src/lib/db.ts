import { AppDatabase } from "../types";
import { initialDbState } from "./seed";

const DB_KEY = "data_to_dollars_db_v2";

export class LocalDB {
  static getDB(): AppDatabase {
    const raw = localStorage.getItem(DB_KEY);
    if (!raw) {
      this.saveDB(initialDbState);
      return initialDbState;
    }
    try {
      return JSON.parse(raw) as AppDatabase;
    } catch {
      return initialDbState;
    }
  }

  static saveDB(db: AppDatabase) {
    localStorage.setItem(DB_KEY, JSON.stringify(db));
  }

  static resetDB() {
    this.saveDB(initialDbState);
  }
}
