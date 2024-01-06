import React from 'react';

export default function Basket({ basket, cost }) {
  return (
    <div>
      <div className='mainBasket'>
        <div className='showBasket'>
          <h2>Basket</h2>
          {basket.length === 0 ? <p>No Product Added</p> : null}
          {basket.map(item => (
            <div className='basketList' key={item.id}>
              <img width="100" src={item.img} alt={item.name} />
              <p>{item.name} x {item.amount}</p>
              <p>$ {item.price * item.amount}</p>
            </div>
          ))}
          {cost && <p>Total: $ {cost}</p>}
        </div>
      </div>
    </div>
  );
}
