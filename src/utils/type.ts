type ProfileTableProps = {
  item: UserRepoGithub;
};

type CommitTableProps = {
  item: CommitTable;
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

type CommitTable = {
  sha: number;
  commit: { author: { name: string; date: string } };
};

type UserAndRepo = {
  userName: string;
  repoName: string;
};

export type {
  ProfileTableProps,
  CommitTableProps,
  UserGithub,
  UserRepoGithub,
  UserAndRepo,
  CommitTable,
};
