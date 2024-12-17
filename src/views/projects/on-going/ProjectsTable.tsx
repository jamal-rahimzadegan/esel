import { Fragment } from 'react';
import { ComplexObject } from 'types';
import { TableContainer } from './OnGoingProjectStyle';
import TableItem from './TableItems';

interface Props {
  projects: ComplexObject[];
  editAble?: boolean;
}

export default function ProjectsTable(props: Props) {
  const { projects, editAble = false } = props;

  return (
    <TableContainer>
      {projects.map((item, i) => (
        <Fragment key={item?.proName + i}>
          <TableItem data={item} i={i} editAble={editAble} />
        </Fragment>
      ))}
    </TableContainer>
  );
}
