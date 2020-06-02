using System;
using System.Collections.Generic;

namespace tuber
{
    public partial class Issue
    {
        public int SessionId { get; set; }
        public int TouristId { get; set; }
        public string AdminsId { get; set; }
        public DateTime IssueDatetime { get; set; }
        public string IssueDescription { get; set; }
        public string IssueStatus { get; set; }
        public string IssueSubject { get; set; }

        public virtual Admins Admins { get; set; }
        public virtual Session Session { get; set; }
        public virtual Users Tourist { get; set; }
    }
}
