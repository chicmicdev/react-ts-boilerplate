import api from '../../api';

export const userApi = api.injectEndpoints({
  endpoints: (build) => ({
    demoApi: build.query({
      query: () => 'todos',
    }),
    photos: build.mutation({
      query: () => ({
        url: `photos`,
        method: 'GET',
      }),
      transformResponse: (response) => response,
      transformErrorResponse: (response) => response,
    }),
  }),
  overrideExisting: false,
});

// We can use the Lazy Query as well for GET requests depends on our Requirements.
// For POST request we will use mutations.
export const { useDemoApiQuery, usePhotosMutation } = userApi;
