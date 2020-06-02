using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace tuber
{
    [Route("api/[controller]")]
    [ApiController]
    public class RegisterController : ControllerBase
    {
        private readonly tuber_databaseContext _context; 

        public RegisterController() 
        {
            _context = new tuber_databaseContext(); 
        }
        
        /*
        // POST: register/
        [HttpPost]
        public async Task<ActionResult<bool>> RegisterUser(Users input)
        {
            Users query = await _context.Users.FindAsync(input.UsersId);

            if (query == null) {
                _context.Users.Add(input);
                await _context.SaveChangesAsync();

                return true;
            }
            
            return false;
        }
        */

    }

}
