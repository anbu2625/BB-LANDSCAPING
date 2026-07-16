import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Rajeshkumar Muthusamy",
    location: "Shankar Colony, Tirunelveli",
    initial: "R",
    review:
      "BB Landscaping completely transformed our front yard. The team was punctual, professional, and delivered outstanding results. Highly recommended!",
  },
  {
    name: "Sunitha Arumugam",
    location: "Palayamkottai, Tirunelveli",
    initial: "S",
    review:
      "Their drip irrigation installation saved us water costs and made our garden look beautiful. Honest, skilled and reliable team.",
  },
  {
    name: "Muthuvel Pandian",
    location: "Nanguneri, Tirunelveli",
    initial: "M",
    review:
      "Very good work and friendly people. They understood exactly what we wanted and completed the project ahead of schedule.",
  },
];

function Testimonials() {
  return (
    <section className="py-24 bg-stone-100">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <p className="uppercase tracking-[4px] text-amber-600 font-semibold">
            What Our Clients Say
          </p>

          <h2 className="text-5xl font-bold mt-4 text-green-900">
            Neighbours Who
            <span className="text-amber-600"> Trust Us</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="bg-white rounded-3xl p-10 shadow-lg"
            >
              <div className="text-6xl text-green-200 text-right mb-4">
                ”
              </div>

              <p className="text-gray-700 leading-9 italic mb-8">
                "{item.review}"
              </p>

              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-green-600 flex items-center justify-center text-white font-bold text-xl">
                  {item.initial}
                </div>

                <div>
                  <h4 className="font-bold text-xl text-green-900">
                    {item.name}
                  </h4>

                  <p className="text-gray-500">
                    {item.location}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Testimonials;