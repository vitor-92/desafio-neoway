import { request } from '@playwright/test';

const baseURL = 'https://serverest.dev';

class CartsRequests {
    async addProducts(products, token) {
        try {
            const apiContext = await request.newContext();
            const addProducts = await apiContext.post(`${baseURL}/carrinhos`, {
                headers: {
                    Authorization: token
                },
                data: {
                    produtos: products
                }
            });
            const responseJson = await addProducts.json();

            return responseJson._id
        } catch (error) {
            console.log(error);
            return null;
        }
    }

    async cancelCart(token) {
        try {
            const apiContext = await request.newContext();
            const cancelCart = await apiContext.delete(`${baseURL}/carrinhos/cancelar-compra`, {
                headers: {
                    Authorization: token
                },
            });

            return cancelCart.status();
        } catch (error) {
            console.log(error);
            return null;
        }
    }

    async concludeCart(token) {
        try {
            const apiContext = await request.newContext();
            const concludeCart = await apiContext.delete(`${baseURL}/carrinhos/concluir-compra`, {
                headers: {
                    Authorization: token
                },
            });

            return concludeCart.status();
        } catch (error) {
            console.log(error);
            return null;
        }
    }
}

export default CartsRequests 