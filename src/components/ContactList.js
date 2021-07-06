import React from 'react';
import {List } from 'semantic-ui-react'
import { Link } from 'react-router-dom';
import ContactCard from './ContactCard';




const ContactList = (props) => {
    console.log(props)
   

    const deleteConactHandler= (id) =>{
        props.getContactId(id);


    } ;
    const renderContactList = props.contacts.map((contact) => {


        return (
            
            <ContactCard contact={contact} clickHander={deleteConactHandler} key={contact} />
            /* */




        );

    })
    return (
        <div className="main">
            <div class="ui row">
            <h2 style={{ color: '#2E4053',marginTop: '80px', }} >
                Contacts List
                <Link to="/add"><button class="circular ui icon button right floated  aligned" >ADD CONTACT <i class="user plus icon"></i></button></Link>
                
            </h2>
            </div>
           
        <List celled divided verticalAlign='middle'>

            <h3 >{renderContactList}</h3>
            </List>
            </div>

    );



}
export default ContactList;