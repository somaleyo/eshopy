import { useState } from 'react'
import './App.css'
import Stock from './components/Stock/stock'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBasketShopping, faHeart, faTrash, faMinus, faPlus } from '@fortawesome/free-solid-svg-icons'
import Panier from './components/Panier/panier'

import jojobg from '/src/assets/images/jojos-bizarre-adventure.jpg'
import sbr1 from '/src/assets/images/sbr1.webp'
import sbr11 from '/src/assets/images/sbr11.webp'
import sbr13 from '/src/assets/images/sbr13.webp'
import jojologo from '/src/assets/images/jojo-logo.webp'

function App() {
  // État initial des articles avec stock
  const [articles, setArticles] = useState([
    {
      id: 1,
      image: sbr1,
      title: "JoJo's Bizarre Adventure: SBR-1",
      prix: '11,99$',
      prixNum: 11.99,
      stock: 6,
      description: "1890, en Amérique, la plus grande course du siècle, la Steel Ball Run est sur le point de commencer. Les participants doivent chevaucher de San Diego Beach à New York, ce qui équivaut à un périple de 6 000 kilomètres, sans jamais changer de monture ! À la clef pour le grand vainqueur : un prix de 50 millions de dollars !"
    },
    {
      id: 2,
      image: sbr11,
      title: "JoJo's Bizarre Adventure: SBR-11",
      prix: '11,99$',
      prixNum: 11.99,
      stock: 5,
      description: "L'attaque du mystérieux manieur de stand invisible accule Jayro et ses compagnons. Coincé dans un cul de sac, Johnny est désemparé. C'est alors que Jayro lui transmet une nouvelle technique de 'rotation'. La nature de leur ennemi se dévoile enfin..."
    },
    {
      id: 3,
      image: sbr13,
      title: "JoJo's Bizarre Adventure: SBR-13",
      prix: '11,99$',
      prixNum: 11.99,
      stock: 3,
      description: "Lucie a décidé de s'emparer de la partie coeur du cadavre du président de l'État. Elle se rapproche de la femme de ce dernier, Skarlet, et réussit à pénétrer dans la résidence gouvernementale. Déguisée en première dame grâce à la faculté de Hot Pants, elle se trouve dangereusement proche du président. Arrivera-t-elle a obtenir son coeur ?"
    }
  ])

  // État du panier
  const [panier, setPanier] = useState([])
  
  // État de l'argent
  const [argent, setArgent] = useState(100)

  // État des favoris
  const [favoris, setFavoris] = useState([])

  
const ajouterAuPanier = (articleId) => {
  const article = articles.find(a => a.id === articleId)
  if (article && article.stock > 0 && argent >= article.prixNum) {
    // Déduire l'argent
    setArgent(prev => prev - article.prixNum)

    // Diminuer le stock
    setArticles(prevArticles => 
      prevArticles.map(a => 
        a.id === articleId ? { ...a, stock: a.stock - 1 } : a
      )
    )

    // Ajouter au panier
    setPanier(prevPanier => {
      const articleExistant = prevPanier.find(item => item.id === articleId)
      if (articleExistant) {
        return prevPanier.map(item =>
          item.id === articleId ? { ...item, quantite: item.quantite + 1 } : item
        )
      } else {
        return [...prevPanier, { 
          id: article.id,
          title: article.title,
          prix: article.prix,
          prixNum: article.prixNum,
          image: article.image,
          quantite: 1 
        }]
      }
    })
  }
}
  // Fonction pour retirer un article du panier
  
  const retirerDuPanier = (articleId) => {
  const articlePanier = panier.find(item => item.id === articleId)
  if (articlePanier && articlePanier.quantite > 0) {
    // Rembourser le prix de l'article
    setArgent(prev => prev + articlePanier.prixNum)

    // Remettre en stock
    setArticles(prevArticles => 
      prevArticles.map(a => 
        a.id === articleId ? { ...a, stock: a.stock + 1 } : a
      )
    )

    // Retirer du panier
    setPanier(prevPanier => {
      const nouvelleQuantite = articlePanier.quantite - 1
      if (nouvelleQuantite === 0) {
        return prevPanier.filter(item => item.id !== articleId)
      } else {
        return prevPanier.map(item =>
          item.id === articleId ? { ...item, quantite: nouvelleQuantite } : item
        )
      }
    })
  }
}

  // Fonction pour supprimer complètement un article du panier
  const supprimerDuPanier = (articleId) => {
    const articlePanier = panier.find(item => item.id === articleId)
    if (articlePanier) {
      // Remettre tout le stock
      setArticles(prevArticles => 
        prevArticles.map(a => 
          a.id === articleId ? { ...a, stock: a.stock + articlePanier.quantite } : a
        )
      )
      
      // Supprimer du panier
      setPanier(prevPanier => prevPanier.filter(item => item.id !== articleId))
    }
  }

  // Fonction pour gérer les favoris
  const toggleFavori = (articleId) => {
    setFavoris(prevFavoris => {
      if (prevFavoris.includes(articleId)) {
        return prevFavoris.filter(id => id !== articleId)
      } else {
        return [...prevFavoris, articleId]
      }
    })
  }

  // Calcul du total des articles dans le panier
  const totalArticlesPanier = panier.reduce((total, item) => total + item.quantite, 0)

  return (
    <>
      <nav>
        <div className="nav-icon">
          <img src={jojologo} className="nav-logo" alt="" />
        </div>
        <div className="nav-main">
          <p><a href="">FAQ</a></p>
          <p><a href="">Follow</a></p>
          <p><a href="">Scan</a></p>
        </div>
        <div className="kart">
          <p><FontAwesomeIcon className='shop' icon={faBasketShopping} /></p>
          <p>{totalArticlesPanier}</p>
          <p><FontAwesomeIcon className='coeur' icon={faHeart} /></p>
          <p>{favoris.length}</p>
        </div>
      </nav>
      
      <div className="header">
        <h1>JOJO NO KIMYOU NA BOUKEN</h1>
        <img className='bg-header' src={jojobg} alt="" />
      </div>
      
      <div className="card-container">
        {articles.map(article => (
          <Stock 
            key={article.id}
            id={article.id}
            image={article.image}
            title={article.title}
            prix={article.prix}
            stock={article.stock}
            argent={argent}
            prixNum={article.prixNum}
            description={article.description}
            onAddToCart={() => ajouterAuPanier(article.id)}
            onToggleFavoris={() => toggleFavori(article.id)}
            isFavoris={favoris.includes(article.id)}
          />
        ))}
      </div>
      
      <Panier 
        argent={argent}
        articles={panier}
        onRetirer={retirerDuPanier}
        onSupprimer={supprimerDuPanier}
        onAjouter={ajouterAuPanier}
      />
      
      <footer>
        <div className='synopsis'>
          <h3>Synopsis</h3>
          <hr />
          <p>Angleterre 1868, Lord George Joestar, un noble anglais vient d'avoir un accident en calèche, les seuls survivants sont son fils et lui-même. Il revient à lui quelques temps après l'accident et remercie l'homme qui se trouvait près de lui, Dario Brando. Un homme peu scrupuleux aimant l'alcool et qui s'apprêtait à voler le Lord.
            12 ans plus tard, Dario meurt et envoie son fils Dio vivre chez les Joestar. Là-bas vit le fils du Lord, Jonathan Joestar, surnommé Jojo, rêvant de devenir un véritable gentleman. Jojo mène la belle vie et chaque jour est calme et paisible pour lui. Seulement l'arrivée de Dio va tout bouleverser. Dio veut prendre la place de Jojo et va tout faire pour l'anéantir moralement et devenir l'héritier de la fortune des Joestar. Leur destin à tous les deux n'en sera que plus lié avec un étrange masque aztèque aux capacités mystérieuses...</p>
        </div>
        <div className="genre">
          <h3>Genre</h3>
          <hr />
          <p>Action, Aventure, Comédie, Horreur, Épouvante</p>
        </div>
      </footer>
    </>
  )
}

export default App

