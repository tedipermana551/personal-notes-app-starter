import React from "react";
import LoginInput from "../component/LoginInput";
import { Link } from "react-router-dom";
import {login} from "../utils/network-data";
import LocaleContext from "../contexts/LocaleContext";

function LoginPage({loginSuccess}) {
    const { locale } = React.useContext(LocaleContext);

    async function onLogin({ email, password }) {
    const { error, data } = await login({ email, password });
 
    if (!error) {
      loginSuccess(data);
    }
  }

    return (
        <div className="account-input-page">
            <h2>Login</h2>
            <LoginInput onLogin={onLogin} />
            <p>
                {locale === 'id' ? 'Belum punya akun?' : 'Don\'t have an account?'} <Link to="/register">{locale === 'id' ? 'Daftar di sini' : 'Register here'}</Link>
            </p>
        </div>
    );
}

export default LoginPage;