using System;
using System.Collections.Generic;

namespace tuber
{
    public partial class Users
    {
        public Users()
        {
            AdminsmessageGuide = new HashSet<Adminsmessage>();
            AdminsmessageTourist = new HashSet<Adminsmessage>();
            Booking = new HashSet<Booking>();
            GuidemessageGuide = new HashSet<Guidemessage>();
            GuidemessageTourist = new HashSet<Guidemessage>();
            Issue = new HashSet<Issue>();
            Review = new HashSet<Review>();
            Tour = new HashSet<Tour>();
            TouristmessageGuide = new HashSet<Touristmessage>();
            TouristmessageTourist = new HashSet<Touristmessage>();
        }

        public string UsersId { get; set; }
        public int GuideId { get; set; }
        public int TouristId { get; set; }
        public string Password { get; set; }
        public string Firstname { get; set; }
        public string Lastname { get; set; }

        public virtual ICollection<Adminsmessage> AdminsmessageGuide { get; set; }
        public virtual ICollection<Adminsmessage> AdminsmessageTourist { get; set; }
        public virtual ICollection<Booking> Booking { get; set; }
        public virtual ICollection<Guidemessage> GuidemessageGuide { get; set; }
        public virtual ICollection<Guidemessage> GuidemessageTourist { get; set; }
        public virtual ICollection<Issue> Issue { get; set; }
        public virtual ICollection<Review> Review { get; set; }
        public virtual ICollection<Tour> Tour { get; set; }
        public virtual ICollection<Touristmessage> TouristmessageGuide { get; set; }
        public virtual ICollection<Touristmessage> TouristmessageTourist { get; set; }
    }
}
