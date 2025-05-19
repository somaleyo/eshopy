import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart as faHeartSolid } from '@fortawesome/free-solid-svg-icons'
import { faHeart as faHeartRegular } from '@fortawesome/free-regular-svg-icons'
import './stock.css'

export default function Stock(props) {
    const isOutOfStock = props.stock === 0
    const LastStock = props.stock ===1
    
    return (
        <>
            <div className="card">
                <img src={props.image} className='img-card' alt="" />
                <div className="card-body">
                    <h3>{props.title}</h3>
                    <h4>{props.prix}</h4>
                    <p className='card-text'>{props.description}</p>
                    <div className="bottom-card">
                        <h5 className={isOutOfStock ?  'stock-zero':LastStock? 'last-stock' :''}>
                            Il reste {props.stock} Pièces
                        </h5>                    
                        <button 
                            className={`btn btn-card ${isOutOfStock ? 'btn-disabled' : ''}`}
                            onClick={props.onAddToCart}
                            disabled={isOutOfStock}
                        >
                            {isOutOfStock ? 'Rupture de stock' : 'Add to Cart'}
                        </button>
                        <p onClick={props.onToggleFavoris}>
                            <FontAwesomeIcon 
                                icon={props.isFavoris ? faHeartSolid : faHeartRegular}
                                className={props.isFavoris ? 'favoris-active' : 'favoris-inactive'}
                            />
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}