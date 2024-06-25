import {Link} from "react-router-dom";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {catalogLoader} from "../../../../reducers/loaders/catalogLoader";

/**
 * Выпадающее меню навигации
 * @returns {JSX.Element}
 * @constructor
 */
const DropdownNav = () => {
    // const [catalog, setCatalog] = useState([]);
    const catalog = useSelector(state => state.catalog);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(catalogLoader());
    }, []);

    return (
        <nav className="dropdown">
            <h5 className="dropdown__title">MENU</h5>
            <div className="catalog__categories">
                {catalog.map((item, index) => (
                    <div key={index} className={"catalog__block"}>
                        <Link to={item.link}>
                            <h6 className="catalog__name">{item.name.toUpperCase()}</h6>
                        </Link>
                        <ul className="catalog__list">
                            {item.subcategories.map((subcategory, subIndex) => (
                                <li key={subIndex}><Link to={subcategory.link}>{subcategory.name}</Link></li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </nav>
    );
};

export default DropdownNav;