import React from 'react';
import {Grid} from 'semantic-ui-react';
import { graphql } from 'react-apollo';

//Utils
import queries from '../utils/queries';

//Componentes
import Signin from './login/Signin';
import Signup from './login/Signup';
//import LostPassword from './login/LostPassword';

const styles={
    grid: {
        height: '100%',
        width: '900px',
        margin: '0 auto',
    },
    box:{
        backgroundColor: 'white',
        border: '1px solid #e6e6e6',
        textAlign: 'center',
        marginBotton: '1em',
        padding: '1em',
    }
}

class Login extends React.Component{
    state={
        showLogin:true,
        showRegister:false,
        showLostPassword:false,
        argsSignup: {},
        errorsSignup: []
    }
    showRegister = (ev) => {
        ev.preventDefault()
        this.setState({showLogin:false,showRegister:true,showLostPassword:false})
    }
    showLogin = (ev) => {
        ev.preventDefault()
        this.setState({showLogin:true,showRegister:false,showLostPassword:false})
    }
    handleLogin=(ev, args)=>{
        console.log(args);
    }
    handleRegister = async (ev, args)=>{
        console.log(args);
        const response = await this.props.mutate({
            variables:args
        })
        const {errors, success} = response.data.createUser;
        if(!success){
            this.setState({errorsSignup:errors});
        }else{
            //this.props.history.push("/faq")
        }

    }
    handleChange = (ev, input)=>{
        const argsSignup = this.state.argsSignup
        argsSignup[input.name] = input.value
        this.setState({argsSignup})        
    }

    render(){
        const {showLogin, showRegister, argsSignup,errorsSignup/*, showLostPassword*/} = this.state;
        return(
          <Grid verticalAlign='middle'columns={2} centered style={styles.grid}>
             <Grid.Row>
               <Grid.Column>
                 {showLogin && <Signin styles={styles} handleClick={this.showRegister} handleSubmit={this.handleLogin}/>}
                 {showRegister && <Signup styles={styles} handleClick={this.showLogin} handleSubmit={this.handleRegister} handleChange={this.handleChange} args={argsSignup} errors={errorsSignup}/>}
                 {/*showLostPassword && <LostPassword styles={styles}/>*/}
               </Grid.Column>
             </Grid.Row>
          </Grid>
        )
    }
}

export default graphql(queries.mutation.crearUsuario)(Login)
