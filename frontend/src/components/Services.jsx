import React from "react";

const Services = () => {
  const services = [
    {
      title: "Garden Design",
      description:
        "Creative and professional garden planning for homes and commercial spaces.",
    },
    {
      title: "Landscape Maintenance",
      description:
        "Regular maintenance services to keep your landscape healthy and beautiful.",
    },
    {
      title: "Lawn Care",
      description:
        "Expert lawn mowing, fertilization, and weed control services.",
    },
    {
      title: "Tree Planting",
      description:
        "Planting and caring for trees that enhance the beauty of your property.",
    },
    {
      title: "Irrigation Systems",
      description:
        "Installation and maintenance of efficient watering systems.",
    },
    {
      title: "Outdoor Decoration",
      description:
        "Decorative landscaping features to create attractive outdoor spaces.",
    },
  ];

  return (
    <section id="services" className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">
          Our Services
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition"
            >
              <h3 className="text-xl font-semibold mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;