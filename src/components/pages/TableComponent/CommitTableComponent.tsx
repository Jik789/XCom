import React from 'react';
import { CommitTableProps } from '../../../utils/type';
import { currentDate } from '../../../utils/utls';

function CommitTableComponent(props: CommitTableProps) {
  const item = props.item;

  return (
    <tr>
      <td>{item.commit.author.name}</td>
      <td>{item.sha}</td>
      <td>{currentDate(item.commit.author.date)}</td>
    </tr>
  );
}

export default CommitTableComponent;
