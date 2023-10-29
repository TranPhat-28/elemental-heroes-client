import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "react-toastify/dist/ReactToastify.css";

// Redux
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import axios from "axios";
import { ToastContainer } from "react-toastify";
import { MoonLoader } from "react-spinners";
import LoadingModal from "./components/LoadingModal.jsx";
import GameStartModal from "./components/GameStartModal.jsx";

axios.defaults.baseURL = "https://elemental-heroes-server.onrender.com";
// axios.defaults.baseURL = "http://localhost:5054";
axios.defaults.headers.post["Content-Type"] = "application/json";

ReactDOM.createRoot(document.getElementById("root")).render(
    // <React.StrictMode>
        <React.Suspense fallback={<MoonLoader />}>
            <Provider store={store}>
                <BrowserRouter>
                    <App />
                    <ToastContainer theme="colored" autoClose={1000} />
                    <LoadingModal />
                    <GameStartModal />
                </BrowserRouter>
            </Provider>
        </React.Suspense>
    // </React.StrictMode>
);
