export const isValidLogin = (
	username: string,
	password: string
): Promise<boolean> =>
	new Promise((resolve) => {
		setTimeout(() => {
			//Mock call
			resolve(username === "admin" && password === "admin");
		}, 500);
	});
