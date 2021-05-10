// external modules
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';
import reduxPromise from 'redux-promise';
import { logger } from 'redux-logger';

// internal modules
import WizardForm from './components/wizard_form';
import showResults from "./showResults";
// import '../assets/stylesheets/application.scss';

// State and reducers
const reducers = combineReducers({
  form: reduxFormReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middlewares = composeEnhancers(applyMiddleware(reduxPromise, logger));

// render an instance of the component in the DOM
ReactDOM.render(
  <Provider store={createStore(reducers, middlewares)}>
    <div style={{ padding: 15 }}>
      <h1>We link satisfaction form</h1>
      <WizardForm onSubmit={showResults} />
    </div>
  </Provider>,
  document.getElementById('root')
);


