import React, {useState} from "react";
import images from "../../constants/images";
import "./Navbar.css";
import{FaBars,FaTimes} from "react-icons/fa"

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);

    return (
        <nav className="navbar">
            <div className="container flex">
                <div className="brand__and__toggler flex">
                    <a href="index.html" alt=""
                    className="navbar__brand">
                        <img src={images.logo} alt = "sitelogo" style={{ width: '110px', height: '100px' }} />
                    </a>
                    {!toggleMenu && (
                        <button type="button"
                        className="navbar__open--btn text__light" onClick={() => setToggleMenu(true)}>
                            <FaBars size={26}/>
                        </button>
                    )}

                </div>
                {toggleMenu && (
                    <div className="navbar__smallscreen">
                        <button type="button"
                        className="navbar__close--btn text__light"
                        onClick={() => setToggleMenu(false)}>
                            <FaTimes size={32} />
                        </button>
                        <ul 
                        className="navbar__nav--smallscreen 
                        text__light">
                            <li className="nav__item">
                                <a href="#이색스포츠1"
                                className="nav__link
                                text__upper fw__6
                                nav__active text__light
                                ">이색스포츠1</a>
                            </li>
                            <li className="nav__item">
                                <a href="#이색스포츠2"
                                className="nav__link
                                text__upper fw__6 text__light
                                ">이색스포츠2</a>
                            </li>
                            <li className="nav__item">
                                <a href="#이색스포츠3"
                                className="nav__link
                                text__upper fw__6 text__light
                                ">이색스포츠3</a>
                            </li>
                            <li className="nav__item">
                                <a href="#이색스포츠4"
                                className="nav__link
                                text__upper fw__6 text__light
                                ">이색스포츠4</a>
                            </li>
                            <li className="nav__item">
                                <a href="#이색스포츠5"
                                className="nav__link
                                text__upper fw__6 text__light
                                ">이색스포츠5</a>
                            </li>
                            <li className="nav__item">
                                <a href="#이색스포츠6"
                                className="nav__link
                                text__upper fw__6 text__light
                                ">이색스포츠1</a>
                            </li>
                        </ul>
                    </div>
                )}
            </div>
        </nav>
    )
}

export default Navbar;
