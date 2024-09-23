import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { ReviewListRelationFilter } from "../review/ReviewListRelationFilter";
import { WatchlistListRelationFilter } from "../watchlist/WatchlistListRelationFilter";

export type UserWhereInput = {
  email?: StringNullableFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  reviews?: ReviewListRelationFilter;
  username?: StringFilter;
  watchlists?: WatchlistListRelationFilter;
};
