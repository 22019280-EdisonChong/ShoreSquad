import Image from "next/image";
import Link from "next/link";
import WeatherForecast from './components/WeatherForecast';

export default function Home() {
  return (
    <div className="min-h-screen pb-16">
      {/* Navigation */}
      <nav className="navbar bg-white shadow-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="navbar-brand flex items-center text-2xl font-bold text-ocean-blue">
            <Image
              src="/vercel.svg"
              alt="ShoreSquad Logo"
              width={32}
              height={32}
              style={{ width: 'auto', height: '32px' }}
              className="logo-img mr-2"
            />
            ShoreSquad
          </Link>
          <ul className="nav-links hidden md:flex space-x-8">
            <li><Link href="/" className="nav-link"><i className="fas fa-home mr-2"></i>Home</Link></li>
            <li><Link href="/events" className="nav-link"><i className="fas fa-calendar mr-2"></i>Events</Link></li>
            <li><Link href="/map" className="nav-link"><i className="fas fa-map-marker-alt mr-2"></i>Map</Link></li>
            <li><Link href="/weather" className="nav-link"><i className="fas fa-cloud-sun mr-2"></i>Weather</Link></li>
            <li><Link href="/crew" className="nav-link"><i className="fas fa-users mr-2"></i>My Crew</Link></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="hero-section bg-gradient-to-r from-ocean-blue to-coral text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <i className="fas fa-water"></i> Pristine Beaches, Cleaner Future <i className="fas fa-sun"></i>
          </h1>
          <p className="subtitle text-xl mb-4 text-sand">
            Join us in preserving Singapore&apos;s beautiful coastlines.
          </p>
          <h2 className="text-3xl font-bold mb-4">
            Rally Your Crew for Beach Cleanups!
          </h2>
          <p className="text-lg mb-8">
            Track weather, find locations, and make eco-action fun with your squad.
          </p>
          <div className="hero-buttons flex justify-center gap-4">
            <button className="btn-primary">
              <i className="fas fa-users mr-2"></i> Join a Cleanup
            </button>
            <button className="btn-secondary">
              <i className="fas fa-plus-circle mr-2"></i> Create Event
            </button>
          </div>
        </div>
      </header>

      {/* Stats Section */}
      <section className="stats-section py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="stats-grid grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="stat-card text-center">
              <i className="fas fa-trash-alt fa-3x text-ocean-blue mb-4"></i>
              <div className="stat-number text-4xl font-bold text-navy mb-2">1,135</div>
              <div className="stat-label text-gray-600">Cleanups Hosted</div>
            </div>
            <div className="stat-card text-center">
              <i className="fas fa-map-marker-alt fa-3x text-coral mb-4"></i>
              <div className="stat-number text-4xl font-bold text-navy mb-2">45</div>
              <div className="stat-label text-gray-600">Locations Covered</div>
            </div>
            <div className="stat-card text-center">
              <i className="fas fa-users fa-3x text-sand mb-4"></i>
              <div className="stat-number text-4xl font-bold text-navy mb-2">350</div>
              <div className="stat-label text-gray-600">Squad Members</div>
            </div>
          </div>
        </div>
      </section>

      {/* Weather Forecast Section */}
      <section className="py-16 bg-bg-light">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8 text-navy">
            <i className="fas fa-cloud-sun text-coral mr-2"></i>
            Weather Forecast
          </h2>
          <div className="max-w-6xl mx-auto">
            <WeatherForecast />
          </div>
        </div>
      </section>

      {/* How ShoreSquad Works Section */}
      <section className="how-it-works py-16 bg-bg-light">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-navy">How ShoreSquad Works</h2>
          <div className="features-grid grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="feature-item card text-center">
              <i className="fas fa-calendar-check fa-3x text-ocean-blue mb-4"></i>
              <h3 className="text-xl font-semibold mb-2">Find Events</h3>
              <p className="text-gray-600">Discover beach cleanup events near you and join the community.</p>
            </div>
            <div className="feature-item card text-center">
              <i className="fas fa-cloud-sun fa-3x text-coral mb-4"></i>
              <h3 className="text-xl font-semibold mb-2">Track Weather</h3>
              <p className="text-gray-600">Get real-time weather updates for perfect cleanup conditions.</p>
            </div>
            <div className="feature-item card text-center">
              <i className="fas fa-map-marked-alt fa-3x text-sand mb-4"></i>
              <h3 className="text-xl font-semibold mb-2">Explore Locations</h3>
              <p className="text-gray-600">Find the nearest beaches that need your help.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Next Cleanup Map Section */}
      <section className="map-section py-16 bg-white" id="next-cleanup-map">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4 text-navy">
            <i className="fas fa-map-marker-alt text-coral mr-2"></i>
            Next Cleanup Location: Pasir Ris
          </h2>
          <p className="text-center text-gray-600 mb-8">
            Join us at Street View Asia (Coordinates: 1.381497, 103.955574).<br />
            The pin on the map below indicates the meeting point.
          </p>
          <div className="map-container rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed/v1/place?q=1.381497,103.955574&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Map of Next Cleanup Location"
              className="w-full"
            />
          </div>
        </div>
      </section>

      {/* Bottom Navigation */}
      <nav className="bottom-nav fixed bottom-0 left-0 right-0 bg-white shadow-top md:hidden">
        <div className="grid grid-cols-5 h-16">
          <Link href="/" className="bottom-nav-item active">
            <i className="fas fa-home mb-1"></i>
            <span>Home</span>
          </Link>
          <Link href="/events" className="bottom-nav-item">
            <i className="fas fa-calendar-alt mb-1"></i>
            <span>Events</span>
          </Link>
          <Link href="/map" className="bottom-nav-item">
            <i className="fas fa-map mb-1"></i>
            <span>Map</span>
          </Link>
          <Link href="/weather" className="bottom-nav-item">
            <i className="fas fa-sun mb-1"></i>
            <span>Weather</span>
          </Link>
          <Link href="/squad" className="bottom-nav-item">
            <i className="fas fa-users mb-1"></i>
            <span>Squad</span>
          </Link>
        </div>
      </nav>
    </div>
  );
}

const features = [
  {
    title: "Find Events",
    description: "Discover beach cleanup events near you and join the community.",
    icon: "/window.svg",
  },
  {
    title: "Track Weather",
    description: "Get real-time weather updates for perfect cleanup conditions.",
    icon: "/file.svg",
  },
  {
    title: "Make Impact",
    description: "Track your contribution and see the collective difference we make.",
    icon: "/vercel.svg",
  },
];
