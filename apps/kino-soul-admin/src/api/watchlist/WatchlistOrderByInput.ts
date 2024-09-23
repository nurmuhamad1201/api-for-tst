import { SortOrder } from "../../util/SortOrder";

export type WatchlistOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  movieId?: SortOrder;
  name?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
