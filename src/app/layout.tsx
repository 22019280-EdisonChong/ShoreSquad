import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "ShoreSquad - Rally Your Crew for Beach Cleanups",
  description:
    "Join the movement to keep our beaches clean. Track weather, find events, and make a difference with ShoreSquad.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"
          integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
        <script
          src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/js/all.min.js"
          integrity="sha512-uKQ39gEGiyUJl4AI6L+ekBdGKpGw4xJ55+xyJG7YFlJokPNYegn9KwQ3P8A7aFQAUtUsAQHep+d/lrGqrbPIDQ=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        ></script>
      </head>
      <body className={inter.className}>
        <header className="bg-white shadow-sm">
          <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
            <div className="text-2xl font-bold text-blue-600">
              <i className="fas fa-water mr-2"></i>
              ShoreSquad
            </div>
            <div className="hidden md:flex space-x-8">
              <Link href="/events" className="text-navy hover:text-ocean-blue">
                <i className="far fa-calendar-alt mr-2"></i>Events
              </Link>
              <Link href="/map" className="text-navy hover:text-ocean-blue">
                <i className="fas fa-map-marker-alt mr-2"></i>Map
              </Link>
              <Link href="/weather" className="text-navy hover:text-ocean-blue">
                <i className="fas fa-cloud-sun mr-2"></i>Weather
              </Link>
              <Link href="/about" className="text-navy hover:text-ocean-blue">
                <i className="fas fa-info-circle mr-2"></i>About
              </Link>
            </div>
            <button className="btn-primary">
              <i className="fas fa-user-plus mr-2"></i>Join Now
            </button>
          </nav>
        </header>

        <main>{children}</main>

        <footer className="bg-navy text-white py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4">ShoreSquad</h3>
                <p className="text-gray-300">
                  Making beach cleanups fun and connected.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Quick Links</h4>
                <ul className="space-y-2">
                  <li>
                    <Link
                      href="/events"
                      className="text-gray-300 hover:text-white"
                    >
                      Events
                    </Link>
                  </li>
                  <li>
                    <Link href="/map" className="text-gray-300 hover:text-white">
                      Map
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/weather"
                      className="text-gray-300 hover:text-white"
                    >
                      Weather
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Resources</h4>
                <ul className="space-y-2">
                  <li>
                    <Link
                      href="/about"
                      className="text-gray-300 hover:text-white"
                    >
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/contact"
                      className="text-gray-300 hover:text-white"
                    >
                      Contact
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/privacy"
                      className="text-gray-300 hover:text-white"
                    >
                      Privacy Policy
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Connect</h4>
                <p className="text-gray-300 mb-2">Join our community</p>
                <div className="flex space-x-4">
                  <a href="#" className="text-gray-300 hover:text-white text-2xl">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="#" className="text-gray-300 hover:text-white text-2xl">
                    <i className="fab fa-facebook"></i>
                  </a>
                  <a href="#" className="text-gray-300 hover:text-white text-2xl">
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a href="#" className="text-gray-300 hover:text-white text-2xl">
                    <i className="fab fa-github"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
              <p>
                &copy; {new Date().getFullYear()} ShoreSquad. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
