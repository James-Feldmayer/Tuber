using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using tuber.Models;

namespace tuber.BusinessLogic
{
    //Strategy Design Pattern

    //Client
    public class AdjustTourClient
    {
        public IAdjustTour strategy;

        public AdjustTourClient(IAdjustTour adjustTour)
        {
            this.strategy = adjustTour;
        }

        public bool execute(RequestTourModel tourForm, int id)
        {
            return strategy.Adjust(tourForm, id);
        }
    }

    //Strategy Interface
    public interface IAdjustTour
    {
        public bool Adjust(RequestTourModel tourForm, int id);
    }

    //Strategy 1
    public class CreateTour : IAdjustTour
    {
        public bool Adjust(RequestTourModel tourForm, int id)
        {
            //Create tour implementation
            return true;
        }
    }

    //Strategy 2
    public class UpdateTour : IAdjustTour
    {
        public bool Adjust(RequestTourModel tourForm, int id)
        {
            //Update tour implementation
            return true;
        }
    }

    //Strategy 3
    public class DeleteTour : IAdjustTour
    {
        public bool Adjust(RequestTourModel tourForm, int id)
        {
            //Delete tour implementation
            return true;
        }
    }
}
