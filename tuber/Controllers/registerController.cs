using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

// https://local:5001/api/register/ 

namespace tuber
{
    [Route("api/[controller]")]
    [ApiController]
    public class registerController : ControllerBase
    {
        private readonly tuber_databaseContext _context; 

        public registerController() 
        {
            _context = new tuber_databaseContext(); 
        }
        
        // POST: { "UsersId": "exampleEmail", "Password": "M3LKers", "Firstname": "Johnny", "Lastname": "Smith" }
        [HttpPost]
        public async Task<ActionResult<string>> register(Users input)
        {
            Users query = await _context.Users.FindAsync(input.UsersId); //query for email

            bool userExists = (query != null);

            if (userExists) {
                return "USER ALREADY EXISTS";
            }
            else {            
                int nextId = _context.Users.Max(i => i.GuideId)+1; //unique Guide/TouristId
                
                input.GuideId = nextId; //fill empty fields
                input.TouristId = nextId;

                _context.Users.Add(input); //add Users "input"

                await _context.SaveChangesAsync(); //save changes

                return "CREATED NEW USER";
            }
        }
    
    }
}
