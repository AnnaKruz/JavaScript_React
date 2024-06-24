import ThemeSwitcher from "./ThemeSwitcher";
import {fireEvent, render, screen} from "@testing-library/react";
import {Provider} from "react-redux";
import store from "../modules/store";

describe("ThemeSwitcher", () => {
    test("render switch button with default theme", () => {
        render(
            <Provider store={store}>
                <ThemeSwitcher/>
            </Provider>
        );
        const btnEl = screen.getByText("Switch Theme");
        expect(btnEl).toBeInTheDocument();
        expect(btnEl).toHaveClass("btn-light");
    });

    test("renders switch button and change theme", () => {
        render(
            <Provider store={store}>
                <ThemeSwitcher/>
            </Provider>
        );
        const btnEl = screen.getByText("Switch Theme");
        fireEvent.click(btnEl);
        expect(btnEl).toBeInTheDocument();
        expect(btnEl).toHaveClass("btn-dark");
    });
});
