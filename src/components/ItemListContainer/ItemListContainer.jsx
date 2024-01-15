import styles from './ItemListContainer.module.css'
import { useState, useEffect } from 'react'
import { getProducts, getProductsByCategory } from '../../asyncMock'
import ItemList from '../ItemList/ItemList'

import { useParams } from 'react-router-dom'


const ItemListContainer = ({greeting}) => {
    const [loading, setLoading] = useState (true)
    const [products, setProducts] = useState([])

    const { categoryId } = useParams() 

    useEffect(() => {
        if (categoryId) document.title = 'Kairos Yoga Studio | ' + categoryId 
        return () => {
            document.title = 'Kairos Yoga Studio | Shopping Cart'
        }
    }, [categoryId])

    useEffect( ()=> {
        setLoading(true)
        const asyncFunc = categoryId ? getProductsByCategory : getProducts

        asyncFunc(categoryId)
            .then(response => {
                setProducts(response)
            })
            .catch(error => {
                console.error(error)
            })
            .finally (() => {
                setLoading(false)
            })
    },[categoryId])

    if (loading) {
        return <h2>Loading products...</h2>
    }

    return (
        <div>
            <h3 className={styles.h3}>{greeting}</h3>
            <ItemList products={products}/>
        </div>
    )
}

export default ItemListContainer