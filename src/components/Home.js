import React from 'react';
import './component.scss'
import {Link} from "react-router-dom";

const Home = () => {
    return (
        <div className={"Home"}>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Profile</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Settings</a></li>
                <li><a href="#">Help</a></li>
                <Link to={"/"}>
                    <button
                        style={{border: "0", color: "#485867", backgroundColor: "yellow", padding: "5px 20px"}}>LOGOUT
                    </button>
                </Link>
            </ul>
        </div>
    );
};

export default Home;