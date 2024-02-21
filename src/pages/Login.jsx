import { useState } from "react";
import AuthService from "../services/AuthService";
import { useNavigate } from "react-router-dom";

const Login = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const onChangeUsername = (e) => {
        const username = e.target.value;
        setUsername(username);
    };

    const onChangePassword = (e) => {
        const password = e.target.value;
        setPassword(password);
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        AuthService.login(username, password)
            .then(() => {
                const role = localStorage.getItem("auth_role");
                if (role == "user" || role == "admin") {
                    navigate("/");
                    window.location.reload();
                }
            },
                (error) => {
                    const resMessage = error.response.data.data;
                    setMessage(resMessage);
                    setError("Something went wrong. Please try again later. " + resMessage);
                }
            );
    };

    return (
        <div className="col-md-12">
            <div className="card card-container">
                <form onSubmit={handleLogin}>
                    <div className="form-group">
                        <label htmlFor="username">Username</label>
                        <input
                            type="text"
                            className="form-control"
                            id="username"
                            value={username}
                            onChange={onChangeUsername}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            className="form-control"
                            id="password"
                            value={password}
                            onChange={onChangePassword}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <button className="btn btn-primary btn-block" >
                            <span>Login</span>
                        </button>
                    </div>

                    {error && (
                        <div className="form-group">
                            <div className="alert alert-danger" role="alert">
                                {error}
                            </div>
                        </div>
                    )}
                </form>
            </div>
        </div>
    );
};

export default Login;