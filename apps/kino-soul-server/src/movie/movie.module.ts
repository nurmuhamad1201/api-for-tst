import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { MovieModuleBase } from "./base/movie.module.base";
import { MovieService } from "./movie.service";
import { MovieController } from "./movie.controller";
import { MovieResolver } from "./movie.resolver";

@Module({
  imports: [MovieModuleBase, forwardRef(() => AuthModule)],
  controllers: [MovieController],
  providers: [MovieService, MovieResolver],
  exports: [MovieService],
})
export class MovieModule {}
