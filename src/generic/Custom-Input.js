import React from 'react';
import './generic.scss'

const CustomInput = (props) => {
    const {labelText, inputType, inputValue, inputName, onChange} = props;
    return (
        <div className="form-group custom-input">
            <label>{labelText}</label>
            {inputType == "select" ?
                <select name={inputName} onChange={onChange} className="form-control"
                        aria-label="Default select example">
                    <option selected>Gender</option>
                    <option>Male</option>
                    <option>Female</option>
                    <option>Other</option>
                </select> :
                <input type={inputType} value={inputValue} className="form-control" id="exampleInputEmail1"
                       name={inputName} onChange={onChange}
                />}
        </div>
    );
};

export default CustomInput;