export interface IMovie {
  id: string;
  type: string;
  originalTitle?: string;
  primaryTitle: string;
  primaryImage: IPrimaryImage;
  startYear: number;
  endYear: number;
  runtimeSeconds: number;
  genres: string[];
  rating: IMovieRating;
  plot: string;
  directors: IMovieDirector[];
  writers: IMovieWriter[];
  stars: IMovieRatingStar[];
  originCountries: IMovieOriginCountry[];
  spokenLanguages: ISpokenLanguage[];
  interests: IMovienterest[];
}

export interface IPrimaryImage {
  url: string;
  width: number;
  height: number;
}

export interface IMovieRating {
  aggregateRating: number;
  voteCount: number;
}

export interface IMovieDirector {
  id: string;
  displayName: string;
  primaryImage: IPrimaryImage2;
  primaryProfessions: string[];
}

export interface IPrimaryImage2 {
  url: string;
  width: number;
  height: number;
}

export interface IMovieWriter {
  id: string;
  displayName: string;
  primaryImage: IPrimaryImage3;
  primaryProfessions: string[];
}

export interface IPrimaryImage3 {
  url: string;
  width: number;
  height: number;
}

export interface IMovieRatingStar {
  id: string;
  displayName: string;
  primaryImage: IPrimaryImage4;
  primaryProfessions: string[];
  alternativeNames?: string[];
}

export interface IPrimaryImage4 {
  url: string;
  width: number;
  height: number;
}

export interface IMovieOriginCountry {
  code: string;
  name: string;
}

export interface ISpokenLanguage {
  code: string;
  name: string;
}

export interface IMovienterest {
  id: string;
  name: string;
}
