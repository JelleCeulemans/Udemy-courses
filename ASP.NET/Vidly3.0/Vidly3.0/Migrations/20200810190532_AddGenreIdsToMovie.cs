using Microsoft.EntityFrameworkCore.Migrations;

namespace Vidly3._0.Migrations
{
    public partial class AddGenreIdsToMovie : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.Sql("UPDATE Movie SET GenreId = 1 WHERE Id = 1");
            migrationBuilder.Sql("UPDATE Movie SET GenreId = 2 WHERE Id = 2");
            migrationBuilder.Sql("UPDATE Movie SET GenreId = 2 WHERE Id = 3");
            migrationBuilder.Sql("UPDATE Movie SET GenreId = 3 WHERE Id = 4");
            migrationBuilder.Sql("UPDATE Movie SET GenreId = 4 WHERE Id = 5");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {

        }
    }
}
