import styles from './CartWidget.module.css'
import cart from './assets/shopping-cart.svg'

const CartWidget = () => {
    return (
        <div>
            <img className={styles.cart} src={cart} alt="cart-widget" />
        </div>
    )
} 

export default CartWidget