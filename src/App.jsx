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
import Create from "./pages/Create";
import NotFound from "./pages/NotFound";

function App() {
    // Read user from LocalStorage
    const user = useSelector((state) => state.userAuth.user);
    // Read routing from Redux
    const allowCreatePage = useSelector(
        (state) => state.userRouting.allowCreatePage
    );
    const allowFeaturePages = useSelector(
        (state) => state.userRouting.allowFeaturePages
    );

    return (
        <Routes>
            {/* This Route required user to login */}
            <Route
                path="/"
                element={
                    user ? <RootLayout /> : <Navigate to={"/login"} replace />
                }
            >
                <Route index element={<Home />} />
                {/* These Routes requires user to have a Hero created */}
                {allowFeaturePages && (
                    <>
                        <Route path="/formation" element={<Formation />} />
                        <Route path="/library" element={<Library />} />
                        <Route path="/shop" element={<Shop />} />
                    </>
                )}
                <Route path="/settings" element={<Settings />} />
            </Route>

            <Route
                path="/create"
                element={
                    user && allowCreatePage ? (
                        <Create />
                    ) : (
                        <Navigate to={"/login"} replace />
                    )
                }
            />

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

            <Route path="*" element={<NotFound />} />
        </Routes>
    );
}

export default App;
