import { StringFilter } from "../../util/StringFilter";
import { MovieWhereUniqueInput } from "../movie/MovieWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type WatchlistWhereInput = {
  id?: StringFilter;
  movie?: MovieWhereUniqueInput;
  name?: StringNullableFilter;
  user?: UserWhereUniqueInput;
};
