import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Axios from 'axios';

class Add extends Component{
    constructor(props){
        super(props);
        this.state={
          name: '',
          tel: ''
        }
        this.handleNameChange=this.handleNameChange.bind(this);
        this.handleTelChange=this.handleTelChange.bind(this);
        this.handleFormSubmit=this.handleFormSubmit.bind(this);
      }

      handleNameChange(event){
        this.setState({
          name: event.target.value 
        });
      }

      handleTelChange(event){
        this.setState({
          tel: event.target.value 
        });
      }
      
      handleFormSubmit(event){
        event.preventDefault();
        axios.post('/api/contact/create',{
           name: this.state.name,
           tel: this.state.tel
        }).then(response=>{
          this.setState({
            name: '',
            tel: ''
          })
          this.props.history.push('/');
        }).catch(err=>console.log(err));
      }

  render(){
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header">Add Contact</div>

                        <div className="card-body">
                            
                        <form onSubmit={ this.handleFormSubmit }>
  <div className="form-group">
    <input type="text" required value={this.state.name} onChange={this.handleNameChange} className="form-control" placeholder="Enter name"/>
  </div>
  <div className="form-group">
    <input type="text" required value={this.state.tel} onChange={this.handleTelChange} className="form-control" placeholder="Phone"/>
  </div>
  
  <button type="submit" className="btn btn-primary">Submit</button>
</form>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
  }
}

export default Add;