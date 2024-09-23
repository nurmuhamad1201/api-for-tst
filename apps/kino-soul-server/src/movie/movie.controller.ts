import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { MovieService } from "./movie.service";
import { MovieControllerBase } from "./base/movie.controller.base";

@swagger.ApiTags("movies")
@common.Controller("movies")
export class MovieController extends MovieControllerBase {
  constructor(
    protected readonly service: MovieService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
