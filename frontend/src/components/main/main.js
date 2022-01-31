import React, {useState} from 'react';

const Main = ({login}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const loginUser = () => {
       const user = {
            email: email,
            password: password
        }
        if (email && password){
            login(user)
        } else {
            setError('Need valid Email & Password')
        }
    }
    return (
        <div>
            <h1>Login Page</h1>
            <input
            placeholder='email'
            value={email}
            onChange={e => setEmail(e.target.value)}
            />
            <input
                type='password'
                placeholder='password'
                value={password}
                onChange={e => setPassword(e.target.value)}
            />
            {error ? error : ''}
            <button onClick={loginUser}>Login</button>
        </div>
    )
}

export default Main