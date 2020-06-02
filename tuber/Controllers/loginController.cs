using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

//https://local:5001/login/

namespace tuber
{
    [Route("api/[controller]")]
    [ApiController]
    public class LoginController : ControllerBase
    {
        private readonly tuber_databaseContext _context;

        public LoginController() 
        {
            _context = new tuber_databaseContext(); 
        }

        // POST: login/
        [HttpPost]
                                    //Users
        public async Task<ActionResult<string>> LoginUser(Users input)
        {
            Users query = await _context.Users.FindAsync(input.UsersId);

            if (query == null) {
                return "NO ACCOUNT FOUND";
            }
            else if (query.Password == input.Password) {
                return "SUCCESSFULL";
            }
            else {  
                return "INCORRECT PASSWORD";
            }
        }

    }

}
