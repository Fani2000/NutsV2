namespace SDK.Models;

public class BasketItem
{
    public Guid BasketItemId { get; set; }
    public Guid BasketId { get; set; }
    public Guid ProductId { get; set; }
    public int Quantity { get; set; }
    public DateTime CreatedAt { get; set; }
    public DateTime UpdatedAt { get; set; }

    public Basket Basket { get; set; }
    public Product Product { get; set; }
}