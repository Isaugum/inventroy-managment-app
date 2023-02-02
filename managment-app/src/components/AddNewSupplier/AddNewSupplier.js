import { DataContext } from '../../App';
import { useContext, useState } from 'react';

const AddNewSupplier = () => {

    const suppliersFunctions = useContext(DataContext);
    const [ inputData, setInputData ] = useState({
        supplier: "",
        id: ""
    })

    const handleSubmit = (e) => {
        e.preventDefault();

        suppliersFunctions.updateSuppliers({
            ...suppliersFunctions.suppliers,
            [inputData.supplier]: {
                id: inputData.id,
                products: []
            }
        })
    }

    const handleChange = (e) => {

        let key = e.target.dataset.key;
        let value = e.target.value;

        setInputData({
            ...inputData,
            [key]: value
        });
    }

    return (
        <div className="container">
        <form onSubmit={handleSubmit}>
            <label>Supplier name: </label>
            <input placeholder="supplier" data-key="supplier" onChange={e => handleChange(e)}></input>
            <label>Custom ID: </label>
            <input type="text" placeholder="ID" data-key="id" onChange={e => handleChange(e)}></input>
            <input type="submit" value="Submit" />
        </form>
        </div>
    )
}

export { AddNewSupplier };