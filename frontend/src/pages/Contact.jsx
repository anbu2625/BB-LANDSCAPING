import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

function Contact() {
  return (
    <>
      {/* Contact Section */}
      <section
        id="contact"
        className="py-20 bg-gradient-to-r from-green-900 via-green-800 to-green-700 text-white"
      >
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-14"
          >
            <h2 className="text-5xl font-bold mb-4">
              Contact BB Landscaping
            </h2>

            <p className="text-green-100 text-lg">
              Transforming Outdoor Spaces Across Tirunelveli & Tamil Nadu
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-10">
            {/* Contact Details */}
            <motion.div
              initial={{ opacity: 0, x: -80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white text-gray-800 rounded-3xl p-8 shadow-2xl"
            >
              <h3 className="text-3xl font-bold text-green-700 mb-8">
                Get In Touch
              </h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Phone className="text-green-700 mt-1" size={28} />
                  <div>
                    <h4 className="font-semibold text-lg">Phone</h4>
                    <p>094434 72670</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Mail className="text-green-700 mt-1" size={28} />
                  <div>
                    <h4 className="font-semibold text-lg">Email</h4>
                    <p>info@bblandscaping.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <MapPin className="text-green-700 mt-1" size={28} />
                  <div>
                    <h4 className="font-semibold text-lg">Address</h4>
                    <p>
                      Plot No.5, Shankar Colony,
                      <br />
                      Kokatikulam Extension,
                      <br />
                      Tirunelveli - 627005,
                      <br />
                      Tamil Nadu, India
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Clock className="text-green-700 mt-1" size={28} />
                  <div>
                    <h4 className="font-semibold text-lg">
                      Working Hours
                    </h4>
                    <p>Open Daily Till 8:30 PM</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white rounded-3xl p-8 shadow-2xl"
            >
              <h3 className="text-3xl font-bold text-green-700 mb-8">
                Send Enquiry
              </h3>

              <form id="quote-form" className="space-y-5">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full p-4 rounded-xl border border-gray-300 text-black focus:outline-none focus:ring-2 focus:ring-green-600"
                />

                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full p-4 rounded-xl border border-gray-300 text-black focus:outline-none focus:ring-2 focus:ring-green-600"
                />

                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full p-4 rounded-xl border border-gray-300 text-black focus:outline-none focus:ring-2 focus:ring-green-600"
                />

                <textarea
                  rows="5"
                  placeholder="Tell us about your landscaping requirement..."
                  className="w-full p-4 rounded-xl border border-gray-300 text-black focus:outline-none focus:ring-2 focus:ring-green-600"
                ></textarea>

                <button
                  type="submit"
                  className="w-full bg-green-700 text-white py-4 rounded-xl font-semibold hover:bg-green-800 transition"
                >
                  Send Message
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-black via-gray-900 to-black">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold text-white mb-6"
          >
            Ready to Transform Your Outdoor Space?
          </motion.h2>

          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-10">
            From garden design to complete landscape maintenance,
            BB Landscaping creates beautiful outdoor environments
            across Tirunelveli and Tamil Nadu.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-5">
            <a
              href="tel:09443472670"
              className="bg-white text-black px-8 py-4 rounded-xl font-bold hover:scale-105 transition duration-300"
            >
              📞 Call Now
            </a>

            <a
              href="https://wa.me/919443472670"
              target="_blank"
              rel="noreferrer"
              className="bg-green-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-green-500 transition duration-300"
            >
              💬 WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;