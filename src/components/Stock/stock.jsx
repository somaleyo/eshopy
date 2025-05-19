import './stock.css'

export default function Stock(props) {
    return(
        <>
            <div className="card">
                <img src={props.image} className='img-card' alt="" />
                <div className="card-body">
                    <h3>{props.title}</h3>
                    <h4>{props.prix}</h4>
                    <h5>{props.stock}</h5>
                    <p>{props.description}</p>
                    <button className="btn btn-card">
                        Add to Card
                    </button>
                </div>
            </div>
        </>
    )
}   