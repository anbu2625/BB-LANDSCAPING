export default function About() {
  return (
    <section id="about" className="py-24 bg-stone-100">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

        <img
          src="https://images.unsplash.com/photo-1506744038136-46273834b3fb"
          alt=""
          className="rounded-[40px] shadow-xl"
        />

        <div>

          <p className="uppercase tracking-[5px] text-yellow-600 font-bold">
            Our Story
          </p>

          <h2 className="text-6xl font-bold text-green-900 mt-4">
            Rooted in
            <span className="text-yellow-600">
              {" "}Tirunelveli
            </span>
            , Growing with You
          </h2>

          <p className="mt-8 text-xl text-gray-700 leading-10">
            BB Landscaping was born right here in Shankar Colony.
            Over 12 years and 480+ projects, we have earned the trust
            of homeowners, apartment committees, and businesses across
            Tirunelveli and Tamil Nadu.
          </p>

          <ul className="mt-8 space-y-4 text-lg">
            <li>✓ Licensed & Insured Professionals</li>
            <li>✓ Native Plant Expertise</li>
            <li>✓ Transparent Pricing</li>
          </ul>

        </div>

      </div>
    </section>
  );
}