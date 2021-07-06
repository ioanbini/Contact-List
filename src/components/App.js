import React ,{useState,useEffect} from 'react';
import {uuid} from 'uuidv4'
import 'semantic-ui-css/semantic.min.css';
import 'semantic-ui-react'
import api from "../api/contacts.js"
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Header';
import AddContact from "./AddContact";
import ContactList from './ContactList';
import ContactDetail from './ContactDetail';
import EditContact from './EditContact';



function App() {
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts,setContacts]= useState([])

  /*Fetch contacts from fake rest api */
  const retrieveContacts= async () => {
    const response = await api.get("/contacts")
    return response.data;

  }

  const addContactHandler = async (contact) =>{
    console.log(contact)
    const request = {
      id: uuid(),
      ...contact,
    }

    

    const response = await api.post("/contacts", request);
    /* add the contact into the contact state(update the state), by using setcontacts */
    setContacts([...contacts, response.data]);
  }

  const updateContactHandler = async (contact) => {
    const response = await api.put(`/contacts/${contact.id}`, contact);
    const { id, name, email,telephoneNumber,address } = response.data;
    setContacts(
      contacts.map((contact) => {
        return contact.id === id ? { ...response.data } : contact;
      })
    );
  };

  const removeContactHandler = async (id) => {
    await api.delete(`/contacts/${id}`);
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    });

    setContacts(newContactList);
    alert("Contact Deleted Succesfully!");
  }

 /*Fetch contacts from fake rest api */
  useEffect (() =>{
      
    const getAllcontacts =async() => {
      const allContacts = await retrieveContacts();
      if(allContacts) setContacts(allContacts);
    }

    getAllcontacts();
  },[])

  useEffect (() =>{
     

   },[contacts])
  /*add as a dependency the contacts */

  

  
  return (
    <div className="ui container center">
      <Router>
      <Header/>
      <Switch>
      <Route path="/" exact render={(props)=>(<ContactList {...props}contacts={contacts} getContactId= {removeContactHandler}/>)} />
      <Route path="/add" render={(props)=>(<AddContact {...props}addContactHandler={addContactHandler}/>)}/>
      <Route path="/edit" render={(props)=>(<EditContact {...props}updateContactHandler={updateContactHandler}/>)}/>
      <Route path="/contact/:id" component={ContactDetail}/>

      </Switch>
      
      
      </Router>
      
      </div>
  
  );
}

export default App;
