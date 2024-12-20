using GraphQLServer.Extensions;
using SDK;
using SDK.Context;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddDbContext<YourNutsDbContext>();

builder.Services.AddHostedService<DataSeederHostedService>();

builder.Services.AddGraphQl();

builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAll", policy =>
    {
        policy.AllowAnyOrigin()
              .AllowAnyMethod()
              .AllowAnyHeader();
    });
});

var app = builder.Build();

app.MapGraphQL();

app.UseCors("AllowAll");

// redirect path / to path /graphql
app.MapGet("/", () => Results.LocalRedirect("/graphql"));

app.Run();