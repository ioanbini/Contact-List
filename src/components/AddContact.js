import React from 'react';
import 'semantic-ui-react';
import { Link } from 'react-router-dom';





class AddContact extends React.Component {
    state = {

        name: "",
        email: "",
        telephoneNumber: "",
        address: ""



    }


    add = (e) => {
        e.preventDefault();
        if (this.state.name === "" || this.state.telephoneNumber === "" || this.state.email === "" || this.state.address === "") {
            alert("All the fields are required!");
            return;
        }
        alert("Form submitted Succesfully");
        this.props.addContactHandler(this.state);
        this.setState({ name: "", email: "", telephoneNumber: "", address: "" })
        this.props.history.push("/"); /* programmaticaly navigation from one component to another */


    }

    render() {

        return (

            <div className="ui container center" style={{ color: '#2E4053', marginTop: '80px', }} >
                <div class="ui row" style={{ marginBottom: '20px', }}>


                    <h2 style={{ color: '#2E4053' }}>Add Contact
                        <Link to="/"><button class="circular ui icon button right floated  aligned " > CONTACTS LIST <i class="user list icon"></i></button></Link>
                    </h2>




                </div>





                <form style={{ border: '1px solid #D0D3D4', borderRadius: '10px', padding: '10px', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)' }} className="ui form" onSubmit={this.add}>

                    <div className="field">
                        <label style={{ color: '#7B7D7D' }} for="Name">Name</label>
                        <input style={{ borderRadius: '100px' }} id="Name" type="text" name="name" value={this.state.name} placeholder="Name" onChange={(e) => this.setState({ name: e.target.value })} />

                    </div>


                    <div className="field">
                        <label style={{ color: '#7B7D7D' }} for="Email">Email</label>
                        <input style={{ borderRadius: '100px' }} id="Email" type="email" name="email" value={this.state.email} placeholder="Email" onChange={(e) => this.setState({ email: e.target.value })} />

                    </div>
                    <div className="field">
                        <label style={{ color: '#7B7D7D' }} for="Telephone Number">Telephone Number</label>
                        <input style={{ borderRadius: '100px' }} id="Telephone Number" type="tel" name="telephoneNumber" value={this.state.telephoneNumber} placeholder="Telephone Number" onChange={(e) => this.setState({ telephoneNumber: e.target.value })} />

                    </div>

                    <div className="field">
                        <label style={{ color: '#7B7D7D' }} for="Address">Address</label>
                        <input style={{ borderRadius: '100px' }} id="Address" type="text" name="address" value={this.state.address} placeholder="Address" onChange={(e) => this.setState({ address: e.target.value })} />

                    </div>
                    <button class="circular ui icon button">ADD CONTACT <i class="user plus icon"></i>
                    </button>






                </form>
            </div>







        );



    }

}
export default AddContact;
