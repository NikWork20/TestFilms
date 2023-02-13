import {TNewFilms} from '@src/constants/types';

export interface IGradient {
  onPress: () => void;
}
export type CustomImageProps = {
  /** item элемент для отоброжения картинки фильма и всей информации о нем */
  item: TNewFilms;
};
export interface IPopularFilms {
  popularFilms: TNewFilms[];
}
export interface IHeaderScreenInfo {
  image: string;
}
