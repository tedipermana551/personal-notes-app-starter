import React from "react";
import { Link } from 'react-router-dom';
import { IoMdArchive, IoMdAddCircle, IoMdLogOut} from "react-icons/io";

function Navigation({logout,name}) {
    return (
        <nav className="navigation">
            <ul>
            <li><Link to="/archive"><IoMdArchive /></Link></li>
            <li><Link to="/notes/new"><IoMdAddCircle /></Link></li>
            <li><button onClick={logout}><IoMdLogOut/>{name}</button></li>
            </ul>
        </nav>
    );
}

export default Navigation;