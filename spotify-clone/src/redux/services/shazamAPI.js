import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const shazamAPI = createApi({
  reducerPath: "shazamAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://genius-song-lyrics1.p.rapidapi.com/",
    prepareHeaders: (headers) => {
      headers.set(
        "X-RapidAPI-Key",
        "46d08d9ecemsha937c91fd9d7fc1p1c3f7ajsn8ecb19a8ab5a"
      );

      return headers;
    },
  }),
  endpoints: (builder) => ({
    getTopCharts: builder.query({
      query: () => "chart/songs/",
    }),
    // getSongsByGenre: builder.query({
    //   query: (genre) => `v1/charts/genre-world?genre_code=${genre}`,
    // }),
    // getSongsByCountry: builder.query({
    //   query: (countryCode) => `v1/charts/country?country_code=${countryCode}`,
    // }),
    // getSongsBySearch: builder.query({
    //   query: (searchTerm) =>
    //     `v1/search/multi?search_type=SONGS_ARTISTS&query=${searchTerm}`,
    // }),
    // getArtistDetails: builder.query({
    //   query: (artistId) => `v2/artists/details?artist_id=${artistId}`,
    // }),
    // getSongDetails: builder.query({
    //   query: ({ songid }) => `v1/tracks/details?track_id=${songid}`,
    // }),
    // getSongRelated: builder.query({
    //   query: ({ songid }) => `v1/tracks/related?track_id=${songid}`,
    // }),
  }),
});

export const {
  useGetTopChartsQuery,
  //   useGetSongsByGenreQuery,
  //   useGetSongsByCountryQuery,
  //   useGetSongsBySearchQuery,
  //   useGetArtistDetailsQuery,
  //   useGetSongDetailsQuery,
  //   useGetSongRelatedQuery,
} = shazamAPI;
