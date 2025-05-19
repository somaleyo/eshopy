import { useState } from 'react'
import jojobg from '/src/assets/images/jojos-bizarre-adventure.jpg'
import './App.css'
import Stock from './components/Stock/stock'
import sbr1 from '/src/assets/images/sbr1.webp'
import sbr11 from '/src/assets/images/sbr11.webp'
import sbr13 from '/src/assets/images/sbr13.webp'
import jojologo from '/src/assets/images/jojo-logo.webp'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
  import {faBasketShopping, faHeart } from '@fortawesome/free-solid-svg-icons'
function App() {



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
        <FontAwesomeIcon className='shop' icon={faBasketShopping} />
        <p>0</p>

        <FontAwesomeIcon className='coeur' icon={faHeart} />
        <p>0</p>
        </div>
      </nav>
      <div className="header">
        <h1>JOJO NO KIMYOU NA BOUKEN</h1>
        <img className='bg-header' src={jojobg} alt="" />
      </div>
      <div className="card-container">
        <Stock image={sbr1} title="JoJo's Bizarre Adventure: SBR-1" prix='11,99$' stock="6" description="1890, en Amérique, la plus grande course du siècle, la Steel Ball Run est sur le point de commencer.
        Les participants doivent chevaucher de San Diego Beach à New York, 
        ce qui équivaut à un périple de 6 000 kilomètres, sans jamais changer de monture !
        À la clef pour le grand vainqueur : un prix de 50 millions de dollars !" font={faHeart}/>

        <Stock image={sbr11} title="JoJo's Bizarre Adventure: SBR-11"  prix='11,99$'stock="10"description="L'attaque du mystérieux manieur de stand invisible accule Jayro et ses compagnons. 
        Coincé dans un cul de sac, Johnny est désemparé. 
        'est alors que Jayro lui transmet une nouvelle technique de 'rotation'.
         La nature de leur ennemi se dévoile enfin..." font={faHeart}/>

        <Stock image={sbr13} title="JoJo's Bizarre Adventure: SBR-13"  prix='11,99$'stock="9" description="Lucie a décidé de s'emparer de la partie coeur du cadavre du président de l'État. 
        Elle se rapproche de la femme de ce dernier, Skarlet, et réussit à pénétrer dans la résidence gouvernementale. 
        Déguisée en première dame grâce à la faculté de Hot Pants, elle se trouve dangereusement proche du président.
         Arrivera-t-elle a obtenir son coeur ?" font={faHeart}/>

      </div>
      <footer>
        <div className='synopsis'>
           <h3>Synopsis</h3>
           <p>Angleterre 1868, Lord George Joestar, un noble anglais vient d'avoir un accident en calèche, les seuls survivants sont son fils et lui-même. Il revient à lui quelques temps après l'accident et remercie l'homme qui se trouvait près de lui, Dario Brando. Un homme peu scrupuleux aimant l'alcool et qui s'apprêtait à voler le Lord.
            12 ans plus tard, Dario meurt et envoie son fils Dio vivre chez les Joestar. Là-bas vit le fils du Lord, Jonathan Joestar, surnommé Jojo, rêvant de devenir un véritable gentleman. Jojo mène la belle vie et chaque jour est calme et paisible pour lui. Seulement l'arrivée de Dio va tout bouleverser. Dio veut prendre la place de Jojo et va tout faire pour l'anéantir moralement et devenir l'héritier de la fortune des Joestar. Leur destin à tous les deux n'en sera que plus lié avec un étrange masque aztèque aux capacités mystérieuses...</p>
        </div>
        <div className="genre">
          <h3>Genre</h3>
          <p>Action, Aventure, Comédie, Horreur, Épouvante</p>
        </div>
       
      </footer>
    </>
  )
}

export default App
