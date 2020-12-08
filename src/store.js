import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { productsReducer } from './reducers/product.reducer';

const initialState = {};
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE || compose;

const store = createStore(combineReducers({
    products: productsReducer
}), initialState, composeEnhancer(applyMiddleware(thunk)))


export default store;