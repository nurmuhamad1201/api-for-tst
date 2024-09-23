import { MovieWhereInput } from "./MovieWhereInput";
import { MovieOrderByInput } from "./MovieOrderByInput";

export type MovieFindManyArgs = {
  where?: MovieWhereInput;
  orderBy?: Array<MovieOrderByInput>;
  skip?: number;
  take?: number;
};
