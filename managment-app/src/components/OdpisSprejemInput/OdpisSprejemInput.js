import style from './style/OdpisSprejemInput.module.css';

const OdpisSprejemInput = (props) => {

    let checkboxes = document.getElementsByClassName('checkers');

    function check(e) {
        const value = e.target.value;
        const checked = e.target.checked;

        console.log(e.target.id);

        Object.keys(checkboxes).forEach(key => {
            if(checkboxes[key].id !== e.target.id) {
                checkboxes[key].checked = false;
            }
        })

        props.setUnits(e.target.value);
    }

    return(
        <> 
        <div className={style.container}>
            <h1 className={style.mainTitle}>{props.mainTitle}</h1>
            <div className={style.formBox}>
                <form className={style.supplierForm}>
                    <select className={style.formInput} onChange={e => {e.preventDefault(); props.setSupplierInput(e.target.value); props.getItems(e.target.value);}}>
                        <option value="">Select supplier</option>
                        {
                        props.suppliers.length > 0 ?                        
                        props.suppliers.map(supplier => {

                            let supplierName = supplier.company_name.split("");
                            let capital = supplierName[0].toUpperCase();
                            supplierName.splice(0, 1, capital);
                            const name = supplierName.join("");
                            return <option value={supplier.company_name} key={supplier.company_id}>{name}</option>
                        }) : null
                        }
                    </select>
                    <select className={style.formInput} onChange={e => {e.preventDefault(); props.setItemChoice(e.target.value);}}>
                        <option value="">Select item</option>
                        {
                        props.items.length > 0 ?                        
                        props.items.map(item => {

                            let itemName = item.item_name.split("");
                            let capital = itemName[0].toUpperCase();
                            itemName.splice(0, 1, capital);
                            const name = itemName.join("");
                            return <option value={item.item_name} key={item.item_id}>{name}</option>
                        }) : null
                        }

                    </select>
                    <input className={style.formInput} type="number" placeholder="quantity" onChange={e => {e.preventDefault(); props.setQuantity(e.target.value);}} />
                    <div className={style.unitsContainer}>
                        <input className="checkers" type="checkbox" id="kos" name="kos" value="KOS" onClick={(e) => check(e)}/>
                        <label htmlFor="kos">KOS</label>
                        <input className="checkers" type="checkbox" id="lit" name="lit" value="LIT" onClick={(e) => check(e)}/>
                        <label htmlFor="lit">LIT</label>                        
                    </div>

                <button className={style.formSubmitBtn} onClick={(e) => props.addItem(e)}>Confirm</button>
                </form>                
            </div>
        </div>
        </>
    )
}

export { OdpisSprejemInput };