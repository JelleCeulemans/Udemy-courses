
using Microsoft.EntityFrameworkCore;

namespace Vidly3._0.Models
{


    public class DBContext : DbContext
    {
        public DBContext(DbContextOptions<DBContext> options) : base(options)
        {
        }

        public DbSet<Customer> Customers { get; set; }
        public DbSet<Movie> Movies { get; set; }
        public DbSet<Genre> Genres { get; set; }
        public DbSet<MembershipType> MembershipTypes { get; set; }


        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Customer>().ToTable("Customer");
            modelBuilder.Entity<Movie>().ToTable("Movie");
            modelBuilder.Entity<Genre>().ToTable("Genre");
            modelBuilder.Entity<MembershipType>().ToTable("MembershipType");
   

        }
    }

}
