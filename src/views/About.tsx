import React from "react";
import styled from "styled-components";

const StyledAbout = styled.section`
	display: grid;
	grid-template-columns: 3fr 2fr;
	align-items: center;
	gap: 1rem;
	width: 100%;
	height: calc(100vh - 5rem);

	@media (max-width: 768px) {
		grid-template-columns: 1fr;
		align-items: center;
		justify-items: center;
		min-height: calc(100vh - 5rem);
		height: auto;
		padding-bottom: 2rem;
	}
`;

const StyledTitle = styled.h1`
	margin: 0;
	text-align: center;
	line-height: 1.5;
	border-bottom: 3px solid #e47a29;
	animation: slideIn 1s;

	@keyframes slideIn {
		0% {
			opacity: 0;
			transform: translateY(-5rem);
		}
		100% {
			opacity: 1;
			transform: translateY(0);
		}
	}
`;

const StyledImageSection = styled.section`
	display: flex;
	justify-content: center;
	align-items: center;
	position: relative;
	&:after {
		content: "";
		display: block;
		position: absolute;
		width: 12rem;
		height: 12rem;
		background-color: #e47a29;
		border: 3px dashed #fff;
		border-radius: 50%;
		animation: spin 2s alternate infinite;
	}
	img {
		border-radius: 50%;
		width: 10rem;
		height: 10rem;
		position: relative;
		z-index: 1;
	}

	@keyframes spin {
		0% {
			transform: rotate(0deg) scale(1);
		}
		100% {
			transform: rotate(360deg) scale(1.8);
		}
	}

	@media (max-width: 768px) {
		&:after {
			display: none;
		}
	}
`;

const StyledAboutMe = styled.section`
	display: flex;
	flex-direction: column;
	justify-content: center;
	gap: 1rem;
	animation: slideInAboutMe 1s;

	@keyframes slideInAboutMe {
		0% {
			opacity: 0;
			transform: translateY(5rem);
		}
		100% {
			opacity: 1;
			transform: translateY(0);
		}
	}
`;

const StyledJobTitle = styled.h2`
	margin: 0;
	line-height: 1.5;
	color: #e47a29;
`;

const StyledAboutMeDescription = styled.p`
	margin: 0;
	font-family: "Roboto", sans-serif;
	font-size: 1.2rem;
`;

const About = (): React.ReactElement => {
	return (
		<StyledAbout id="about">
			<StyledImageSection>
				<img src="https://avatars0.githubusercontent.com/u/17098281?s=40&v=4" alt="Joshua Vazquez Maru" />
			</StyledImageSection>
			<StyledAboutMe>
				<StyledTitle>Joshua Vazquez Maru</StyledTitle>
				<StyledJobTitle>React Developer</StyledJobTitle>
				<StyledAboutMeDescription>
					I am a passionate Software Developer with almost 4 years of experience in the Software industry. My
					most experience is in the Front End, but I have worked in the Back End too. The technologies I am
					most familiar are React, Graphql, Apollo, MySql, and Typescript. I am always looking for new
					challenges and opportunities to learn new technologies. And right now I am interest in learning
					Cloud Technologies and Devops.
				</StyledAboutMeDescription>
			</StyledAboutMe>
		</StyledAbout>
	);
};

export default About;
