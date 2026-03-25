import React from 'react';
import PropTypes from 'prop-types';
import {login} from '../utils/network-data';

function LoginInput({onLogin}) {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    function onEmailChangeHandler(event) {
        setEmail(event.target.value);
    }

    function onPasswordChangeHandler(event) {
        setPassword(event.target.value);
    }

    function onSubmitHandler(event) {
        event.preventDefault();
        onLogin({ email, password });
    }

    return (
        <form className='input-login'>
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={onEmailChangeHandler}
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={onPasswordChangeHandler}
            />
            <button onClick={onSubmitHandler}>Login</button>
        </form>
    );
}

LoginInput.propTypes = {
    email: PropTypes.string,
    password: PropTypes.string,
}

export default LoginInput;