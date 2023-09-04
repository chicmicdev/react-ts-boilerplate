import { IColumnType } from './interfaces';
import Table from './Table';

interface IData {
  fullName: string;
  role: string;
  tags: string[];
  position?: object;
}

const columns: IColumnType<IData>[] = [
  {
    key: 'fullName',
    title: 'Full Name',
    width: 200,
  },
  {
    key: 'role',
    title: 'Role',
    width: 200,
  },
  {
    key: 'tags',
    title: 'Tags',
    width: 200,
    render: (_, { tags }) => (
      <>
        {tags.map((tag, tagIndex) => (
          <span key={tag} style={{ marginLeft: tagIndex * 4 }}>
            {tag}
          </span>
        ))}
      </>
    ),
  },
  {
    key: 'position',
    title: 'Position',
    width: 200,
    path: ['position', 'data', 'designation'],
  },
  {
    key: 'action',
    title: 'Action',
    width: 200,
    render: (_, data) => (
      <button type="button" onClick={() => data}>
        Action
      </button>
    ),
  },
];

const data: IData[] = [
  {
    fullName: 'Francisco Mendes',
    role: 'Full Stack',
    tags: ['dev', 'blogger'],
    position: {
      data: {
        designation: 'TL',
      },
    },
  },
  {
    fullName: 'Ricardo Malva',
    role: 'Social Media Manager',
    tags: ['designer', 'photographer'],
  },
  {
    fullName: 'Malva',
    role: 'Media Manager',
    tags: ['designer', 'photographer'],
  },
];

export default function CustomTableUsage() {
  return (
    <Table
      data={data}
      columns={columns}
      className="table"
      headerClassName="table-head"
      bodyClassName="table-body"
    />
  );
}
