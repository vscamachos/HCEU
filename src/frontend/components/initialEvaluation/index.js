import React, { Component } from 'react';

class InitialEvaluation extends Component{
  constructor(){
    super();
    this.state = {
      id_Paciente: '',
      alergia_Medicamento: '',
      tasks: [],
      _id: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.addTask = this.addTask.bind(this);
  }

  addTask(e){

     if(this.state._id){
        fetch('/initial_evaluations/'+this.state._id, {
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
            M.toast({html:'initial evaluation Updated'});
            this.setState({id_Paciente: '',
            alergia_Medicamento: ''
          });
            this.fetchTask();
         });
     }else{
       console.log(this.state);
      fetch('/initial_evaluations', {
          method: 'POST',
          body: JSON.stringify(this.state),
          headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
          }
      }).then(res => res.json())
        .then(data => {
            M.toast({html:'initial_evaluation Saved'});
            this.setState({id_Paciente: '',
            alergia_Medicamento: ''
          });
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
      fetch('/initial_evaluations')
      .then(res => res.json())
      .then(data => {
          this.setState({tasks: data});
          console.log(this.state.tasks);
      });
  }

  deleteTask(id){
      if (confirm('Are you sure?')){
          fetch('/initial_evaluations/'+id, {
              method: 'DELETE',
              headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json'
              }
          })
          .then(res => res.json())
          .then(data =>{
              console.log(data);
              M.toast({html: 'initial_evaluation deleted'});
              this.fetchTask();
          })
      }

  }

  editTask(id){
      fetch('/initial_evaluations/'+id)
          .then(res=>res.json())
          .then(data=>{
            console.log(data)
            this.setState({id_Paciente: data.id_Paciente,
            alergia_Medicamento: data.alergia_Medicamento,
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
      return(
          <div className="container Bcolor6">
                  <div className="row">
                      <div className="col s5">
                        <div className="card">
                          <div className="card-body">
                          <form onSubmit={this.addTask}>
                            <div>
                              <div className="row">
                                <div className="input-field col s12">
                                  <input onChange={this.handleChange} type="text" placeholder="idPaciente" value={this.state.id_Paciente}></input>
                                </div>
                              </div>
                            </div>
                            <div class="form-group">
                              <textarea
                                class="form-control"
                                name="alergia_Medicamento"
                                onChange={this.handleChange}
                                placeholder="Medication Allergies"
                                value={this.state.alergia_Medicamento}
                                rows="5">
                              </textarea>
                            </div>
                            <div className="form-group">
                              <button
                              type="submit"
                              onChange={this.handleChange}
                              className="btn btn-success btn-block">
                              send information
                              </button>
                            </div>
                          </form>
                          </div>
                        </div>
                      </div>
                      <div className="col s7s">
                        <table><thead><tr>
                            <th>Id paciente</th>
                            <th>Medication Allergies</th>
                        </tr></thead>
                        <tbody>
                          {
                            this.state.tasks.map(task =>{
                              return(
                                <tr key={task._id}>
                                    <td>{task.id_Paciente}</td>
                                    <td>{task.alergia_Medicamento}</td>
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
      )
    }
}
export default InitialEvaluation;
