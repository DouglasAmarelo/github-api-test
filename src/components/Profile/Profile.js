import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './profile.scss';

const respostaApi = {
	"login": "DouglasAmarelo",
	"id": 3269950,
	"node_id": "MDQ6VXNlcjMyNjk5NTA=",
	"avatar_url": "https://avatars2.githubusercontent.com/u/3269950?v=4",
	"gravatar_id": "",
	"url": "https://api.github.com/users/DouglasAmarelo",
	"html_url": "https://github.com/DouglasAmarelo",
	"followers_url": "https://api.github.com/users/DouglasAmarelo/followers",
	"following_url": "https://api.github.com/users/DouglasAmarelo/following{/other_user}",
	"gists_url": "https://api.github.com/users/DouglasAmarelo/gists{/gist_id}",
	"starred_url": "https://api.github.com/users/DouglasAmarelo/starred{/owner}{/repo}",
	"subscriptions_url": "https://api.github.com/users/DouglasAmarelo/subscriptions",
	"organizations_url": "https://api.github.com/users/DouglasAmarelo/orgs",
	"repos_url": "https://api.github.com/users/DouglasAmarelo/repos",
	"events_url": "https://api.github.com/users/DouglasAmarelo/events{/privacy}",
	"received_events_url": "https://api.github.com/users/DouglasAmarelo/received_events",
	"type": "User",
	"site_admin": false,
	"name": "Douglas \"amarelo\" Lopes",
	"company": "@jussilabs ",
	"blog": "http://douglasamarelo.com/",
	"location": "Brazil, São Paulo - SP",
	"email": null,
	"hireable": null,
	"bio": "Front-end Developer, Vtex Interface Developer e Líder técnico da equipe de tecnologia da @jussilabs \r\n",
	"public_repos": 28,
	"public_gists": 5,
	"followers": 32,
	"following": 61,
	"created_at": "2013-01-14T23:11:49Z",
	"updated_at": "2019-06-16T13:50:23Z"
};


class Profile extends Component {
	render() {
		const { user, userInformation, getRepositories } = this.props;
		const {
			avatar_url,
			bio,
			blog,
			name,
			login,
			html_url,
			location,
			created_at

		} = userInformation;

		const formatDate = (data) => {
			let dateFormated = new Date(data);
			let month = dateFormated.getMonth();
			let day   = dateFormated.getDate();
			let year  = dateFormated.getFullYear();

			return `${day}/${month}/${year}`;
		};

		return (
			<div className="card profile">
				<div>
					<div className="profile__image card__icon">
						<img
							src={avatar_url}
							alt={name}
						/>
					</div>
					<div className="profile__header">
						<h2 className="profile__name">{name}</h2>
						<p className="profile__bio">{bio}</p>
					</div>

					<div className="profile__content">
						{login && (
							<p className="profile__user">
								<span>Login: </span>
								<a
									href={html_url}
									title={login}
									target="_blank"
									rel="noopener noreferrer"
								>
									<strong>@{login}</strong>
								</a>
							</p>
						)}

						{blog && (
							<p className="profile__blog">
								<span>Site: </span>
								<a
									href={blog}
									title={blog}
									target="_blank"
									rel="noopener noreferrer"
								>
									<strong>{blog}</strong>
								</a>
							</p>
						)}

						{location && (
							<p className="profile__location">
								<span>Localização: </span>
								<strong>{location}</strong>
							</p>
						)}

						{created_at && (
							<p>
								<span>Usuário desde: </span>
								<strong>{formatDate(created_at)}</strong>
							</p>
						)}
					</div>
				</div>

				{user && (
					<div className="flex flex-center">
						<Link
							className="button"
							to="/repositories"
							onClick={() => getRepositories(user)}
						>
							Listar repositórios
						</Link>
					</div>
				)}
			</div>
		);
	};
};

export default Profile;
