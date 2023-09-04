/* eslint-disable react/no-array-index-key */
import { IColumnType } from './interfaces';
import TableRowCell from './TableRowCell';

interface Props<T> {
  data: T[];
  columns: IColumnType<T>[];
}

export default function TableRow<T>({ data, columns }: Props<T>): JSX.Element {
  return (
    <>
      {data.map((item, rowIndex) => (
        <tr key={`table-body-${rowIndex}`}>
          {columns.map((column) => (
            <TableRowCell
              key={`table-row-cell-${column.title}`}
              item={item}
              column={column}
            />
          ))}
        </tr>
      ))}
    </>
  );
}
