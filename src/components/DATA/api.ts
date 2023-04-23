import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { CommitTable, UserAndRepo, UserGithub, UserRepoGithub } from '../../utils/type';

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.github.com/',
  }),
  endpoints: (builder) => ({
    searchUser: builder.query<UserGithub, string>({
      query: (name) => `users/${name}`,
    }),
    searchRepo: builder.query<UserRepoGithub[], string>({
      query: (name) => `users/${name}/repos`,
    }),
    searchUserAndRepo: builder.query<CommitTable[], UserAndRepo>({
      query: ({ userName, repoName }) => `/repos/${userName}/${repoName}/commits`,
    }),
  }),
});

export const { useSearchUserQuery, useSearchRepoQuery, useSearchUserAndRepoQuery } = api;
export { api };
