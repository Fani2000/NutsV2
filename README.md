### setup

1. Need docker desktop installed
2. Need C# IDE
3. Need react skills

### Running

1. `bash docker-compose up -d`
2. Run migrations `cd Backend\SDK\ && dotnet ef database update` to update migrations, you will need to have the dotnet ef tool installed https://learn.microsoft.com/en-us/ef/core/cli/dotnet
3. Run Graphql Server `dotnet run --project=GraphQLServer`
4. Run the admin Frontend `cd Frontend/admin && npm i && npm run dev`


## Docs: 

1. https://chillicream.com/docs/hotchocolate/v13
2. 
