namespace SDK.Models;

public class Order
{
    public Guid OrderId { get; set; }
    public Guid CustomerId { get; set; }
    public DateTime OrderDate { get; set; }
    public string Status { get; set; }
    public decimal TotalAmount { get; set; }
    public DateTime CreatedAt { get; set; }
    public DateTime UpdatedAt { get; set; }

    public Customer Customer { get; set; }
    public ICollection<OrderItem> OrderItems { get; set; }
}