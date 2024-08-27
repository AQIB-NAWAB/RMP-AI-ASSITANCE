import { useState, useEffect } from "react";
import { Twitter, Instagram, Disc } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  const [countdown, setCountdown] = useState({ days: 0, hours: 0, minutes: 0 });

  useEffect(() => {
    const timer = setInterval(() => {
      const launchDate = new Date("2023-12-31T00:00:00Z").getTime(); // Ensure the timezone is correct
      const now = Date.now(); // Use Date.now() for consistency
      const distance = launchDate - now;

      if (distance < 0) {
        clearInterval(timer);
        setCountdown({ days: 0, hours: 0, minutes: 0 });
        return;
      }

      setCountdown({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <footer className="bg-[#020817] text-white py-10 px-4 md:px-8">
      <div className="container mx-auto">
        {/* Top section */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-10">
          <div className="text-2xl font-bold mb-6 md:mb-0">RATE MATE</div>
          <div className="flex space-x-4">
            <Link href="#" className="bg-gray-800 p-3 rounded-full">
              <Twitter className="w-5 h-5" />
            </Link>
            <Link href="#" className="bg-gray-800 p-3 rounded-full">
              <Instagram className="w-5 h-5" />
            </Link>
            <Link href="#" className="bg-gray-800 p-3 rounded-full">
              <Disc className="w-5 h-5" />
            </Link>
          </div>
        </div>

        {/* Middle section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-10">
          <div>
            <h3 className="text-lg font-semibold mb-4">
              Subscribe to newsletter
            </h3>
            <form className="flex">
              <input
                type="email"
                placeholder="Email"
                className="bg-gray-800 text-white px-4 py-2 rounded-l-full w-full"
              />
              <button
                type="submit"
                className="bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 text-white px-6 py-2 rounded-r-full font-semibold transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
              >
                Send
              </button>
            </form>
          </div>
          <div className="flex items-center justify-center md:justify-end">
            <div className="bg-gray-800 text-white px-6 py-3 rounded-full">
              Launching soon
            </div>
          </div>
          <div className="flex flex-col items-center md:items-end">
            <div className="text-3xl font-bold">
              {countdown.days}d : {countdown.hours}h : {countdown.minutes}m
            </div>
            <div className="text-gray-400">Public Sale</div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <div className="mb-6 md:mb-0">© RATE MATE — All rights reserved.</div>
          <div className="flex space-x-6">
            <Link
              href="#"
              className="hover:text-gray-300 transition-colors duration-200"
            >
              Team
            </Link>
            <Link
              href="#"
              className="hover:text-gray-300 transition-colors duration-200"
            >
              Features
            </Link>
            <Link
              href="#"
              className="hover:text-gray-300 transition-colors duration-200"
            >
              Roadmap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
