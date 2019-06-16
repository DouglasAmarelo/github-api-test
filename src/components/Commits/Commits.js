import React from 'react';

const Commits = ({ commits }) => (
	<ul className="list-items">
		{
			commits && commits.length > 0 ? (
				commits.map(item => (
					<li
						className="list-items__item card"
						key={item.sha}
						onClick={(e) => {
							e.preventDefault();
							console.log('@@RE', item)
						}}
					>
							<p>
								<strong>Autor: </strong> {item.commit.author.name}
							</p>
							<p>
								<strong>E-mail: </strong> {item.commit.author.email}
							</p>
							<p>
								<strong>Mensagem do commit: </strong> {item.commit.message}
							</p>
					</li>
				))
			)
			: (
				<h2>Listando...</h2>
			)
		}
	</ul>
);

export default Commits;