import { Outlet, Link } from "react-router-dom";
import { useState } from "react";

const Menu = () => {
    const buttonSize = 50;
    const buttonOffset = 10;
    const transTime = "1s";

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
                transition: transTime
            }}>
                <Link to="/settings">Gear</Link>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/myprofile">My Profile</Link></li>
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