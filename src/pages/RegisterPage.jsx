import React from "react";
import RegisterInput from "../component/RegisterInput";
import { Link } from "react-router-dom";
import { register } from "../utils/network-data";
import { useNavigate } from "react-router-dom";
import LocaleContext from "../contexts/LocaleContext";

function RegisterPage() {
    const { locale } = React.useContext(LocaleContext);
    const navigate = useNavigate();

    async function onRegister({ name, email, password }) {
        const { error } = await register({ name, email, password });
        if (!error) {
            navigate("/");
        }
    }

    return (
        <div className="account-input-page">
            <h2>{locale === 'id' ? 'Daftar' : 'Register'}</h2>
            <RegisterInput register={onRegister} />
            <p>
                {locale === 'id' ? 'Sudah punya akun?' : 'Already have an account?'} <Link to="/">{locale === 'id' ? 'Login di sini' : 'Login here'}</Link>
            </p>
        </div>
    );
}

export default RegisterPage;