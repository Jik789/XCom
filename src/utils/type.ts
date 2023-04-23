import { ICommitTable } from './interface';

type ProfileTableProps = {
  item: UserRepoGithub;
};

type CommitTableProps = {
  item: ICommitTable;
};

type UserGithub = {
  id: number;
  login: string;
  avatar_url: string;
};

type UserRepoGithub = {
  id: number;
  name: string;
  language: string;
  description: string;
  stargazers_count: number;
};

export type { ProfileTableProps, CommitTableProps, UserGithub, UserRepoGithub };
