export default function Gallery() {
  const images = [
    "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735",
    "https://images.unsplash.com/photo-1470770841072-f978cf4d019e",
    "https://images.unsplash.com/photo-1490750967868-88aa4486c946",
    "https://images.unsplash.com/photo-1501004318641-b39e6451bec6",
    "https://images.unsplash.com/photo-1519337265831-281ec6cc8514",
  ];

  return (
    <section id="gallery" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <p className="uppercase tracking-[6px] text-yellow-600 font-bold">
            Our Work
          </p>

          <h2 className="text-6xl font-bold text-green-900 mt-4">
            Gardens We've
            <span className="text-yellow-600">
              {" "}Brought To Life
            </span>
          </h2>

          <p className="text-xl text-gray-600 mt-6">
            Every project is a unique canvas.
          </p>
        </div>

        <div className="columns-1 md:columns-3 gap-6 space-y-6">

          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt=""
              className="rounded-3xl shadow-xl hover:scale-105 transition duration-500 w-full"
            />
          ))}

        </div>
      </div>
    </section>
  );
}