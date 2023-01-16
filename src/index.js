import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./assets/css/style.css"
import {Provider} from "react-redux";
import Store from "./redux/store/Store";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./index.css"


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={Store}>
            <App></App>
        </Provider>
    </React.StrictMode>
);
