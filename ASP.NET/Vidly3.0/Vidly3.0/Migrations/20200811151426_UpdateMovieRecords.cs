using Microsoft.EntityFrameworkCore.Migrations;

namespace Vidly3._0.Migrations
{
    public partial class UpdateMovieRecords : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.Sql("UPDATE Movie SET ReleaseDate = '2009-11-6', DateAdded = NOW(), InStock = 5 WHERE Id = 1;");
            migrationBuilder.Sql("UPDATE Movie SET ReleaseDate = '1990-7-2', DateAdded = NOW(), InStock = 2 WHERE Id = 2;");
            migrationBuilder.Sql("UPDATE Movie SET ReleaseDate = '1984-10-26', DateAdded = NOW(), InStock = 3 WHERE Id = 3;");
            migrationBuilder.Sql("UPDATE Movie SET ReleaseDate = '1996-3-26', DateAdded = NOW(), InStock = 5 WHERE Id = 4;");
            migrationBuilder.Sql("UPDATE Movie SET ReleaseDate = '1998-1-7', DateAdded = NOW(), InStock = 9 WHERE Id = 5;");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {

        }
    }
}
