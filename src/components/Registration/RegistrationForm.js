import React, {Fragment, useState} from 'react';
import CustomInput from "../../generic/CustomInput";
import CustomBtn from "../../generic/CustomBtn";
import './Registration.scss'

const RegistrationForm = () => {
    const [fullName, setFullName] = useState("");
    const [newEmail, setNewEmail] = useState("");
    const [mobileNumber, setMobileNumber] = useState("");
    const [gender, setGender] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const [registration, setRegistration] = useState([]);

    const submitRegistrationForm = (e) => {
        e.preventDefault();
        const newRegisterUser = {
            fullName: fullName,
            newEmail: newEmail,
            mobileNumber: mobileNumber,
            gender: gender,
            newPassword: newPassword,
            confirmPassword: confirmPassword,
        }
        setRegistration([...registration, newRegisterUser])
    }

    return (
        <Fragment>
            <form className={"login-form"} onSubmit={submitRegistrationForm}>
                <CustomInput labelText={"Full Name"}
                             inputType={"text"}
                             inputValue={fullName}
                             onChange={(e) => setFullName(e.target.value)}
                             inputName={"email"}
                />
                <CustomInput labelText={"Email"}
                             inputType={"email"}
                             inputValue={newEmail}
                             onChange={(e) => setNewEmail(e.target.value)}
                             inputName={"email"}
                />
                <CustomInput labelText={"Mobile Number"}
                             inputType={"tel"}
                             inputValue={mobileNumber}
                             onChange={(e) => setMobileNumber(e.target.value)}
                             inputName={"email"}
                />
                <CustomInput labelText={"Gender"}
                             inputType={"select"}
                             inputValue={gender}
                             onChange={(e) => setGender(e.target.value)}
                             inputName={"email"}
                />
                <CustomInput labelText={"Password"}
                             inputType={"password"}
                             inputValue={newPassword}
                             onChange={(e) => setNewPassword(e.target.value)}
                             inputName={"email"}
                />
                <CustomInput labelText={"Confirm Password"}
                             inputType={"password"}
                             inputValue={confirmPassword}
                             onChange={(e) => setConfirmPassword(e.target.value)}
                             inputName={"email"}
                />
                <CustomBtn btnText={"register"}/>
                <div className="join-member">
                    <span>Already a member?<a href="#"><b> Login</b></a></span>
                </div>
            </form>
        </Fragment>
    );
};

export default RegistrationForm;