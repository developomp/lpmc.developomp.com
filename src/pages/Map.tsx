import { Helmet } from "react-helmet-async"
import styled from "styled-components"

const StyledMapContainer = styled.div`
	width: 100%;
	height: calc(100vh - 80px);
	overflow: hidden;
	background-color: black;
`

const StyledMap = styled.object`
	width: 100%;
	height: 100%;
`

function Map() {
	return (
		<>
			<Helmet>
				<title>Map | LPMC</title>
			</Helmet>
			<StyledMapContainer>
				<StyledMap type="text/html" data="/overview" />
			</StyledMapContainer>
		</>
	)
}

export default Map
