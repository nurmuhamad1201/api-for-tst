import { Movie } from "../movie/Movie";
import { User } from "../user/User";

export type Watchlist = {
  createdAt: Date;
  id: string;
  movie?: Movie | null;
  name: string | null;
  updatedAt: Date;
  user?: User | null;
};
