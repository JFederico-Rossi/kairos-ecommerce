import './ItemDetailContainer.css'
import { useState, useEffect } from 'react'
import { getProductsById} from '../../asyncMock'
import ItemDetail from '../ItemDetail/ItemDetail' 

import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {
    const [loading, setLoading] = useState (true)
    const [product, setProduct] = useState (null)

    const { itemId } = useParams()

    useEffect(() => {
        if (product) document.title = product.name 
        return () => {
            document.title = 'Kairos Yoga Studio | Shopping Cart'
        }
    }, [product])

    useEffect (()=> { 
        getProductsById (itemId)
        .then(response => {
            setProduct(response)
        })
        .catch(error => {
            console.error(error)
        })
        .finally (() => {
            setLoading(false)
        })
    }, [itemId])

    if (loading) {
        return <h2>Loading details...</h2>
    }

    return (
        <div className='ItemDetailContainer'>
            <ItemDetail {...product} />
            
        </div>
    )
}

export default ItemDetailContainer 