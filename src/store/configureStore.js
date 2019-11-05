import { createStore,combineReducers,compose } from 'redux'
import userReducer from './reducers/userEvents'

const rootReducer=combineReducers({
    userReducer:userReducer
});

let composeEnhancers = compose;

if(__DEV__){
    composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose 
}

const configureStore=()=>{
    return createStore(rootReducer,composeEnhancers());
}

export default configureStore;