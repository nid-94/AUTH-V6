import "./App.css";
import Navigation from "./components/Navigation";
import Error from "./pages/Error";
import LandPage from "./pages/LandPage";
import Profile from "./pages/Profile";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import PrivateRoute from "./routes/PrivateRoute";
import Edit from './pages/Edit';
function App() {
    return (
        <div className="App">
            <h1>WS workshop</h1>
            <Navigation />
            <Routes>
                <Route path="/" element={<LandPage />} />
                {/* <Route path="/profile" element={<Profile />} /> */}
                <Route
                    path="/profile"
                    element={
                        <PrivateRoute>
                            <Profile />
                        </PrivateRoute>
                    }
                />
                <Route path="/signin" element={<Signin />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/edit" element={<Edit />} />
                <Route path="*" element={<Error />} />
            </Routes>
            <Footer />
        </div>
    );
}

export default App;
