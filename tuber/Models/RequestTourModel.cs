using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace tuber.Models
{
    public class RequestTourModel
    {
        [JsonProperty("title")]
        public string Title { get; set; }
        [JsonProperty("description")]
        public string Description { get; set; }
        [JsonProperty("price")]
        public double Price { get; set; }
        [JsonProperty("location")]
        public RequestLocation Location { get; set; }
        [JsonProperty("sessions")]
        public List<RequestSession> Sessions { get; set; }
    }

    public class RequestLocation
    {
        [JsonProperty("lat")]
        public double lat { get; set; }
        [JsonProperty("lng")]
        public double lng { get; set; }
    }

    public class RequestSession
    {
        [JsonProperty("days")]
        public List<string> Days { get; set; }
        [JsonProperty("duration")]
        public int Duration { get; set; }
        [JsonProperty("time")]
        public string Time { get; set; }
    }
}
