using HotChocolate.Language;
using SDK.Context;
using SDK.DTO;
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
    
    // Dashboard view queries
    public double GetTotalProducts([Service] YourNutsDbContext context)
        => context.Products.Count();

    public double GetTotalUsers([Service] YourNutsDbContext context)
        => context.Customers.Count();

    public decimal GetTotalProfit([Service] YourNutsDbContext context)
        => context.Orders.Sum(order => order.TotalAmount);

    public int GetTotalViews([Service] YourNutsDbContext context)
        => context.Products.Sum(product => product.NumberOfSold);
    
    
    public IEnumerable<RevenueDataPoint> GetTotalRevenueOverTime([Service] YourNutsDbContext context)
        => context.Orders
            .GroupBy(order => new { order.OrderDate.Year, order.OrderDate.Month })
            .Select(group => new RevenueDataPoint
            {
                Year = group.Key.Year,
                Month = group.Key.Month,
                TotalRevenue = group.Sum(order => order.TotalAmount)
            })
            .OrderBy(data => data.Year)
            .ThenBy(data => data.Month)
            .ToList();

    public IEnumerable<SalesDataPoint> GetTotalSalesOverTime([Service] YourNutsDbContext context)
        => context.Orders
            .GroupBy(order => new { order.OrderDate.Year, order.OrderDate.Month })
            .Select(group => new SalesDataPoint
            {
                Year = group.Key.Year,
                Month = group.Key.Month,
                TotalSales = group.Count()
            })
            .OrderBy(data => data.Year)
            .ThenBy(data => data.Month)
            .ToList();
}