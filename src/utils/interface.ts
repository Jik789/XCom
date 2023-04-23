interface IProfileRepoTable {
  id: number;
  name: string;
}

interface ICommitTable {
  id: number;
  author: string;
  hash: string;
  date: string;
}

export type { IProfileRepoTable, ICommitTable };
