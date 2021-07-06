import React from 'react';
import { Link } from 'react-router-dom';
import { List, Image } from 'semantic-ui-react'
import user from '../images/user.png'




const ContactCard = (props) => {

    const { id, name, email, telephoneNumber, address } = props.contact;

    return (
        <div >
            <Link to={{ pathname: `/contact/${id}`, state: { contact: props.contact } }}>

                <List celled divided verticalAlign='middle'>


                    <List.Item style={{ border: '1px solid #D0D3D4', borderRadius: '10px', padding: '10px', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)' }}>

                        <Image avatar src={user} />
                        <List.Content >


                            <div className="header" style={{ color: '#2184CF', marginBottom: '2px', }}>
                                <div>
                                    {name}
                                </div>
                            </div>


                            <div style={{ color: '#34495E' }} ><i style={{ color: '#CACFD2' }} class="envelope icon"></i>
                                {email}</div>
                            <div style={{ color: '#34495E' }}><i style={{ color: '#CACFD2' }} class="phone icon"></i>{' '}{telephoneNumber}</div>
                            <div style={{ color: '#34495E' }}><i style={{ color: '#CACFD2' }} class="home icon"></i>
                                {address}</div>
                        </List.Content>
                        <List.Content floated="right">
                            <Link to="/"><i className="trash alternate icon red " size="large" style={{ paddingTop: '35px' }} onClick={() => props.clickHander(id)} ></i></Link>
                        </List.Content>
                        <List.Content floated="right">
                            <Link to={{ pathname: `/edit`, state: { contact: props.contact } }}><i className="edit alternate icon blue " size="large" style={{ paddingTop: '35px' }} ></i></Link>
                        </List.Content>


                    </List.Item>



                </List>
            </Link>



        </div>





    )




}
export default ContactCard;