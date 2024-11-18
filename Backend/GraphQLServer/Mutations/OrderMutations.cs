using SDK.Context;
using SDK.Models;

namespace GraphQLServer.Mutations;

[ExtendObjectType(OperationTypeNames.Mutation)]
public class OrderMutations
{
    [UseMutationConvention]
    public async Task<Order> AddOrder([Service] YourNutsDbContext context, AddOrderInput input)
    {
        var order = new Order
        {
            OrderId = Guid.NewGuid(),
            CustomerId = input.CustomerId,
            OrderDate = input.OrderDate,
            Status = input.Status,
            TotalAmount = input.TotalAmount,
            CreatedAt = DateTime.UtcNow,
            UpdatedAt = DateTime.UtcNow,
            OrderItems = input.OrderItems // assume that input.OrderItems is a collection of OrderItem
        };

        context.Orders.Add(order);
        await context.SaveChangesAsync();

        return order;
    }

    [UseMutationConvention]
    public async Task<Order> UpdateOrder([Service] YourNutsDbContext context,UpdateOrderInput input)
    {
        var order = await context.Orders.FindAsync(input.OrderId);
        if (order == null)
        {
            throw new Exception("Order not found");
        }

        order.CustomerId = input.CustomerId ?? order.CustomerId;
        order.OrderDate = input.OrderDate ?? order.OrderDate;
        order.Status = input.Status ?? order.Status;
        order.TotalAmount = input.TotalAmount ?? order.TotalAmount;
        // Assuming OrderItems has to be fully replaced, otherwise implement updating logic.
        order.OrderItems = input.OrderItems ?? order.OrderItems;
        order.UpdatedAt = DateTime.UtcNow;

        context.Orders.Update(order);
        await context.SaveChangesAsync();

        return order;
    }

    [UseMutationConvention]
    public async Task<bool> DeleteOrder([Service] YourNutsDbContext context,Guid orderId)
    {
        var order = await context.Orders.FindAsync(orderId);
        if (order == null)
        {
            throw new Exception("Order not found");
        }

        context.Orders.Remove(order);
        await context.SaveChangesAsync();

        return true;
    }
}

public class AddOrderInput
{
    public Guid CustomerId { get; set; }
    public DateTime OrderDate { get; set; }
    public string Status { get; set; }
    public decimal TotalAmount { get; set; }
    public ICollection<OrderItem> OrderItems { get; set; } // assume OrderItem class exists
}

public class UpdateOrderInput
{
    public Guid OrderId { get; set; }
    public Guid? CustomerId { get; set; }
    public DateTime? OrderDate { get; set; }
    public string Status { get; set; }
    public decimal? TotalAmount { get; set; }
    public ICollection<OrderItem> OrderItems { get; set; } // assume OrderItem class exists
}
