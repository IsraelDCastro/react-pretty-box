import { createBrowserRouter } from "react-router-dom";
import HomePage from "@/pages/home";
import SingleImagePage from "@/pages/singleImagePage";
import Layout from "@/layouts/layout";
import ImageGalleryPage from "@/pages/imageGalleryPage";
import ImageGalleryMasonryPage from "@/pages/imageGalleryMasonryPage";

const routes = [
  {
    element: <Layout />,
    children: [
      { path: "/", element: <HomePage /> },
      {
        path: "/single-image",
        element: <SingleImagePage />
      },
      {
        path: "/image-gallery",
        element: <ImageGalleryPage />
      },
      {
        path: "/image-gallery-masonry",
        element: <ImageGalleryMasonryPage />
      }
    ]
  }
];

export default createBrowserRouter(routes);
