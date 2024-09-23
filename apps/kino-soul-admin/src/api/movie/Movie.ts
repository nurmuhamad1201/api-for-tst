import { Review } from "../review/Review";
import { Watchlist } from "../watchlist/Watchlist";

export type Movie = {
  createdAt: Date;
  description: string | null;
  genre?: Array<"Option1">;
  id: string;
  rating: number | null;
  releaseDate: Date | null;
  reviews?: Array<Review>;
  title: string | null;
  updatedAt: Date;
  watchlists?: Array<Watchlist>;
};
