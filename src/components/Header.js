import React from 'react';
import axios, { Axios } from 'axios';
import styled from 'styled-components';

function Header() {
	const getJoke = () => {
		Axios.get("https://official-joke-api.appspot.com/random_joke").then(
			(response) => {
				console.log(response);
			}
		)
	 }
 return (
	<ContainerHead>
		<h2> Best Joke Evea! </h2>
		<input placeholder='hold on tight!'></input>
		<button onClick={getJoke}> Laugh Button </button>
	</ContainerHead>
 )
}

export default Header;

const ContainerHead = styled. div`
	
`;

