import {render, screen} from "@testing-library/react";
import AboutPage from "../components/AboutPage";
import React from "react";


test("render about page", () => {
    render(<AboutPage />);
    expect(screen.getByText("About Us")).toBeInTheDocument();
});

test("about us snapshot test", () => {
    const {container} = render(<AboutPage/>);
    expect(container).toMatchSnapshot();
});