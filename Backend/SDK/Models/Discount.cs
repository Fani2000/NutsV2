namespace SDK.Models;

public class Discount
{
    public Guid DiscountId { get; set; }
    public Guid ProductId { get; set; }
    public decimal DiscountPercentage { get; set; }
    public DateTime StartDate { get; set; }
    public DateTime EndDate { get; set; }
    public DateTime CreatedAt { get; set; }
    public DateTime UpdatedAt { get; set; }

    public Product Product { get; set; }
}