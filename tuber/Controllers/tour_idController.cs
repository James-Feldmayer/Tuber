using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

// https://local:5001/api/search_tour/

namespace tuber
{
    [Route("api/[controller]")]
    [ApiController]
    public class tour_idController : ControllerBase
    {
        private readonly tuber_databaseContext _context;

        public tour_idController() 
        {
            _context = new tuber_databaseContext(); 
        }

        //https://local:5001/api/tour_id
        // POST: { "TourTitle": "", "TourDescription": "", "AggregateScore": 5 }
        [HttpPost]
        public async Task<ActionResult<Tour>> tourId(Tour input)
        {
            Tour query = await _context.Tour.FindAsync(input.TourId);

            return query;
        }
        
    }

}

