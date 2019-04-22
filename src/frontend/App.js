import React, { Component } from 'react'; 

class App extends Component{

    constructor(){
        super();
        this.state = {
            userName: '',
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
              this.setState({userName:'',userDescription:'',_id:''});
              this.fetchTask();
           });
       }else{
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
              this.setState({userName:'',userDescription:''});
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
              this.setState({
                  userName: data.userName,
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
                <nav className="navbar navbar-dark bg-dark">
                    <div className="container">
                        <a className="brand-logo" href="/">
                            Historias Clínicas
                        </a>
                    </div>
                </nav>
                <div className="container">
                    <div className="row">
                        <div className="col s5">
                          <div className="card">
                            <div className="card-body">
                              <form onSubmit={this.addTask}>
                                  <div className="row">
                                    <div className="input-field col s12">
                                      <input name="userName" onChange={this.handleChange} type="text" placeholder="User" value={this.state.userName}></input>
                                    </div>
                                  </div>
                                  <div className="row">
                                    <div className="input-field col s12">
                                      <textarea name="userDescription" onChange={this.handleChange} placeholder="User Description" value={this.state.userDescription} className="materialize-textarea"></textarea>
                                    </div>
                                  </div>
                                  <button type="submit" onChange={this.handleChange} className="btn btn-success">SEND</button>
                              </form>
                            </div>
                          </div>
                        </div>
                        <div className="col s7s">
                          <table><thead><tr>
                              <th>User</th>
                              <th>User Description</th>
                          </tr></thead>
                          <tbody>
                            {
                              this.state.tasks.map(task =>{
                                return(
                                  <tr key={task._id}>
                                      <td>{task.userName}</td>
                                      <td>{task.userDescription}</td>
                                      <td>
                                          <button type="button" className="btn btn-primary" onClick={()=>this.editTask(task._id)}>
                                              Edit
                                          </button>
                                          <button type="button" className="btn btn-danger" onClick={()=>this.deleteTask(task._id)}>
                                              Delete
                                          </button>
                                      </td>
                                  </tr>
                                )
                              }) 
                            }
                          </tbody>
                          </table>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default App;