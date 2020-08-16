using Microsoft.EntityFrameworkCore.Migrations;

namespace Vidly3._0.Migrations
{
    public partial class UpdatingRecords : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.Sql("UPDATE MembershipType SET Name = 'Pay As You Go' WHERE DurationInMonths = 0; ");
            migrationBuilder.Sql("UPDATE MembershipType SET Name = 'Monthly' WHERE DurationInMonths = 1; ");
            migrationBuilder.Sql("UPDATE MembershipType SET Name = 'Quarterly' WHERE DurationInMonths = 3; ");
            migrationBuilder.Sql("UPDATE MembershipType SET Name = 'Annually' WHERE DurationInMonths = 12; ");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.Sql("UPDATE MembershipType SET Name = 'Pay As You Go' WHERE DurationInMonths = NULL; ");
            migrationBuilder.Sql("UPDATE MembershipType SET Name = 'Monthly' WHERE DurationInMonths = NULL; ");
            migrationBuilder.Sql("UPDATE MembershipType SET Name = 'Quarterly' WHERE DurationInMonths = NULL; ");
            migrationBuilder.Sql("UPDATE MembershipType SET Name = 'Annually' WHERE DurationInMonths = NULL; ");

        }
    }
}
