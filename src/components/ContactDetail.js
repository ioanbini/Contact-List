import React from 'react';
import user from '../images/user.png'
import { Card, Image } from 'semantic-ui-react'
import { Link } from 'react-router-dom';




const ContactDetail = (props)=>{
    const { name, email, telephoneNumber, address} = props.location.state.contact; 
    /*Get the information from ContactCard component */



    return (
      <div class="ui two column centered grid"style={{ paddingTop: '35px', marginTop: '80px'  }} >
        <div className="ui card" >
           <Card style={{fontSize:"20px",boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'}}   
 >
    <Image src={user} wrapped ui={true} />
    <Card.Content>
      <Card.Header style={{ color: '#2184CF'}}>{name}</Card.Header>
      <Card.Meta><i style={{ color: '#34495E'}} class="envelope icon"></i>{email}</Card.Meta>
      <Card.Description><i style={{ color: '#34495E'}} class="phone icon"></i>{telephoneNumber}
      </Card.Description>
    </Card.Content>
    <Card.Content extra><i style={{ color: '#34495E'}} class="home icon"></i>
    {address}
    </Card.Content>
  </Card>

        </div >
        <div class="column centered row" >
        <Link to="/"><button  class="circular ui icon button ui center  " >CONTACT LIST <i class="arrow left icon"></i></button></Link>
        </div>
</div>

    );
}


export default ContactDetail;