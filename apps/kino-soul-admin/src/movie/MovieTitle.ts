import { Movie as TMovie } from "../api/movie/Movie";

export const MOVIE_TITLE_FIELD = "title";

export const MovieTitle = (record: TMovie): string => {
  return record.title?.toString() || String(record.id);
};
