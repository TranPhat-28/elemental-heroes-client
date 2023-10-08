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
import TutorialModal from "./components/TutorialModal.jsx";
import { MoonLoader } from "react-spinners";

axios.defaults.baseURL = "https://elemental-heroes-server.onrender.com";
axios.defaults.headers.post["Content-Type"] = "application/json";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <React.Suspense fallback={<MoonLoader color="#DB2777" />}>
            <Provider store={store}>
                <BrowserRouter>
                    <App />
                    <TutorialModal />
                    <ToastContainer theme="colored" autoClose={1000} />
                </BrowserRouter>
            </Provider>
        </React.Suspense>
    </React.StrictMode>
);
