
import React, { useState, useEffect } from "react";
import { OdpisSprejemInput, OdpisSprejemDisplay, Navbar } from '../../components';
import axios from 'axios';

import style from './style/Sprejem.module.css';

const Sprejem = (props) => {

    const [ received, setReceived ] = useState([]);

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
            url: "/new-received",
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


    const removeReceived = async (item) => {

        console.log(item.item_name);
        console.log(item);

        await axios({
            method: "post",
            url: "/remove-received",
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
                setReceived(received.filter(received => received.item_name !== item.item_name && received.quantity !== item.quantity && received.date !== item.date));
            }
        })
    }

    const getReceived = async () => {

        await axios({
            method: "get",
            url: "/get-received",
            headers: {
                "Content-Type": "application/json",
            },
        }).then(response => {
            if(response.data.error) {
                console.log(response.data);                
            } else {
                setReceived(response.data);
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
        getReceived();

    }, [didUpdate]);

    return (
        <>
        < Navbar />
        <div className={style.container} >
            < OdpisSprejemInput mainTitle={"SPREJEM"} setSupplierInput={setSupplierInput} getItems={getItems} suppliers={suppliers} items={items} setItemChoice={setItemChoice} setQuantity={setQuantity} setUnits={setUnits} addItem={addItem} />
            < OdpisSprejemDisplay list={received} removeListItem={removeReceived} />
        </div>
        </>
    )
}

export { Sprejem };