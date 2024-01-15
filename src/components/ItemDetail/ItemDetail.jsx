import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'

const ItemDetail = ( {id, name, img, category, description, stock, price})=> {

    return (
        <article className='CardItemDetail'>
            <header className='Header'>
                <h3 className='ItemHeader'>{name}</h3>
            </header>
            <picture>
                <img src={img} alt={name} className='ItemImgDetail'/>
            </picture>
            <div>
                <p className='InfoDetail'><strong>Category: </strong>{category}</p>
                <p className='InfoDetail'><strong>Description:</strong> {description}</p>
                <p className='InfoDetail'><strong>Price:</strong> ${price}</p>
            </div>
            <footer className='ItemFooter'>
                <ItemCount initial={1} stock={stock} onAdd={(quantity) => console.log('Added quantity: '+ quantity + ' items')} />
            </footer>
        </article>
    )
}

export default ItemDetail 