import { MovieWhereUniqueInput } from "../movie/MovieWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ReviewCreateInput = {
  comment?: string | null;
  movie?: MovieWhereUniqueInput | null;
  rating?: number | null;
  user?: UserWhereUniqueInput | null;
};
