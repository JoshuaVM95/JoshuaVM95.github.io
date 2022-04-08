import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Card from "components/Card/Card";
import Icon, { iconType } from "components/Icon/Icon";
import { technologies } from "constants/technologies.constants";

interface AnimatedStyledComponentProps {
	isTechnologiesVisible: boolean;
}

const StyledTechnologies = styled.section`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: flex-start;
	width: 100%;
	min-height: calc(100vh - 5rem);

	@media (max-width: 768px) {
		padding-bottom: 2rem;
	}
`;

const StyledTitle = styled.h2`
	margin: 25px 0 0 0;
	text-align: center;
	line-height: 1.5;
	border-bottom: 3px solid #e47a29;
	opacity: 0;
	${({ isTechnologiesVisible }: AnimatedStyledComponentProps) =>
		isTechnologiesVisible && "animation: slideIn 1s linear 10ms forwards;"}

	@keyframes slideIn {
		0% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}
`;

const StyledCards = styled.section`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
	grid-gap: 2rem;
	flex-wrap: wrap;
	justify-content: center;
	align-items: center;
	margin-top: 4rem;
	width: 100%;
`;

const StyledCard = styled(Card)`
	height: 100%;
	${({ isTechnologiesVisible }: AnimatedStyledComponentProps) =>
		isTechnologiesVisible && "animation: scaleIn 700ms linear 10ms forwards;"}

	@keyframes scaleIn {
		0% {
			transform: scale(0);
		}
		100% {
			transform: scale(1);
		}
	}

	@media (max-width: 768px) {
		height: auto;
	}
`;

const StyledUnorderedList = styled.ul`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-wrap: wrap;
	gap: 2rem;
	list-style: none;
	padding: 0;
	margin: 0;
	width: 100%;
	height: 100%;
`;

const StyledListItem = styled.li`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 1rem;
`;

const Technologies = (): React.ReactElement => {
	const titleRef = useRef<HTMLHeadingElement>(null);

	const [isTechnologiesVisible, setIsTechnologiesVisible] = useState<boolean>(false);

	useEffect(() => {
		const handleObserver = (entries: IntersectionObserverEntry[]) => {
			entries.forEach((entry: IntersectionObserverEntry) => {
				if (entry.isIntersecting) {
					setIsTechnologiesVisible(true);
				}
			});
		};

		const observer = new IntersectionObserver(handleObserver);

		if (titleRef.current) {
			observer.observe(titleRef.current);
		}
	}, []);

	return (
		<StyledTechnologies id="technologies">
			<StyledTitle ref={titleRef} isTechnologiesVisible={isTechnologiesVisible}>
				Most Used Technologies
			</StyledTitle>
			<StyledCards>
				{technologies.map(({ title, stack }) => (
					<StyledCard title={title} isTechnologiesVisible={isTechnologiesVisible}>
						<StyledUnorderedList>
							{stack.map((technology) => (
								<StyledListItem key={technology}>
									<Icon
										icon={`${technology.replace(/\s/g, "")}Icon` as iconType}
										color="#fff"
										size="lg"
									/>
									{technology}
								</StyledListItem>
							))}
						</StyledUnorderedList>
					</StyledCard>
				))}
			</StyledCards>
		</StyledTechnologies>
	);
};

export default Technologies;
