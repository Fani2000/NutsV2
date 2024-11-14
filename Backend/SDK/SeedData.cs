using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using SDK.Context;
using SDK.Models;

namespace SDK;

public class DataSeederHostedService(IServiceProvider serviceProvider) : IHostedService
{
    public async Task StartAsync(CancellationToken cancellationToken)
    {
        using (var scope = serviceProvider.CreateScope())
        {
            var context = scope.ServiceProvider.GetRequiredService<YourNutsDbContext>();
            await SeedData(context);
        }
    }

    public Task StopAsync(CancellationToken cancellationToken) => Task.CompletedTask;

    private async Task SeedData(YourNutsDbContext context)
    {
        if (await context.Customers.AnyAsync()) return; // Already seeded

        var now = DateTime.UtcNow;

        var products = new List<Product>
        {
            new Product
            {
                ProductId = Guid.NewGuid(),
                Name = "Product 1",
                Description = "Description for Product 1",
                Price = 10.00m,
                StockQuantity = 100,
                Category = "Category 1",
                Image = "Image URL",
                CreatedAt = now,
                UpdatedAt = now
            },
            new Product
            {
                ProductId = Guid.NewGuid(),
                Name = "Product 2",
                Description = "Description for Product 2",
                Price = 20.00m,
                StockQuantity = 200,
                Category = "Category 2",
                Image = "Image URL",
                CreatedAt = now,
                UpdatedAt = now
            }
        };

        var customer = new Customer
        {
            CustomerId = Guid.NewGuid(),
            Name = "John Doe",
            Email = "john.doe@example.com",
            Password = "password", // For demo purposes, remember to hash passwords in real applications
            Address = "123 Main St",
            PhoneNumber = "123-456-7890",
            CreatedAt = now,
            UpdatedAt = now,
            Orders = new List<Order>(),
            Basket = new Basket()
        };

        var basket = new Basket
        {
            BasketId = Guid.NewGuid(),
            CustomerId = customer.CustomerId,
            CreatedAt = now,
            UpdatedAt = now,
            BasketItems = new List<BasketItem>
            {
                new BasketItem
                {
                    BasketItemId = Guid.NewGuid(),
                    BasketId = customer.Basket.BasketId,
                    ProductId = products[0].ProductId,
                    Quantity = 2,
                    CreatedAt = now,
                    UpdatedAt = now
                }
            }
        };

        var order = new Order
        {
            OrderId = Guid.NewGuid(),
            CustomerId = customer.CustomerId,
            OrderDate = now,
            Status = "Pending",
            TotalAmount = 20.00m,
            CreatedAt = now,
            UpdatedAt = now,
            OrderItems = new List<OrderItem>
            {
                new OrderItem
                {
                    OrderItemId = Guid.NewGuid(),
                    OrderId = Guid.NewGuid(),
                    ProductId = products[0].ProductId,
                    Quantity = 2,
                    Price = 10.00m,
                    CreatedAt = now,
                    UpdatedAt = now
                }
            }
        };

        customer.Orders.Add(order);
        customer.Basket = basket;

        await context.Products.AddRangeAsync(products);
        await context.Customers.AddAsync(customer);
        await context.Orders.AddAsync(order);
        await context.Baskets.AddAsync(basket);

        await context.SaveChangesAsync();
    }
}