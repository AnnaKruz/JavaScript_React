import React from 'react';
import {getByText, render, screen, waitFor} from "@testing-library/react";
import Header from "../components/Header";


test("render header", async () => {
    render(<Header/>);
    await waitFor(() => {
        const findEl = screen.getByText(/About us/i);
        expect(findEl).toBeInTheDocument();
    });
});

test("links count test", async () => {
    render(<Header/>);
    // await waitFor(() => {
        // const headerEl = document.querySelector("header");
        // expect(headerEl.childElementCount).toBe(2);
    // });
});

test("header snapshot test", () => {
    const {container} = render(<Header/>);
    expect(container).toMatchSnapshot();
});