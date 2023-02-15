
import React, { useState, useEffect } from "react";
import { InputForm, Navbar } from '../../components';
import axios from 'axios';
import style from './style/Odpis.module.css';

const Odpis = (props) => {

    const [ writeOff, setWriteOff ] = useState([]);

    const [ suppliers, setSuppliers  ] = useState([]);
    const [ supplierInput, setSupplierInput ] = useState("");

    const [ units, setUnits ] = useState("");
    const [ quantity, setQuantity ] = useState("");

    const [ items, setItems  ] = useState([]);
    const [ itemChoice, setItemChoice ] = useState("");
    const [ didUpdate, setDidUpdate ] = useState(false);

    const addItem = async (e) => {
        e.preventDefault();

        await axios({
            method: "post",
            url: "/new-write-off",
            headers: {
                "Content-Type": "application/json",
            },
            data: {
                item: itemChoice.toLowerCase(),
                supplier: supplierInput.toLowerCase(),
                quantity: quantity.toLowerCase(),
                units: units.toLowerCase()
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


    const removeWriteOff = async (item) => {

        console.log(item.item_name);
        console.log(item);

        await axios({
            method: "post",
            url: "/remove-write-off",
            headers: {
                "Content-Type": "application/json",
            },
            data: {
                item: item.item_name,
                quantity: item.quantity,
                units: item.units,
                date: item.date,
            }
        }).then(response => {
            if(response.data.error) {
                console.log(response.data);                
            } else {
                console.log(response.data);
            }
        })
    }

    const getWriteOff = async () => {

        await axios({
            method: "get",
            url: "/get-write-off",
            headers: {
                "Content-Type": "application/json",
            },
        }).then(response => {
            if(response.data.error) {
                console.log(response.data);                
            } else {
                setWriteOff(response.data);
            }
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
        getWriteOff();

    }, [didUpdate]);

    return (
        <>
        < Navbar />
        <div className={style.container}>
            <h1 className={style.mainTitle}>ODPIS</h1>
            <div className={style.formBox}>
                <h2 className={style.formTitle}>Write off</h2>
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
                    <select className={style.formInput} onChange={e => {e.preventDefault(); setItemChoice(e.target.value);}}>
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
                    <input className={style.formInput} type="number" placeholder="quantity" onChange={e => {e.preventDefault(); setQuantity(e.target.value);}} />
                    <select className={style.formInput} onChange={e => {e.preventDefault(); setUnits(e.target.value);}}>
                        <option value="">select</option>
                        <option value="KOS">KOS</option>
                        <option value="LIT">LIT</option>
                    </select>
                <button className={style.formSubmitBtn} onClick={(e) => addItem(e)}>Confirm</button>
                </form>                
            </div>
            <div className={style.writeOffBox}>
                {
                    writeOff.length > 0 ?
                    writeOff.map(item => {
                        return <div className={style.writeOffItem} key={item.item_id}>
                            <h3 className={style.itemName}>{item.item_name}</h3>
                            <p className={style.itemQuantity}>{item.quantity + " " + item.units}</p>
                            <p className={style.itemDate}>{item.date}</p>
                            <button onClick={() => { removeWriteOff(item) }}> X </button>
                        </div>
                    }) :
                    <h3>No items</h3>
                }
            </div>
        </div> 
        </>
    )
}

export { Odpis };