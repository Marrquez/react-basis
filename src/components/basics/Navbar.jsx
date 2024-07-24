import React, { useState } from "react";

function Navbar() {
    const [heading, setHeading] = useState("Magnificent Monkeys");

    const clickHandler = () => {
        setHeading("Radical Rhinos");
    };

    return (
        <>
            <h1>Hello world from Navbar</h1>
            <button type="button" onClick={clickHandler}>
                Click Me
            </button>
            <p>{heading}</p>
            <nav>
                <ul>
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="/dashboard">Dashboard</a>
                    </li>
                    <li>
                        <a href="login">Login page</a>
                    </li>
                </ul>
            </nav>
        </>
    );
}

export default Navbar;