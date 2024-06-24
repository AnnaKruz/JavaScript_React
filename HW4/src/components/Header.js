import {Link, Outlet} from "react-router-dom";
import "./Header.css";

const Header = () => {
    return (
        <>
            <header>
                <Link to="/">Home</Link>
                <Link to="/about">About us</Link>
            </header>
            <Outlet/>
        </>
    )
        ;
}

export default Header;