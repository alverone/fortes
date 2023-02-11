import { ResponseRow } from "./interfaces/Row";
import { Cell } from "./models/Cell";
import { Table } from "./models/Table";
import { Utils } from "./utils/Utils";

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

    console.log(response.table.cols);

    console.log(table.cells.filter((cell) => cell.address.includes("S")));
  });
