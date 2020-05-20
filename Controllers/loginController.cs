using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

/*
https://120.152.178.32:5001/login/

try posting an audio clip using POSTMAN

#warning To protect potentially sensitive information in your connection string, 
you should move it out of source code

http://go.microsoft.com/fwlink/?LinkId=723263
*/

namespace DBFirst
{
    [Route("api/[controller]")]
    [ApiController]
    public class LoginController : ControllerBase
    {
        private readonly loginContext _context;

        public LoginController() 
        {
            _context = new loginContext(); 
        }

        /*
        still have some design questions to answer like returning strings vs int vs bool

        API DESIGN
        https://docs.microsoft.com/en-us/azure/architecture/best-practices/api-design
        https://florimond.dev/blog/articles/2018/08/restful-api-design-13-best-practices-to-make-your-users-happy/
        https://tools.ietf.org/html/rfc7807
        */

        // POST: login/
        [HttpPost]
        public async Task<ActionResult<string>> LoginUser(Users input)
        {
            Users query = await _context.Users.FindAsync(input.Username);

            if (query == null) {
                return NotFound("NO ACCOUNT FOUND");
            }
            else if (query.Password == input.Password) {
                return Ok("SUCCESSFUL");
            }
            else {
                return BadRequest("INCORRECT PASSWORD");
            }

        }

    }

}
