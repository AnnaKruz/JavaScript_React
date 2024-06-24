import HomePage from "../components/HomePage";
import {render, screen} from "@testing-library/react";


test("render home page", () => {
    render(<HomePage />);
    expect(screen.getByText("Home Page")).toBeInTheDocument();
})