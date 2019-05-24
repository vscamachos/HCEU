import React, { Component } from 'react';

class InitialEvaluation extends Component{
  constructor(){
    super();
    this.state = {
      id_Paciente: '',
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
                <label for="MediAller" colorte>Medication Allergies</label>
                <textarea class="form-control" rows="5" id="MediAller"></textarea>
              </div>
              <div className="form-group">
                <button type="submit" className="btn btn-primary btn-block">send information</button>
              </div>
            </form>
        </div>
      )
    }
}
export default InitialEvaluation;
