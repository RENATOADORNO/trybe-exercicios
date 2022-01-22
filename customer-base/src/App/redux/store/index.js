import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension'; // extensão do Google (aula 15.2)
import rootReducer from '../reducers/index';

const store = createStore(rootReducer, composeWithDevTools());

export default store;