import { createBrowserRouter } from "react-router-dom";
import HomePage from "@/pages/home";
import Layout from "@/layouts/layout";

const routes = [
  {
    element: <Layout />,
    children: [{ path: "/", element: <HomePage /> }]
  }
];

export default createBrowserRouter(routes);
