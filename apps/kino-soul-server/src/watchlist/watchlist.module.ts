import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { WatchlistModuleBase } from "./base/watchlist.module.base";
import { WatchlistService } from "./watchlist.service";
import { WatchlistController } from "./watchlist.controller";
import { WatchlistResolver } from "./watchlist.resolver";

@Module({
  imports: [WatchlistModuleBase, forwardRef(() => AuthModule)],
  controllers: [WatchlistController],
  providers: [WatchlistService, WatchlistResolver],
  exports: [WatchlistService],
})
export class WatchlistModule {}
