import React, {Fragment, useState} from 'react';
import CustomInput from "../../generic/CustomInput";
import CustomBtn from "../../generic/CustomBtn";
import {useNavigate} from "react-router-dom";
import './LoginForm.scss';
import axios from "axios";

const LoginForm = () => {
    const navigate = useNavigate();


    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    const submitLoginForm = (e) => {
        e.preventDefault();
        const newUser = {email: email, password: password};
        axios.post("https://reqres.in/api/login", newUser)
            .then((response) => {
                if (response.data.token != null) {
                    localStorage.setItem("token", JSON.stringify(response.data.token))
                    navigate("/home")
                }

            })
            .catch(err => {
                if (err) {
                    alert("No User Found!")
                }
            })
    }
    return (
        <Fragment>
            <form className="login-form" onSubmit={submitLoginForm}>
                <CustomInput labelText={"Email / mobile number"}
                             inputType={"email"}
                             inputValue={email}
                             onChange={(e) => setEmail(e.target.value)}
                             inputName={"email"}/>

                <CustomInput labelText={"Password"}
                             inputType={"password"}
                             inputValue={password}
                             onChange={(e) => setPassword(e.target.value)}
                             inputName={"password"}/>

                <div className="forgot">
                    <label><a href="#">forget password</a></label>
                </div>
                <CustomBtn btnText={"login"}/>
                <div className="join-member">
                    <span>Not a member yet?<a href="#"><b> Register</b></a></span>
                </div>
            </form>
        </Fragment>
    );
};

export default LoginForm;