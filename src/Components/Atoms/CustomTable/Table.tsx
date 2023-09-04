import { IColumnType } from './interfaces';
import TableHeader from './TableHeader';
import TableRow from './TableRow';

interface Props<T> {
  data: T[];
  columns: IColumnType<T>[];
  className?: string;
  headerClassName?: string;
  bodyClassName?: string;
}

export default function Table<T>({
  data,
  columns,
  className,
  headerClassName,
  bodyClassName,
}: Props<T>): JSX.Element {
  return (
    <table className={`table ${className}`}>
      <thead className={`table-head ${headerClassName}`}>
        <TableHeader columns={columns} />
      </thead>
      <tbody className={`table-body ${bodyClassName}`}>
        <TableRow data={data} columns={columns} />
      </tbody>
    </table>
  );
}

Table.defaultProps = {
  className: '',
  headerClassName: '',
  bodyClassName: '',
};
