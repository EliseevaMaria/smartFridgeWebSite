using smartFridge;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace smartFridgeWebSite.Controllers
{
    public class FridgeController : Controller
    {
        // GET: Fridge
        public ActionResult FridgeIndex(string email)
        {
            return View("FridgeIndex", "MenuLayout", email/*, fridges*/);
        }
    }
}