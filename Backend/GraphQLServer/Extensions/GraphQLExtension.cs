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
         .AddMutationConventions()
         .AddQueryType()
         .AddMutationType()
         .AddSorting()
         .AddFiltering()
         .AddProjections()
         .AddQueryableCursorPagingProvider()
         .AddTypeExtension<NutsQueryTypes>()
         .AddTypeExtension<ProductMutations>();
      
      return services;
   } 
}