import React, { Component } from 'react';
import Login from './components/login/index.js';
import AppNavbar from './components/navbar/index.js';
import Form from './components/form/index.js';

class App extends Component{

    constructor(){
        super();
        this.state = {
            userName: '',
            userDocument: '',
            userBirthday: '',
            userRol: '',
            userTelphone: '',
            userAdress: '',
            userCountry: '',
            userEmail: '',
            userDescription: '',
            tasks: [],
            _id: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.addTask = this.addTask.bind(this);
    }

    addTask(e){

       if(this.state._id){
          fetch('/users/'+this.state._id, {
              method: 'PUT',
              body: JSON.stringify(this.state),
              headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
          })
          .then(res => res.json())
          .then(data => {
              console.log(data);
              M.toast({html:'User Updated'});
              this.setState({userName: '',
              userDocument: '',
              userBirthday: '',
              userRol: '',
              userTelphone: '',
              userAdress: '',
              userCountry: '',
              userEmail: '',
              userDescription: ''});
              this.fetchTask();
           });
       }else{
         console.log(this.state);
        fetch('/users', {
            method: 'POST',
            body: JSON.stringify(this.state),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
          .then(data => {
              M.toast({html:'User Saved'});
              this.setState({userName: '',
              userDocument: '',
              userBirthday: '',
              userRol: '',
              userTelphone: '',
              userAdress: '',
              userCountry: '',
              userEmail: '',
              userDescription: ''});
              this.fetchTask();
          })
          .catch(err => console.error(err));
       }
       e.preventDefault();
    }

    componentDidMount(){
        this.fetchTask();
    }

    fetchTask(){
        fetch('/users')
        .then(res => res.json())
        .then(data => {
            this.setState({tasks: data});
            console.log(this.state.tasks);
        });
    }

    deleteTask(id){
        if (confirm('Are you sure?')){
            fetch('/users/'+id, {
                method: 'DELETE',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
            .then(res => res.json())
            .then(data =>{
                console.log(data);
                M.toast({html: 'User deleted'});
                this.fetchTask();
            })
        }

    }
    editTask(id){
        fetch('/users/'+id)
            .then(res=>res.json())
            .then(data=>{
              console.log(data)
              this.setState({userName: data.userName,
              userDocument: data.userDocument,
              userBirthday: data.userBirthday,
              userRol: data.userRol,
              userTelphone: data.userTelphone,
              userAdress: data.userAdress,
              userCountry: data.userCountry,
              userEmail: data.userEmail,
              userDescription: data.userDescription,
                  _id: data._id
              });
            });
    }

    handleChange(e){
        const { name, value } = e.target;
        this.setState({
            [name]: value
        });
    }

    render(){
        return (
            <div>
              <div className="">
                <AppNavbar/>
              </div>
              
              <div className="container Bcolor2">
                <Login/>
              </div>

              <div>
                <Form/>
              </div>                      
            </div>            
        )
    }
}
export default App;
