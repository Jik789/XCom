import { IRepo } from './interface';

const repoMock: IRepo[] = [
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

export { repoMock };
