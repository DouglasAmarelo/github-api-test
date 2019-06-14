import React from 'react';

const FormUser = ({ updateUser, getUserInformation }) => {
	return (
		<form
			action="#"
			className="form-get-user"
			onSubmit={(e) => {
				e.preventDefault();
				const user = e.target.elements.user.value;

				if (user !== '') {
					updateUser(user);
					getUserInformation(user, e);
				}
			}}
		>
			<label htmlFor="user">User</label> <br/>
			<input id="user" name="user" type="text" />

			<input type="submit" value="Encontrar GitHub user"/>
		</form>
	);
};

export default FormUser;
