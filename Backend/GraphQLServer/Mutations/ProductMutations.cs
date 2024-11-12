using SDK.Context;
using SDK.Models;

namespace GraphQLServer.Mutations;

[ExtendObjectType(OperationTypeNames.Mutation)]
public class ProductMutations(YourNutsDbContext context)
{
    public async Task<Product> AddProduct(AddProductInput input)
    {
        var product = new Product
        {
            ProductId = Guid.NewGuid(),
            Name = input.Name,
            Description = input.Description,
            Price = input.Price,
            StockQuantity = input.StockQuantity,
            Category = input.Category,
            CreatedAt = DateTime.UtcNow,
            UpdatedAt = DateTime.UtcNow
        };
        
        context.Products.Add(product);
        await context.SaveChangesAsync();
        
        return product;
    }
    
    public async Task<Product> UpdateProduct(UpdateProductInput input)
    {
        var product = await context.Products.FindAsync(input.ProductId);
        if (product == null)
        {
            throw new Exception("Product not found");
        }
        
        product.Name = input.Name ?? product.Name;
        product.Description = input.Description ?? product.Description;
        product.Price = input.Price ?? product.Price;
        product.StockQuantity = input.StockQuantity ?? product.StockQuantity;
        product.Category = input.Category ?? product.Category;
        product.UpdatedAt = DateTime.UtcNow;
        
        context.Products.Update(product);
        await context.SaveChangesAsync();
        
        return product;
    }
    
    public async Task<bool> DeleteProduct(int productId)
    {
        var product = await context.Products.FindAsync(productId);
        if (product == null)
        {
            throw new Exception("Product not found");
        }
        
        context.Products.Remove(product);
        await context.SaveChangesAsync();
        
        return true;
    }
}


public class AddProductInput
{
    public string Name { get; set; }
    public string Description { get; set; }
    public decimal Price { get; set; }
    public int StockQuantity { get; set; }
    public string Category { get; set; }
}

public class UpdateProductInput
{
    public Guid ProductId { get; set; }
    public string Name { get; set; }
    public string Description { get; set; }
    public decimal? Price { get; set; }
    public int? StockQuantity { get; set; }
    public string Category { get; set; }
}

