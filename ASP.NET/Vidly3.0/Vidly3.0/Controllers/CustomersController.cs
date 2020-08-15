using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using AutoMapper.QueryableExtensions;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Vidly3._0.Models;
using Vidly3._0.Models.Dto;
using Vidly3._0.Models.ViewModels;

namespace Vidly3._0.Controllers
{
    public class CustomersController : Controller
    {
        private readonly DBContext _context;
        private readonly IMapper _mapper;
        public CustomersController(DBContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }
        public IActionResult Index()
        {

            var customers = _context.Customers.Include(c => c.MembershipType).ToList();
            return View(customers);
        }

        public IActionResult Details(int id)
        {
            var customer = _context.Customers.Include(c => c.MembershipType).SingleOrDefault(c => c.Id == id);
            if (customer == null)
                return NotFound();

            return View(customer);
        }

        public IActionResult New()
        {
            var viewModel = new CustomerFormViewModel
            {
                Customer = new Customer(),
                MembershipTypes = _context.MembershipTypes.ToList(),
            };
            return View("CustomerForm", viewModel);
        }

        // Get Model instead of ViewModel
        [HttpPost]
        [ValidateAntiForgeryToken]
        public IActionResult Save(CustomerFormViewModel customerVM)
        {
            var customer = customerVM.Customer;
            if (!ModelState.IsValid)
            {
                var viewModel = new CustomerFormViewModel
                {
                    Customer = customer,
                    MembershipTypes = _context.MembershipTypes.ToList()
                };
                return View("CustomerForm", viewModel);
            }
            // _mapper.Map<UpdateCustomerDto, Customer>(customerDto);
            if (customer.Id == 0)
            {
                _context.Customers.Add(customer);
            }
            else
            {
                var customerInDb = _context.Customers.Single(c => c.Id == customer.Id);
                _mapper.Map(customer, customerInDb);
            }
            _context.SaveChanges();
            return RedirectToAction("Index", "Customers");
        }

        public IActionResult Edit(int id)
        {
            var customer = _context.Customers.SingleOrDefault(c => c.Id == id);

            if (customer == null)
                return NotFound();

            var viewModel = new CustomerFormViewModel
            {
                Customer = customer,
                MembershipTypes = _context.MembershipTypes.ToList()
            };
            return View("CustomerForm", viewModel);
        }
    }
}