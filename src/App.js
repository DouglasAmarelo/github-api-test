import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, withRouter } from 'react-router-dom';
import FormUser from './components/FormUser/FormUser';
import Profile from './components/Profile/Profile';
import Api from './helpers/Api';
import Repositories from './components/Repositories/Repositories';
import Commits from './components/Commits/Commits';

class App extends Component {
	state = {
		userInformation: {},
		repositories: null,
		repositorie: null,
		commits: {},
		user: '',
		userNotFound: null
	}

	componentDidMount() {
		console.log('Starting...');
	};

	// User information
	getUserInformation = (user) => {
		let userName = this.formatUserName(user);

		// Informações de usuário
		fetch(`${Api.githubApi}/users/${userName}`)
			.then(res => {
				if (res.status === 200) {
					return res.json();
				}
				else if (res.status === 404) {
					this.setState({ userNotFound: 'userNotFound' });
					this.updateUser(null);
					throw new Error(res.statusText);
				}
				else {
					throw new Error(res.statusText);
				}
			})
			.then(userInformation => this.setState({ userInformation }))
			.catch((err) => {
				console.log('err', err);
			});
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
			.then(commits => this.setState({ repositorie, commits }));
	};

	getRamdomUser = () => {
		const allFriends = ['gfpaiva', 'gustavobpaula', 'pedrohenrickcs', 'brunoannunciato', 'lucasmonteverde', 'wsiqueira'];
		const friend = allFriends[Math.floor(Math.random() * allFriends.length)];

		this.updateUser(friend);
		this.getUserInformation(friend);

		return friend;
	};

	formatUserName = (user) => {
		let userName = user;
		userName = userName.trim();
		userName = userName.toLowerCase();
		userName = userName.replace('@', '');

		return userName;
	};

	clearUser = () => {
		this.setState({ userNotFound: null });
		this.updateUser(null);
	};

	updateUser = (user) => {
		this.setState({ user });
	};

	render() {
		const {
			user,
			userNotFound,
			userInformation,
			repositories,
			commits,
			repositorie
		} = this.state;

		return (
			<Router>
				<div className="App container">
					<header className="header">
						<Route exact path="/" render={() => (
							<FormUser
								clearUser={this.clearUser}
								getRamdomUser={this.getRamdomUser}
								getUserInformation={this.getUserInformation}
								updateUser={this.updateUser}
								userNotFound={userNotFound}
							/>
						)} />

						{user && (
							<Profile
								getRepositories={this.getRepositories}
								user={user}
								userInformation={userInformation}
							/>
						)}
					</header>

					<Route exact path="/repositories" render={() => (
						<div className="content">
							<div className="flex flex-space flex-align-center">
								<h1>Repositories</h1>
								<Link to="/" children="Voltar para a home" />
							</div>

							{user && repositories && (
								<Repositories
									getCommits={this.getCommits}
									repositories={repositories}
									user={user}
								/>
							)}
						</div>
					)} />

					<Route path={`/:${user}/:${repositorie}`} render={() => (
						<div className="content">
							<div className="flex flex-space flex-align-center">
								<h1>Repositorie</h1>
								<Link to="/repositories" children="Voltar para a lista de repositórios" />
							</div>

							{user && commits && (
								<Commits
									commits={commits}
									user={user}
								/>
							)}
						</div>
					)} />

					<footer className="footer">
						<p>
							Built with <span className="heart">❤</span> and React by&nbsp;
							<a
								href="https://douglasamarelo.com/"
								target="_blank"
								rel="noopener noreferrer"
							>
								@DouglasAmarelo
							</a> - © 2019</p>
					</footer>
				</div>
			</Router>
		);
	};
};

export default withRouter(App);
