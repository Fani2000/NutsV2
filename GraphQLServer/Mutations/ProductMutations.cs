namespace GraphQLServer.Types.Mutations;

[ExtendObjectType(OperationTypeNames.Mutation)]
public class ProductMutations
{
   public string AddProduct(string name)
   {
      return $"Hello ${name}!";
   } 
}