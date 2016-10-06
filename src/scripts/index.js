 import React from 'react';
 import { render } from 'react-dom';
 import App from 'scripts/app';
 import { createStore, combineReducers } from 'redux';
 import { Provider } from 'react-redux';

 // ------------ REDUCERS
 const reducerName = (state = '', { type, name }) => {

     switch (type) {
         case 'change-name':
             return name;
         default:
             return state;
     }
 };

 const rootReducer = combineReducers({
     name: reducerName
 });

 const initialState = { name: 'Salva' };
 const store = createStore(rootReducer, initialState);

 render(<Provider store = { store }>
          <App />
        </Provider>, document.querySelector('#root'));

 setTimeout(() => store.dispatch({ type: 'change-name', name: 'Pep' }), 1000);
