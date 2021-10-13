import React from "react";
import '../App.css';
import CardContainer from "../components/CardContainer/CardContainer";

export default function Shop() {
    return (
        <div className="App">
            <header className="App-header">
                <div className="overlay-border">
                    <h1>Merch Shop</h1>
                    <CardContainer />
                </div>
            </header>
        </div>
    );
}

