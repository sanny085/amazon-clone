import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import amazonlog from './assets/amazon-log.png';
import {Link} from "react-router-dom";
import { useStateValue } from './StateProvider';

function Header() {
   const [{ basket }, dispatch] = useStateValue();
    console.log("This is : ",basket.price);
  
 return(
   <div className="header">
     {/*Brand Icon*/}
     <Link to="/">
        <img className="header_logo" alt="Brand_Logo" src={amazonlog}/>
     </Link>
     
     <div className="header_search">
         <input type="text" className="header_searchInput"/>
         <SearchIcon className="header_searchIcon"  />
     </div>     

     <div className="header_nav ">
          <div className="header_option">
              <span className="header_optionLineOne">Hello Guest</span>
              <span className="header_optionLineTwo">Sign In</span>
          </div>
          <div className="header_option">
              <span className="header_optionLineOne">Returns</span>
              <span className="header_optionLineTwo">Orders</span>
          </div>
          <div className="header_option">
              <span className="header_optionLineOne">Yours</span>
              <span className="header_optionLineTwo">Prime</span>
          </div>
          
      <Link to="/checkout">
         <div className="header_optionBasket">
            <ShoppingBasketIcon/>
            <span className="header_optionLineTwo header_basketCount">{basket?.length}</span>
         </div>
      </Link>

      </div> 
   </div>
 )
}
export default Header;
