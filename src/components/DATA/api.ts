import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { UserGithub, UserRepoGithub } from '../../utils/type';

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.github.com/',
    prepareHeaders: (headers) => {
      headers.set('authorization', `Bearer 123`);
      return headers;
    },
  }),
  endpoints: (builder) => ({
    searchUser: builder.query<UserGithub, string>({
      query: (name) => `users/${name}`,
    }),
    searchUserRepo: builder.query<UserRepoGithub[], string>({
      query: (name) => `users/${name}/repos`,
    }),
  }),
});

export const { useSearchUserQuery, useSearchUserRepoQuery } = api;
export { api };
