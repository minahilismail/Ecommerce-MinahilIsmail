import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import RootLayout from "./components/rootLayout/RootLayout";
import CartPage from "./pages/CartPage";
import Home from "./pages/Home";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import CategoriesPage from "./pages/CategoriesPage";
import WishlistPage from "./pages/WishlistPage";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />}></Route>
        <Route path="/cart" element={<CartPage />}></Route>
        <Route
          path="/product/:productId"
          element={<ProductDetailsPage />}
        ></Route>
        <Route path="/category" element={<CategoriesPage />}></Route>
        <Route path="/category/:category" element={<CategoriesPage />} />
        <Route path="/wishlist" element={<WishlistPage/>}></Route>
      </Route>
    )
  );
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
