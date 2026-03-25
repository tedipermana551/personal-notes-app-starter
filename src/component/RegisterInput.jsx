import React from 'react';
import {register} from '../utils/network-data';

function RegisterInput() {
    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    function onNameChangeHandler(event) {
        setName(event.target.value);
    }

    function onEmailChangeHandler(event) {
        setEmail(event.target.value);
    }

    function onPasswordChangeHandler(event) {
        setPassword(event.target.value);
    }

    function onSubmitHandler(event) {
        event.preventDefault();
        register({ name, email, password });
    }

    return (
        <form className='input-register'>
            <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={onNameChangeHandler}
            />
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
            <button onClick={onSubmitHandler}>Register</button>
        </form>
    );
}

export default RegisterInput;