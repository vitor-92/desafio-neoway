import { test, expect, request } from '@playwright/test';

import UsersRequests from "./support/users.js";

const baseURL = 'https://serverest.dev';
const dataset = require('./datasets/users');

test('Register user - verify status ok', async () => {
    const user = dataset.users[0];
    const apiContext = await request.newContext();
    const registerUser = await apiContext.post(`${baseURL}/usuarios`, {
        data: {
            nome: user.nome,
            email: user.email,
            password: user.password,
            administrador: user.administrador,
        }
    });
    expect(registerUser.status()).toEqual(201);

    const responseJson = await registerUser.json();
    expect(responseJson.message).toEqual('Cadastro realizado com sucesso');
    expect(responseJson._id.length).toEqual(16);

    const userRequest = new UsersRequests(null);
    await userRequest.deleteUser(responseJson._id);
});

test('Register user - verify status fail - no field name', async () => {
    const user = dataset.users[0];
    const apiContext = await request.newContext();
    const registerUser = await apiContext.post(`${baseURL}/usuarios`, {
        data: {
            email: user.email,
            password: user.password,
            administrador: user.administrador,
        }
    });
    expect(registerUser.status()).toEqual(400);

    const responseJson = await registerUser.json();
    expect(responseJson.nome).toEqual('nome é obrigatório');
});

test('Register user - verify status fail - invalid email', async () => {
    const user = dataset.users[0];
    const apiContext = await request.newContext();
    const registerUser = await apiContext.post(`${baseURL}/usuarios`, {
        data: {
            nome: user.nome,
            email: "user.email",
            password: user.password,
            administrador: user.administrador,
        }
    });
    expect(registerUser.status()).toEqual(400);

    const responseJson = await registerUser.json();
    expect(responseJson.email).toEqual('email deve ser um email válido');
});

test('Register user - verify status fail - invalid administrator', async () => {
    const user = dataset.users[0];
    const apiContext = await request.newContext();
    const registerUser = await apiContext.post(`${baseURL}/usuarios`, {
        data: {
            nome: user.nome,
            email: user.email,
            password: user.password,
            administrador: "null",
        }
    });
    expect(registerUser.status()).toEqual(400);

    const responseJson = await registerUser.json();
    expect(responseJson.administrador).toEqual('administrador deve ser \'true\' ou \'false\'');
});

test('Register user - verify status fail - user registered', async () => {
    const user = dataset.users[1];

    const userRequest = new UsersRequests();
    const user_id = await userRequest.registerUser(user);

    const apiContext = await request.newContext();
    const registerUser = await apiContext.post(`${baseURL}/usuarios`, {
        data: {
            nome: user.nome,
            email: user.email,
            password: user.password,
            administrador: user.administrador,
        }
    });
    expect(registerUser.status()).toEqual(400);

    const responseJson = await registerUser.json();
    expect(responseJson.message).toEqual('Este email já está sendo usado');

    await userRequest.deleteUser(user_id);
});

test('Delete user - verify status ok - user deleted', async () => {
    const userRequest = new UsersRequests();
    const user_id = await userRequest.registerUser(dataset.users[2]);

    const apiContext = await request.newContext();
    const deleteUser = await apiContext.delete(`${baseURL}/usuarios/` + user_id);

    expect(deleteUser.status()).toEqual(200);

    const responseJson = await deleteUser.json();
    expect(responseJson.message).toEqual('Registro excluído com sucesso');
});

test('Delete user - verify status ok - no user', async () => {
    const apiContext = await request.newContext();
    const deleteUser = await apiContext.delete(`${baseURL}/usuarios/ATest`);

    expect(deleteUser.status()).toEqual(200);

    const responseJson = await deleteUser.json();
    expect(responseJson.message).toEqual('Nenhum registro excluído');
});