import { Navigate } from "react-router-dom";
import Auth from "../utils/Auth";

const ProtectedRoute = (props) => {
    const {
        children,
    } = props;

    

    return Auth.isAuthenticated() ? children : <Navigate to="/" replace/>;
}

export default ProtectedRoute;
