const { Client, logger, Variables } = require("camunda-external-task-client-js");
 
// configuration for the Client:
//  - 'baseUrl': url to the Workflow Engine
//  - 'logger': utility to automatically log important events
const config = { baseUrl: "http://localhost:8080/engine-rest", use: logger };
 
// create a Client instance with custom configuration
const client = new Client(config);
 
client.subscribe("Revicion", async function({ task, taskService }) {
  
  let validate = 1;


  const nombre = task.variables.get("name");
  const processVariables = new Variables().set("nombre", nombre).set("validate", validate);
  try{
    await taskService.complete(task, processVariables);
    console.log("paso en la primera")  
  }catch (e){
    console.log("fallo en la primera ${e}");
  }
  
});

// susbscribe to the topic: 'creditScoreChecker'
client.subscribe("BadRequest", async function({ task, taskService }) {
  const valido = task.variables.get("validate");
  try{
    await taskService.complete(task);
    console.log("funciono en BadRequest ${valido}");  
  }catch (e){
    console.log("fallo en BadRequest ${e}");
  }
});

client.subscribe("Successfully", async function({ task, taskService }) {
  const valido = task.variables.get("validate");

  try{
    await taskService.complete(task);
    console.log("funciono en Successfully ${valido}");  
  }catch (e){
    console.log("fallo en successfully ${e}");
  }
});

client.subscribe("GetBad", async function({ task, taskService }) {
  const valido = task.variables.get("validate");
  try{
    await taskService.complete(task);
    console.log("funciono en GetbAd ${valido}");  
  }catch (e){
    console.log("fallo en GetBad ${e}");
  }
});

client.subscribe("GetGood", async function({ task, taskService }) {
  const valido = task.variables.get("validate");
  try{
    await taskService.complete(task);
    console.log("funciono en GetGood ${valido}");  
  }catch (e){
    console.log("fallo en GetGood ${e}");
  }
});