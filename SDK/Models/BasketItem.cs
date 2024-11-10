namespace SDK.Models;

public class BasketItem
{
    public int BasketItemId { get; set; }
    public int BasketId { get; set; }
    public int ProductId { get; set; }
    public int Quantity { get; set; }
    public DateTime CreatedAt { get; set; }
    public DateTime UpdatedAt { get; set; }

    public Basket Basket { get; set; }
    public Product Product { get; set; }
}