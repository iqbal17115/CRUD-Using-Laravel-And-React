import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Axios from 'axios';

class Edit extends Component{
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
      componentDidMount(){
          const id=this.props.match.params.id;
          axios.get(`/api/contact/${id}/edit`).then(response=>{
              this.setState({
                  name : response.data.name,
                  tel : response.data.tel
              })
          }).catch(err=>console.log(err));
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
        const id=this.props.match.params.id;
        axios.put(`/api/contact/${id}/update`,{
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
                        <div className="card-header">Update Contact</div>

                        <div className="card-body">
                            
                        <form onSubmit={ this.handleFormSubmit }>
  <div className="form-group">
    <input type="text" required value={this.state.name} onChange={this.handleNameChange} className="form-control" placeholder="Enter name"/>
  </div>
  <div className="form-group">
    <input type="text" required value={this.state.tel} onChange={this.handleTelChange} className="form-control" placeholder="Phone"/>
  </div>
  
  <button type="submit" className="btn btn-danger">Update</button>
</form>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
  }
}

export default Edit;