
import React, { useState } from "react";
import './style/sprejem.css';

const Sprejem = (props) => {

    let isInputValid = true;
    const [ errorMsg, setErrorMsg ] = useState(false);
    const [ sprejemInputData, setSprejemInputData ] = useState({
        supplier: "",
        product: "",
        quantity: "",
        units: "liters"
    })

    const handleInvalidInput = (data) => {
        Object.keys(data).forEach(key => {

            if(data[key] === "") {
                isInputValid = false;
            }
        });
    }

    const  handleSubmit = async e => {
        e.preventDefault();

        handleInvalidInput(sprejemInputData) 

        if(!isInputValid) {
            setErrorMsg(true);
            console.log("Invalid input");
        } else {
            let dataToSave = JSON.stringify(sprejemInputData)     
        }
    }

    const handleChange = e => { 
        e.preventDefault();

        if(errorMsg) {
            setErrorMsg(false);
        }

        let key = e.target.dataset.key;
        let value = e.target.value.toLowerCase();

        setSprejemInputData({
            ...sprejemInputData,
            [key]: value
        });
    }

    return(
        <React.Fragment>
            <div className="container">
                <button data-btnvalue="mainMenu" onClick={props.handleMainMenu}>Main Menu</button>

                <form className="sprejem-form" onSubmit={handleSubmit}>
                    <label className="label-form" >Supplier: </label>
                    <input className="input-form" placeholder="Supplier" type="text" data-key="supplier" onChange={e => handleChange(e)}/>
                    <label className="label-form">Product: </label>
                    <input className="input-form" placeholder="Product" type="text" data-key="product" onChange={e => handleChange(e)}/>
                    <label className="label-form">Quantity: </label>
                    <input className="input-form" placeholder="Quantity" type="text" data-key="quantity" onChange={e => handleChange(e)}/>

                    <div className="units-container">
                        <select className="units-form" id="units" data-key="units" onChange={e => handleChange(e)}>
                            <option value="liters">Liters</option>
                            <option value="pieces">Pieces</option>
                        </select>
                    </div>
                    <input className="submit-btn" type="submit" value="Submit" />
                </form>
                {errorMsg && <div className="error-message">
                    <h1>INVALID INPUT</h1>
                    <p>Please check all input fields.</p>
                </div>}
            </div>
        </React.Fragment>
    )
}

export { Sprejem };