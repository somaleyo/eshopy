import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './stock.css'

export default function Stock(props) {
    return(
        <>
            <div className="card">
                <img src={props.image} className='img-card' alt="" />
                <div className="card-body">
                    <h3>{props.title}</h3>
                    <h4>{props.prix}</h4>
                    <p className='card-text'>{props.description}</p>
                    <div className="bottom-card">
                        <h5>Il reste {props.stock} Pièces</h5>                    
                        <button className="btn btn-card">Add to Card</button>
                        <FontAwesomeIcon icon={props.font}/>
                    </div>
                   
                </div>
            </div>
        </>
    )
}   