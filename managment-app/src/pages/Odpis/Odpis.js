
import React, { useState, useEffect } from "react";
import { OdpisSprejemDisplay, Navbar, OdpisSprejemInput } from '../../components';
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
                post_id: Math.floor(Math.random() * 100),
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
                post_id: item.writeoff_id,
                quantity: item.quantity,
                units: item.units,
                date: item.date,
            }
        }).then(response => {
            if(response.data.error) {
                console.log(response.data);                
            } else {
                console.log(response.data);
                setWriteOff(writeOff.filter(writof => writof.item_name !== item.item_name && writof.units !== item.units && writof.date !== item.date));
                setDidUpdate(!didUpdate);
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
        < OdpisSprejemInput mainTitle={"ODPIS"} setSupplierInput={setSupplierInput} getItems={getItems} suppliers={suppliers} items={items} setItemChoice={setItemChoice} setQuantity={setQuantity} setUnits={setUnits} addItem={addItem} />
        < OdpisSprejemDisplay list={writeOff} removeListItem={removeWriteOff} />
        </>
    )
}

export { Odpis };