import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { WatchlistService } from "./watchlist.service";
import { WatchlistControllerBase } from "./base/watchlist.controller.base";

@swagger.ApiTags("watchlists")
@common.Controller("watchlists")
export class WatchlistController extends WatchlistControllerBase {
  constructor(
    protected readonly service: WatchlistService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
