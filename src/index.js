import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {store} from "./store/store";
import {Provider} from "react-redux"
import {CookiesProvider} from "react-cookie";

ReactDOM.render(
    <React.StrictMode>
        <CookiesProvider>
            <Provider store={store}>
            <BrowserRouter>
                <App/>
            </BrowserRouter>
        </Provider>
        </CookiesProvider>
    </React.StrictMode>,
    document.getElementById('root')
);

