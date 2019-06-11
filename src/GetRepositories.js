import React, { Component } from 'react';
import Api from './helpers/Api';
import ListItems from './components/Listitems/Listitems';

class GetRepositories extends Component {
	componentWillReceiveProps() {
		this.getRepositories(this.props.user);
	}

	// Repositórios
	getRepositories = (user) => {
		fetch(`${Api.githubApi}/users/${user}/repos`)
			.then(res => res.json())
			.then(repositories => this.props.updateRepositories(repositories));
	};

	render() {
		return (
			<ListItems repositories={this.props.repositories} />
		);
	};
};

export default GetRepositories;