import React from 'react';
import '../Component.scss'
import {useNavigate} from "react-router-dom";
import './Home.scss'

const Home = () => {
    const navigate = useNavigate();
    return (
        <div className={"Home"}>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Profile</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Settings</a></li>
                <li><a href="#">Help</a></li>
                <button
                    style={{border: "0", color: "#485867", backgroundColor: "yellow", padding: "5px 20px"}}
                    onClick={() => {
                        localStorage.clear();
                        navigate('/');
                    }}>LOGOUT
                </button>
            </ul>
        </div>
    );
};

export default Home;