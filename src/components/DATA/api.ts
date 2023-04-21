import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { UserGithub } from '../../utils/type';

const api = createApi({
  reducerPath: 'JikApi',
  tagTypes: ['Catalog'],
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.github.com/' }),
  endpoints: (builder) => ({
    searchUser: builder.query<UserGithub, string>({
      query: (name) => `users/${name}`,
    }),
  }),
});

export const { useSearchUserQuery } = api;
export { api };
