import React from 'react';
import './list-items.scss';

const ListItems = ({ repositories }) => (
	<ul className="list-items">
		{
			repositories && repositories.length > 0 ? (
				repositories.map(item => (
					<li
						className="list-items__item"
						key={item.id}
						onClick={(e) => {
							e.preventDefault();

							console.log(e);
						}}
					>
						{item.name}
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