import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => (
	<nav>
		<ul>
			<li>
				<Link to="/">Home</Link>
				<Link to="/about">About</Link>
				<Link to="/articles-list">Articles</Link>
			</li>
		</ul>
	</nav>
);

export default NavBar;