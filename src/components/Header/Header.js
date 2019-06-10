// import React, { Component } from 'react';
import React from 'react';

const Header = ({ updateUser }) => {
	return (
		<header>
			<div className="container">

				<h1>GitHub repositories list</h1>

				<form action="#"
					onSubmit={(e) => {
						e.preventDefault();

						console.log('e.target.elements.user.value', e.target.elements.user.value);

						updateUser(e.target.elements.user.value);
					}}
				>
					<label htmlFor="user">User</label> <br/>
					<input id="user" name="user" type="text" />

					<input type="submit" value="Listar repositórios"/>
				</form>
			</div>
		</header>
	);
};

// class Header extends Component {
// 	render() {
// 		const { updateUser } = this.props;

// 		return (
// 			<header>
// 				<div className="container">

// 					<h1>GitHub repositories list</h1>

// 					<form action="#"
// 						onSubmit={(e) => {
// 							e.preventDefault();

// 							console.log('e.target.elements.user.value', e.target.elements.user.value);

// 							updateUser(e.target.elements.user.value);
// 						}}
// 					>
// 						<label htmlFor="user">User</label> <br/>
// 						<input id="user" name="user" type="text" />

// 						<input type="submit" value="Listar repositórios"/>
// 					</form>
// 				</div>
// 			</header>
// 		);
// 	};
// };

export default Header;
