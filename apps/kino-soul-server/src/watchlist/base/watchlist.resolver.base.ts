/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { Watchlist } from "./Watchlist";
import { WatchlistCountArgs } from "./WatchlistCountArgs";
import { WatchlistFindManyArgs } from "./WatchlistFindManyArgs";
import { WatchlistFindUniqueArgs } from "./WatchlistFindUniqueArgs";
import { CreateWatchlistArgs } from "./CreateWatchlistArgs";
import { UpdateWatchlistArgs } from "./UpdateWatchlistArgs";
import { DeleteWatchlistArgs } from "./DeleteWatchlistArgs";
import { Movie } from "../../movie/base/Movie";
import { User } from "../../user/base/User";
import { WatchlistService } from "../watchlist.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Watchlist)
export class WatchlistResolverBase {
  constructor(
    protected readonly service: WatchlistService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Watchlist",
    action: "read",
    possession: "any",
  })
  async _watchlistsMeta(
    @graphql.Args() args: WatchlistCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Watchlist])
  @nestAccessControl.UseRoles({
    resource: "Watchlist",
    action: "read",
    possession: "any",
  })
  async watchlists(
    @graphql.Args() args: WatchlistFindManyArgs
  ): Promise<Watchlist[]> {
    return this.service.watchlists(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Watchlist, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Watchlist",
    action: "read",
    possession: "own",
  })
  async watchlist(
    @graphql.Args() args: WatchlistFindUniqueArgs
  ): Promise<Watchlist | null> {
    const result = await this.service.watchlist(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Watchlist)
  @nestAccessControl.UseRoles({
    resource: "Watchlist",
    action: "create",
    possession: "any",
  })
  async createWatchlist(
    @graphql.Args() args: CreateWatchlistArgs
  ): Promise<Watchlist> {
    return await this.service.createWatchlist({
      ...args,
      data: {
        ...args.data,

        movie: args.data.movie
          ? {
              connect: args.data.movie,
            }
          : undefined,

        user: args.data.user
          ? {
              connect: args.data.user,
            }
          : undefined,
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Watchlist)
  @nestAccessControl.UseRoles({
    resource: "Watchlist",
    action: "update",
    possession: "any",
  })
  async updateWatchlist(
    @graphql.Args() args: UpdateWatchlistArgs
  ): Promise<Watchlist | null> {
    try {
      return await this.service.updateWatchlist({
        ...args,
        data: {
          ...args.data,

          movie: args.data.movie
            ? {
                connect: args.data.movie,
              }
            : undefined,

          user: args.data.user
            ? {
                connect: args.data.user,
              }
            : undefined,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Watchlist)
  @nestAccessControl.UseRoles({
    resource: "Watchlist",
    action: "delete",
    possession: "any",
  })
  async deleteWatchlist(
    @graphql.Args() args: DeleteWatchlistArgs
  ): Promise<Watchlist | null> {
    try {
      return await this.service.deleteWatchlist(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => Movie, {
    nullable: true,
    name: "movie",
  })
  @nestAccessControl.UseRoles({
    resource: "Movie",
    action: "read",
    possession: "any",
  })
  async getMovie(@graphql.Parent() parent: Watchlist): Promise<Movie | null> {
    const result = await this.service.getMovie(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => User, {
    nullable: true,
    name: "user",
  })
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "read",
    possession: "any",
  })
  async getUser(@graphql.Parent() parent: Watchlist): Promise<User | null> {
    const result = await this.service.getUser(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
