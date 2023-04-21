import React from 'react';
import { RepoProps } from '../../../utils/type';

function ProfileTable(props: RepoProps) {
  const item = props.item;

  return (
    <tr>
      <td>
        <a href="#">{item.name}</a>
      </td>
      <td>{item.language}</td>
      <td>{item.description}</td>
      <td>{item.stars}</td>
    </tr>
  );
}

export default ProfileTable;
