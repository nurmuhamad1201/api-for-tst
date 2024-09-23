import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { WatchlistServiceBase } from "./base/watchlist.service.base";

@Injectable()
export class WatchlistService extends WatchlistServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
