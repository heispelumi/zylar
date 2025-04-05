import React from "react";
import { Link, useNavigate } from "react-router-dom";

const collections = [
  {
    products: [
      {
        id: 1,
        name: "Sleeveless Faded Tee",
        price: 70000,
        image: "https://i.pinimg.com/736x/b8/e1/2d/b8e12d047fd46f851ac9c071b0b8e618.jpg",
      },
      {
        id: 2,
        name: "Rugged Cap",
        price: 30000,
        image: "https://i.pinimg.com/474x/8a/9e/b8/8a9eb8e8f6a7f83884833802c8af4b34.jpg",
      },
      {
        id: 3,
        name: "Crop Top Women -White",
        price: 50000,
        image: "https://i.pinimg.com/474x/b3/1d/8c/b31d8ca8501a5da0b2a7662df9c736a2.jpg",
      },
      {
        id: 4,
        name: "A-star Sports Jacket",
        price: 300000,
        image: "https://i.pinimg.com/736x/2e/58/5b/2e585bb0a8f139df805daa9c0a9bb36c.jpg",
      },
      {
        id: 5,
        name: "Observe -Black",
        price: 120000,
        image: "https://i.pinimg.com/736x/84/be/eb/84beeb857789a030b49035df81c4e602.jpg",
      },
      {
        id: 6,
        name: "Cozy Hoodie -Pink",
        price: 105000,
        image: "https://i.pinimg.com/736x/87/c0/d1/87c0d1f915d23a9f2ef83054c3d2bf7c.jpg",
      },
      {
        id: 7,
        name: "Antidote Tee -White",
        price: 60000,
        image: "https://i.pinimg.com/736x/dc/63/5f/dc635f94e503e9ef0cdf12c1165721e8.jpg",
      },
    ],
  },
];

const Collections = () => {
  const navigate = useNavigate();

  return (
    <section className=" pt-[65px] poppins pb-[20px] px-4 lg:px-[150px]">
      <div className="container mx-auto">
        {collections.map((collection, index) => (
          <div key={index} className="mb-12">
            {/* Products Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
              {collection.products.map((product) => (
                <div
                  key={product.id}
                  className="flex flex-col items-center text-center cursor-pointer"
                  onClick={() => navigate(`/product/${product.id}`, { state: { product } })}
                >
                  <div className="w-full max-w-[260px]">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-[180px] md:h-[250px] object-cover transition-transform"
                    />
                  </div>
                  <p className="text-sm font-semibold mt-2">{product.name}</p>
                  <p className="text-gray-500 text-xs">₦{product.price.toLocaleString()}</p>
                </div>
              ))}
            </div>

            {/* View All Button */}
            <div className="flex justify-end mt-6">
              <Link
                to="/allproducts"
                className="bg-black text-white px-6 poppins py-2  hover:bg-gray-800 transition"
              >
                View All
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Collections;
