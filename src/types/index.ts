export interface Genre {
  id: number;
  name: string;
}

// Define the structure for the genres lookup object
export interface GenresLookup {
  [key: number]: string;
}

export interface Movie {
  id: number;
  title: string;
  poster_path: string;
  release_date: string;
  genre_ids: number[];
}

export type RootStackParamList = {
  Home: undefined; 
  SeeAll: undefined; 
};