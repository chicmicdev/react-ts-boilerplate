import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_BASE_URL } from './Constants';

const baseQuery = fetchBaseQuery({
  baseUrl: API_BASE_URL,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  prepareHeaders: async (headers, { getState }) => {
    const { token } = getState().common;
    if (token) {
      headers.append('authorization', `${token}`);
    }
    return headers;
  },
});

const baseQueryWithInterceptor = async (args, api, extraOptions) => {
  const result = await baseQuery(args, api, extraOptions);
  if (result.error && result.error.status === 401) {
    // here you can deal with 401 error
  }
  return result;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const api: any = createApi({
  baseQuery: baseQueryWithInterceptor,
  endpoints: () => ({}),
});

export default api;
