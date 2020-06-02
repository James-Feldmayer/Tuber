using System;
using System.Collections.Generic;

namespace tuber
{
    public partial class Touristmessage
    {
        public int TouristMessageId { get; set; }
        public int TourId { get; set; }
        public int TouristId { get; set; }
        public int GuideId { get; set; }
        public DateTime TouristDatetime { get; set; }
        public string TouristSubject { get; set; }
        public string TouristContent { get; set; }

        public virtual Users Guide { get; set; }
        public virtual Tour Tour { get; set; }
        public virtual Users Tourist { get; set; }
    }
}
