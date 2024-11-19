using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace SDK.Migrations
{
    /// <inheritdoc />
    public partial class AddedNumberOfSold : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "NumberOfSold",
                table: "Products",
                type: "integer",
                nullable: false,
                defaultValue: 0);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "NumberOfSold",
                table: "Products");
        }
    }
}
