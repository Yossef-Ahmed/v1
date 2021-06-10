import * as React from "react";
import { render, fireEvent } from '@testing-library/react';

import Header from '../components/Header';

test('Render The Right Content', () => {
    const { getByText } = render(<Header />);

    getByText("Welcome 😃")
    // expect(getByText("I'm Youssef Ahmed, a full MERN stack developer focused on building complex systems with elegant architectures")).not.toBeNull();
    getByText("Email Me")
});

test('Allows Users To Toggle The Hamburger-Menu', () => {
    const { getByText } = render(<Header />);

    const emailBtn = getByText("Welcome 😃");
    fireEvent.click(emailBtn);

    getByText("Test Welcome");
});