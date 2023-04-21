import React from 'react';
import { ProfileTableProps } from '../../../utils/type';

function ProfileTable(props: ProfileTableProps) {
  const item = props.item;

  return (
    <tr>
      <td>
        <a className="underline decoration-sky-500" href="#">
          {item.name}
        </a>
      </td>
      <td>{item.language}</td>
      <td>{item.description}</td>
      <td>{item.stars}</td>
    </tr>
  );
}

export default ProfileTable;
