import React from 'react';
import './Product.css';
import {useStateValue} from './StateProvider';

{/*Destructuring props*/}

function Product({id, title, image, price, rating}) {
   
  const [{ basket }, dispatch] = useStateValue();
    
  const addToBasket = () => {
   
    // (ADD Item to basket) Dispatch the item into the Data Layer
     dispatch({
       type: "ADD_TO_BASKET",
       item: {
         id: id, 
         title: title, 
         image: image,
         price: price,
         rating: rating
        }
     }); 
}
return (
      <div className="product">
          <div className="product_Info">
              <p>{title}</p>
                <p className="product_price">
                  <small>RS: </small>  <strong>{price}</strong>
                </p>
              
              <div className="product_rating">
                 { Array(rating).fill().map((_,i) =>{
                     return(<p>⭐</p>); 
                   }
                  )
                 }
              </div>
          </div>
          
         <img src={image} />
            
            <button onClick={addToBasket}>Add to Basket</button>
           
        </div>
    )
}

export default Product;
