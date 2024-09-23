import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { MovieWhereUniqueInput } from "../movie/MovieWhereUniqueInput";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ReviewWhereInput = {
  comment?: StringNullableFilter;
  id?: StringFilter;
  movie?: MovieWhereUniqueInput;
  rating?: FloatNullableFilter;
  user?: UserWhereUniqueInput;
};
