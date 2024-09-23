import { MovieWhereUniqueInput } from "../movie/MovieWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ReviewUpdateInput = {
  comment?: string | null;
  movie?: MovieWhereUniqueInput | null;
  rating?: number | null;
  user?: UserWhereUniqueInput | null;
};
