using HotChocolate.Language;
using SDK.Context;
using SDK.Models;

namespace GraphQLServer.Types;

[ExtendObjectType(OperationTypeNames.Query)]
public class NutsQueryTypes
{
    [UsePaging]
    [UseProjection()]
    [UseFiltering()]
    [UseSorting()]
    public IQueryable<Product> GetProducts([Service] YourNutsDbContext context)
        => context.Products;
    
    [UsePaging]
    [UseProjection()]
    [UseFiltering()]
    [UseSorting()]
    public IQueryable<Order> GetOrders([Service] YourNutsDbContext context)
        => context.Orders;
    
    [UsePaging]
    [UseProjection()]
    [UseFiltering()]
    [UseSorting()]
    public IQueryable<OrderItem> GetOrderItem([Service] YourNutsDbContext context)
        => context.OrderItems;
    
    [UsePaging]
    [UseProjection()]
    [UseFiltering()]
    [UseSorting()]
    public IQueryable<Discount> GetAllDiscounts([Service] YourNutsDbContext context)
        => context.Discounts;
    
    [UsePaging]
    [UseProjection()]
    [UseFiltering()]
    [UseSorting()]
    public IQueryable<Customer> GetCustomers([Service] YourNutsDbContext context)
        => context.Customers;
}