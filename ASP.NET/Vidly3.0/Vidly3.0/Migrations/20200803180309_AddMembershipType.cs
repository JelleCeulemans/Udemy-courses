using Microsoft.EntityFrameworkCore.Migrations;

namespace Vidly3._0.Migrations
{
    public partial class AddMembershipType : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<byte>(
                name: "MembershipTypeId",
                table: "Customer",
                nullable: false,
                defaultValue: (byte)0);

            migrationBuilder.CreateTable(
                name: "MembershipType",
                columns: table => new
                {
                    Id = table.Column<byte>(nullable: false),
                    signUpFee = table.Column<short>(nullable: false),
                    DurationInMonths = table.Column<byte>(nullable: false),
                    DiscountRate = table.Column<byte>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_MembershipType", x => x.Id);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Customer_MembershipTypeId",
                table: "Customer",
                column: "MembershipTypeId");

            migrationBuilder.AddForeignKey(
                name: "FK_Customer_MembershipType_MembershipTypeId",
                table: "Customer",
                column: "MembershipTypeId",
                principalTable: "MembershipType",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Customer_MembershipType_MembershipTypeId",
                table: "Customer");

            migrationBuilder.DropTable(
                name: "MembershipType");

            migrationBuilder.DropIndex(
                name: "IX_Customer_MembershipTypeId",
                table: "Customer");

            migrationBuilder.DropColumn(
                name: "MembershipTypeId",
                table: "Customer");
        }
    }
}
