namespace SDK.Models;

public class Discount
{
    public int DiscountId { get; set; }
    public int ProductId { get; set; }
    public decimal DiscountPercentage { get; set; }
    public DateTime StartDate { get; set; }
    public DateTime EndDate { get; set; }
    public DateTime CreatedAt { get; set; }
    public DateTime UpdatedAt { get; set; }

    public Product Product { get; set; }
}