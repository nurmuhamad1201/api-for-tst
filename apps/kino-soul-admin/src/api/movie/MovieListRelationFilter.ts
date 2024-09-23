import { MovieWhereInput } from "./MovieWhereInput";

export type MovieListRelationFilter = {
  every?: MovieWhereInput;
  some?: MovieWhereInput;
  none?: MovieWhereInput;
};
