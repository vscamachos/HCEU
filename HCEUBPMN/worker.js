const { Client, logger } = require('camunda-external-task-client-js');

// configuration for the Client:
//  - 'baseUrl': url to the Process Engine
//  - 'logger': utility to automatically log important events
//  - 'asyncResponseTimeout': long polling timeout (then a new request will be issued)
const config = { baseUrl: 'http://localhost:8080/engine-rest', use: logger, asyncResponseTimeout: 10000 };

// create a Client instance with custom configuration
const client = new Client(config);

// susbscribe to the topic: 'charge-card' topic del la task
client.subscribe('consulting_db', async function({ task, taskService }) {
  // Put your business logic here

  // Get a process variable
  var estaUsuario = task.variables.get('estaUsuario');
  var crearUsuario = task.variables.get('crearUsuario');
  var estaPaciente = task.variables.get('estaPaciente');
  var rolUsuario = task.variables.get('rolUsuario');

  if (estaPaciente) {
    console.log('El paciente esta registrado, ver información');
  } else {
    console.log('Estado del paciente NO REGISTRADO');
    console.log('Iniciar registro...');
    console.log(`registro terminado rol asignado: ${rolUsuario}`);
  }

  if (estaUsuario) {
    console.log('The user is in DB');
  } else {
    console.log('The user is not in DB, do you want to create a user??');
    if (crearUsuario) {
      console.log('SI crear');
      console.log('created user');
    } else {
      console.log('NO crear');
      console.log('user not created');
    }
  }

  // Complete the task
  await taskService.complete(task);
});
