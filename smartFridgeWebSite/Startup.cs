using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(smartFridgeWebSite.Startup))]
namespace smartFridgeWebSite
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
