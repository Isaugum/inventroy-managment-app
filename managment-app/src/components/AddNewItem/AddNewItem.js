import { DataContext } from '../../App';
import { useContext, useState } from 'react';

const AddNewItem = () => {

    const suppliersFunctions = useContext(DataContext);
    const [preProducts, setPreProducts] = useState([]);
    const [ inputData, setInputData ] = useState({
        supplier: "bevog",
        item: ""
    })

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(suppliersFunctions.suppliers[inputData.supplier].products);

        suppliersFunctions.updateSuppliers({
            ...suppliersFunctions.suppliers,
            [inputData.supplier]: {
                ...suppliersFunctions.suppliers[inputData.supplier],
                products: [...suppliersFunctions.suppliers[inputData.supplier].products, inputData.item]
            }
        })
    }

    const handleChange = (e) => {
        let key = e.target.dataset.key;
        let value = e.target.value;

        setInputData({
            ...inputData,
            [key]: value
        })
    }

    return (
        <div className="container">
        <form onSubmit={handleSubmit}>
            <label className="label-form" >Supplier: </label>
            <select id="units" data-key="supplier" onChange={e => handleChange(e)}>
                {Object.keys(suppliersFunctions.suppliers).map(sup => <option value={sup} key={sup.id}>{sup[0].toUpperCase() + sup.slice(1)}</option>)}
            </select>
            <input placeholder="new item" data-key="item" onChange={e => handleChange(e)}></input>
            <input type="submit" value="Submit" />
        </form>
        </div>
    )
}

export { AddNewItem };