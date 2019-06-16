import React from 'react';
import './form-user.scss';

const FormUser = ({ updateUser, getUserInformation, getRamdomUser, clearUser, userNotFound }) => {
	return (
		<form
			action="#"
			className="card form-get-user"
			onSubmit={(e) => {
				e.preventDefault();
				const user = e.target.elements.user.value;

				if (user !== '') {
					updateUser(user);
					getUserInformation(user);
				}
			}}
			onInput={(e) => {
				e.preventDefault();
				clearUser();
			}}
		>
			<div className="card__icon">
				<img src="https://image.flaticon.com/icons/svg/25/25231.svg" alt="GitHub"/>
			</div>

			<label htmlFor="user">Nome do usuário no GitHub</label>

			<input
				className="form-get-user__user"
				id="user"
				name="user"
				type="text"
				placeholder="Ex: @douglasamarelo"
				autoComplete="off"
				value="douglasamarelo"
			/>

			<div className="flex">
				<span
					className="button --ramdom-user"
					onClick={(e) => {
						e.preventDefault();
						getRamdomUser();
					}}
				>
					Usuário ramdômico
				</span>

				<input
					className="button --submit"
					type="submit"
					value="Encontrar usuário"
				/>
			</div>

			{userNotFound && (
				<span className="form-get-user__error">Usuário não encontrado</span>
			)}
		</form>
	);
};

export default FormUser;
