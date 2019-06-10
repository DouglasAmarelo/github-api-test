import React, { Component } from 'react';

class Profile extends Component {
	render() {
		const { userInformation } = this.props;
		const { avatar_url: vatar, name, bio, login, url } = userInformation;

		return (
			<div className="profile">
				<p><img src={vatar} alt={name}/></p>
				<p>{name}</p>
				<p>{bio}</p>
				<p>{login}</p>
				<p>{url}</p>
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