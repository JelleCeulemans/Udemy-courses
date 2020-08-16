using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Vidly3._0.Models
{
    public class Movie
    {
        public Movie()
        {
            ReleaseDate = new DateTime(1, 1, 1);
            InStock = 0;
        }
        public int Id { get; set; }

        [Required]
        public string Name { get; set; }

        [Display(Name = "Genre")]
        [Required]
        public int GenreId { get; set; }
        [Display(Name = "Release Date")]
        
        [Required]
        public DateTime ReleaseDate { get; set; }
        public DateTime DateAdded { get; set; }
        
        [Display(Name = "Number in Stock")]
        [Required]
        [Range(1, 20)]
        public int InStock { get; set; }
        public Genre Genre { get; set; }
    }
}
