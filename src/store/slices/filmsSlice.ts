import {PayloadAction, createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from 'axios';

import {
  TFilmsState,
  TInfoFIlm,
  TNewFilms,
  TTrailer,
} from '@src/constants/types';

const initialState: TFilmsState = {
  newFilms: [],
  popularFilms: [],
  trailer: [],
  infoFilm: {},
};

export const getNewFilms = createAsyncThunk('getNewFilms', async () => {
  try {
    const response = await axios.get(
      'https://kinopoiskapiunofficial.tech/api/v2.2/films?type=ALL&ratingFrom=6&ratingTo=8&yearFrom=2022&yearTo=2024&page=1',
      {
        headers: {
          'X-API-KEY': '55247b0c-e9f9-41ea-baba-6dbf6f82bcb4',
          'Content-Type': 'application/json',
        },
      },
    );
    return response.data.items;
  } catch (e) {
    console.log(e);
  }
});
export const getPopularFilms = createAsyncThunk('getPopularFilms', async () => {
  try {
    const response = await axios.get(
      'https://kinopoiskapiunofficial.tech/api/v2.2/films?type=ALL&ratingFrom=8&ratingTo=10&yearFrom=2022&yearTo=2024&page=1',
      {
        headers: {
          'X-API-KEY': '55247b0c-e9f9-41ea-baba-6dbf6f82bcb4',
          'Content-Type': 'application/json',
        },
      },
    );
    return response.data.items;
  } catch (e) {
    console.log(e);
  }
});
export const getInfoTrailer = createAsyncThunk(
  'getInfoTrailer',
  async (idFilms: number) => {
    try {
      const response = await axios.get(
        `https://kinopoiskapiunofficial.tech/api/v2.2/films/${idFilms}/videos`,
        {
          headers: {
            'X-API-KEY': '55247b0c-e9f9-41ea-baba-6dbf6f82bcb4',
            'Content-Type': 'application/json',
          },
        },
      );
      return response.data.items;
    } catch (e) {
      console.log(e);
    }
  },
);
export const getInfoFilm = createAsyncThunk(
  'getInfoFilm',
  async (idFilms: number) => {
    try {
      const resonse = await axios.get(
        `https://kinopoiskapiunofficial.tech/api/v2.2/films/${idFilms}`,
        {
          headers: {
            'X-API-KEY': '55247b0c-e9f9-41ea-baba-6dbf6f82bcb4',
            'Content-Type': 'application/json',
          },
        },
      );
      return resonse.data;
    } catch (e) {
      console.log(e);
    }
  },
);

export const filmsSlice = createSlice({
  name: 'filmsState',
  initialState,
  reducers: {
    clearTrailer: (state: TFilmsState) => {
      state.trailer = [];
    },
    clearInfoFilm: (state: TFilmsState) => {
      state.infoFilm = {};
    },
  },
  extraReducers: builder => {
    builder
      .addCase(
        getNewFilms.fulfilled,
        (state: TFilmsState, action: PayloadAction<TNewFilms[]>) => {
          state.newFilms = action.payload;
        },
      )
      .addCase(
        getInfoTrailer.fulfilled,
        (state: TFilmsState, action: PayloadAction<TTrailer[]>) => {
          state.trailer = action.payload;
        },
      )
      .addCase(
        getInfoFilm.fulfilled,
        (state: TFilmsState, action: PayloadAction<TInfoFIlm>) => {
          state.infoFilm = action.payload;
        },
      )
      .addCase(
        getPopularFilms.fulfilled,
        (state: TFilmsState, action: PayloadAction<TNewFilms[]>) => {
          state.popularFilms = [];
          if (state.popularFilms.length > 0) {
            state.popularFilms = [
              ...state.popularFilms,
              ...(action.payload as TNewFilms[]),
            ];
          }
          state.popularFilms = action.payload as TNewFilms[];
        },
      );
  },
});
export const {clearTrailer, clearInfoFilm} = filmsSlice.actions;
export default filmsSlice.reducer;
