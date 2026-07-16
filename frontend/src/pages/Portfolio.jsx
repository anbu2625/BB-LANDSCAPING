export default function Portfolio() {
  const projects = [
    {
      title: "Shankar Colony Home Garden",
      category: "Residential Garden",
      image:
        "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735",
    },

    {
      title: "Palayamkottai Rooftop Oasis",
      category: "Terrace Garden",
      image:
        "https://images.unsplash.com/photo-1470770841072-f978cf4d019e",
    },

    {
      title: "IT Park Campus",
      category: "Commercial Landscaping",
      image:
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    },

    {
      title: "Villa Lawn Design",
      category: "Premium Lawn",
      image:
        "https://images.unsplash.com/photo-1490750967868-88aa4486c946",
    },

    {
      title: "Koi Pond Project",
      category: "Water Feature",
      image:
        "https://images.unsplash.com/photo-1501004318641-b39e6451bec6",
    },

    {
      title: "Garden Walkway",
      category: "Pathway Design",
      image:
        "https://images.unsplash.com/photo-1519337265831-281ec6cc8514",
    },
  ];

  return (
    <section id="portfolio" className="py-24 bg-stone-100">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <p className="uppercase tracking-[6px] text-yellow-600 font-bold">
            Our Portfolio
          </p>

          <h2 className="text-6xl font-bold text-green-900 mt-4">
            Every Garden Has
            <span className="text-yellow-600">
              {" "}A Story
            </span>
          </h2>

        </div>

        <div className="grid md:grid-cols-3 gap-8">

          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl overflow-hidden shadow-lg hover:-translate-y-3 transition"
            >
              <img
                src={project.image}
                alt=""
                className="h-64 w-full object-cover"
              />

              <div className="p-6">

                <p className="text-yellow-600 font-semibold">
                  {project.category}
                </p>

                <h3 className="text-2xl font-bold text-green-900 mt-2">
                  {project.title}
                </h3>

                <button className="mt-4 text-green-700 font-semibold">
                  View Details →
                </button>

              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}