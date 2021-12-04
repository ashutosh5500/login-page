import React from 'react';
import LoginForm from "../LoginForm/LoginForm";
import RegistrationForm from "../Registration/RegistrationForm";
import './Form.scss'

const Form = () => {


    return (
        <div className="login">
            <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                <li className="nav-item" role="presentation">
                    <a className="nav-link active" id="pills-login-tab" data-toggle="pill" href="#pills-login"
                       role="tab" aria-controls="pills-login" aria-selected="true">Log In</a>
                </li>
                <li className="nav-item" role="presentation">
                    <a className="nav-link " id="pills-register-tab" data-toggle="pill" href="#pills-register"
                       role="tab" aria-controls="pills-register" aria-selected="false">Register</a>
                </li>
            </ul>

            <div className="tab-content" id="pills-tabContent">
                <div className="tab-pane fade show active" id="pills-login" role="tabpanel"
                     aria-labelledby="pills-login-tab">
                    <LoginForm/>
                </div>

                <div className="tab-pane fade" id="pills-register" role="tabpanel" aria-labelledby="pills-register-tab">
                    <RegistrationForm/>
                </div>

            </div>
        </div>
    );
};

export default Form;

