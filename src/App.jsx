import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserLayout from "./component/Layout/UserLayout";
import Home from "./pages/Home";
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
import ProductPage from "./pages/Productpage";
import ScrollToTop from "./component/ScrollToTop"; // Import Scroll Restoration
import AdminLayout from "./component/Admin/Adminlayout";
import Users from "./component/Admin/Users";
import Orders from "./component/Admin/Orders";
import Admindashboard from "./component/Admin/Admindashboard";
import Products from "./component/Admin/Products";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Toaster position="top-right" />

      <Routes>
        {/*  User Layout */}
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
          <Route path="product/:id" element={<ProductPage />} />
        </Route>

               {/*  Admin Layout */}
        <Route path="/adminlayout" element={<AdminLayout />}>
     
          <Route path="admindashboard" element={<Admindashboard />} />
          <Route path="users" element={<Users />} />
          <Route path="products" element={<Products />} />
          <Route path="orders" element={<Orders />} /> 
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
