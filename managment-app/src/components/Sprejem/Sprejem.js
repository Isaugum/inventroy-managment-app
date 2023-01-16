
import React, { useState } from "react";
import './style/sprejem.css';

const Sprejem = (props) => {

    const [ sprejemInputData, setSprejemInputData ] = useState({
        supplier: "",
        product: "",
        quantity: "",
        units: ""
    }) 

    const [ supplier, setSupplier ] = useState("");
    const [ product, setProduct ] = useState("");
    const [ quantity, setQuantity ] = useState("");
    const [ units, setUnits ] = useState("");

    const handleInputData = (supplier, product, quantity, units) => {
            console.log(supplier, product, quantity, units);
    }

    const handleSubmit = e => {
        e.preventDefault();
        console.log(supplier, product, quantity, units);

        handleInputData(supplier, product, quantity, units);
    }

    const handleChange = e => { 
        return { [e.target.dataset.key]: e.target.value }
    }

    return(
        <React.Fragment>
                <button data-btnvalue="mainMenu" onClick={props.handleMainMenu}>Main Menu</button>

                <form className="sprejem-form" onSubmit={handleSubmit}>
                    <label className="label-form">Supplier: </label>
                    <input className="input-form" placeholder="Supplier" type="text" data-key="supplier" onChange={e => setSupplier(handleChange(e))}/>
                    <label className="label-form">Product: </label>
                    <input className="input-form" placeholder="Product" type="text" data-key="product" onChange={e => setProduct(handleChange(e))}/>
                    <label className="label-form">Quantity: </label>
                    <input className="input-form" placeholder="Quantity" type="text" data-key="quantity" onChange={e => setQuantity(handleChange(e))}/>

                    <div className="units-container">
                        <select className="units-form" id="units" defaultValue="pieces" data-key="units" onChange={e => setUnits(handleChange(e))}>
                            <option value="liters">Liters</option>
                            <option value="pieces">Pieces</option>
                        </select>
                    </div>
                    <input className="submit-btn" type="submit" value="Submit" />
                </form>
        </React.Fragment>
    )
}

export { Sprejem };