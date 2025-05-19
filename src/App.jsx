import { useState } from 'react'
import jojobg from '/src/assets/images/jojos-bizarre-adventure.jpg'
import './App.css'
import Stock from './components/Stock/stock'
import sbr1 from '/src/assets/images/sbr1.webp'
import sbr11 from '/src/assets/images/sbr11.webp'
import sbr13 from '/src/assets/images/sbr13.webp'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
function App() {


  return (
    <>

 
      <div className="header">
        <h1>JOJO NO KIMYOU NA BOUKEN</h1>
        <img className='bg-header' src={jojobg} alt="" />
      </div>
      <div className="card-container">
        <Stock image={sbr1} title="JoJo's Bizarre Adventure: SBR-1" prix='11,99$' stock="6" description="1890, en Amérique, la plus grande course du siècle, la Steel Ball Run est sur le point de commencer.
        Les participants doivent chevaucher de San Diego Beach à New York, 
        ce qui équivaut à un périple de 6 000 kilomètres, sans jamais changer de monture !
        À la clef pour le grand vainqueur : un prix de 50 millions de dollars !
         Bien des aventuriers sont prêts à tout pour une telle somme !"/>

        <Stock image={sbr11} title="JoJo's Bizarre Adventure: SBR-11"  prix='11,99$'stock="10"description="L'attaque du mystérieux manieur de stand invisible accule Jayro et ses compagnons. 
        Coincé dans un cul de sac, Johnny est désemparé. 
        'est alors que Jayro lui transmet une nouvelle technique de 'rotation'.
         La nature de leur ennemi se dévoile enfin..."/>

        <Stock image={sbr13} title="JoJo's Bizarre Adventure: SBR-13"  prix='11,99$'stock="9" description="Lucie a décidé de s'emparer de la partie coeur du cadavre du président de l'État. 
        Elle se rapproche de la femme de ce dernier, Skarlet, et réussit à pénétrer dans la résidence gouvernementale. 
        Déguisée en première dame grâce à la faculté de Hot Pants, elle se trouve dangereusement proche du président.
         Arrivera-t-elle a obtenir son coeur ?"/>
         
      </div>
    </>
  )
}

export default App
