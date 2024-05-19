import React from "react"; // Certifique-se de importar React
import { useState } from "react";
import "./App.css";

function App() {
    const [number, setNumber] = useState("");

    const handleInput = (value) => {
        setNumber(number + value);
    };

    const calcular = () => {
        if (number !== "") {
            setNumber(eval(number));
        }
    };

    return (
        <div className="container">
            <div className="calculator">
                <input id="user_input" placeholder="0" value={number} />
                <br />
                <button className="btn" onClick={() => handleInput(1)}>
                    1
                </button>
                <button className="btn" onClick={() => handleInput(2)}>
                    2
                </button>
                <button className="btn" onClick={() => handleInput(3)}>
                    3
                </button>
                <button
                    onClick={() => handleInput("+")}
                    style={{ background: "#ffb84d" }}
                    className="btn"
                >
                    +
                </button>
                <br />
                <button className="btn" onClick={() => handleInput(4)}>
                    4
                </button>
                <button className="btn" onClick={() => handleInput(5)}>
                    5
                </button>
                <button className="btn" onClick={() => handleInput(6)}>
                    6
                </button>
                <button
                    onClick={() => handleInput("-")}
                    style={{ background: "#ffcc80" }}
                    className="btn"
                >
                    -
                </button>
                <br />
                <button className="btn" onClick={() => handleInput(7)}>
                    7
                </button>
                <button className="btn" onClick={() => handleInput(8)}>
                    8
                </button>
                <button className="btn" onClick={() => handleInput(9)}>
                    9
                </button>
                <button
                    style={{ background: "#ffe0b3" }}
                    className="btn"
                    onClick={() => handleInput("*")}
                >
                    *
                </button>
                <br />
                <button className="btn" onClick={() => handleInput(".")}>
                    .
                </button>
                <button className="btn" onClick={() => handleInput(0)}>
                    {" "}
                    0
                </button>
                <button className="btn" onClick={() => setNumber("")}>
                    C
                </button>
                <button
                    style={{ background: "#fff5e6" }}
                    className="btn"
                    onClick={() => handleInput("/")}
                >
                    /
                </button>
                <br />
                <button className="btnEqual" onClick={calcular}>
                    =
                </button>
            </div>
        </div>
    );
}

export default App;
