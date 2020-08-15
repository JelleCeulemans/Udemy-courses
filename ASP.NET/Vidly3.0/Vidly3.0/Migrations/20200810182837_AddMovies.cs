using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Vidly3._0.Migrations
{
    public partial class AddMovies : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.Sql("INSERT INTO Movie (Id, Name) VALUES (1, 'The Hangover')");
            migrationBuilder.Sql("INSERT INTO Movie (Id, Name) VALUES (2, 'Die Hard')");
            migrationBuilder.Sql("INSERT INTO Movie (Id, Name) VALUES (3, 'The Terminator')");
            migrationBuilder.Sql("INSERT INTO Movie (Id, Name) VALUES (4, 'Toy Story')");
            migrationBuilder.Sql("INSERT INTO Movie (Id, Name) VALUES (5, 'Titanic')");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {

        }
    }
}
