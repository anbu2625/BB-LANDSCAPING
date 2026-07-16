function Footer() {
  return (
    <footer className="bg-[#0F3D2E] text-white py-16">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid md:grid-cols-3 gap-12">

          {/* Company Info */}
          <div>
            <h2 className="text-4xl font-bold">
              BB Landscaping
            </h2>

            <p className="text-yellow-400 text-sm tracking-wider mt-2">
              LANDSCAPE DESIGNERS • TIRUNELVELI
            </p>

            <p className="mt-6 text-gray-300 leading-8">
              Transforming outdoor spaces across Tirunelveli and
              Tamil Nadu since over a decade. Locally rooted.
              Proudly growing.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="uppercase tracking-widest font-bold mb-6 text-gray-300">
              Quick Links
            </h3>

            <ul className="space-y-4 text-xl">
              <li><a href="#services">Services</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#gallery">Gallery</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="uppercase tracking-widest font-bold mb-6 text-gray-300">
              Contact
            </h3>

            <div className="space-y-5 text-xl">
              <p>094434 72670</p>

              <p>
                Shankar Colony,
                Tirunelveli 627005
              </p>

              <p>Open Daily till 8:30 PM</p>
            </div>
          </div>

        </div>

        <div className="border-t border-green-800 mt-12 pt-8 flex flex-col md:flex-row justify-between text-gray-400">
          <p>© 2026 BB Landscaping. All rights reserved.</p>

          <p>
            Plot No.5, Shankar Colony,
            Kokatikulam Extension,
            Tirunelveli, TN 627005
          </p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;