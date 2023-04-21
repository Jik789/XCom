import React from 'react';
import { CommitTableProps } from '../../../utils/type';

function CommitTable(props: CommitTableProps) {
  const item = props.item;

  return (
    <tr>
      <td>{item.author}</td>
      <td>{item.hash}</td>
      <td>{item.date}</td>
    </tr>
  );
}

export default CommitTable;
