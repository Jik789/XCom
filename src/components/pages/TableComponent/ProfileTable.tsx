import React from 'react';
import { Link } from 'react-router-dom';
import { ProfileTableProps } from '../../../utils/type';

function ProfileTable(props: ProfileTableProps) {
  const item = props.item;

  return (
    <tr>
      <td>
        <Link className="underline decoration-sky-500" to={`/commit/${item.name}`}>
          {item.name}
        </Link>
      </td>
      <td>{item.language ?? '-'}</td>
      <td>{item.description ?? '-'}</td>
      <td>{item.stargazers_count ?? '0'}</td>
    </tr>
  );
}

export default ProfileTable;
