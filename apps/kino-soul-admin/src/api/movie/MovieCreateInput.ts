import { ReviewCreateNestedManyWithoutMoviesInput } from "./ReviewCreateNestedManyWithoutMoviesInput";
import { WatchlistCreateNestedManyWithoutMoviesInput } from "./WatchlistCreateNestedManyWithoutMoviesInput";

export type MovieCreateInput = {
  description?: string | null;
  genre?: Array<"Option1">;
  rating?: number | null;
  releaseDate?: Date | null;
  reviews?: ReviewCreateNestedManyWithoutMoviesInput;
  title?: string | null;
  watchlists?: WatchlistCreateNestedManyWithoutMoviesInput;
};
