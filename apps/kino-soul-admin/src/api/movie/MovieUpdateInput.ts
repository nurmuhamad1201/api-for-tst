import { ReviewUpdateManyWithoutMoviesInput } from "./ReviewUpdateManyWithoutMoviesInput";
import { WatchlistUpdateManyWithoutMoviesInput } from "./WatchlistUpdateManyWithoutMoviesInput";

export type MovieUpdateInput = {
  description?: string | null;
  genre?: Array<"Option1">;
  rating?: number | null;
  releaseDate?: Date | null;
  reviews?: ReviewUpdateManyWithoutMoviesInput;
  title?: string | null;
  watchlists?: WatchlistUpdateManyWithoutMoviesInput;
};
