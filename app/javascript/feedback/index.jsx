// external modules
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';
import reduxPromise from 'redux-promise';
import { logger } from 'redux-logger';
import Modal from 'react-modal';

// internal modules
import SatisfactionForm from './components/satisfaction_form';

// State and reducers
const reducers = combineReducers({
  form: reduxFormReducer,
});

const feedback = document.getElementById('root')
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middlewares = composeEnhancers(applyMiddleware(reduxPromise, logger));
Modal.setAppElement(feedback);

// render an instance of the component in the DOM
ReactDOM.render(
  <Provider store={createStore(reducers, middlewares)}>
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-8">
            <div className="form">
              <h1 style={{textAlign: "center"}}>We link satisfaction form</h1>
              <SatisfactionForm onSubmit />
            </div>
          </div>
        </div>
      </div>
  </Provider>,
  feedback
);


