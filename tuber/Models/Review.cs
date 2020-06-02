using System;
using System.Collections.Generic;

namespace tuber
{
    public partial class Review
    {
        public int TouristId { get; set; }
        public int TourId { get; set; }
        public decimal Score { get; set; }
        public string ReviewDescription { get; set; }
        public string ReviewSubject { get; set; }

        public virtual Tour Tour { get; set; }
        public virtual Users Tourist { get; set; }
    }
}
