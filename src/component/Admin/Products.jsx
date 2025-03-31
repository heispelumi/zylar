import { useState } from "react";

const Products = () => {
  // Sample product data (replace with API data later)
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Spacecraft Oversized Tee",
      category: "T-Shirts",
      price: 12000,
      stock: 15,
      sizes: ["S", "M", "L", "XL"],
    },
    {
      id: 2,
      name: "Zylar Cargo Pants",
      category: "Pants",
      price: 18000,
      stock: 10,
      sizes: ["M", "L", "XL"],
    },
    {
      id: 3,
      name: "Astronaut Hoodie",
      category: "Hoodies",
      price: 25000,
      stock: 8,
      sizes: ["M", "L"],
    },
  ]);

  return (
    <div className="p-4 md:p-6">
      <h1 className="text-2xl font-bold mb-4">Products</h1>

      <div className="overflow-x-auto bg-white p-4 md:p-6 rounded-lg shadow-md">
        <table className="w-full border-collapse border border-gray-300 text-sm md:text-base">
          <thead>
            <tr className="bg-gray-100">
              <th className="border p-2 md:p-3">ID</th>
              <th className="border p-2 md:p-3">Product Name</th>
              <th className="border p-2 md:p-3">Category</th>
              <th className="border p-2 md:p-3">Price (₦)</th>
              <th className="border p-2 md:p-3">Stock</th>
              <th className="border p-2 md:p-3">Sizes</th>
              <th className="border p-2 md:p-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="border p-2 md:p-3">{product.id}</td>
                <td className="border p-2 md:p-3">{product.name}</td>
                <td className="border p-2 md:p-3">{product.category}</td>
                <td className="border p-2 md:p-3">₦{product.price.toLocaleString()}</td>
                <td className="border p-2 md:p-3">{product.stock}</td>
                <td className="border p-2 md:p-3">{product.sizes.join(", ")}</td>
                <td className="border p-2 md:p-3">
                  <button className="border px-3 py-1 text-yellow-400 rounded">Edit</button>
                  <button className="border px-3 py-1 text-red-700 rounded ml-2">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Products;
