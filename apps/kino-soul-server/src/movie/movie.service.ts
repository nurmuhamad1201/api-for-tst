import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { MovieServiceBase } from "./base/movie.service.base";

@Injectable()
export class MovieService extends MovieServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
