using Microsoft.EntityFrameworkCore.Migrations;

namespace Vidly3._0.Migrations
{
    public partial class AddMembershipTypeName : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.Sql("ALTER TABLE 'MembershipType' CHANGE 'signUpFee' to 'SignUpFee' SMALLINT(6) NOT NULL;");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.Sql("ALTER TABLE 'MembershipType' CHANGE 'SignUpFee' to 'signUpFee' SMALLINT(6) NOT NULL;");
        }
    }
}
