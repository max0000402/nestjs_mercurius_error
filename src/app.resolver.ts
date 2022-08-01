import { Query, Resolver } from '@nestjs/graphql';

@Resolver('Hello')
export class AppResolver {
  @Query(() => String, { name: 'hello' })
  hello(): string {
    return 'Hello';
  }
}
