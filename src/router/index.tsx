import { createBrowserRouter } from "react-router-dom";
import HomePage from "@/pages/home";
import SingleImagePage from "@/pages/singleImagePage";
import Layout from "@/layouts/layout";
import ImageGalleryPage from "@/pages/imageGalleryPage";
import ImageGalleryMasonryPage from "@/pages/imageGalleryMasonryPage";
import ProductGalleryPage from "@/pages/productGalleryPage";
import ImageCarouselGalleryPage from "@/pages/imageCarouselGalleryPage";
import MosaicGalleryPage from "@/pages/mosaicGalleryPage";
import SliderGalleryPage from "@/pages/mosaicGalleryPage";

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
			},
			{
				path: "/product-gallery",
				element: <ProductGalleryPage />
			},
			{
				path: "/image-carousel-gallery",
				element: <ImageCarouselGalleryPage />
			},
			{
				path: "/mosaic-gallery",
				element: <MosaicGalleryPage />
			},
			{
				path: "/slider-gallery",
				element: <SliderGalleryPage />
			}
		]
	}
];

export default createBrowserRouter(routes);
