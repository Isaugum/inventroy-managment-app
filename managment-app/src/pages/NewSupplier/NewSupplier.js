import axios from "axios";
import React, { useEffect, useState } from "react";
import { Navbar } from '../../components';
import style from './style/NewSupplier.module.css';

const NewSupplier = (props) => {

    const [ suppliers, setSuppliers  ] = useState([]);
    const [ newSupplierInput, setNewSupplierInput ] = useState("");
    const [ removeSupplierChoice, setRemoveSupplier ] = useState("");

    const addNewSupplier = async (e) => {
        e.preventDefault();

        await axios({
            method: "post",
            url: "/new-supplier",
            headers: {
                "Content-Type": "application/json",
            },
            data: {
                supplier: newSupplierInput.toLowerCase()
            }
        }).catch(err => {
            console.log(err);
        })
    }

    const removeSupplier = async (e) => {
        e.preventDefault();

        await axios({
            method: "post",
            url: "/remove-supplier",
            headers: {
                "Content-Type": "application/json",
            },
            data: {
                supplier: removeSupplierChoice
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
            setSuppliers(response.data);
        })
    }

    useEffect(() => {
        let counter = 0;
        if(counter === 0) {
            getSuppliers();
        }
    }, []);

    return(
        <>
        < Navbar />
        <div className={style.container}>
            <h1 className={style.mainTitle}>Add / Remove</h1>
            <div className={style.formBox}>
                <h2 className={style.formTitle}>Add new supplier</h2>
                <form className={style.supplierForm}>
                    <input className={style.formInput}type="text" placeholder="company" onChange={e => {e.preventDefault(); setNewSupplierInput(e.target.value);}}/>
                    <button className={style.formSubmitBtn} onClick={(e) => addNewSupplier(e)}>Add</button>
                </form>                
            </div>
            <div className={style.formBox}>
                <h2 className={style.formTitle}>Remove supplier</h2>
                <form className={style.supplierForm}>
                    <select className={style.formInput} onChange={e => {e.preventDefault(); setRemoveSupplier(e.target.value);}}>
                        <option value="">select</option>
                        {suppliers.map(supplier => {

                            let supplierName = supplier.company_name.split("");
                            let capital = supplierName[0].toUpperCase();
                            supplierName.splice(0, 1, capital);
                            const name = supplierName.join("");
                            return <option value={supplier.company_name} key={supplier.company_id}>{name}</option>
                        })}
                    </select>
                <button className={style.formSubmitBtn} onClick={(e) => removeSupplier(e)}>Remove</button>
                </form>                
            </div>
        </div> 
        </>
    )
}

export { NewSupplier };