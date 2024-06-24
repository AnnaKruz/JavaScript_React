import {useSelector} from "react-redux";
import "./ThemeContainer.css";

const ThemeContainer = (props) => {
    const theme = useSelector((state) => state.theme.value);

    return (
        <div {...props} className={theme}>
            {props.children}
        </div>
    );
}

export default ThemeContainer;