import React, { useEffect, useState } from "react";
import styled from "styled-components";

interface MenuProps {
	isMenuOpen: boolean;
}

const StyledHeader = styled.header`
	position: fixed;
	top: 0;
	left: 0;
	z-index: 1000;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0 2rem;
	width: calc(100% - 4rem);
	height: 5rem;
	background-color: #333;
	color: #fff;
`;

const StyledGithubAccount = styled.section`
	display: flex;
	align-items: center;
	gap: 0.5rem;
`;

const StyledUserName = styled.h2`
	margin: 0;
	font-size: 1.5rem;
	font-weight: 400;

	@media (max-width: 480px) {
		display: none;
	}
`;

const StyledGithubLink = styled.a`
	display: flex;
	align-items: center;
	color: #fff;
	text-decoration: none;
	font-size: 2rem;
	transition: all 0.3s ease-in-out;

	&:hover {
		color: #e47a29;
	}
`;

const menuOpenStyles = `
    justify-content: center;
    padding-right: 2rem;
    position: fixed;
    right: 0;
    bottom: 0;
    width: 100vw;
    height: 100vh;
    backdrop-filter: blur(5px);
    z-index: 1001;
`;
const StyledNavBar = styled.nav`
	display: flex;
	align-items: center;
	justify-content: space-around;
	gap: 2rem;
	transition: all 0.3s ease-in-out;

	@media (max-width: 860px) {
		flex-direction: column;
		align-items: flex-end;
		${({ isMenuOpen }: MenuProps) => {
			return isMenuOpen && menuOpenStyles;
		}}
	}
`;

const StyledLink = styled.a`
	color: #fff;
	text-decoration: none;
	font-size: 1rem;
	font-weight: bold;
	text-transform: uppercase;
	letter-spacing: 0.1rem;
	transition: all 0.3s ease-in-out;

	&:after {
		content: "";
		display: block;
		position: absolute;
		width: 100%;
		height: 2px;
		background-color: #fff;
		bottom: 0;
		left: 0;
		transform: scaleX(0);
		transform-origin: left;
		transition: all 0.3s ease-in-out;
	}

	&:hover {
		font-size: 1.4rem;

		&:after {
			transform: scaleX(1);
			transform-origin: right;
		}
	}

	@media (max-width: 860px) {
		display: ${({ isMenuOpen }: MenuProps) => (isMenuOpen ? "block" : "none")};
		&:after {
			display: none;
		}
	}
`;

const StyledMenu = styled.button`
	background-color: transparent;
	border: none;
	color: #fff;
	font-size: 1.6rem;
	transition: all 0.3s ease-in-out;
	display: none;

	&:hover {
		animation: pulse 0.5s ease-in-out;
	}

	@keyframes pulse {
		0% {
			transform: scale(1);
		}
		50% {
			transform: scale(1.1);
		}
		100% {
			transform: scale(1);
		}
	}

	@media (max-width: 860px) {
		display: ${({ isMenuOpen }: MenuProps) => (isMenuOpen ? "none" : "block")};
	}
`;

const StyledCloseMenu = styled.button`
	background-color: transparent;
	border: none;
	color: #fff;
	font-size: 1.6rem;
	transition: all 0.3s ease-in-out;
	display: none;
	position: absolute;
	top: 1.6rem;
	right: 2rem;
	animation: fadeIn 0.3s ease-in-out;

	@keyframes fadeIn {
		0% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}

	&:hover {
		animation: pulse 0.5s ease-in-out;
	}

	@media (max-width: 860px) {
		display: ${({ isMenuOpen }: MenuProps) => (!isMenuOpen ? "none" : "block")};
	}
`;

const links = [
	{
		name: "About",
		href: "#about"
	},
	{
		name: "Technologies",
		href: "#technologies"
	},
	{
		name: "Contact",
		href: "#contact"
	}
];

const NavBar = () => {
	const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

	useEffect(() => {
		if (isMenuOpen) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "auto";
		}

		return () => {
			document.body.style.overflow = "auto";
		};
	}, [isMenuOpen]);

	const handleLinkClick = () => {
		setIsMenuOpen(false);
	};

	return (
		<StyledHeader>
			<StyledGithubAccount>
				<StyledUserName>JoshuaVM95</StyledUserName>
				<StyledGithubLink href="https://github.com/JoshuaVM95" target="_blank">
					<i className="fa-brands fa-github" />
				</StyledGithubLink>
			</StyledGithubAccount>
			<StyledNavBar isMenuOpen={isMenuOpen}>
				<StyledMenu onClick={() => setIsMenuOpen(true)} isMenuOpen={isMenuOpen}>
					<i className="fa fa-bars" />
				</StyledMenu>
				<StyledCloseMenu onClick={() => setIsMenuOpen(false)} isMenuOpen={isMenuOpen}>
					<i className="fa fa-times" />
				</StyledCloseMenu>
				{links.map((link) => (
					<StyledLink key={link.name} href={link.href} isMenuOpen={isMenuOpen} onClick={handleLinkClick}>
						{link.name}
					</StyledLink>
				))}
			</StyledNavBar>
		</StyledHeader>
	);
};

export default NavBar;
