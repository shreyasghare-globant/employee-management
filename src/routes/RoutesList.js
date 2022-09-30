import { Route, Routes } from "react-router-dom";
import Login from "../components/Login";
import Dashboard from "../components/Dashboard";
import ErrorPage from "../components/ErrorPage";
import ProtectedRoute from "./ProtectedRoute";

const RoutesList = () => {

    return (
        <>  
        <Routes>
                <Route 
                    exact path="/"
                    element = {
                        <Login />
                    }
                />
                <Route
                    exact path="/dashboard"
                    element = {
                        <ProtectedRoute>
                            <Dashboard />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path = "*"
                    element = {
                        <ErrorPage />
                    }
                />
        </Routes>
        </>
    )
}

export default RoutesList;