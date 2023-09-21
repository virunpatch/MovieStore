export interface Movie {
  dates: Dates;
  page: number;
  results?: (ResultEntity)[] | null;
  total_pages: number;
  total_results: number;
}
export interface Dates {
  maximum: string;
  minmum: string;
}
export interface ResultEntity{
  name: string;
  adult: boolean;
  backdrop_path: string;
  genre_ids?: (number)[] | null;
  id: number;
  original_laguage: string;
  original_title: string;
  overview: string;
  populartity: number;
  poster_path: string;
  release_data: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}
