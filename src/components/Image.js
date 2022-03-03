import React from "react";
import "../App.css";

export default function Image(props) {
    const {image} = props;
    
    return (
        <img src={image} className="Image"/>
    )
}