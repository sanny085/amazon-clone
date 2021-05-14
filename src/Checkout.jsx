import React from 'react';
import './Checkout.css';
import Subtotal from './Subtotal';
import {useStateValue} from './StateProvider';
import CheckoutProduct from './CheckoutProduct';

function Checkout() {
  const [{ basket }, dispatch] = useStateValue();
    return (
    <div className="checkout"> 
       <div className="checkout_left">
         <img className="checkout_ad" src="https://www.icicibank.com/managed-assets/images/offer-zone/net-banking/FD-amazon-promo-d.jpg" alt="card"/>      
         
          <h2 className="checkout_title">Your Shopping Basket</h2>
        <div>
         {/*CheckOut Product Item*/}
          {basket.map(item => (
           <CheckoutProduct 
              id={item.id}
              image={item.image}
              title={item.title} 
              price={item.price}
              rating={item.rating}
           />
         ))} 

        </div> 
       </div> 
       <div className="checkout_right">
         {/*Sub Total Price Component*/}
         <Subtotal/>
       </div>
    </div>
        
    );
}
export default Checkout;
 
