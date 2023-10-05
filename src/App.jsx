import { useSelector } from "react-redux";
import { Navigate, Route, Routes } from "react-router-dom";

// Layouts
import RootLayout from "./layouts/RootLayout";

// Pages
import Home from "./pages/Home";
import Formation from "./pages/Formation";
import Shop from "./pages/Shop";
import Settings from "./pages/Settings";
import Library from "./pages/Library";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ResetPasswordPage from "./pages/ResetPassword";

function App() {
    // Read user from LocalStorage
    const user = useSelector((state) => state.userAuth.user);

    return (
        <Routes>
            <Route
                path="/"
                element={
                    user ? <RootLayout /> : <Navigate to={"/login"} replace />
                }
            >
                <Route index element={<Home />} />
                <Route path="/formation" element={<Formation />} />
                <Route path="/create" element={<div>Create your hero</div>} />
                <Route path="/library" element={<Library />} />
                <Route path="/shop" element={<Shop />} />
                <Route path="/settings" element={<Settings />} />
            </Route>

            <Route
                path="/login"
                element={user ? <Navigate to={"/"} replace /> : <LoginPage />}
            />
            <Route
                path="/register"
                element={
                    user ? <Navigate to={"/"} replace /> : <RegisterPage />
                }
            />
            <Route
                path="/resetpassword"
                element={
                    user ? <Navigate to={"/"} replace /> : <ResetPasswordPage />
                }
            />

            <Route path="*" element={<>Not found</>} />
        </Routes>
    );
}

export default App;
