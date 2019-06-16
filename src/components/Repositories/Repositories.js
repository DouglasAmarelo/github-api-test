import React from 'react';
import { Link } from 'react-router-dom';

const Repositories = ({ user, repositories, getCommits }) => (

	<ul className="list-items">
		{
			repositories && repositories.length > 0 ? (
				repositories.map(item => (
					<li
						className="list-items__item card"
						key={item.id}
					>
						<p>
							<strong>Repositório: </strong>
							{item.name}
						</p>
						<p>
							<Link
								className="button"
								to={`${item.full_name}/commit`}
								onClick={() => getCommits(user, item.name)}
							>
								Ver commits
							</Link>
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

export default Repositories;