import React, { Component } from "react";
import { Link } from "react-router-dom";
class Registro extends Component {
    constructor() {
        super();
        this.state = {
            userName: "",
            userDocument: "",
            userDescription: "",
            userBirthday: "",
            userRol: "",
            userTelphone: "",
            userAdress: "",
            userCountry: "",
            userEmail: ""
        };
    }

    onChange = e => {
        this.setState({ [e.target.id]: e.target.value });
    };
    onSubmit = e => {
        e.preventDefault();
        const newUser = {
            userName: this.state.userName,
            userDocument: this.state.userDocument,
            userDescription: this.state.userDescription,
            userBirthday: this.state.userBirthday,
            userRol: this.state.userRol,
            userTelphone: this.state.userTelphone,
            userAdress: this.state.userAdress,
            userCountry: this.state.userCountry,
            userEmail: this.state.userEmail
        };
        console.log(newUser);
    };
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col s8 offset-s2">
                        <Link to="/" className="btn-flat waves-effect">
                            <i className="brand-logo">keyboard_backspace</i> Volver
                        </Link>
                        <div className="col s12" style={{ paddingLeft: "11.250px" }}>
                            <h4>
                                <b>Registro</b> below
                            </h4>
                            {/*<p className="grey-text text-darken-1">
                                Si ya tiene usuario: <Link to="/login">Log in</Link>
                            </p>*/}
                        </div>
                        <form noValidate onSubmit={this.onSubmit}>
                            <div className="input-field col s12">
                                <input
                                    onChange={this.onChange}
                                    value={this.state.userName}
                                    id="userName"
                                    type="text"
                                />
                                <label htmlFor="userName">Nombre</label>
                            </div>
                            <div className="input-field col s12">
                                <input
                                    onChange={this.onChange}
                                    value={this.state.userDocument}
                                    id="userDocument"
                                    type="text"
                                />
                                <label htmlFor="userDocument">Documento</label>
                            </div>
                            <div className="input-field col s12">
                                <input
                                    onChange={this.onChange}
                                    value={this.state.userDescription}
                                    id="userDescription"
                                    type="text"
                                />
                                <label htmlFor="userDescription">Descripci�n</label>
                            </div>
                            <div className="input-field col s12">
                                <input
                                    onChange={this.onChange}
                                    value={this.state.userBirthday}
                                    id="userBirthday"
                                    type="date"
                                />
                                <label htmlFor="userBirthday">Fecha de nacimiento</label>
                            </div>
                            <div className="input-field col s12">
                                <input
                                    onChange={this.onChange}
                                    value={this.state.userRol}
                                    id="userRol"
                                    type="text"
                                />
                                <label htmlFor="userRol">Rol</label>
                            </div>
                            <div className="input-field col s12">
                                <input
                                    onChange={this.onChange}
                                    value={this.state.userTelphone}
                                    id="userTelphone"
                                    type="text"
                                />
                                <label htmlFor="userTelphone">Tel�fono</label>
                            </div>
                            <div className="input-field col s12">
                                <input
                                    onChange={this.onChange}
                                    value={this.state.userAdress}
                                    id="userAdress"
                                    type="text"
                                />
                                <label htmlFor="userAdress">Direcci�n</label>
                            </div>
                            <div className="input-field col s12">
                                <input
                                    onChange={this.onChange}
                                    value={this.state.userCountry}
                                    id="userCountry"
                                    type="text"
                                />
                                <label htmlFor="uuserCountry">Pa�s</label>
                            </div>
                            <div className="input-field col s12">
                                <input
                                    onChange={this.onChange}
                                    value={this.state.userEmail}
                                    id="userEmail"
                                    type="email"
                                />
                                <label htmlFor="userEmail">E-mail</label>
                            </div>
                            <div className="col s12" style={{ paddingLeft: "11.250px" }}>
                                <button
                                    style={{
                                        width: "150px",
                                        borderRadius: "3px",
                                        letterSpacing: "1.5px",
                                        marginTop: "1rem"
                                    }}
                                    type="submit"
                                    className="btn btn-large waves-effect waves-light hoverable blue accent-3"
                                >
                                    Crear cuenta
                                 </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}
export default Registro;
