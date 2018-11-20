import { createStore, applyMiddleware } from 'redux'; 
import rootReducer from './redux/reducers';
import thunk from 'redux-thunk';

const initialState = {}

const middleware = {thunk}

const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(...(middleware as any))
)
export default store;