using System;
using System.Collections.Generic;

namespace tuber
{
    public partial class Booking
    {
        public int SessionId { get; set; }
        public int TouristId { get; set; }
        public decimal Price { get; set; }
        public string BookingState { get; set; }

        public virtual Session Session { get; set; }
        public virtual Users Tourist { get; set; }
    }
}
