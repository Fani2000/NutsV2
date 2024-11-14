using SDK.Context;
using SDK.Models;

namespace GraphQLServer.Mutations;

[ExtendObjectType(OperationTypeNames.Mutation)]
public class BasketMutations
{
    private readonly YourNutsDbContext _context;

    public BasketMutations(YourNutsDbContext context)
    {
        _context = context;
    }

    [UseMutationConvention]
    public async Task<Basket> AddBasket(AddBasketInput input)
    {
        var basket = new Basket
        {
            BasketId = Guid.NewGuid(),
            CustomerId = input.CustomerId,
            CreatedAt = DateTime.UtcNow,
            UpdatedAt = DateTime.UtcNow,
            BasketItems = new List<BasketItem>() // initialize empty basket items collection
        };

        _context.Baskets.Add(basket);
        await _context.SaveChangesAsync();

        return basket;
    }

    [UseMutationConvention]
    public async Task<Basket> UpdateBasket(UpdateBasketInput input)
    {
        var basket = await _context.Baskets.FindAsync(input.BasketId);
        if (basket == null)
        {
            throw new Exception("Basket not found");
        }

        // Clear existing items and add new ones from input.
        if(input.BasketItems != null)
        {
            basket.BasketItems.Clear();
            foreach(var item in input.BasketItems)
            {
                basket.BasketItems.Add(new BasketItem
                {
                    ProductId = item.ProductId,
                    Quantity = item.Quantity,
                    BasketId = basket.BasketId
                });
            }
        }

        basket.UpdatedAt = DateTime.UtcNow;

        _context.Baskets.Update(basket);
        await _context.SaveChangesAsync();

        return basket;
    }

    [UseMutationConvention]
    public async Task<bool> DeleteBasket(Guid basketId)
    {
        var basket = await _context.Baskets.FindAsync(basketId);
        if (basket == null)
        {
            throw new Exception("Basket not found");
        }

        _context.Baskets.Remove(basket);
        await _context.SaveChangesAsync();

        return true;
    }
}

public class AddBasketInput
{
    public Guid CustomerId { get; set; }
    // BasketItems initialization can be added if needed
}

public class UpdateBasketInput
{
    public Guid BasketId { get; set; }
    public ICollection<BasketItem> BasketItems { get; set; } // assuming BasketItem class exists
}

public class BasketItemInput
{
    public Guid ProductId { get; set; }
    public int Quantity { get; set; }
}
