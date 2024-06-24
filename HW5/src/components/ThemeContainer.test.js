import {fireEvent, render, screen, waitFor} from "@testing-library/react";
import {Provider} from "react-redux";
import store from "../modules/store";
import ThemeSwitcher from "./ThemeSwitcher";
import ThemeContainer from "./ThemeContainer";

describe("ThemeContainer", function () {
    test("ThemeContainer to have a class test", () => {
        render(
            <Provider store={store}>
                <ThemeContainer data-testid="container">
                </ThemeContainer>
            </Provider>
        );
        const container = screen.getByTestId("container");
        expect(container).toBeInTheDocument();
        expect(container).toHaveClass("light");
    });

    test("ThemeContainer switch theme test", async () => {
        render(
            <Provider store={store}>
                <ThemeContainer data-testid="container">
                    <ThemeSwitcher/>
                </ThemeContainer>
            </Provider>
        );
        await waitFor(() => {
            const container = screen.getByTestId("container");
            const btnEl = screen.getByText("Switch Theme");
            // eslint-disable-next-line testing-library/no-wait-for-side-effects
            fireEvent.click(btnEl);
            expect(container).toBeInTheDocument();
            // eslint-disable-next-line testing-library/no-wait-for-multiple-assertions
            expect(btnEl).toBeInTheDocument();
            // eslint-disable-next-line testing-library/no-wait-for-multiple-assertions
            expect(container).toHaveClass("dark");
        })
    });
});