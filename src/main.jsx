import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import 'react-toastify/dist/ReactToastify.css';

// Redux
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import axios from "axios";
import { ToastContainer } from "react-toastify";

axios.defaults.baseURL = "https://elemental-heroes-server.onrender.com";
axios.defaults.headers.post['Content-Type'] = 'application/json';

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <App />
                <ToastContainer theme="colored" />
            </BrowserRouter>
        </Provider>
    </React.StrictMode>
);
