import { Helmet } from "react-helmet-async"
import styled from "styled-components"

import { List, Card, Divider, Container } from "semantic-ui-react"

const StyledHome = styled.div`
	margin-top: 1rem;
`

const StyledCard = styled(Card)`
	width: 100% !important;

	.description {
		font-size: 1.25rem;
	}
`

function Home() {
	return (
		<StyledHome>
			<Helmet>
				<title>Home | LPMC</title>
			</Helmet>
			<h1>LPMC</h1>
			<img alt="LPMC logo" src="/img/llama.png" />

			{/* Server Rules */}

			<Container>
				<Card.Group centered>
					<StyledCard>
						<Card.Content>
							<Card.Header>Server Rules</Card.Header>

							<Card.Meta>
								<Divider />
							</Card.Meta>

							<Card.Description>
								<List as="ol">
									<List.Item
										as="li"
										content="No griefing / stealing."
									/>
									<List.Item
										as="li"
										content="No usage of item duplication glitches."
									/>
									<List.Item
										as="li"
										content="No harming the server (lag machines, DDoS, backdoor, etc.)."
									/>
									<List.Item
										as="li"
										content="No excessive toxicity (LP discord chat rules apply)."
									/>
								</List>
							</Card.Description>
						</Card.Content>
					</StyledCard>
				</Card.Group>
			</Container>
		</StyledHome>
	)
}

export default Home
