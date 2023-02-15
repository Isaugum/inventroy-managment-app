import axios from "axios";
import React, { useEffect, useState } from "react";
import { Navbar } from '../../components';
import style from './style/NewItem.module.css';

const NewItem = (props) => {

    const [ suppliers, setSuppliers  ] = useState([]);
    const [ supplierInput, setSupplierInput ] = useState("");

    const [ items, setItems  ] = useState([]);
    const [ newItemInput, setNewItemInput ] = useState("");
    const [ removeItemChoice, setRemoveItem ] = useState("");
    const [ didUpdate, setDidUpdate ] = useState(false);

    const addNewItem = async (e) => {
        e.preventDefault();

        await axios({
            method: "post",
            url: "/new-items",
            headers: {
                "Content-Type": "application/json",
            },
            data: {
                item: newItemInput.toLowerCase(),
                supplier: supplierInput.toLowerCase(),
            }
        }).then(response => {
            console.log(response);

            if(response.data.error) {
                console.log(response.data.error);
            } else {
                console.log(response.data);
                setDidUpdate(!didUpdate);
            }
        }).catch(err => {
            console.log(err);
        })
    }

    const removeItem = async (e) => {
        e.preventDefault();

        await axios({
            method: "post",
            url: "/remove-items",
            headers: {
                "Content-Type": "application/json",
            },
            data: {
                item: removeItemChoice.toLowerCase(),
                supplier: supplierInput.toLowerCase(),
            }
        }).then(response => {
            console.log(response);

            if(response.data.error) {
                console.log(response.data.error);
            } else {
                console.log(response.data);
                setDidUpdate(!didUpdate);
            }
        }).catch(err => {
            console.log(err);
        })
    }

    const getSuppliers = async () => {

        await axios({
            method: "get",
            url: "/get-suppliers",
            headers: {
                "Content-Type": "application/json",
            },
        }).then(response => {
            if(response.data.error) {
                console.log(response.data);                
            } else {
                setSuppliers(response.data);                
            }
        })
    }

    const getItems = async (supplierName) => {

        console.log(supplierName);

        await axios({
            method: "post",
            url: "/get-items",
            headers: {
                "Content-Type": "application/json",
            },
            data: {
                supplier: supplierName,
            }
        }).then(response => {
            if(response.data.error) {
                console.log(response.data);                
            } else {
                console.log(response.data);
                setItems(response.data);             
            }
        }).then(result => {
            setDidUpdate(!didUpdate); 
        }).catch(err => {
            console.log(err);
        })
    }

    useEffect(() => {
        
        getSuppliers();

    }, [didUpdate]);

    return(
        <>
        < Navbar />
        <div className={style.container}>
            <h1 className={style.mainTitle}>Items</h1>
            <div className={style.formBox}>
                <h2 className={style.formTitle}>Add new item</h2>
                <form className={style.supplierForm}>
                <select className={style.formInput} onChange={e => {e.preventDefault(); setSupplierInput(e.target.value);}}>
                        <option value="">select</option>
                        {
                        suppliers.length > 0 ?                        
                        suppliers.map(supplier => {
                            let supplierName = supplier.company_name.split("");
                            let capital = supplierName[0].toUpperCase();
                            supplierName.splice(0, 1, capital);
                            const name = supplierName.join("");
                            return <option value={supplier.company_name} key={supplier.company_id}>{name}</option>
                        }) : null
                        }
                    </select>
                    <input className={style.formInput}type="text" placeholder="item name" onChange={e => {e.preventDefault(); setNewItemInput(e.target.value);}}/>
                    <button className={style.formSubmitBtn} onClick={(e) => {addNewItem(e); e.target.value = "";}}>Add</button>
                </form>                
            </div>
            <div className={style.formBox}>
                <h2 className={style.formTitle}>Remove item</h2>
                <form className={style.supplierForm}>
                    <select className={style.formInput} onChange={e => {e.preventDefault(); setSupplierInput(e.target.value); getItems(e.target.value);}}>
                        <option value="">select</option>
                        {
                        suppliers.length > 0 ?                        
                        suppliers.map(supplier => {

                            let supplierName = supplier.company_name.split("");
                            let capital = supplierName[0].toUpperCase();
                            supplierName.splice(0, 1, capital);
                            const name = supplierName.join("");
                            return <option value={supplier.company_name} key={supplier.company_id}>{name}</option>
                        }) : null
                        }
                    </select>
                    <select className={style.formInput} onChange={e => {e.preventDefault(); setRemoveItem(e.target.value);}}>
                        <option value="">select</option>
                        {
                        items.length > 0 ?                        
                        items.map(item => {

                            let itemName = item.item_name.split("");
                            let capital = itemName[0].toUpperCase();
                            itemName.splice(0, 1, capital);
                            const name = itemName.join("");
                            return <option value={item.item_name} key={item.item_id}>{name}</option>
                        }) : null
                        }
                        
                    </select>
                <button className={style.formSubmitBtn} onClick={(e) => removeItem(e)}>Remove Item</button>
                </form>                
            </div>
        </div> 
        </>
    )
}

export { NewItem };