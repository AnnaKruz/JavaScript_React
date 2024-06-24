import {useDispatch, useSelector} from "react-redux";
import {switchTheme} from "../modules/themeSlice";

const ThemeSwitcher = () => {
    const theme = useSelector((state) => state.theme.value);
    const dispatch = useDispatch();

    return (
        <button className={"btn-" + theme} onClick={() => dispatch(switchTheme())}>Switch Theme</button>
    );
}

export default ThemeSwitcher;