import React from "react";
import "./Header.css";
import Navbar from "../Navbar/Navbar";
import images from "../../constants/images";

const Header = () => (
    <div className="header" style={{
        background: `linear-gradient(rgba(0,0,0,0.7),
        rgba(0,0,0,0.2), url(${images.header_bg}) center/cover no-repeat)`
    }}>
        <Navbar/>
    </div>
)

export default Header;