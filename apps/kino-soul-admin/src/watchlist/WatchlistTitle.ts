import { Watchlist as TWatchlist } from "../api/watchlist/Watchlist";

export const WATCHLIST_TITLE_FIELD = "name";

export const WatchlistTitle = (record: TWatchlist): string => {
  return record.name?.toString() || String(record.id);
};
