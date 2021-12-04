import React from 'react';
import "./generic.scss"

const CustomBtn = (props) => {
    const {btnText, onLogin} = props;
    return (
        <div className="custom-button">
            <button onSubmit={onLogin} type="submit" className="btn">{btnText}</button>
        </div>
    );
};

export default CustomBtn;