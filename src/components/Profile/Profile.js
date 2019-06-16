import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './profile.scss';

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



// {…}
// avatar_url:
// "https://avatars2.githubusercontent.com/u/3269950?v=4"
// bio:
// "Front-end Developer, Vtex Interface Developer e Gerente de tecnologia da @jussilabs "
// blog:
// "http://douglasamarelo.com/"
// company:
// "@jussilabs "
// created_at:
// "2013-01-14T23:11:49Z"
// email:
// null
// events_url:
// "https://api.github.com/users/DouglasAmarelo/events{/privacy}"
// followers:
// 32
// followers_url:
// "https://api.github.com/users/DouglasAmarelo/followers"
// following:
// 61
// following_url:
// "https://api.github.com/users/DouglasAmarelo/following{/other_user}"
// gists_url:
// "https://api.github.com/users/DouglasAmarelo/gists{/gist_id}"
// gravatar_id:
// ""
// hireable:
// null
// html_url:
// "https://github.com/DouglasAmarelo"
// id:
// 3269950
// location:
// "Brazil, São Paulo - SP"
// login:
// "DouglasAmarelo"
// name:
// "Douglas \"amarelo\" Lopes"
// node_id:
// "MDQ6VXNlcjMyNjk5NTA="
// organizations_url:
// "https://api.github.com/users/DouglasAmarelo/orgs"
// public_gists:
// 5
// public_repos:
// 28
// received_events_url:
// "https://api.github.com/users/DouglasAmarelo/received_events"
// repos_url:
// "https://api.github.com/users/DouglasAmarelo/repos"

// site_admin:
// false
// starred_url:
// "https://api.github.com/users/DouglasAmarelo/starred{/owner}{/repo}"
// subscriptions_url:
// "https://api.github.com/users/DouglasAmarelo/subscriptions"
// type:
// "User"
// updated_at:
// "2019-05-16T17:15:08Z"
// url:
// "https://api.github.com/users/DouglasAmarelo"