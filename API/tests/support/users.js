const { expect, request } = require('@playwright/test');

const baseURL = 'https://serverest.dev';

class UsersRequests {
    async login(user) {
        try {
            const apiContext = await request.newContext();
            const registerUser = await apiContext.post(`${baseURL}/login`, {
                data: {
                    email: user.email,
                    password: user.password,
                }
            });
            const responseJson = await registerUser.json();

            return responseJson.authorization;
        } catch (error) {
            console.log(error);
            return null;
        }
    }

    async registerUser(user) {
        try {
            const apiContext = await request.newContext();
            const registerUser = await apiContext.post(`${baseURL}/usuarios`, {
                data: {
                    nome: user.nome,
                    email: user.email,
                    password: user.password,
                    administrador: user.administrador,
                }
            });
            const responseJson = await registerUser.json();

            return responseJson._id;
        } catch (error) {
            console.log(error);
            return null;
        }
    }

    async deleteUser(user_Id) {
        try {
            const apiContext = await request.newContext();
            const deleteUser = await apiContext.delete(`${baseURL}/usuarios/` + user_Id);

            return true;
        } catch (error) {
            console.log(error);
            return false;
        }
    }
}

module.exports = { UsersRequests }