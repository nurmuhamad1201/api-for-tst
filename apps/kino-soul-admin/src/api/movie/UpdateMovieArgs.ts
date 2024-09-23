import { MovieWhereUniqueInput } from "./MovieWhereUniqueInput";
import { MovieUpdateInput } from "./MovieUpdateInput";

export type UpdateMovieArgs = {
  where: MovieWhereUniqueInput;
  data: MovieUpdateInput;
};
