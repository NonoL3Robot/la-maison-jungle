import { React, useState } from 'react'
import '../styles/Cart.css'

export default function Cart() {
  const monsteraPrice = 8
  const [cart, updateCart] = useState(0)
  const [isOpen, setIsOpen] = useState(false)
  return isOpen
    ? (
    <div className='lmj-cart'>
      <button className='lmj-cart-toggle-button' onClick={() => setIsOpen(false)}>Fermer</button>
      <h2>Panier</h2>
      <div>Monstera : {monsteraPrice}€</div>
      <button onClick={() => updateCart(cart + 1)}>Ajouter</button>
      <h3>Total : {monsteraPrice * cart}€</h3>
    </div>
      )
    : (
    <div className='lmj-cart-closed'>
      <button className='lmj-cart-toggle-button' onClick={() => setIsOpen(true)}>Ouvrir le Panier</button>
    </div>
      )
}
