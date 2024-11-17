import React from "react";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import MainPage from "./pages/mainPage";
import Mainlayout from "./layouts/MainLayout";
import FindUs from "./pages/FindUs";
import ProductDetails from "./pages/ProductDetails";
import WishlistPage from "./pages/WishlistPage";
import CategoryPage from "./pages/CategoryPage";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<Mainlayout />}>
          <Route index element={<MainPage />} />
          <Route path="/find-us" element={<FindUs />} />
          <Route
            path="/product-details/:productId"
            key={window.location.href}
            element={<ProductDetails />}
          />
          <Route path="/wishlist" element={<WishlistPage />} />
          <Route path="/category/:category" element={<CategoryPage />} />
        </Route>
      </>
    )
  );

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
