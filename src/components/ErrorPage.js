import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <>
            <div className="modal-background">
                <div className="transparent_background modal-container">
                    <h2>Page Not Found</h2>
                    <div>
                        <Link
                            className="redirect-link"
                            to="/dashboard"
                        >
                            Go to Dashboard
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ErrorPage;
