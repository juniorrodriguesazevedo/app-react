import { useState } from "react";

function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        console.log(email);
        console.log(password);
    }

    return (
        <div>
            <div>
                <label htmlFor="email">Email</label>
                <input type="email" value={email} name="email" id="email" onChange={e => setEmail(e.target.value)} />
            </div>
            <br />
            <div>
                <label htmlFor="password">Senha</label>
                <input type="password" value={password} name="password" id="passowrd" onChange={e => setPassword(e.target.value)} />
            </div>
            <br />
            <div>
                <button type="button" onClick={handleLogin}>Entrar</button>
            </div>
        </div>
    )
}

export default Login;