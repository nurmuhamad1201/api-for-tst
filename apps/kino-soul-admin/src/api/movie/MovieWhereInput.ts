import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { ReviewListRelationFilter } from "../review/ReviewListRelationFilter";
import { WatchlistListRelationFilter } from "../watchlist/WatchlistListRelationFilter";

export type MovieWhereInput = {
  description?: StringNullableFilter;
  id?: StringFilter;
  rating?: FloatNullableFilter;
  releaseDate?: DateTimeNullableFilter;
  reviews?: ReviewListRelationFilter;
  title?: StringNullableFilter;
  watchlists?: WatchlistListRelationFilter;
};
