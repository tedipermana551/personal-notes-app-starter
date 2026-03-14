import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className="not-found">
            <h1>404 Not Found</h1>
            <p>Maaf, halaman yang Anda cari tidak ditemukan.</p>
            <Link to="/">Kembali ke Beranda</Link>
        </div>
    );
};

export default NotFound;