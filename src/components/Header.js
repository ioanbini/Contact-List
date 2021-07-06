import React from 'react';
import 'semantic-ui-react'




const Header = () => {

    return (
        
        <>
        
         <div className="ui top fixed menu "> 
         { /* na to alla3w an dw oti kryvei ta apo  */ }
         <div className=" menu item ui container center  "  >
         <h1   style={{color:'#2184CF' }}>Contact Manager</h1>
         </div>
       </div>
       
       <div className="ui bottom fixed menu " style={{background:'#FFFFFF'}}> 
         { /* na to alla3w an dw oti kryvei ta apo  */ }
         <div className=" menu item ui container center  "  >
         <h4   style={{color:'#2184CF' }}>Made in Agioi Theodoroi with <i style={{color:'red' }} class="heart  icon" size="large"></i></h4>
         

         </div>
       </div>


</>

       

    );


};

export default Header;