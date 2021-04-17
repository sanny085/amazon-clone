import React from 'react'
import './Home.css';
import Product from './Product';


function Home() {
 return (
   <div className="home">
     <div className="home_container">
       <img className="home_image img-fluid d-block" src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Events/holi21/GW/rev1/Holi-GW-Hero-PC-2x._CB656865633_.jpg" alt="home-Image"/>
            
         <div className="home_row">
                 {/*Product*/}
                  {/*Product*/}
                 <Product id="1"
                        title="The Power of Your Subconscious Mind (DELUXE HARDBOUND EDITION) by Dr. Joseph Murphy,Rank.Dr. Joseph Murphy was a Divine Science minister."
                        image="https://m.media-amazon.com/images/I/91bde4XkXrL._AC_AA360_.jpg"
                        price={399}
                        rating={4}
                 />
                  <Product id="2"
                        title="Havells Nutri Art Slow Juicer Power: 200 W powerful motor ; Juicer Type: Cold Press/ Slow Juicer (1 Year Extended Warranty only for 649)"
                        image="https://m.media-amazon.com/images/I/61eMklvbR7L._AC_UY327_FMwebp_QL65_.jpg"
                        price={13205}
                        rating={5}
                 />
         </div>

         <div className="home_row">
                 {/*Product*/}
                   {/*Product*/}
                 {/*Product*/}
                 <Product id="3" 
                        title="All-new Echo Dot (4th Gen) | Next generation smart speaker with improved bass and Alexa (Blue)"
                        image="https://m.media-amazon.com/images/I/41dayzt6quL._AC_UY327_FMwebp_QL65_.jpg"
                        price={3499}
                        rating={4}
                 />
                  <Product id="4"
                        title="Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Space Grey Order fast to get a Pencil(Latest Model, 4th Generation)"
                        image="https://m.media-amazon.com/images/I/811aBwuSuIL._AC_UY327_FMwebp_QL65_.jpg"
                        price={89707}
                        rating={5}
                 />
                  <Product id="5"
                        title="Mi Smart Band 4–0.94-inch AMOLED Color Display, 20 Days Battery Life, 5ATM Water Resistant, Music Control"
                        image="https://m.media-amazon.com/images/I/71ZSpNjEl0L._AC_UY327_FMwebp_QL65_.jpg"
                        price={2099}
                        rating={4}
                 />
               
         </div>

         <div className="home_row">
                 {/*Product*/} 
                 <Product id="6"
                        title="Samsung LC34J791WTWXXL 34' Wide ScreenThunderbolt 3 Curved Monitor 3440 x 1440"
                        image="https://m.media-amazon.com/images/I/91-hWcNu2yL._AC_UY327_FMwebp_QL65_.jpg"
                        price={84990}
                        rating={5}
                 />
         </div>



     </div>
   </div>


    )
}

export default Home;
