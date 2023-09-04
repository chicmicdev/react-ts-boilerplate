import { IColumnType } from './interfaces';

interface Props<T> {
  columns: IColumnType<T>[];
}

export default function TableHeader<T>({ columns }: Props<T>): JSX.Element {
  return (
    <tr>
      {columns.map((column) => (
        <th
          key={`table-head-cell-${column.title}`}
          style={{ width: column.width }}
        >
          {column.title}
        </th>
      ))}
    </tr>
  );
}
