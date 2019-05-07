import React, { Component } from 'react';

class InitialEvaluation extends Component{
  constructor(){
    super();
    this.state = {
      id_Paciente: '343524534',
      alergia_Medicamento: ''
    }
  }

    render(){
      return(
        <div className="container">
            <form>
              <div>
                <label for="">Evaluacion inicial del usuario con id:{this.state.id_Paciente}</label>
              </div>
              <div class="form-group">
                <label for="MediAller">Medication Allergies</label>
                <input type="text" class="form-control" id="MediAller"/>
              </div>
            </form>
        </div>
      )
    }
}
export default InitialEvaluation;
