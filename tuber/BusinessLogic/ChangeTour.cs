using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

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

        public bool execute(Tour tourForm)
        {
            return strategy.Adjust(tourForm);
        }
    }

    //Strategy Interface
    public interface IAdjustTour
    {
        public bool Adjust(Tour tourForm);
        
    }

    //Strategy 1
    public class CreateTour : IAdjustTour
    {
        public bool Adjust(Tour tourForm)
        {
            tuber_databaseContext _context = new tuber_databaseContext();
            int nextTourId = _context.Tour.Max(row => row.TourId) + 1;
            int nextSessId = _context.Session.Max(row => row.SessionId);
            foreach (Session sess in tourForm.Session)
            {
                sess.SessionId = ++nextSessId;
            }
            tourForm.TourId = nextTourId;
            _context.Tour.Add(tourForm);
            _context.SaveChanges();
            return true;
        }
    }

    //Strategy 2
    public class UpdateTour : IAdjustTour
    {
        public bool Adjust(Tour tourForm)
        {
            tuber_databaseContext _context = new tuber_databaseContext();
            List<Session> newSessions = tourForm.Session.ToList();
            tourForm.Session = null;
            int tourId = tourForm.TourId;
            int nextSessId = _context.Session.Max(row => row.SessionId);
            _context.Tour.Update(tourForm);
            newSessions.ForEach(sess =>
            {
                if (sess.SessionId == 0)
                {
                    sess.SessionId = ++nextSessId;
                    _context.Session.Add(sess);
                }
                else
                {
                    _context.Session.Update(sess);
                }
            });
            _context.SaveChanges();
            return true;
        }
    }

    //Strategy 3
    public class DeleteTour : IAdjustTour
    {
        public bool Adjust(Tour tourForm)
        {
            tuber_databaseContext _context = new tuber_databaseContext();
            int tourId = tourForm.TourId;
            _context.Tour.Remove(tourForm);
            _context.SaveChanges();
            return true;
        }
    }
}
