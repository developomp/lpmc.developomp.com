import { Helmet } from "react-helmet-async"
import styled from "styled-components"

const StyledMap = styled.object`
	position: absolute;
	width: 100%;
	height: calc(100vh - 5rem);

	top: 5rem;
	right: 0px;
	bottom: 0px;
	left: 0px;
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
