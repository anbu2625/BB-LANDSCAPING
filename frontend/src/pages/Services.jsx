import { motion } from "framer-motion";

const services = [
  "Garden Design",
  "Landscape Maintenance",
  "Lawn Care",
  "Tree Planting",
  "Irrigation Systems",
  "Outdoor Decoration",
];

function Services() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center mb-12"
        >
          Our Services
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-2xl shadow-lg p-8"
            >
              <h3 className="text-xl font-semibold mb-3">{service}</h3>
              <p className="text-gray-600">
                Professional landscaping solutions tailored to your needs.
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;