import Admin from "../layouts/Admin";
import { Dashboard, ProductAdmin, ProductCreate, ProductEdit } from "../pages/admin";
export const adminRoutes = [
  {
    path: "/admin",
    element: <Admin />,
    children: [
      { index: true, element: <Dashboard /> },
      { path: "products", element: <ProductAdmin /> },
      { path: "products/create", element: <ProductCreate /> },
      { path: "products/:slug/edit", element: <ProductEdit /> },
    ],
  }
];