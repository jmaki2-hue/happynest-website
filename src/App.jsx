import React from "react";
//(Update with "git add .", "git commit -m "updated website design"", "git push")//

function App() {
  const services = [
    {
      title: "Live Band and Music",
      image: "/YlpmisBand.jpg",
      desc:
        "Set the mood with live music from Ylpmis Band and keep the energy flowing throughout the event.",
      link: "#",
    },

    {
      title: "Laundry Services",
      image:
        "https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?q=80&w=1200&auto=format&fit=crop",
      desc:
        "Fast, clean, and affordable laundry services.",
      link: "#",
    },

    {
      title: "Events Venue",
      image: "Lolas.jpg",
      desc:
        "Beautiful venue for birthdays, weddings, and celebrations.",
      link: "#",
    },

    {
      title: "Outings & Resort",
      image:
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop",
      desc:
        "Relaxing outing destinations and resort-style experiences.",
      link: "#",
    },

    {
      title: "Beads Souvenir Making",
      image: "/Bead me up.jpg",
      
      desc:
        "Customized handmade bead souvenirs perfect for birthdays, weddings, baby showers, and special occasions.",
        link: "#",
    },

    {
      title: "Mobile Frozen Mojito Bar",
      image:
        "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?q=80&w=1200&auto=format&fit=crop",
      desc:
        "Refreshing mobile frozen mojitos, coolers, and party drinks served live for events and gatherings.",
      link: "#",
    },
  ];

  return (
    <div className="min-h-screen bg-[#edf1f4] text-gray-800">

      {/* NAVBAR */}
      <nav className="bg-white shadow-md px-10 py-5 flex justify-between items-center sticky top-0 z-50">

        <h1 className="text-3xl font-bold text-slate-700">
          HappyNest
        </h1>

        <div className="flex gap-6 text-gray-600 font-medium">

          <a href="#services" className="hover:text-blue-500 transition">
            Services
          </a>

          <a href="#videos" className="hover:text-blue-500 transition">
            Clips
          </a>

          <a href="#contact" className="hover:text-blue-500 transition">
            Contact
          </a>

        </div>

      </nav>

      {/* HERO SECTION */}
      <section className="text-center py-24 px-6 bg-gradient-to-r from-slate-100 to-blue-50">

        <h1 className="text-6xl font-bold text-slate-700 mb-6">
          HappyNest Services & Events
        </h1>

        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Clean spaces, unforgettable celebrations, and relaxing experiences all in one modern family-friendly destination.
        </p>

        <button className="mt-10 bg-slate-700 hover:bg-slate-800 text-white px-8 py-4 rounded-full text-lg shadow-lg transition hover:scale-105">
          Explore Services
        </button>

      </section>

      {/* SERVICES SECTION */}
      <section
        id="services"
        className="py-20 px-8 max-w-7xl mx-auto"
      >

        <h2 className="text-5xl font-bold text-center text-slate-700 mb-16">
          Our Services
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

          {services.map((service, index) => (
            <a
              key={index}
              href={service.link}
              className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 hover:-translate-y-2"
            >

              <img
                src={service.image}
                alt={service.title}
                className="w-full h-72 object-cover"
              />

              <div className="p-8">

                <h3 className="text-3xl font-bold text-slate-700 mb-4">
                  {service.title}
                </h3>

                <p className="text-gray-600 text-lg leading-relaxed">
                  {service.desc}
                </p>

                <button className="mt-6 bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-full transition">
                  Learn More
                </button>

              </div>

            </a>
          ))}

        </div>

      </section>

      {/* VIDEO CLIPS */}
      <section
        id="videos"
        className="py-20 px-8 bg-slate-100"
      >

        <h2 className="text-5xl font-bold text-center text-slate-700 mb-16">
          Featured Clips
        </h2>

        <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">

          {/* VIDEO 1 */}
          <div className="bg-white rounded-3xl overflow-hidden shadow-lg">

            <video
              controls
              className="w-full h-[350px] object-cover"
            >

              <source
                src="https://www.w3schools.com/html/mov_bbb.mp4"
                type="video/mp4"
              />

            </video>

            <div className="p-6">

              <h3 className="text-2xl font-bold text-slate-700">
                Events & Celebrations
              </h3>

            </div>

          </div>

          {/* VIDEO 2 */}
          <div className="bg-white rounded-3xl overflow-hidden shadow-lg">

            <video
              controls
              className="w-full h-[350px] object-cover"
            >

              <source
                src="https://www.w3schools.com/html/movie.mp4"
                type="video/mp4"
              />

            </video>

            <div className="p-6">

              <h3 className="text-2xl font-bold text-slate-700">
                Resort & Outings Experience
              </h3>

            </div>

          </div>

        </div>

      </section>

      {/* CONTACT SECTION */}
      <section
        id="contact"
        className="py-24 px-8 text-center"
      >

        <h2 className="text-5xl font-bold text-slate-700 mb-10">
          Book With Us
        </h2>

        <p className="text-xl text-gray-600 mb-10">
          Ready to schedule your service or reserve your venue?
        </p>

        <a
          href="mailto:jmakinano.arthur@gmail.com"
          className="bg-slate-700 hover:bg-slate-800 text-white px-10 py-5 rounded-full text-xl transition shadow-lg"
        >
          Book Through Email
        </a>

        <div className="mt-16 text-gray-600 space-y-4 text-lg">

          <p>📍 Trece Martirez, Cavite</p>

          <p>📞 +63 936 926 0413</p>

          <p>✉️ jmakinano.arthur@gmail.com</p>

        </div>

      </section>

      {/* FOOTER COPYRIGHT */}
      <footer className="bg-white border-t border-gray-200 py-6 mt-10">

        <div className="text-center text-gray-500 text-sm space-y-2">

          <p>
            © 2026 HappyNest Services & Events. All Rights Reserved.
          </p>

          <p>
            Designed & Developed by HappyNest Web Team
          </p>

        </div>

      </footer>

    </div>
  );
}

export default App;