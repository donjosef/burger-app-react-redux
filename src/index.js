import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import {createStore, combineReducers} from 'redux';
import { Provider } from 'react-redux';
import ingrReducer from './store/reducers/ingredients';
import totalPriceReducer from './store/reducers/totalPrice';

const reducer = combineReducers({
  ingredients: ingrReducer,
  totalPrice: totalPriceReducer
});
const store = createStore(reducer);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
