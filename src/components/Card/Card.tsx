import React from "react";
import styled from "styled-components";

const StyledCard = styled.section`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 1rem;
	background-color: #e47a29;
	color: #fff;
	border-radius: 5px;
	padding: 25px;
`;

const StyledTitle = styled.h2`
	margin: 0;
	text-align: center;
	line-height: 1.5;
	border-bottom: 3px solid #e47a29;
	color: #fff;
`;
const StyledDescription = styled.p`
	margin: 0;
	text-align: center;
	line-height: 1.5;
	border-bottom: 3px solid #e47a29;
	color: #fff;
`;

interface CardProps {
	title: string;
	description?: string;
	className?: string;
}

const Card = ({ title, description, children, className }: React.PropsWithChildren<CardProps>) => {
	return (
		<StyledCard className={className}>
			<StyledTitle>{title}</StyledTitle>
			{description !== undefined && description.length > 0 && (
				<StyledDescription>{description}</StyledDescription>
			)}
			{children}
		</StyledCard>
	);
};

export default Card;
