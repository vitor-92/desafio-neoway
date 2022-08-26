import { expect, test } from "@playwright/test"

import { UsersRequests } from "./support/users"
import { ProductsRequests } from "./support/products";
import { CartsRequests } from "./support/carts";

const datasetUser = require("./datasets/users");
const datasetProduct = require("./datasets/createCard");

test('Conclude Cart - verify product quantities', async () => {
    const user = new UsersRequests();
    const user_id = await user.registerUser(datasetUser.users[0]);

    const token = await user.login(datasetUser.users[0]);

    const product = new ProductsRequests();
    const product_id = [];
    product_id[0] = await product.registerProduct(datasetProduct.products[0], token);
    product_id[1] = await product.registerProduct(datasetProduct.products[1], token);

    const qntProduct = [1, 5];
    const products = [
        {
            "idProduto": product_id[0],
            "quantidade": qntProduct[0]
        },
        {
            "idProduto": product_id[1],
            "quantidade": qntProduct[1]
        }
    ]

    const cart = new CartsRequests();
    const cart_id = await cart.addProducts(products, token);
    expect(cart_id).not.toBeNull();

    expect(await cart.concludeCart(token)).toBeTruthy();

    let productData = [];
    productData[0] = await product.findProduct(product_id[0]);
    productData[1] = await product.findProduct(product_id[1]);    

    expect(productData[0].quantidade).toEqual(datasetProduct.products[0].quantidade - qntProduct[0]);
    expect(productData[1].quantidade).toEqual(datasetProduct.products[1].quantidade - qntProduct[1]);

    await product.deleteProduct(product_id[0], token);
    await product.deleteProduct(product_id[1], token);
    await user.deleteUser(user_id);
});