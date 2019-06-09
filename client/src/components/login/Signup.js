import React from 'react';
import { Divider, Button, Icon, Form } from 'semantic-ui-react';

export default ({styles,handleClick,handleSubmit}) => {
   const args={      
    }
   const handleChange = (ev, input)=>{
     args[input.name] = input.value        
}

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
          <Form.Input name="userName" onChange={handleChange} placeholder='Nombre de Usuario' />            
          </Form.Field>
          <Form.Field>
          <Form.Input name="userDocument" onChange={handleChange} placeholder='Documento de Identidad' />
          </Form.Field>
          <Form.Field>
          <Form.Input name="userBirthday" onChange={handleChange} placeholder='Fecha de Nacimiento' />
          </Form.Field>
          <Form.Field>
          <Form.Input name="userRol" onChange={handleChange} placeholder='Rol' />
          </Form.Field>
          <Form.Field>
          <Form.Input name="userTelphone" onChange={handleChange} placeholder='Telefono' />
          </Form.Field>
          <Form.Field>
          <Form.Input  name="userAdress" onChange={handleChange} placeholder='Dirección' />
          </Form.Field>
          <Form.Field>
          <Form.Input  name="userCountry" onChange={handleChange} placeholder='País' />
          </Form.Field>
          <Form.Field>
          <Form.Input name="userEmail" onChange={handleChange} placeholder='Correo' />
          </Form.Field>
          <Form.Field>
          <Form.Input name="password" onChange={handleChange} type="password" placeholder='Contraseña' />
          </Form.Field>
          <Button type='submit' primary fluid>Registrarte</Button>
          </Form> 
        </div>
        <div style={styles.box}>
          ¿Ya tienes una cuenta? <a href="" onClick={handleClick}>Inicia Sesión</a>
        </div>
       </div>
    )
}