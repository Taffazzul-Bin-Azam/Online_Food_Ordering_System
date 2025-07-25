const features = [
  {
    title: "Tiffin System",
    desc: "Get healthy and homemade tiffins delivered fresh daily.",
    button: "Order Now",
    image: "/tiffin.jpg",
  },
  {
    title: "Your Favorite Restaurants",
    desc: "Order now from your comfort zone from the places you love to visit.",
    button: "View Restaurants",
    image: "/restaurant.jpg",
  },
  {
    title: "Top Rated Meals",
    desc: "Enjoy meals rated highly by other food lovers.",
    button: "Explore Top Meals",
    image: "/meal.webp",
  },
  {
    title: "Fast Delivery",
    desc: "We deliver food fast as soon your order your meal!",
    button: "Discover Now",
    image: "/delivery.png",
  },
];

function Home() {
  return (
    <div>
      {/* Hero Banner Section */}
      <div className="relative m-4 mt-8 rounded-xl overflow-hidden shadow-lg">
        <img
          src="/banner4.jpg"
          alt="Banner"
          className="w-full h-[500px] object-cover"
        />

        {/* Overlay Content */}
        <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-white text-center px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            “Good food is the foundation of genuine happiness.”
          </h1>
          <p className="text-lg mb-6">
            Taste the best meals around you — fresh, fast, and fabulous!
          </p>
          <a
            href="/menu"
            className="bg-orange-500 hover:bg-orange-600 px-6 py-3 text-lg rounded shadow-md transition"
          >
            Explore Our Menu
          </a>
        </div>
      </div>

      {/* Recommendation Section */}
      <div className="bg-[#eaf3f5] p-6 rounded-lg mx-6 mb-10">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
          Recommended for You
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <div
              key={i}
              className="bg-white rounded-lg p-4 shadow-md text-center hover:scale-[1.03] transition"
            >
              <img
                src={f.image}
                alt={f.title}
                className="h-32 w-full object-cover rounded-md mb-2"
              />
              <h3 className="text-lg font-bold">{f.title}</h3>
              <p className="text-sm text-gray-600 mb-2">{f.desc}</p>
              <button className="bg-orange-500 text-white px-4 py-2 rounded text-sm hover:bg-orange-600 transition">
                {f.button}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
