import styles from './Navbar.module.css'
import CartWidget from "../CartWidget/CartWidget"

const Navbar = () => {
    return (
        <nav>
            <h2> Kairos Yoga Studio</h2>
            <div>
                <button className={styles.button}>Products</button>
                <button className={styles.button}>About Us</button>
                <button className={styles.button}>Contact Us</button>
               
            </div>

            <CartWidget />

        </nav>
    )

}
export default Navbar