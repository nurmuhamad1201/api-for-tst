import { WatchlistWhereInput } from "./WatchlistWhereInput";
import { WatchlistOrderByInput } from "./WatchlistOrderByInput";

export type WatchlistFindManyArgs = {
  where?: WatchlistWhereInput;
  orderBy?: Array<WatchlistOrderByInput>;
  skip?: number;
  take?: number;
};
