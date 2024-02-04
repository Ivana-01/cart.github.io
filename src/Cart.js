import React from 'react';
import './Cart.css'

function Cart({ visibility, item, onItemRemove, onClose, onQuantity}) {

  return (
    <div className='cartBox' style={{display: visibility ? 'block' : 'none'}}>
      <div className='header'>
        <h1 className='cartTitle'>Cart</h1>
        <button className='closeBtn' onClick={onClose}>X</button>
      </div>
      <div className='itemList'>
        {item.length === 0 && <p className='empty'>Cart is empty!</p>}
        {item.map(item => (
            <div className='cartItem' key={item.id}>
                <img className='cartItemImg' src={item.img} alt={item.name}/>
                <h3 className='cartItemName'>{item.name}</h3>
                <h4>{item.price}$</h4>
                <input className='quantity' type='number' id='quantity' name='quantity' value={item.count}
                onChange={(e) => onQuantity(item.id, e.target.value)}/>
                <button className='removeBtn' onClick={() => onItemRemove(item.id)}>Remove</button>
                <h4>Total: {item.price * item.count}$</h4>
            </div>
        ))}
      </div>
    </div>
  )
}

export default Cart