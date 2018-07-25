import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers/reducers';
import Post from './containers/Post';

const store = createStore(reducers, applyMiddleware(thunk));

const App = () => {
    return (
        <div>
            <Post />
        </div>
    );
};

ReactDOM.render(
                <Provider store={store}>
                    <App />
                </Provider> ,
                document.querySelector('.react-container'));