import { Helmet } from "react-helmet-async"
import styled from "styled-components"

const StyledMap = styled.object`
	width: 100%;
	height: calc(100vh - 5rem); /* find a less hacky solution */
`

function Map() {
	return (
		<>
			<Helmet>
				<title>Map | LPMC</title>
			</Helmet>

			<StyledMap type="text/html" data="/overview" />
		</>
	)
}

export default Map
