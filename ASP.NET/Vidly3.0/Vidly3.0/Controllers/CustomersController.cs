using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Vidly3._0.Models;
using Vidly3._0.Models.ViewModels;

namespace Vidly3._0.Controllers
{
    public class CustomersController : Controller
    {
        
        public IActionResult Index()
        {

            var customers = GetCustomers();
            return View(customers);
        }

        public IActionResult Details(int id)
        {
            var customer = GetCustomers().SingleOrDefault(x => x.Id == id);
            if (customer == null)
                return NotFound();

            return View(customer);
        }

        private static IEnumerable<Customer> GetCustomers()
        {
            return new List<Customer>
            {
                new Customer() {Id = 1, Name = "John Smith"},
                new Customer() {Id = 2, Name = "Mary Williams"}
            };
        }
    }
}