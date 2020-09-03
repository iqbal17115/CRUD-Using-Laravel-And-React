import React, { Component} from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import Axios from 'axios';

class Home extends Component{
   constructor(props){
     super(props);
     this.state={
         contacts : [],
     }
   }
   componentDidMount(){
       Axios.get('/api/contacts')
       .then(response=>{
           this.setState({
               contacts: response.data
           })
       }).catch(err=>console.log(err));
   }
   render(){
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header">All Contact(s)</div>
                         <Link to='/add' className="btn btn-success col-md-2 ml-3 my-2">Add</Link>
                        <div className="card-body">
                        <table className="table table-dark table-striped">
                        <thead className="bg-secondary">
                         <tr>
                           <th scope="col">Name</th>
                           <th scope="col">Phone</th>
                           <th scope="col">Action</th>
                         </tr>
                        </thead>
                        <tbody>
                            
                            {
                                this.state.contacts !== null
                                ?
                                this.state.contacts.map(contact=>(
                                    <tr key={contact.id}>
                                    <td>{ contact.name }</td>
                                    <td>{ contact.tel }</td>
                                    <td>
                                        <Link to={`/${contact.id}/edit`} className="btn btn-info">Update</Link>
                                    </td>
                                  </tr>
                             ))
                             : null
                            }
                              </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
   }
}

export default Home;
