import React from 'react';
import { Divider, Button, Icon, Form, Message } from 'semantic-ui-react';
import _find from 'lodash/find';


export default ({styles,handleClick,handleSubmit,handleChange,args,errors}) => {
     
     return(
       <div>
        <div style={styles.box}>
          HCEU
          <h4>Registrate</h4>
          <Form onSubmit={(ev)=>handleSubmit(ev,args)}>
          <Button color="facebook">
              <Icon name="facebook"/>Iniciar Sesión con facebook
          </Button>
          <Divider horizontal>o</Divider>
          <Form.Field>

          <Form.Input name="userName" onChange={handleChange} placeholder='Nombre de Usuario' icon={!errors.length?null:_find(errors, {path:'userName'})? <Icon name="remove circle" color="red" size="large"/>:<Icon name="check circle" color="green" size="large"/>}/>            


          </Form.Field>
          <Form.Field>
          <Form.Input name="userDocument" onChange={handleChange} placeholder='Documento de Identidad' icon={!errors.length?null:_find(errors, {path:'userDocument'})? <Icon name="remove circle" color="red" size="large"/>:<Icon name="check circle" color="green" size="large"/>}/>
          </Form.Field>
          <Form.Field>
          <Form.Input name="userBirthday" onChange={handleChange} placeholder='Fecha de Nacimiento' icon={!errors.length?null:_find(errors, {path:'userBirthday'})? <Icon name="remove circle" color="red" size="large"/>:<Icon name="check circle" color="green" size="large"/>}/>
          </Form.Field>
          <Form.Field>
          <Form.Input name="userRol" onChange={handleChange} placeholder='Rol' icon={!errors.length?null:_find(errors, {path:'userRol'})? <Icon name="remove circle" color="red" size="large"/>:<Icon name="check circle" color="green" size="large"/>}/>
          </Form.Field>
          <Form.Field>
          <Form.Input name="userTelphone" onChange={handleChange} placeholder='Telefono' icon={!errors.length?null:_find(errors, {path:'userTelphone'})? <Icon name="remove circle" color="red" size="large"/>:<Icon name="check circle" color="green" size="large"/>}/>
          </Form.Field>
          <Form.Field>
          <Form.Input  name="userAdress" onChange={handleChange} placeholder='Dirección' icon={!errors.length?null:_find(errors, {path:'userAdress'})? <Icon name="remove circle" color="red" size="large"/>:<Icon name="check circle" color="green" size="large"/>}/>
          </Form.Field>
          <Form.Field>
          <Form.Input  name="userCountry" onChange={handleChange} placeholder='País' icon={!errors.length?null:_find(errors, {path:'userCountry'})? <Icon name="remove circle" color="red" size="large"/>:<Icon name="check circle" color="green" size="large"/>}/>
          </Form.Field>
          <Form.Field>
          <Form.Input name="userEmail" onChange={handleChange} placeholder='Correo' icon={!errors.length?null:_find(errors, {path:'userEmail'})? <Icon name="remove circle" color="red" size="large"/>:<Icon name="check circle" color="green" size="large"/>}/>
          </Form.Field>
          <Form.Field>
          <Form.Input name="password" onChange={handleChange} type="password" placeholder='Contraseña' icon={!errors.length?null:_find(errors, {path:'password'})? <Icon name="remove circle" color="red" size="large"/>:<Icon name="check circle" color="green" size="large"/>}/>
          </Form.Field>

          <Button type='submit' 
                  disabled={!args.userName || !args.userDocument || !args.userBirthday || !args.userRol || !args.userTelphone || !args.userAdress || !args.userCountry || !args.userEmail || !args.password} 
                  primary fluid>
                  Registrarte
          </Button>
          {
            errors.length?<Message negative header="Los siguientes errores: "
             list={errors.map(error=>`[${error.path}] ${error.message}`)}/>: null
          }
          </Form> 
        </div>
        <div style={styles.box}>
          ¿Ya tienes una cuenta? <a href="/home" onClick={handleClick}>Inicia Sesión</a>
        </div>
       </div>
    )
}
