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

			<Container>
				<Card.Group centered>
					{/* Server Rules */}
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
					{/* How to join server */}
					<StyledCard>
						<Card.Content>
							<Card.Header>How to Join</Card.Header>

							<Card.Meta>
								<Divider />
							</Card.Meta>

							<Card.Description>
								<List as="ol">
									<List.Item as="li">
										Join the LP{" "}
										<a
											href="https://discord.gg/2fsar34APa"
											target="_"
										>
											discord server
										</a>
										.
									</List.Item>
									<List.Item
										as="li"
										content="Get the 'LPMC access' role (only given to a trusted member of the community)."
									/>
									<List.Item
										as="li"
										content="Join 'server.lpmc.developomp.com' (version 1.17.1)."
									/>
									<List.Item
										as="li"
										content="Type '/server smp' to join the SMP server."
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
