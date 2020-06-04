using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using tuber.BusinessLogic;

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
        public bool CreateTour([FromBody]Tour tour)
        {
            tourClient.strategy = new CreateTour();
            return tourClient.execute(tour);
        }

        // POST api/Tour/Update
        // Updates a new tour
        [HttpPost("Update")]
        public bool UpdateTour([FromBody]Tour input)
        {
            tourClient.strategy = new UpdateTour();
            return tourClient.execute(input);
        }

        // POST api/Tour/Delete
        // Updates a new tour
        [HttpPost("Delete")]
        public bool DeleteTour([FromBody]Tour tour)
        {
            tourClient.strategy = new DeleteTour();
            return tourClient.execute(tour);
        }
    }
}
