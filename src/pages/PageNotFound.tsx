import { Helmet } from "react-helmet-async"

function PageNotFound() {
	return (
		<>
			<Helmet>
				<title>Page Not Found | LPMC</title>
			</Helmet>
			<h1>Page Not Found</h1>
		</>
	)
}

export default PageNotFound
