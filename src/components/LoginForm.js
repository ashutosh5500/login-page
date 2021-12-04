import React, {Fragment, useState} from 'react';
import CustomInput from "../generic/Custom-Input";
import CustomBtn from "../generic/Custom-btn";
import {useNavigate} from "react-router-dom";
import axios from "axios";

const LoginForm = () => {
    const navigate = useNavigate();


    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    const submitLoginForm = (e) => {
        e.preventDefault();
        const newUser = {email: email, password: password}

        console.log(newUser);

        axios.post("https://reqres.in/api/login", newUser)
            .then((response) => {
                console.log(response)
                if (response.data.token != null) {
                    console.log("successfully login")
                    navigate("/home")
                }

            })
            .catch(err => {
                console.log(err)
                if (err) {
                    alert("No User Found!")
                }
            })
        localStorage.setItem("userList", JSON.stringify(newUser))
        getUserData()
    }
    const getUserData = () => {
        let userData = localStorage.getItem("userList")
        console.log(userData)
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