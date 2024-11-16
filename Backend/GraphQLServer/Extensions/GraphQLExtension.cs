using GraphQLServer.Mutations;
using GraphQLServer.Types;
using SDK.Context;

namespace GraphQLServer.Extensions;

public static class  GraphQlExtension
{
   public static IServiceCollection AddGraphQl(this IServiceCollection services) 
   {
      services
         .AddGraphQLServer()
         .ModifyOptions(o => o.EnableOneOf = true)
         .RegisterDbContextFactory<YourNutsDbContext>()
         .AddMutationConventions(applyToAllMutations: true)
         .AddQueryType()
         .AddMutationType()
         .AddSorting()
         .AddFiltering()
         .AddProjections()
         .AddQueryableCursorPagingProvider()
         .AddType<CustomerType>()
         .AddTypeExtension<NutsQueryTypes>()
         .AddTypeExtension<ProductMutations>()
         .AddTypeExtension<OrderMutations>()
         .AddTypeExtension<BasketMutations>()
         .AddTypeExtension<CustomerMutations>();
      
      return services;
   } 
}