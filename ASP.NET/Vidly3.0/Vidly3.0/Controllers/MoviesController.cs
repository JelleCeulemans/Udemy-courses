using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Vidly3._0.Models;
using Vidly3._0.Models.ViewModels;

namespace Vidly3._0.Controllers
{
    public class MoviesController : Controller
    {
        public ActionResult Random()
        {
            var movie = new Movie() {Name = "Shrek!"};

            var customers = new List<Customer>()
            {
                new Customer() {Name = "Customer1"},
                new Customer() {Name = "Customer2"}
            };

            var viewModel = new RandomMovieViewModel()
            {
                Movie = movie,
                Customers = customers
            };

            return View(viewModel);
            //return Content("Hello World");
            //return NotFound();
            //return new EmptyResult();
            //return RedirectToAction("Index", "Home", new {page = 1, sortBy = "name"});
        }

        public ActionResult Edit(int id)
        {
            return Content("id=" + id);
        }

        public ActionResult Index(int? pageIndex, string sortBy)
        {
            //if (!pageIndex.HasValue)
            //    pageIndex = 1;
            //if (string.IsNullOrWhiteSpace(sortBy))
            //    sortBy = "name";

            //return Content(string.Format("pageIndex={0}&sortBy={1}", pageIndex, sortBy));
            var movies = GetMovies();
            return View(movies);
        }

        [Route("movies/released/{year}/{month}")]
        public ActionResult ByReleaseDate(int year, int month)
        {
            return Content(year + "/" + month);
        }

        private static IEnumerable<Movie> GetMovies()
        {
            return new List<Movie>
            {
                new Movie {Name = "Shrek"},
                new Movie() {Name = "Wall-e"}
            };
        }

    }
}