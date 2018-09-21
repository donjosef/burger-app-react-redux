import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import { Provider } from 'react-redux';
import ingrReducer from './store/reducers/ingredients';
import totalPriceReducer from './store/reducers/totalPrice';
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const reducer = combineReducers({
  ingredients: ingrReducer,
  totalPrice: totalPriceReducer
});
const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
