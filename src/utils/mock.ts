import { ICommitTable, IProfileTable } from './interface';

const ProfileTableMock: IProfileTable[] = [
  {
    id: 1,
    name: 'Repo Name 1',
    language: 'TS, JS',
    description: 'Testing Description TS, JS',
    stars: 5,
  },
  {
    id: 2,
    name: 'Repo Name 2',
    language: 'Java',
    description: 'Testing Description Java',
    stars: 4,
  },
  {
    id: 3,
    name: 'Repo Name 3',
    language: 'Pyton',
    description: 'Testing Description Pyton',
    stars: 3,
  },
  {
    id: 4,
    name: 'Repo Name 4',
    language: 'Pascal',
    description: 'Testing Description Pascal',
    stars: 2,
  },
];

const CommitTableMock: ICommitTable[] = [
  {
    id: 1,
    author: 'Ilya',
    hash: '7DD987F846400079F4B03C058365A47B4A0',
    date: '11.11.2011',
  },
  {
    id: 2,
    author: 'Alex',
    hash: '58365A486904F4B03C058365A4869047B4A0',
    date: '09.09.2009',
  },
  {
    id: 3,
    author: 'Danya',
    hash: '65A4869047B00079F4B03C058365A48690470',
    date: '10.10.2010',
  },
  {
    id: 4,
    author: 'Vlad',
    hash: '400079F4B03F4B03C058365A4869047B4A440',
    date: '12.12.2012',
  },
];

export { ProfileTableMock, CommitTableMock };
