import style from './ItemCount.module.css'
import { useState } from 'react'

const ItemCount = ({stock, initial, onAdd}) => {
    const [quantity, setQuantity] = useState(initial)

    const increment = () => {
        if (quantity < stock) {
            setQuantity(quantity + 1)
        }
    }


    const decrement = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1)
        }
    }

    return (
        <>
        <div className='Counter'>
            <div className={style.controls}>
                <button className={style.button} onClick={decrement}>-</button>
                <h4>{quantity}</h4>
                <button className={style.button} onClick={increment}>+</button>
            </div>
        </div>
            
            <button className={style.button} onClick={()=> onAdd(quantity)} disabled={!stock}>Add to Cart</button>
        </>

    )
}

export default ItemCount