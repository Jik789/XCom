import { ICommitTable, IProfileTable } from './interface';

type ProfileTableProps = {
  item: IProfileTable;
};

type CommitTableProps = {
  item: ICommitTable;
};

type UserGithub = {
  id: number;
  login: string;
  avatar_url: string;
};

export type { ProfileTableProps, CommitTableProps, UserGithub };
