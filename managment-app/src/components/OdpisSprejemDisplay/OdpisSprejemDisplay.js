import style from './style/OdpisSprejemDisplay.module.css';
import {useEffect} from 'react';

const OdpisSprejemDisplay = (props) => {

    return(
        <> 
        <div className={style.container}>
            <div className={style.listBox}>
                {
                    props.list.length > 0 ?
                    props.list.map(item => {
                        return <div className={style.listItem} key={item.item_id}>
                            <h3 className={style.itemName}>{item.item_name}</h3>
                            <p className={style.itemQuantity}>{item.quantity + " " + item.units}</p>
                            <p className={style.itemDate}>{item.date}</p>
                            <button className={style.deleteBtn} onClick={() => { props.removeListItem(item); }}> X </button>
                        </div>
                    }) :
                    <h3>No items</h3>
                }
            </div>
        </div>
        </>
    )
}

export { OdpisSprejemDisplay };