import React, {useEffect} from 'react';
import Img from '../assets/images/Asset 2.png'
import './Component.scss'
import Form from "./Form/Form";
import {useNavigate} from "react-router-dom";

const LoginPage = () => {
    const navigate = useNavigate();
    useEffect(() => {
        if (localStorage.getItem('token')) {
            navigate('/home');
        }
    }, [])
    return (
        <div className={"row"}>
            <div className="col-md-8">
                <div className="showcase-text">
                    <img src={Img} alt="rupee" height={"400px"} width={"400px"}/>
                    <h1 className="mb-3">Welcome!</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis ducimus molestiae voluptatibus,
                        soluta doloremque, quasi vero tempora labore neque, voluptates asperiores itaque. Perferendis
                        tempore natus libero odio dignissimos
                        nobis animi.
                    </p>
                </div>
            </div>
            <div className="col-md-4">
                <Form/>
            </div>
        </div>
    );
};

export default LoginPage;