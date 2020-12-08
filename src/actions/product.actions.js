import { FETCH_PRODUCTS } from "../types";

export const fetchProducts = () => async (dispatch) => {
    const result = await fetch('/api/products');
    const data = await result.json();
    dispatch({
        type: FETCH_PRODUCTS,
        payload: data
    });
}