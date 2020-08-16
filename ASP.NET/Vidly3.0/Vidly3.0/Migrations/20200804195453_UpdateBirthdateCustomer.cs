using Microsoft.EntityFrameworkCore.Migrations;

namespace Vidly3._0.Migrations
{
    public partial class UpdateBirthdateCustomer : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.Sql("UPDATE Customer SET Birthdate = '1980-01-01' WHERE Id = 7");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
        }
    }
}
