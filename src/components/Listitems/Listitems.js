import React from 'react';
import { Link } from 'react-router-dom';
import './list-items.scss';

const ListItems = ({ repositories, user, getCommits }) => (

	<ul className="list-items card">
		{
			repositories && repositories.length > 0 ? (
				repositories.map(item => (
					<li
						className="list-items__item"
						key={item.id}
						onClick={(e) => {
							e.preventDefault();
							console.log('@@RE', item)
							console.log(e);
						}}
					>
						<p>
							<Link
								to={`${item.full_name}/commit`}
								onClick={() => {
									getCommits(user, item.name);
								}}
							>
								<strong>Repositório: </strong> {item.name}
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

export default ListItems;