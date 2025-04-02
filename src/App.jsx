import { BrowserRouter, Route, Routes } from "react-router-dom"; // Import CartProvider
import UserLayout from "./component/Layout/UserLayout";
import Home from "./pages/Home";
import CartContent from "./component/Cart/CartContent"; 
import { Toaster } from "sonner";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import Order from "./pages/Order";
import Helpcenter from "./pages/Helpcenter";
import Checkout from "./pages/Checkout";
import Confirm from "./pages/Confirm";
import About from "./pages/About";
import Allproducts from "./Product/Allproducts";
import Collection from "./Product/Collection";
import Productpage from "./pages/Productpage";
import ScrollToTop from "./component/ScrollToTop";
import { CartProvider } from "./component/Cart/CartContext"; // Correct import of useCart

function App() {
  return (
    <CartProvider> {/* Ensure CartProvider wraps BrowserRouter */}
      <BrowserRouter>
        <ScrollToTop />
        <Toaster position="top-right" />

        {/* Routes for the app */}
        <Routes>
          {/* User Layout */}
          <Route path="/" element={<UserLayout />}>
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="profile" element={<Profile />} />
            <Route path="order" element={<Order />} />
            <Route path="helpcenter" element={<Helpcenter />} />
            <Route path="checkout" element={<Checkout />} />
            <Route path="confirm" element={<Confirm />} />
            <Route path="about" element={<About />} />
            <Route path="allproducts" element={<Allproducts />} />
            <Route path="collection" element={<Collection />} />

            {/* Product page route */}
            <Route path="product/:id" element={<Productpage />} />
            {/* Cart route */}
            <Route path="cartcontent" element={<CartContent />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
