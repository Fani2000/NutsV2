namespace SDK.Models;

public class Basket
{
    public Guid BasketId { get; set; }
    public Guid CustomerId { get; set; }
    public DateTime CreatedAt { get; set; }
    public DateTime UpdatedAt { get; set; }

    public Customer Customer { get; set; }
    public ICollection<BasketItem> BasketItems { get; set; }
}