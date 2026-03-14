import React from "react";
import { Link } from 'react-router-dom';
import { IoMdArchive, IoMdAddCircle } from "react-icons/io";

function Navigation() {
    return (
        <nav className="navigation">
            <ul>
            <li><Link to="/archive"><IoMdArchive /></Link></li>
            <li><Link to="/notes/new"><IoMdAddCircle /></Link></li>
            </ul>
        </nav>
    );
}

export default Navigation;