using GraphQLServer.Extensions;
using SDK;
using SDK.Context;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddDbContext<YourNutsDbContext>();

builder.Services.AddHostedService<DataSeederHostedService>();

builder.Services.AddGraphQl();

var app = builder.Build();

app.MapGraphQL();

// redirect path / to path /graphql
app.MapGet("/", () => Results.LocalRedirect("/graphql"));

app.Run();