import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faMinus, faPlus } from '@fortawesome/free-solid-svg-icons'
import './panier.css'

export default function Panier(props) {
    // Calcul du total du panier
    const totalPanier = props.articles.reduce((total, article) => {
        return total + (article.prixNum * article.quantite)
    }, 0)

    return (
        <>
            <div className="panier">
                <h2>Panier</h2>
                <hr />
                <h3>Mon Argent : {props.argent.toFixed(2)}€</h3>
                <div className="panier-content">
                    {props.articles.length === 0 ? (
                        <p className="panier-vide">Votre panier est vide</p>
                    ) : (
                        props.articles.map(article => (
                            <div key={article.id} className="articles">
                                <img src={article.image} className="article-img" alt="" />
                                <div className='article-text'>
                                    <h3>{article.title}</h3>
                                    <h4>{article.prix}</h4>
                                    <div className="article-controls">
                                        <div className="quantity-controls">
                                            <button 
                                                className="btn-quantity"
                                                onClick={() => props.onRetirer(article.id)}
                                            >
                                                <FontAwesomeIcon icon={faMinus} />
                                            </button>
                                            <span className="quantity">Quantité: {article.quantite}</span>
                                            <button 
                                                className="btn-quantity"
                                                onClick={() => props.onAjouter(article.id)}
                                            >
                                                <FontAwesomeIcon icon={faPlus} />
                                            </button>
                                        </div>
                                        <button 
                                            className="btn-supprimer"
                                            onClick={() => props.onSupprimer(article.id)}
                                            title="Supprimer l'article"
                                        >
                                            <FontAwesomeIcon icon={faTrash} />
                                        </button>
                                    </div>
                                </div>
                                <div className="article-total">
                                    <h6>Total: {(article.prixNum * article.quantite).toFixed(2)}€</h6>
                                </div>
                            </div>
                        ))
                    )}
                </div>
                {props.articles.length > 0 && (
                    <div className="panier-total">
                        <hr />
                        <h3>Total du panier: {totalPanier.toFixed(2)}€</h3>
                        <button className="btn-commander">Commander</button>
                    </div>
                )}
            </div>
        </>
    )
}