import { useRoutes } from "react-router-dom";
import Layout from "./layouts";
import {
  CartPage,
  CategoryPage,
  CheckoutPage,
  HomePage,
  ProductDetail,
  Products,
  SearchPage,
} from "./pages";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-loading-skeleton/dist/skeleton.css";
import "react-toastify/dist/ReactToastify.css";
import "./styles/animation.css";
import "./styles/slick.css";
import Admin from "./layouts/Admin";
import { Dashboard, ProductAdmin, ProductCreate } from "./pages/admin";
import { adminRoutes } from "./router/adminRouters";
function App() {
  console.log(adminRoutes);
  const routes = [
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <HomePage /> },
        { path: "/search", element: <SearchPage /> },
        { path: "/cart", element: <CartPage /> },
        { path: "/categories", element: <CategoryPage /> },
        { path: "/categories/:slug", element: <Products /> },
        { path: "/products", element: <CategoryPage /> },
        { path: "/products/:slug", element: <ProductDetail /> },
      ],
    },
    {
      path: "/checkout",
      element: <CheckoutPage />,
    },
    // {
    //   path: "/admin",
    //   element: <Admin />,
    //   children: [
    //     { index: true, element: <Dashboard /> },
    //     { path: "products", element: <ProductAdmin /> },
    //     { path: "products/create", element: <ProductCreate /> },
    //   ],
    // },
  ];
  return (
    <>
      {useRoutes(routes)}
      {useRoutes(adminRoutes)}
    </>
  );
}

export default App;
