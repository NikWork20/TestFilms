import {DrawerScreenProps} from '@react-navigation/drawer';
import {ParamListBase} from '@react-navigation/native';
import { NativeStackNavigationProp, NativeStackScreenProps } from "@react-navigation/native-stack";

interface ICountry {
  country: string;
}
interface IGenre {
  genre: string;
}
type Navigation = Omit<DrawerScreenProps<ParamListBase>, 'route'>;
type TNewFilms = {
  kinopoiskId: number;
  imdbId: string | null;
  nameRu: string;
  nameEn: string | null;
  nameOriginal: string | null;
  countries: ICountry[];
  genres: IGenre[];
  ratingKinopoisk: number;
  ratingImdb: number | null;
  year: number;
  type: string;
  posterUrl: string;
  posterUrlPreview: string;
};
type TTrailer = {
  url: string;
  name: string;
  site: string;
};
type TInfoFIlm = {
  kinopoiskId: number;
  imdbId: string | null;
  nameRu: string;
  nameEn: string | null;
  nameOriginal: string;
  posterUrl: string;
  posterUrlPreview: string;
  coverUrl: string;
  logoUrl: string;
  reviewsCount: number;
  ratingGoodReview: number;
  ratingGoodReviewVoteCount: number;
  ratingKinopoisk: number;
  ratingKinopoiskVoteCount: number;
  ratingImdb: number;
  ratingImdbVoteCount: number;
  ratingFilmCritics: number;
  ratingFilmCriticsVoteCount: number;
  ratingAwait: number;
  ratingAwaitCount: number;
  ratingRfCritics: number;
  ratingRfCriticsVoteCount: number;
  webUrl: string;
  year: number;
  filmLength: number;
  slogan: string;
  description: string;
  shortDescription: string;
  editorAnnotation: string | null;
  isTicketsAvailable: boolean;
  productionStatus: string | null;
  type: string;
  ratingMpaa: number | null;
  ratingAgeLimits: string;
  countries: ICountry[];
  genres: IGenre[];
  startYear: number | null;
  endYear: number | null;
  serial: boolean;
  shortFilm: boolean;
  completed: boolean;
  hasImax: boolean;
  has3D: boolean;
  lastSync: string;
};
type TStoreReducers = {
  filmsState: TFilmsState;
};
type NativeStackProps = NativeStackScreenProps<any, any>;
type DrawerScreen = DrawerScreenProps<ParamListBase>;
type NativeStackNavigation = NativeStackNavigationProp<any>;
type TFilmsState = {
  newFilms: TNewFilms[];
  popularFilms: TNewFilms[];
  trailer: TTrailer[];
  infoFilm: Partial<TInfoFIlm>;
};
export type {
  TFilmsState,
  TInfoFIlm,
  TTrailer,
  TNewFilms,
  TStoreReducers,
  NativeStackProps,
  DrawerScreen,
  Navigation,
  NativeStackNavigation
};
