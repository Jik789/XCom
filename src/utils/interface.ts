interface IProfileTable {
  id: number;
  name: string;
  language: string;
  description: string;
  stars: number;
}

interface ICommitTable {
  id: number;
  author: string;
  hash: string;
  date: string;
}

export type { IProfileTable, ICommitTable };
