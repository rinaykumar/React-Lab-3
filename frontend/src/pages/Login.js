import React from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

const Login = () => {
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [error, setError] = React.useState('');
    const [isLoggedIn, setIsLoggedIn] = React.useState(false);

    const handleLogin = () => {
        console.log(username);
        console.log(password);
        
        const body = {
            username: username,
            password: password,
        }
        
        axios.post('/api/authenticate', body)
            .then((res) => {
                console.log(res.data);
                if (res.data.success) {
                    // all good
                    setIsLoggedIn(true);       
                } else {
                    // auth error
                    setError(res.data.error);
                }
            })
            .catch(() => {
                setError('Failed to authenticate')
            });
    };

    // If logged in
    if (isLoggedIn) return <Redirect to="/" />;
    
    return (
        <div>
            <h1>Login</h1>
            <div>
                <input 
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
            </div>
            <div>
                <input 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <div>
                <button onClick={handleLogin}>Log In</button>
            </div>
            {error && <strong>{error}</strong>}
        </div>
    );
};

export default Login;