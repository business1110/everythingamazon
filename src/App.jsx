import React, { useState, useEffect } from "react";

// Mock data for products (replace with your actual affiliate links)
const mockProducts = {
  decor: [
    { id: 1, name: "Modern Wall Art", price: "$29.99", image: "https://placehold.co/300x300?text=Wall+Art", link: " https://amzn.to/your-affiliate-link-1 " },
    { id: 2, name: "Ceramic Vase Set", price: "$45.00", image: "https://placehold.co/300x300?text=Ceramic+Vase", link: " https://amzn.to/your-affiliate-link-2 " },
    { id: 3, name: "Table Lamp Decor", price: "$69.99", image: "https://placehold.co/300x300?text=Lamp", link: " https://amzn.to/your-affiliate-link-3 " },
    { id: 4, name: "Geometric Candle Holder", price: "$19.99", image: "https://placehold.co/300x300?text=Candle+Holder", link: " https://amzn.to/your-affiliate-link-4 " },
  ],
  furniture: [
    { id: 5, name: "Modern Sofa Set", price: "$899.99", image: "https://placehold.co/300x300?text=Sofa", link: " https://amzn.to/your-affiliate-link-5 " },
    { id: 6, name: "Dining Table & Chairs", price: "$799.00", image: "https://placehold.co/300x300?text=Dining+Set", link: " https://amzn.to/your-affiliate-link-6 " },
    { id: 7, name: "Office Chair Ergonomic", price: "$129.99", image: "https://placehold.co/300x300?text=Chair", link: " https://amzn.to/your-affiliate-link-7 " },
    { id: 8, name: "Wooden Coffee Table", price: "$249.99", image: "https://placehold.co/300x300?text=Coffee+Table", link: " https://amzn.to/your-affiliate-link-8 " },
  ],
  curtains: [
    { id: 9, name: "Blackout Curtains - Pair", price: "$39.99", image: "https://placehold.co/300x300?text=Curtains", link: " https://amzn.to/your-affiliate-link-9 " },
    { id: 10, name: "Sheer Lace Curtains", price: "$29.99", image: "https://placehold.co/300x300?text=Sheer+Curtains", link: " https://amzn.to/your-affiliate-link-10 " },
    { id: 11, name: "Thermal Insulated Curtains", price: "$49.99", image: "https://placehold.co/300x300?text=Thermal+Curtains", link: " https://amzn.to/your-affiliate-link-11 " },
    { id: 12, name: "Kids Room Curtains", price: "$24.99", image: "https://placehold.co/300x300?text=Kids+Curtains", link: " https://amzn.to/your-affiliate-link-12 " },
  ],
};

const App = () => {
  const [activeTab, setActiveTab] = useState("popular");
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    // Simulate fetching categories dynamically
    setCategories(Object.keys(mockProducts));
  }, []);

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-indigo-600">everythingamazon</h1>
          <nav className="space-x-6 hidden md:flex">
            <a href="#popular" className="text-gray-700 hover:text-indigo-600 transition">Most Popular</a>
            <a href="#recent" className="text-gray-700 hover:text-indigo-600 transition">Recently Added</a>
            <a href="https://pinterest.com/yourprofile " target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-red-600 transition">Pinterest</a>
          </nav>
        </div>
      </header>

      {/* Tabs */}
      <section className="container mx-auto px-4 py-8">
        <div className="flex border-b border-gray-300 mb-6">
          <button
            onClick={() => setActiveTab("popular")}
            className={`px-4 py-2 font-medium ${
              activeTab === "popular"
                ? "text-indigo-600 border-b-2 border-indigo-600"
                : "text-gray-600 hover:text-indigo-500"
            }`}
          >
            Most Popular
          </button>
          <button
            onClick={() => setActiveTab("recent")}
            className={`px-4 py-2 font-medium ${
              activeTab === "recent"
                ? "text-indigo-600 border-b-2 border-indigo-600"
                : "text-gray-600 hover:text-indigo-500"
            }`}
          >
            Recently Added
          </button>
        </div>

        {/* Categories */}
        {categories.length > 0 && (
          <div className="mb-8 overflow-x-auto pb-2">
            <div className="flex space-x-4">
              {categories.map((category) => (
                <button
                  key={category}
                  className="px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full whitespace-nowrap hover:bg-indigo-200 transition"
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {Object.values(mockProducts).flat().map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow hover:shadow-xl transition-shadow duration-300 overflow-hidden group"
            >
              <a href={product.link} target="_blank" rel="noopener noreferrer">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </a>
              <div className="p-4">
                <h3 className="font-semibold text-lg text-gray-800 line-clamp-1">{product.name}</h3>
                <p className="text-indigo-600 font-bold mt-1">{product.price}</p>
                <a
                  href={product.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-block w-full text-center py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition"
                >
                  Buy on Amazon
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Pinterest Feed Section */}
      <section className="bg-white py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Inspired by Pinterest</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((i) => (
              <a
                key={i}
                href="https://pinterest.com/pin/your-pin "
                target="_blank"
                rel="noopener noreferrer"
                className="relative group"
              >
                <img
                  src={`https://placehold.co/400x600?text=Pin+${i}`}
                  alt={`Pinterest inspiration ${i}`}
                  className="w-full h-auto rounded-md object-cover group-hover:brightness-90 transition"
                />
                <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                  <span className="text-white font-bold text-sm">View on Pinterest</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 py-6">
        <div className="container mx-auto px-4 text-center text-gray-600">
          <p>© {new Date().getFullYear()} everythingamazon | Amazon Affiliate Links | Pinterest Integration</p>
          <p className="mt-2 text-sm">All product images and links are provided through Amazon affiliate program.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
