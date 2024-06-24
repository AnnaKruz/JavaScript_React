import {Link, Outlet} from "react-router-dom";

/**
 * Хэдер сайта с навигационными ссылками
 * @returns {JSX.Element}
 * @constructor
 */
const Header = () => {
    return (
        <>
            <header className="header-nav">
                <ul>
                    <li><Link className="home-link" to="/">Home</Link></li>
                    <li><Link className="add-link" to="/add">Add</Link></li>
                </ul>
            </header>
            <Outlet/>
        </>
    );
}

export default Header;