import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import ListItems from './components/Listitems/Listitems';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';

const user = `douglasamarelo`;
const githubApi = `https://api.github.com`;

class App extends Component {
	state = {
		userInformation: {},
		repositories: null,
		commits: {},
		user: ''
	};

	componentDidMount() {
		// Informações de usuário
		fetch(`${githubApi}/users/${user}`)
			.then(res => res.json())
			.then(userInformation => this.setState({ userInformation }));

		// Repositórios
		fetch(`${githubApi}/users/${user}/repos`)
			.then(res => res.json())
			.then(repositories => this.setState({ repositories }));

		// Commits - /repos/:owner/:repo/commits
		fetch(`${githubApi}/repos/${user}/portfolio/commits`)
			.then(res => res.json())
			.then(commits => this.setState({ commits }));
	};

	updateUser(user) {
		console.log('APP User', user);
		this.setState({ user: user });
	};

	render() {
		const { user, userInformation, repositories } = this.state;

		return (
			<Router>
				<Header updateUser={this.updateUser} />
				<div className="App container">

					<div className="content">

						<Route exact path="/repositories" render={() => (
							<div>
								<Profile userInformation={userInformation} />
								<ListItems user={user} repositories={repositories} />
							</div>
						)} />
					</div>
				</div>
			</Router>
		);
	};
};

export default App;
