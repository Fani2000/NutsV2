using Microsoft.EntityFrameworkCore;
using SDK.Models;

namespace SDK.Context;

public class YourNutsDbContext : DbContext
{
    public YourNutsDbContext(DbContextOptions<YourNutsDbContext> options) : base(options)
    {
    }

    public YourNutsDbContext() {}
    
    public DbSet<Customer> Customers { get; set; }
    public DbSet<Product> Products { get; set; }
    public DbSet<Order> Orders { get; set; }
    public DbSet<OrderItem> OrderItems { get; set; }
    public DbSet<Basket> Baskets { get; set; }
    public DbSet<BasketItem> BasketItems { get; set; }
    public DbSet<Discount> Discounts { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        => optionsBuilder.UseNpgsql("Host=localhost;Port=5432;Username=postgres;Password=postgres;Database=YourNuts", x => x.UseNetTopologySuite());
    
    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);

        modelBuilder.Entity<Customer>()
            .HasMany(c => c.Orders)
            .WithOne(o => o.Customer)
            .HasForeignKey(o => o.CustomerId);

        modelBuilder.Entity<Customer>()
            .HasOne(c => c.Basket)
            .WithOne(b => b.Customer)
            .HasForeignKey<Basket>(b => b.CustomerId);

        modelBuilder.Entity<Order>()
            .HasMany(o => o.OrderItems)
            .WithOne(oi => oi.Order)
            .HasForeignKey(oi => oi.OrderId);

        modelBuilder.Entity<OrderItem>()
            .HasOne(oi => oi.Product)
            .WithMany(p => p.OrderItems)
            .HasForeignKey(oi => oi.ProductId);

        modelBuilder.Entity<Basket>()
            .HasMany(b => b.BasketItems)
            .WithOne(bi => bi.Basket)
            .HasForeignKey(bi => bi.BasketId);

        modelBuilder.Entity<BasketItem>()
            .HasOne(bi => bi.Product)
            .WithMany(p => p.BasketItems)
            .HasForeignKey(bi => bi.ProductId);

        modelBuilder.Entity<Product>()
            .HasMany(p => p.Discounts)
            .WithOne(d => d.Product)
            .HasForeignKey(d => d.ProductId);
    }
}

