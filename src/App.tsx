import React from "react";
import styled from "styled-components";
import NavBar from "components/NavBar/NavBar";
import About from "views/About";
import Technologies from "views/Technologies";

const StyledApp = styled.main`
	width: calc(100vw - 145px);
	background-color: #333;
	color: #fff;
	padding: 5rem 4rem 0 4rem;
`;

const App = (): React.ReactElement => {
	return (
		<StyledApp>
			<NavBar />
			<About />
			<Technologies />
		</StyledApp>
	);
};

export default App;
