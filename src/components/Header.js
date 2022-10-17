import React, { useEffect, useState } from "react";
import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import { NavLink } from 'react-router-dom';
import classes from "./Header.module.scss";
import { Link, useHistory } from "react-router-dom";
import { connect, useDispatch } from 'react-redux';
import { addCart } from '../database/redux/actions'

const Header = (props) => {
    const history = useHistory();
    const [menuOpen, setMenuOpen] = useState(false);
    const [size, setSize] = useState({
        width: undefined,
        height: undefined,
    });

    useEffect(() => {
        const handleResize = () => {
            setSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        };
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        if (size.width > 968 && menuOpen) {
            setMenuOpen(false);
        }
    }, [size.width, menuOpen]);

    const menuToggleHandler = () => {
        setMenuOpen((p) => !p);
    };

    const ctaClickHandler = () => {
        menuToggleHandler();
        history.push("/cart");
    };

    return (
        <header className={classes.header}>
            <div className={classes.header__content}>
                <Link to="/" className={classes.header__content__logo}>
                    Shop-Berkay
                </Link>
                <nav
                    className={`${classes.header__content__nav} ${
                        menuOpen && size.width < 968 
                        ? classes.isMenu 
                        : ""
                    }`}>
                    <ul>
                        <li>
                            <NavLink to="/products" onClick={menuToggleHandler}>
                                Products
                            </NavLink>
                        </li>
                     
                    </ul>
                    <button onClick={ctaClickHandler}>Cart({props?.basket?.length})</button>
                </nav>
                <div className={classes.header__content__toggle}>
                    {!menuOpen ? (
                        <BiMenuAltRight onClick={menuToggleHandler} />
                    ) : (
                        <AiOutlineClose onClick={menuToggleHandler} />
                    )}
                </div>
            </div>
        </header>
    );
};

const mapStateToProps = state => {

    return{
        basket: state.basket
    }
  
  }
export default connect(mapStateToProps, {addCart})(Header);
  