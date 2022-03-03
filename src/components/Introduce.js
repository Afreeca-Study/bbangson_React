import React from "react";
import "../App.css";

export default function Introduce(props) {
    const {introduce} = props;

    return (
        <p className="Introduce">
            {introduce}
        </p>
    )
}