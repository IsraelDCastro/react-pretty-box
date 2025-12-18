import { createBrowserRouter } from "react-router-dom";
import HomePage from "@playground/pages/home";
import SingleImagePage from "@playground/pages/singleImagePage";
import Layout from "@playground/layouts/layout";
import ImageGalleryPage from "@playground/pages/imageGalleryPage";
import ImageGalleryMasonryPage from "@playground/pages/imageGalleryMasonryPage";
import ProductGalleryPage from "@playground/pages/productGalleryPage";
import ImageCarouselGalleryPage from "@playground/pages/imageCarouselGalleryPage";
import MosaicGalleryPage from "@playground/pages/mosaicGalleryPage";
import SliderGalleryPage from "@playground/pages/sliderGalleryPage";

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
