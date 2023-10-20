import { useRoutes } from "react-router-dom";
import Layout from "./layouts";
import {
  CartPage,
  CategoryPage,
  CheckoutPage,
  HomePage,
  LoginPage,
  NoPage,
  PostDetailPage,
  PostPage,
  ProductDetail,
  Products,
  SearchPage,
  SingupPage,
} from "./pages";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-loading-skeleton/dist/skeleton.css";
import "react-toastify/dist/ReactToastify.css";
import "./styles/animation.css";
import "./styles/slick.css";
import { adminRoutes } from "./router/adminRouters";
function App() {
  const routes = [
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <HomePage /> },
        { path: "/search", element: <SearchPage /> },
        { path: "/cart", element: <CartPage /> },
        { path: "/blog", element: <PostPage /> },
        { path: "/blog/:slug", element: <PostDetailPage /> },
        { path: "/products/:slug", element: <ProductDetail /> },
        { path: "/categories", element: <CategoryPage /> },
        { path: "/categories/:slug", element: <Products /> },
        { path: "/products", element: <CategoryPage /> },
      ],
    },
    {
      path: "/checkout",
      element: <CheckoutPage />,
    },
    { path: "/login", element: <LoginPage /> },
    { path: "/singup", element: <SingupPage /> },
    { path: "*", element: <NoPage /> },

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
      {useRoutes(adminRoutes)}
      {useRoutes(routes)}
    </>
  );
}

export default App;
