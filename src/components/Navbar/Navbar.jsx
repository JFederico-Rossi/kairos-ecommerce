import styles from './Navbar.module.css'
import CartWidget from "../CartWidget/CartWidget"
import { Link } from 'react-router-dom'

const Navbar = (categoryId) => {
    return (
        <nav>
            <Link to='/'><h2 className='Linkh2'> Kairos Yoga Studio</h2></Link>
            <div>
                <Link to={`/category/Yoga props`} className={styles.button}>Yoga Props</Link>
                <Link to={`/category/Meditation`} className={styles.button}>Meditation</Link>
                <Link to={`/category/Home`} className={styles.button}>Home</Link>
               
            </div>

            <CartWidget />

        </nav>
    )

}
export default Navbar