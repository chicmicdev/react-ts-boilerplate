import { get } from 'lodash';
import { IColumnType } from './interfaces';

interface Props<T> {
  item: T;
  column: IColumnType<T>;
}

export default function TableRowCell<T>({
  item,
  column,
}: Props<T>): JSX.Element {
  const value = get(item, column.path ?? column.key);
  return <td>{column.render ? column.render(column, item) : value}</td>;
}
