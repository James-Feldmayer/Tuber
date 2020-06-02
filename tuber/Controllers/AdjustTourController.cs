using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using tuber.BusinessLogic;
using tuber.Models;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace tuber.Controllers
{
    [Route("api/[controller]")]
    public class AdjustTourController : Controller
    {
        private AdjustTourClient tourClient = new AdjustTourClient(null);

        [HttpGet]
        public string GET()
        {
            return "Wrong endpoint";
        }
        
        // POST api/Tour/Create
        // Creates a new tour
        [HttpPost("Create")]
        public bool CreateTour([FromBody]RequestTourModel tour)
        {
            tourClient.strategy = new CreateTour();
            return tourClient.execute(tour, 0);
        }

        // POST api/Tour/Update/5
        // Updates a new tour
        [HttpPost("Update/{id}")]
        public bool UpdateTour(int id, [FromBody]RequestTourModel tour)
        {
            tourClient.strategy = new UpdateTour();
            return tourClient.execute(tour, id);
        }

        // POST api/Tour/Delete/5
        // Updates a new tour
        [HttpPost("Delete/{id}")]
        public bool DeleteTour(int id, [FromBody]RequestTourModel tour)
        {
            tourClient.strategy = new DeleteTour();
            return tourClient.execute(tour, id);
        }
    }
}
