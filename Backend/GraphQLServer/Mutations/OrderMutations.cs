using SDK.Context;
using SDK.Models;

namespace GraphQLServer.Mutations;

[ExtendObjectType(OperationTypeNames.Mutation)]
public class OrderMutations
{
    private readonly YourNutsDbContext _context;

    public OrderMutations(YourNutsDbContext context)
    {
        _context = context;
    }

    [UseMutationConvention]
    public async Task<Order> AddOrder(AddOrderInput input)
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

        _context.Orders.Add(order);
        await _context.SaveChangesAsync();

        return order;
    }

    [UseMutationConvention]
    public async Task<Order> UpdateOrder(UpdateOrderInput input)
    {
        var order = await _context.Orders.FindAsync(input.OrderId);
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

        _context.Orders.Update(order);
        await _context.SaveChangesAsync();

        return order;
    }

    [UseMutationConvention]
    public async Task<bool> DeleteOrder(Guid orderId)
    {
        var order = await _context.Orders.FindAsync(orderId);
        if (order == null)
        {
            throw new Exception("Order not found");
        }

        _context.Orders.Remove(order);
        await _context.SaveChangesAsync();

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
