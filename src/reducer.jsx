export const initialState = {
    basket :[],
};

// Selector for adding total price in subtotal component
export const getBasketTotal = (basket) => 
    //itterate through array
     basket?.reduce((amount, index) =>  index.price + amount, 0);

function reducer(state, action) {
    switch(action.type) 
     {
       case "ADD_TO_BASKET":
          //logic to adding item to basket
          return {
             ...state, basket: [...state.basket, action.item],
         };
       case "REMOVE_FROM_BASKET":
          const index = state.basket.findIndex(
              (basketItem) => basketItem.id === action.id
          );
          let newBasket = [...state.basket];
          
          if(index>=0){
              newBasket.splice(index, 1);
          }else{
              console.warn(`Cant't Remove Product (id: ${action.id}) as it is not in basket`);
          } 
          return {
              ...state, 
              basket:newBasket
          }
       default :
             return state;       
     }
};

export default reducer;