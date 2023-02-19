import { Cell } from "./Cell";

export class Table {
  public cells: Cell[];

  constructor(cells: Cell[]) {
    this.cells = cells;
  }

  getCell(address: string): Cell | null {
    const result: Cell[] = this.cells.filter(
      (item) => item.address === address
    );

    if (result.length == 0) {
      return null;
    } else {
      return result[0];
    }
  }
}
