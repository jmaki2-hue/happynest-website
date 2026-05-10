import React from "react";
//(Update with "git add .", "git commit -m 'updated local background image'", "git push")//

function App() {

  const services = [
    {
      id: "liveband",
      title: "Live Band and Music",
      image: "/Ylpmis.jpg",
      desc:
        "Set the mood with live music from Ylpmis Band and keep the energy flowing throughout the event.",
      link: "#",
    },

    {
      id: "beads",
      title: "Bead Me Up!",
      image: "/Bead me up.jpg",
      desc:
        "Customized handmade bead souvenirs perfect for birthdays, weddings, baby showers, and special occasions.",
      link: "#",
    },

    {
      id: "events",
      title: "Events Venue",
      image: "/Lolas.jpg",
      desc:
        "Beautiful venue for birthdays, weddings, and celebrations.",
      link: "#",
    },

    {
      id: "mojito",
      title: "Mobile Frozen Mojito Bar",
      image:
        "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?q=80&w=1200&auto=format&fit=crop",
      desc:
        "Refreshing mobile frozen mojitos, coolers, and party drinks served live for events and gatherings.",
      link: "#",
    },

    {
      id: "laundry",
      title: "Laundry Services",
      image:
        "https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?q=80&w=1200&auto=format&fit=crop",
      desc:
        "Fast, clean, and affordable laundry services.",
      link: "#",
    },

    {
      id: "outings",
      title: "Outings & Resort",
      image:
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop",
      desc:
        "Relaxing outing destinations and resort-style experiences.",
      link: "#",
    },

  ];

  return (
    <div
      id="top"
      className="relative min-h-screen overflow-x-hidden text-gray-800"
    >

      {/* FULL PAGE BACKGROUND IMAGE */}
      <div
        className="fixed inset-0 -z-20 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/Foodie.jpg')",
        }}
      ></div>

      {/* DARK OVERLAY */}
      <div className="fixed inset-0 bg-black/45 -z-10"></div>

      {/* FLOATING SAKURA EFFECT */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden z-0">

        {[...Array(25)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              fontSize: `${10 + Math.random() * 20}px`,
              animationDuration: `${3 + Math.random() * 5}s`,
              opacity: 0.7,
            }}
          >
            🌸
          </div>
        ))}

      </div>

      {/* NAVBAR */}
      <nav className="bg-white/80 backdrop-blur-md shadow-md px-4 md:px-10 py-5 flex justify-between items-center sticky top-0 z-50">

        {/* LOGO + DROPDOWN */}
        <div className="relative group">

          <a
            href="#top"
            className="text-2xl md:text-3xl font-bold text-slate-700 hover:text-pink-500 transition"
          >
            Events by Luna
          </a>

          {/* DROPDOWN MENU */}
          <div className="absolute left-0 mt-3 w-64 md:w-72 bg-white rounded-2xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 overflow-hidden">

            <a
              href="#liveband"
              className="block px-6 py-4 hover:bg-slate-100 transition"
            >
              🎵 Live Band and Music
            </a>

            <a
              href="#laundry"
              className="block px-6 py-4 hover:bg-slate-100 transition"
            >
              🧺 Laundry Services
            </a>

            <a
              href="#events"
              className="block px-6 py-4 hover:bg-slate-100 transition"
            >
              🎉 Events Venue
            </a>

            <a
              href="#outings"
              className="block px-6 py-4 hover:bg-slate-100 transition"
            >
              🌴 Outings & Resort
            </a>

            <a
              href="#beads"
              className="block px-6 py-4 hover:bg-slate-100 transition"
            >
              💎 Beads Souvenir Making
            </a>

            <a
              href="#mojito"
              className="block px-6 py-4 hover:bg-slate-100 transition"
            >
              🍹 Mobile Frozen Mojito Bar
            </a>

          </div>

        </div>

        {/* NAV LINKS */}
        <div className="flex gap-3 md:gap-6 text-sm md:text-base text-white font-medium">

          <a href="#services" className="hover:text-pink-200 transition">
            Services
          </a>

          <a href="#videos" className="hover:text-pink-200 transition">
            Clips
          </a>

          <a href="#contact" className="hover:text-pink-200 transition">
            Contact
          </a>

        </div>

      </nav>

      {/* HERO SECTION */}
      <section className="relative text-center py-20 md:py-32 px-6">

        <div className="bg-white/15 backdrop-blur-md rounded-3xl p-10 md:p-16 max-w-5xl mx-auto border border-white/20 shadow-2xl">

          <h1 className="text-4xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Events by Luna
          </h1>

          <p className="text-lg md:text-2xl text-gray-100 max-w-3xl mx-auto leading-relaxed">
            Elegant celebrations, unforgettable moments, and premium services wrapped in nature-inspired beauty.
          </p>

          <a href="#services">

            <button className="mt-10 bg-pink-400 hover:bg-pink-500 text-white px-8 py-4 rounded-full text-lg shadow-lg transition hover:scale-105">
              Explore Services
            </button>

          </a>

        </div>

      </section>

      {/* SERVICES SECTION */}
      <section
        id="services"
        className="relative py-20 px-4 md:px-8 max-w-7xl mx-auto z-10"
      >

        <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16">
          Our Services
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

          {services.map((service, index) => (
            <a
              id={service.id}
              key={index}
              href={service.link}
              className="bg-white/90 backdrop-blur-md rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 hover:-translate-y-2"
            >

              <img
                src={service.image}
                alt={service.title}
                className="w-full h-56 md:h-72 object-cover"
              />

              <div className="p-8">

                <h3 className="text-2xl md:text-3xl font-bold text-slate-700 mb-4">
                  {service.title}
                </h3>

                <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                  {service.desc}
                </p>

                <button className="mt-6 bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-full transition">
                  Book
                </button>

              </div>

            </a>
          ))}

        </div>

      </section>

      {/* VIDEO CLIPS */}
      <section
        id="videos"
        className="relative py-20 px-4 md:px-8"
      >

        <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16">
          Featured Clips
        </h2>

        <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">

          {/* VIDEO 1 */}
          <div className="bg-white/90 backdrop-blur-md rounded-3xl overflow-hidden shadow-lg">

            <video
              controls
              className="w-full h-[250px] md:h-[350px] object-cover"
            >

              <source
                src="https://www.w3schools.com/html/mov_bbb.mp4"
                type="video/mp4"
              />

            </video>

            <div className="p-6">

              <h3 className="text-xl md:text-2xl font-bold text-slate-700">
                Events & Celebrations
              </h3>

            </div>

          </div>

          {/* VIDEO 2 */}
          <div className="bg-white/90 backdrop-blur-md rounded-3xl overflow-hidden shadow-lg">

            <video
              controls
              className="w-full h-[250px] md:h-[350px] object-cover"
            >

              <source
                src="https://www.w3schools.com/html/movie.mp4"
                type="video/mp4"
              />

            </video>

            <div className="p-6">

              <h3 className="text-xl md:text-2xl font-bold text-slate-700">
                Resort & Outings Experience
              </h3>

            </div>

          </div>

        </div>

      </section>

      {/* CONTACT SECTION */}
      <section
        id="contact"
        className="relative py-24 px-4 md:px-8 text-center"
      >

        <div className="bg-white/15 backdrop-blur-md rounded-3xl p-10 max-w-4xl mx-auto border border-white/20 shadow-2xl">

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-10">
            Book With Us
          </h2>

          <p className="text-lg md:text-xl text-gray-100 mb-10">
            Ready to schedule your service or reserve your venue?
          </p>

          <a
            href="mailto:jmakinano.arthur@gmail.com"
            className="bg-pink-400 hover:bg-pink-500 text-white px-8 md:px-10 py-4 md:py-5 rounded-full text-lg md:text-xl transition shadow-lg inline-block"
          >
            Book Through Email
          </a>

          <div className="mt-16 text-gray-100 space-y-4 text-base md:text-lg">

            <p>📍 Trece Martirez, Cavite</p>

            <p>📞 +63 936 926 0413</p>

            <p className="break-all">
              ✉️ eventsbyluna@gmail.com
            </p>

          </div>

        </div>

      </section>

      {/* FOOTER COPYRIGHT */}
      <footer className="relative bg-black/40 backdrop-blur-md border-t border-white/10 py-6 mt-10">

        <div className="text-center text-gray-200 text-xs md:text-sm space-y-3 px-4">

          <p>
            © 2026 Events by Luna. All Rights Reserved.
          </p>

          <p>
            Designed & Developed by Events by Luna
          </p>

          {/* FACEBOOK LINK */}
          <a
            href="https://www.facebook.com/profile.php?id=61554403796437&mibextid=wwXIfr&rdid=ijyLTLQ1rcBEcv7C#"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-pink-200 hover:text-pink-400 transition font-medium"
          >
            Visit Our Facebook Page
          </a>

        </div>

      </footer>

    </div>
  );
}

export default App;