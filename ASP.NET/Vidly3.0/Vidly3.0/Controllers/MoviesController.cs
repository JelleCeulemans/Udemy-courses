using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Vidly3._0.Models;
using Vidly3._0.Models.ViewModels;

namespace Vidly3._0.Controllers
{
    public class MoviesController : Controller
    {
        private readonly DBContext _context;
        private readonly IMapper _mapper;

        public MoviesController(DBContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }
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

        public ActionResult Index()
        {
            var movies = _context.Movies.Include(m => m.Genre).ToList();
            return View(movies);
        }

        public ActionResult Details(int id)
        {
            var movie = _context.Movies.Include(m => m.Genre).SingleOrDefault(m => m.Id == id);
            return View(movie);
        }

        [Route("movies/released/{year}/{month}")]
        public ActionResult ByReleaseDate(int year, int month)
        {
            return Content(year + "/" + month);
        }

        public IActionResult New()
        {
            var viewModel = new MovieFormViewModel
            {
                Movie = new Movie(),
                Genres = _context.Genres.ToList()
            };
            return View("MovieForm", viewModel);
        }

        public IActionResult Save(MovieFormViewModel viewModel)
        {
            var movie = viewModel.Movie;
            if (movie.Id == 0)
            {
                _context.Add(movie);
            }
            else
            {
                var movieInDb = _context.Movies.Single(c => c.Id == movie.Id);
                _mapper.Map(movie, movieInDb);
            }
            
            _context.SaveChanges();
            return RedirectToAction("Index", "Movies");
        }

        public IActionResult Edit(int id)
        {
            var viewModel = new MovieFormViewModel
            {
                Movie = _context.Movies.Single(m => m.Id == id),
                Genres = _context.Genres.ToList()
            };
            return View("MovieForm", viewModel);
        }
    }
}