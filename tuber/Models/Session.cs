using System;
using System.Collections.Generic;

namespace tuber
{
    public partial class Session
    {
        public Session()
        {
            Booking = new HashSet<Booking>();
            Issue = new HashSet<Issue>();
        }

        public int SessionId { get; set; }
        public DateTime SessionDatetime { get; set; }
        public int TourId { get; set; }

        public virtual Tour Tour { get; set; }
        public virtual ICollection<Booking> Booking { get; set; }
        public virtual ICollection<Issue> Issue { get; set; }
    }
}
