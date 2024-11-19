namespace SDK.Models;

public class Product
{
    public Guid ProductId { get; set; }
    public string Name { get; set; }
    public string Description { get; set; }
    public decimal Price { get; set; }
    public int StockQuantity { get; set; }
    public string Category { get; set; }
    
    public int NumberOfSold { get; set; }
    
    public string Image{ get; set; }
    public DateTime CreatedAt { get; set; }
    public DateTime UpdatedAt { get; set; }

    public ICollection<OrderItem> OrderItems { get; set; }
    public ICollection<BasketItem> BasketItems { get; set; }
    public ICollection<Discount> Discounts { get; set; }
}