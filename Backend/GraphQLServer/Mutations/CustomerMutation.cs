using SDK.Context;
using SDK.Models;

namespace GraphQLServer.Mutations;

[ExtendObjectType(OperationTypeNames.Mutation)]
public class CustomerMutations
{
    [UseMutationConvention]
    public async Task<Customer> AddCustomer([Service] YourNutsDbContext context,AddCustomerInput input)
    {
        var customer = new Customer
        {
            CustomerId = Guid.NewGuid(),
            Name = input.Name,
            Email = input.Email,
            Password = input.Password,
            Address = input.Address,
            PhoneNumber = input.PhoneNumber,
            CreatedAt = DateTime.UtcNow,
            UpdatedAt = DateTime.UtcNow,
            Orders = new List<Order>(), // initialize empty orders collection
            Basket = new Basket() // assume initialization for Basket, can be adjusted as necessary
        };

        context.Customers.Add(customer);
        await context.SaveChangesAsync();

        return customer;
    }

    [UseMutationConvention]
    public async Task<Customer> UpdateCustomer([Service] YourNutsDbContext context,UpdateCustomerInput input)
    {
        var customer = await context.Customers.FindAsync(input.CustomerId);
        if (customer == null)
        {
            throw new Exception("Customer not found");
        }

        customer.Name = input.Name ?? customer.Name;
        customer.Email = input.Email ?? customer.Email;
        customer.Password = input.Password ?? customer.Password;
        customer.Address = input.Address ?? customer.Address;
        customer.PhoneNumber = input.PhoneNumber ?? customer.PhoneNumber;
        customer.UpdatedAt = DateTime.UtcNow;

        context.Customers.Update(customer);
        await context.SaveChangesAsync();

        return customer;
    }

    [UseMutationConvention]
    public async Task<bool> DeleteCustomer([Service] YourNutsDbContext context, Guid customerId)
    {
        var customer = await context.Customers.FindAsync(customerId);
        if (customer == null)
        {
            throw new Exception("Customer not found");
        }

        context.Customers.Remove(customer);
        await context.SaveChangesAsync();

        return true;
    }
}

public class AddCustomerInput
{
    public string Name { get; set; }
    public string Email { get; set; }
    public string Password { get; set; }
    public string Address { get; set; }
    public string PhoneNumber { get; set; }
    // Basket initialization can be added if needed
}

public class UpdateCustomerInput
{
    public Guid CustomerId { get; set; }
    public string Name { get; set; }
    public string Email { get; set; }
    public string Password { get; set; }
    public string Address { get; set; }
    public string PhoneNumber { get; set; }
}

public class CustomerType : InputObjectType<Customer> 
{
    protected override void Configure(IInputObjectTypeDescriptor<Customer> descriptor)
    {
        descriptor.Field(x => x.Basket).Ignore();
    }
}