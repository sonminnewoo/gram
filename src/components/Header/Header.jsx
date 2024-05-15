import React, { useState } from "react";
import "./Header.css";
import Navbar from "../Navbar/Navbar";
import images from "../../constants/images";
import { useAuth } from "../../AuthContext ";

const Header = () => {
    const [showDropdown, setShowDropdown] = useState(false)
    const toggleDropdown = () => setShowDropdown(!showDropdown);
    const { isLoggedIn, login, logout } = useAuth();

    return (
        <div className="header" style={{
            background: `linear-gradient(rgba(0,0,0,0.7),
            rgba(0,0,0,0.2)), url(${images.header_bg}) center/cover no-repeat`
        }}>
            <Navbar/>
            {/* <div className="brand__and__toggler flex">
                    <a href="/" alt="brandlogoIMG"
                    className="navbar__brand">
                        <img src={images.logo} alt = "sitelogo" style={{ width: '110px', height: '100px' }} />
                    </a>
            </div> */}
            <div className="container">
                <div className="header__content text__center text__light flex flex__center">
                    <div className="headerbutton">
                        <div className="left-content">
                            {isLoggedIn && (
                                    <button className="chat btn-6" onClick={toggleDropdown}>채팅</button>
                            )}
                            {showDropdown && (
                                <div className="dropdown">
                                    <ul>
                                        <li><a href="chating1">참여중인 채팅1</a></li>
                                        <li><a href="chating2">참여중인 채팅2</a></li>
                                        <li><a href="chating3">참여중인 채팅3</a></li>
                                    </ul>
                                </div>
                            )}
                        </div>
                        <div className="right-content">
                            {!isLoggedIn ? (
                                <>
                                    <button className="login" onClick={() => login({ username: 'User' })}>로그인</button>
                                    <button className="register"><a href="register">회원가입</a></button>
                                </>
                            ) : (
                                <>
                                    <button className="logout" onClick={logout}>로그아웃</button>
                                    <button className="my-page"><a href="my-page">마이페이지</a></button>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
