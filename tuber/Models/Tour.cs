using System;
using System.Collections.Generic;

namespace tuber
{
    public partial class Tour
    {
        public Tour()
        {
            Adminsmessage = new HashSet<Adminsmessage>();
            Guidemessage = new HashSet<Guidemessage>();
            Review = new HashSet<Review>();
            Session = new HashSet<Session>();
            Touristmessage = new HashSet<Touristmessage>();
        }

        public int TourId { get; set; }
        public int GuideId { get; set; }
        public string TourTitle { get; set; }
        public string TourDescription { get; set; }
        public decimal Latitude { get; set; }
        public decimal Longitude { get; set; }
        public decimal AggregateScore { get; set; }

        public virtual Users Guide { get; set; }
        public virtual ICollection<Adminsmessage> Adminsmessage { get; set; }
        public virtual ICollection<Guidemessage> Guidemessage { get; set; }
        public virtual ICollection<Review> Review { get; set; }
        public virtual ICollection<Session> Session { get; set; }
        public virtual ICollection<Touristmessage> Touristmessage { get; set; }
    }
}
