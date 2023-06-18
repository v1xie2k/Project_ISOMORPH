import { register as apiRegister, login as apiLogin } from "../api";
import { messageAction } from "../features/messageSlice";
import store from "../store";

export const register = async ({ request }) => {
	switch (request.method) {
		case "POST":
			const data = await request.formData();

			const input = {
				first_name: data.get("first_name"),
				last_name: data.get("last_name"),
				email: data.get("email"),
				password: data.get("password"),
				roles: data.get("roles"),
				receives: data.get("receives"),
			};
			await apiRegister(input);
			return Response.redirect("/login");
		default:
			return { success: false, message: "Invalid method" };
	}
};

export const login = async ({ request }) => {
	switch (request.method) {
		case "POST":
			const data = await request.formData();

			const input = {
				email: data.get("email"),
				password: data.get("password"),
			};
			const { dispatch } = store;
			try {
				await apiLogin(input);
			} catch (error) {
				dispatch(
					messageAction.setMessage({
						message: "User tidak ditemukan",
						showMessage: true,
					})
				);
				return Response.redirect("/login");
			}
			dispatch(
				messageAction.setMessage({
					message: "",
					showMessage: false,
				})
			);
			return Response.redirect("/");
		default:
			return { success: false, message: "Invalid method" };
	}
};
