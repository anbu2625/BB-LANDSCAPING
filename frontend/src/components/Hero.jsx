import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative h-screen flex items-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1416879595882-3373a0480b5b')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-green-950/70"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-yellow-400 uppercase tracking-[6px]"
        >
          Tirunelveli's Trusted Landscape Designers
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-7xl font-bold text-white mt-4 leading-tight"
        >
          We Grow
          <span className="text-yellow-400"> Beautiful</span>
          <br />
          Gardens Here.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-gray-200 text-lg md:text-xl mt-6 max-w-2xl"
        >
          From garden design and lawn care to hardscaping and irrigation,
          we transform outdoor spaces across Tirunelveli and surrounding districts.
        </motion.p>

        {/* Buttons */}
        <div className="flex flex-wrap gap-4 mt-10">
          <a
            href="https://wa.me/919443472670"
            target="_blank"
            rel="noreferrer"
            className="bg-green-500 hover:bg-green-600 px-8 py-4 rounded-full text-white font-semibold transition"
          >
            WhatsApp Us
          </a>

          <a
            href="tel:09443472670"
            className="border border-white hover:bg-white hover:text-black px-8 py-4 rounded-full text-white font-semibold transition"
          >
            Call Now
          </a>

          <a
            href="#quote-form"
            className="bg-yellow-500 hover:bg-yellow-600 px-8 py-4 rounded-full text-white font-semibold transition"
          >
            Get Free Quote
          </a>
        </div>
      </div>
    </section>
  );
}