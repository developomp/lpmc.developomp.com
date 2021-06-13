import { Helmet } from "react-helmet-async"
import ImageGallery from "react-image-gallery"
import "react-image-gallery/styles/css/image-gallery.css"

const images = [
	{
		original: "/img/lobby.png",
		thumbnail: "/img/lobby.thumb.png",
		description: "Lobby (By: POMP)",
	},
	{
		original: "/img/IceBear/1.png",
		thumbnail: "/img/IceBear/1.thumb.png",
		description: "Doggos (By: Ice Bear)",
	},
	{
		original: "/img/IceBear/2.png",
		thumbnail: "/img/IceBear/2.thumb.png",
		description: "Bee farm (By: Ice Bear)",
	},
	{
		original: "/img/woww/1.png",
		thumbnail: "/img/woww/1.thumb.png",
		description: "overview (By: woww)",
	},
	{
		original: "/img/IceBear/3.png",
		thumbnail: "/img/IceBear/3.thumb.png",
		description: "Chicken (By: Ice Bear)",
	},
	{
		original: "/img/IceBear/4.png",
		thumbnail: "/img/IceBear/4.thumb.png",
		description: "pp (By: Ice Bear)",
	},
]

function Gallery() {
	return (
		<>
			<Helmet>
				<title>Gallery | LPMC</title>
			</Helmet>
			<h1>Gallery</h1>
			<ImageGallery items={images} />
		</>
	)
}

export default Gallery
