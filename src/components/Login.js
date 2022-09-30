import { faSignIn } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Authentication from "../utils/Auth";
import Button from "./UI/Button";
import Input from "./UI/Input";

const Login = () => {

    const navigate = useNavigate();

    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('')

    const loginUser = () => {
        if(userName && password) {

            setError('');
            const resp = Authentication.login(
                userName, password,
                () => {
                    navigate('/dashboard')
                }
            )
            setError(resp)
        } else {
            setError('Enter Credentials');
        }
    }

    return (
        <>
            <div className="modal-background">
                <div className="container">
                    <div className="padding-2">
                        <h1 className="modal-title">Manage Employees Login</h1>
                        <div className="default-credentials"> 
                            <p className="delete-body-msg">Use default credentials:</p>
                            <p className="delete-body-warn ">
                                readWrite credentials: admin/admin
                            </p>
                            <p className="delete-body-warn ">
                                readonly credentials: user/user
                            </p>
                        </div>
                    </div>
                    <hr/>
                    <form 
                        className="body padding-2"
                        onSubmit={loginUser}
                    >
                        <Input
                            type="text"
                            id="userName"
                            label="User Name"
                            value={userName}
                            updateValue={setUserName}
                        />
                        <Input
                            type="password"
                            id="password"
                            label="Password"
                            value={password}
                            updateValue={setPassword}
                        />
                        <Button 
                            icon={faSignIn}
                            color="#04b3d6"
                            text="Login"
                            buttonClass="button-with-icon login-button"
                            textClass="icon-button__text"
                            type="submit"
                        />
                        <div className="error-msg">{error}</div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Login