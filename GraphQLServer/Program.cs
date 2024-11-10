using SDK.Context;

var builder = WebApplication.CreateBuilder(args);

builder.Services
    .AddGraphQLServer()
    .RegisterDbContextFactory<YourNutsDbContext>()
    .AddMutationConventions()
    .AddFiltering() 
    .AddSorting()
    .AddProjections()
    .AddTypes();

var app = builder.Build();

app.MapGraphQL();

app.Run();