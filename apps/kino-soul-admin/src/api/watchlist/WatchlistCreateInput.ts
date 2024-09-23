import { MovieWhereUniqueInput } from "../movie/MovieWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type WatchlistCreateInput = {
  movie?: MovieWhereUniqueInput | null;
  name?: string | null;
  user?: UserWhereUniqueInput | null;
};
