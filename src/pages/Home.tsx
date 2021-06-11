import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Helmet } from "react-helmet-async"
import styled from "styled-components"

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
	color: black;
`

function Home() {
	return (
		<>
			<Helmet>
				<title>Home | LPMC</title>
			</Helmet>

			<h1>Home</h1>
			<img alt="LPMC logo" src="/img/llama.png" />
			<br />
			<a
				href="https://github.com/developomp/lpmc.developomp.com"
				target="_"
			>
				See source code{" "}
				<StyledFontAwesomeIcon icon={faExternalLinkAlt} />
			</a>
		</>
	)
}

export default Home
