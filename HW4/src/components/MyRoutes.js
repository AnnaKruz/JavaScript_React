import {useRoutes} from "react-router";
import Header from "./Header";
import HomePage from "./HomePage";
import AboutPage from "./AboutPage";

export default function MyRoutes() {
    return useRoutes([
        {
            path: "/",
            element: <Header/>,
            children: [
                {path: "/", element: <HomePage/>},
                {path: "/about", element: <AboutPage/>},
            ],
        }
    ]);
}