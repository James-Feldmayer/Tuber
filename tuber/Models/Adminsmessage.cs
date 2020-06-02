using System;
using System.Collections.Generic;

namespace tuber
{
    public partial class Adminsmessage
    {
        public int AdminsMessageId { get; set; }
        public int TourId { get; set; }
        public int TouristId { get; set; }
        public int GuideId { get; set; }
        public string AdminsId { get; set; }
        public DateTime AdminsDatetime { get; set; }
        public string AdminsSubject { get; set; }
        public string AdminsContent { get; set; }

        public virtual Admins Admins { get; set; }
        public virtual Users Guide { get; set; }
        public virtual Tour Tour { get; set; }
        public virtual Users Tourist { get; set; }
    }
}
