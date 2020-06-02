using System;
using System.Collections.Generic;

namespace tuber
{
    public partial class Guidemessage
    {
        public int GuideMessageId { get; set; }
        public int TourId { get; set; }
        public int GuideId { get; set; }
        public int TouristId { get; set; }
        public DateTime GuideDatetime { get; set; }
        public string GuideSubject { get; set; }
        public string GuideContent { get; set; }

        public virtual Users Guide { get; set; }
        public virtual Tour Tour { get; set; }
        public virtual Users Tourist { get; set; }
    }
}
