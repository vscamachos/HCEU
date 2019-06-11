import React from 'react';
import { Divider, Form, Button, Icon } from 'semantic-ui-react';

export default ({styles, handleClick, handleSubmit}) => {
    const args={
      }
    const handleChange = (ev, input)=>{
       args[input.name] = input.value
    }
    return(
       <div>
        <div style={styles.box}>
          Iniciar Sesion
          <Form onSubmit={(ev)=>handleSubmit(ev,args)}>
            <Form.Field>
              <Form.Input name="email" onChange={handleChange} placeholder='Email o nombre de usuario' />
            </Form.Field>
            <Form.Field>
              <Form.Input name="password" onChange={handleChange} type='password' placeholder='Contraseña' />
            </Form.Field>
            <Button type='submit' primary fluid>Iniciar Sesión</Button>
            <Divider horizontal>o</Divider>
            <Button color="facebook">
              <Icon name="facebook"/>Iniciar Sesión con facebook
          </Button>
          </Form>

        </div>
        <div style={styles.box}>
        ¿No tienes una cuenta? <a href="/home" onClick={handleClick}>Regístrate</a>
        </div>
        <div style={styles.box}>

         <a href="/faq"><Button type='submit' primary>Ir a Faq</Button></a>
        </div>
       </div>
    )
}
