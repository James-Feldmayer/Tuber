using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace tuber.Controllers
{
    [Route("api/[controller]")]
    public class ToursController : Controller
    {
        // GET: api/Tours
        // Return all tours for displaying
        [HttpGet]
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET: api/Tours/Tourist/5
        // Returns all associated with Tourist
        [HttpGet("Tourist/{userid}")]
        public IEnumerable<string> GetTouristTours(int id)
        {
            return new string[] { "value1", "value2" };
        }

        // GET: api/Tours/TourGuide/5
        // Returns all associated with Tour Guide
        [HttpGet("TourGuide/{userid}")]
        public IEnumerable<string> GetTourGuideTours(int id)
        {
            return new string[] { "value1", "value2" };
        }

        // GET: api/Tours/Tour/5
        // Returns all deatils associated with a Tour
        [HttpGet("Tour/{id}")]
        public IEnumerable<string> GetTour(int id)
        {
            return new string[] { "value1", "value2" };
        }
    }
}
