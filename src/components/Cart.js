import React from "react"
import '../styles/Cart.css'
    
const carnivorePrice = 8
const gradientPrice = 10
const metallicPrice = 15

const Cart = () =>
    <div className="cm-cart">
        <h2>PANIER</h2>
        <ul>
            <li>Modèle Plante Carnivore : {carnivorePrice} €</li>
            <li>Modèle Gradient : {gradientPrice} €</li>
            <li>Modèle Métallique : {metallicPrice} €</li>
        </ul>
        <p>Total du panier : {carnivorePrice + gradientPrice + metallicPrice} €</p>
    </div>

export default Cart