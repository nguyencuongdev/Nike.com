import { get } from '~/utils/requests';

export async function getProductService(url, options = {}) {
    try {
        const data = await get(url, options);
        return data;
    } catch (error) {
        console.log(error);
    }
}