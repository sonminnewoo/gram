import React, {useState} from "react";
import images from "../../constants/images";
import "./Navbar.css";
import{FaBars,FaTimes} from "react-icons/fa"

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);

    return (
        <nav className="navbar">
            <div className="container flex">
                <a href="index.html" alt=""
                className="navbar__brand">
                    <img src={images.logo} alt = "sitelogo" />
                </a>
            </div>
        </nav>
    )
}

export default Navbar;
