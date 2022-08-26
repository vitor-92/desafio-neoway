const { expect, request } = require('@playwright/test');

const baseURL = 'https://serverest.dev';

class ProductsRequests {
    async registerProduct(product, token) {
        try {
            const apiContext = await request.newContext();
            const registerProduct = await apiContext.post(`${baseURL}/produtos`, {
                headers: {
                    Authorization: token
                },
                data: {
                    "nome": product.nome,
                    "preco": product.preco,
                    "descricao": product.descricao,
                    "quantidade": product.quantidade
                }
            });

            const responseJson = await registerProduct.json();

            return responseJson._id;
        } catch (error) {
            console.log(error);
            return null;
        }
    }

    async deleteProduct(product_id, token) {
        try {
            const apiContext = await request.newContext();
            const deleteProduct = await apiContext.delete(`${baseURL}/produtos/` + product_id, {
                headers: {
                    Authorization: token
                },
            });

            return true;
        } catch (error) {
            console.log(error);
            return false;
        }
    }

    async findProduct(product_id) {
        try {
            const apiContext = await request.newContext();
            const findProduct = await apiContext.get(`${baseURL}/produtos/` + product_id);

            const responseJson = await findProduct.json();
            return responseJson;
        } catch (error) {
            console.log(error);
            return null;
        }
    }
}

module.exports = { ProductsRequests }