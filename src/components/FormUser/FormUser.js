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
			<label htmlFor="user">Nome do usuário no GitHub</label>

			<input
				className="form-get-user__user"
				id="user"
				name="user"
				type="text"
				placeholder="Ex: @douglasamarelo"
				autoComplete="off"
			/>

			<div className="flex">
				<button
					className="form-get-user__submit"
					onClick={() => getRamdomUser()}
				>
					Usuário ramdomico
				</button>

				<input
					className="form-get-user__submit"
					type="submit"
					value="Encontrar GitHub user"
				/>
			</div>

			{userNotFound && (
				<span className="form-get-user__error">Usuário não encontrado</span>
			)}
		</form>
	);
};

export default FormUser;
