import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import api from "../services/api";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await api.post("/enquiries", formData);

      alert("Enquiry submitted successfully!");

      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });

      console.log(res.data);
    } catch (error) {
      console.error(error);
      alert("Failed to submit enquiry");
    }
  };

  return (
    <>
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

            <motion.div
              initial={{ opacity: 0, x: 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white rounded-3xl p-8 shadow-2xl"
            >
              <h3 className="text-3xl font-bold text-green-700 mb-8">
                Send Enquiry
              </h3>

              <form onSubmit={handleSubmit} className="space-y-5">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                  className="w-full p-4 rounded-xl border border-gray-300 text-black focus:outline-none focus:ring-2 focus:ring-green-600"
                />

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  required
                  className="w-full p-4 rounded-xl border border-gray-300 text-black focus:outline-none focus:ring-2 focus:ring-green-600"
                />

                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone Number"
                  required
                  className="w-full p-4 rounded-xl border border-gray-300 text-black focus:outline-none focus:ring-2 focus:ring-green-600"
                />

                <textarea
                  rows="5"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your landscaping requirement..."
                  required
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
    </>
  );
}

export default Contact;