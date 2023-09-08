import { useRoutes } from "react-router-dom";
import Layout from "./layouts";
import { CategoryPage, HomePage, ProductDetail, Products } from "./pages";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./styles/animation.css";
import "./styles/slick.css";
import ReactImageZoom from "react-image-zoom";
function App() {
  const routes = [
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <HomePage /> },
        { path: "/products", element: <Products /> },
        { path: "/products/:id", element: <ProductDetail /> },
        { path: "/categories", element: <CategoryPage /> },
      ],
    },
  ];
  return (
    <>
      {useRoutes(routes)}
    </>
  );
}

export default App;
