import { Outlet, Link, useLocation } from "react-router-dom";
import { useState } from "react";

const Menu = () => {
    const buttonSize = 50;
    const buttonOffset = 10;
    const transTime = "1s";

    const GetCurPage = () => {
        const location = useLocation();
        return location.pathname;
    }

    let menuOpen = false;

    const [shift, setShift] = useState(0);

    const Click = () => {
        if (menuOpen) {
            setShift(0);
        } else {
            setShift(300);
        }

        menuOpen = !menuOpen;
    }

    const MenuLinkItem = (props) => {
        let bgOpac = "rgba(0,0,0,0)";
        if (GetCurPage() == props.path) bgOpac ="rgba(0, 0, 0, 0.2)" ;

        return (
            <div style={{
                width: "100%",
                padding: "5px",
                backgroundColor: bgOpac
                }}>

                <MenuLink path={props.path} inner={props.inner} />
            </div>)
    }

    const MenuLink = (props) => {
        const [color, setColor] = useState("black");

        return (<Link to={props.path} onMouseEnter={() => setColor("white")} onMouseLeave={() => setColor("black")}
            style={{
                color: color,
                fontSize: 20,
                textDecoration: "none"
            }}> {props.inner}</Link>)
    };

    return (
        <>
            <button onClick={Click}
                style={{
                    position: "fixed",
                    right: buttonOffset + shift + "px",
                    top: buttonOffset + "px",
                    width: buttonSize + "px",
                    height: buttonSize + "px",
                    fontSize: buttonSize * 0.6,
                    border: "1px solid gray",
                    backgroundColor: "white",
                    borderRadius: (buttonSize / 2) + "px",
                    transition: transTime
                }}>≡</button>

            <nav style={{
                position: "fixed",
                top: "0px",
                right: "0px",
                width: shift + "px",
                height: "100%",
                backgroundColor: "lightblue",
                overflowX: "hidden",
                transition: transTime,

                color: "black",
            }}>
                <MenuLinkItem path="/settings" inner="Gear" />
                <ul class="menuLinks" style={{
                    listStyleType: "none"
                }}>
                    <li><MenuLinkItem path="/" inner="Home" /></li>
                    <li><MenuLinkItem path="/myprofile" inner="My Profile" /></li>
                </ul>
            </nav>

            <div style={{
                position: "fixed"
            }}>

            </div>
            <Outlet />
        </>
    );
}

export default Menu;