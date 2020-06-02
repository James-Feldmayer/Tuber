using System;
using System.Collections.Generic;

namespace tuber
{
    public partial class Admins
    {
        public Admins()
        {
            Adminsmessage = new HashSet<Adminsmessage>();
            Issue = new HashSet<Issue>();
        }

        public string AdminsId { get; set; }
        public string Password { get; set; }

        public virtual ICollection<Adminsmessage> Adminsmessage { get; set; }
        public virtual ICollection<Issue> Issue { get; set; }
    }
}
