import { Cell } from "./Cell";

export class Table {
  public cells: Cell[];

  constructor(cells: Cell[]) {
    this.cells = cells;
  }

  getCell(address: string): Cell {
    const result: Cell[] = this.cells.filter(
      (item) => item.address === address
    );

    if (result.length == 0) {
      return new Cell(address, "0");
    } else {
      return result[0];
    }
  }
}
