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
    public class search_tourController : ControllerBase
    {
        private readonly tuber_databaseContext _context;

        public search_tourController() 
        {
            _context = new tuber_databaseContext(); 
        }

        // POST: { "TourTitle": "", "TourDescription": "", "AggregateScore": 5 }
        [HttpPost]
        public List<Tour> search_tour(Tour input)
        {
            List<Tour> query = _context.Tour.Where(s => s.AggregateScore >= input.AggregateScore).ToList();
            
            if(input.TourTitle != null) {
                query = query.Where(s => s.TourTitle.Contains(input.TourTitle)).ToList();
            }

            if(input.TourDescription != null) {
                query = query.Where(s => s.TourDescription.Contains(input.TourDescription)).ToList();
            }

            return query;
        }
    }

}

