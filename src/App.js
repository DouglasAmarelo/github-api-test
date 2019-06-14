import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Header from './components/Header/Header';
import FormUser from './components/FormUser/FormUser';
import Profile from './components/Profile/Profile';
import Api from './helpers/Api';
import ListItems from './components/Listitems/Listitems';

class App extends Component {
	state = {
		userInformation: {},
		repositories: null,
		commits: {},
		user: ''
	}

	componentDidMount() {
		console.log('Starting...');
	};

	// User information
	getUserInformation = (user, e) => {
		// Informações de usuário
		fetch(`${Api.githubApi}/users/${user}`)
			.then(res => res.json())
			.then(userInformation => this.setState({ userInformation }))
	};

	// Repositórios
	getRepositories = (user) => {
		fetch(`${Api.githubApi}/users/${user}/repos`)
			.then(res => res.json())
			.then(repositories => this.setState({ repositories }));
	};

	// Commits - /repos/:owner/:repo/commits
	getCommits = (user, repositorie) => {
		fetch(`${Api.githubApi}/repos/${user}/${repositorie}/commits`)
			.then(res => res.json())
			.then(commits => this.setState({ commits }));
	};

	updateUser = (user) => {
		this.setState({ user: user });
	};

	render() {
		const { user, userInformation, repositories } = this.state;

		return (
			<Router>
				<div className="App container">
					<Route exact path="/" render={() => (
						<div>
							<Header />
							<FormUser
								updateUser={this.updateUser}
								getUserInformation={this.getUserInformation}
							/>
						</div>
					)} />

					<Route exact path="/profile" render={() => (
						<div>
						{user && (
							<div>
								<Profile userInformation={userInformation} />
								<Link
									to="/repositories"
									onClick={() => {
										this.getRepositories(user);
									}}
								>
									Listar repositórios
								</Link>
							</div>
						)}
						</div>
					)} />

					<Route exact path="/repositories" render={() => (
						<div className="content">
							{user && repositories && (
								<ListItems repositories={repositories} />
							)}
						</div>
					)} />
				</div>
			</Router>
		);
	};
};

export default App;
