import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-ocean-blue text-white py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Rally Your Crew for Cleaner Shores
              </h1>
              <p className="text-xl mb-8">
                Join the movement to keep our beaches clean. Track weather, find events,
                and make a difference with ShoreSquad.
              </p>
              <button className="btn-secondary">
                Find a Beach Cleanup
              </button>
            </div>
            <div className="md:w-1/2">
              <Image
                src="/globe.svg"
                alt="Beach cleanup illustration"
                width={500}
                height={400}
                className="w-full"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-bg-light">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-center mb-12">How ShoreSquad Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="card">
                <Image
                  src={feature.icon}
                  alt={feature.title}
                  width={40}
                  height={40}
                  className="mb-4"
                />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
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
