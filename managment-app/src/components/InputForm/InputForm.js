
import React, { useState } from "react";
import './style/input-form.css';

const InputForm = (props) => {

    let isInputValid = true;
    const [ errorMsg, setErrorMsg ] = useState(false);
    const [ inputData, setInputData ] = useState({
        supplier: "",
        product: "",
        quantity: "",
        units: "liters",
        date: Date()
    })

    const handleInvalidInput = (data) => {
        Object.keys(data).forEach(key => {

            if(data[key] === "") {
                console.log(key)
                isInputValid = false;
            }
        });
    }

    const  handleSubmit = e => {
        e.preventDefault();

        handleInvalidInput(inputData) 

        if(!isInputValid) {
            setErrorMsg(true);
            console.log("Invalid input");
        } else {

            {/* FOR SERVER -> add props.origin as parameter so server knows what to do*/}
            let dataToSave = JSON.stringify(inputData)
            console.log(dataToSave);
        }
    }

    const handleChange = e => { 
        e.preventDefault();

        if(errorMsg) {
            setErrorMsg(false);
        }

        let key = e.target.dataset.key;
        let value = e.target.value.toLowerCase();

        setInputData({
            ...inputData,
            [key]: value
        });
    }

    return(
        <React.Fragment>
            <form className="odpis-form" onSubmit={handleSubmit}>
                <label className="label-form" >Supplier: </label>
                <input className={!errorMsg ? "input-form" : "input-form-error"} placeholder="Supplier" type="text" data-key="supplier" onChange={e => handleChange(e)}/>
                <label className="label-form">Product: </label>
                <input className={!errorMsg ? "input-form" : "input-form-error"} placeholder="Product" type="text" data-key="product" onChange={e => handleChange(e)}/>
                <label className="label-form">Quantity: </label>
                <input className={!errorMsg ? "input-form" : "input-form-error"} placeholder="Quantity" type="text" data-key="quantity" onChange={e => handleChange(e)}/>
                <div className="units-container">
                    <select className="units-form" id="units" data-key="units" onChange={e => handleChange(e)}>
                        <option value="Liter">LIT</option>
                        <option value="Kos">KOS</option>
                    </select>
                </div>
                <label className="label-form">Date: </label>
                <input className={!errorMsg ? "input-form" : "input-form-error"} type="date" data-key="date" onChange={e => handleChange(e)}/>

                <input className="submit-btn" type="submit" value="Submit" />
            </form>

            {errorMsg && <div className="error-message">
                    <h1>INVALID INPUT</h1>
                    <p>Please check all input fields.</p>
                </div>}
        </React.Fragment>
    )
}

export { InputForm };