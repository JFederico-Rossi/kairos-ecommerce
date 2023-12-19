import styles from './Navbar.module.css'
import CartWidget from "../CartWidget/CartWidget"

const Navbar = () => {
    return (
        <nav>
            <h2> Kairos Yoga Studio</h2>
            <div>
                <button className={styles.button}>Yoga mats</button>
                <button className={styles.button}>Tibetan bowl</button>
                <button className={styles.button}>Yoga blocks</button>
                <button className={styles.button}>Buddha figure</button>
                <button className={styles.button}>Meditation bench</button>
                <button className={styles.button}>Gong</button>
            </div>

            <CartWidget />

        </nav>
    )

}
export default Navbar