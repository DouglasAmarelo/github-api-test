import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import GetRepositories from './GetRepositories';
import Api from './helpers/Api';

class App extends Component {
	state = {
		userInformation: {},
		repositories: null,
		commits: {},
		user: ''
	}

	componentDidMount() {
		// Commits - /repos/:owner/:repo/commits
		fetch(`${Api.githubApi}/repos/${Api.user}/portfolio/commits`)
			.then(res => res.json())
			.then(commits => this.setState({ commits }));
	};

	getUserInformation = (user) => {
		// Informações de usuário
		fetch(`${Api.githubApi}/users/${user}`)
			.then(res => res.json())
			.then(userInformation => this.setState({ userInformation }));
	};

	updateRepositories = (repositories) => {
		this.setState({ repositories });
	};

	updateUser = (user) => {
		this.setState({ user: user });
	};

	render() {
		const { user, userInformation, repositories } = this.state;

		return (
			<Router>
				<Header
					updateUser={this.updateUser}
					getUserInformation={this.getUserInformation}
				/>

				<div className="App container">
					{
						user && (
							<div>
								<Profile userInformation={userInformation} />
								<Link to="/repositories">Listar repositórios</Link>
							</div>
						)
					}

					<div className="content">
						<Route exact path="/repositories" render={() => (
							<GetRepositories
								user={user}
								repositories={repositories}
								updateRepositories={this.updateRepositories}
							/>
						)} />
					</div>
				</div>
			</Router>
		);
	};
};

export default App;
