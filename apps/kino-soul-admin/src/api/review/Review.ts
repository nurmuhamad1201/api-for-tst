import { Movie } from "../movie/Movie";
import { User } from "../user/User";

export type Review = {
  comment: string | null;
  createdAt: Date;
  id: string;
  movie?: Movie | null;
  rating: number | null;
  updatedAt: Date;
  user?: User | null;
};
