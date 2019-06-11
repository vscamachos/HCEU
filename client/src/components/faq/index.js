import React, { Component } from 'react';
import './index.css';
// data
//import { datadr } from '../datadr.json';

class Faq extends Component{
  constructor(){
    super();
    this.state = {
      name: 'Dr Mauricio',
      identification: 1010400700
    }
  }

    render(){
        return(
          <div className="container">

          <div className="col-sm-8">
                                        <h4 className="text-uppercase title"><strong>PREGUNTAS FRECUENTES</strong></h4><br />
                                        <h4 className="title">¿Dónde me registro?</h4>
                                        <p>Para registrarse en el sistema HCEUN debe ingresar a la página <a className="text-info" href="http://hceun.com/" target="_blank" rel = "noopener noreferrer"><strong>hceun.com</strong></a> o dirigirse al Centro de Adhesión ubicado el HUN</p>

                                        <br />
                                        <h4 className="title">¿Cómo me registro?</h4>
                                        <p>Para crear la cuenta debe ingresar a <a className="text-info" href="http://hceun.com/" target="_blank" rel = "noopener noreferrer"><strong>hceun.com</strong></a>, hacer clic en el botón "Crear mi cuenta" y completar los campos con sus datos personales. Para finalizar, hacer clic en el botón "Registrar".</p>
                                        <br />
                                        <h4 className="title">¿Qué hago si desde el sitio web no puedo registrarme?</h4>
                                        <p>Debe apersonarse en el Centro de Adhesión ubicado en el HUN</p>

                                        <br />
                                        <h4 className="title">¿Cómo activo mi cuenta?</h4>
                                        <p>Luego de haber completado los campos del registro, aparecerá el siguiente mensaje: "¡Registro exitoso! Muchas gracias por su tiempo, sólo queda un último paso. Hemos enviado un correo electrónico a ejemplo@aaa.com. Por favor ábralo para validar su cuenta." Ingresar al mail del correo electrónico que utilizó para crear la cuenta en el sistema HCEUN y hacer clic en el botón "Activar mi cuenta".</p>
                                        <p>Su cuenta fue activada y puede ingresar a completar su HCEUN.</p>
                                        <br />
                                        <h4 className="title">¿Qué hago si no llega el e-mail de activación?</h4>
                                        <p>El e-mail de activación se envía una vez completado todos los campos del registro. Luego, usted puede enviar el e-mail una vez más desde el sitio web.</p>
                                        <p>Si la dificultad persiste diríjase al Centro de Adhesión para solucionar el inconveniente.</p>
                                        <br />
                                        <h4 className="title">¿Cómo cambiar mi contraseña?</h4>
                                        <p>Ingresar a su cuenta y hacer clic en el menú principal donde figura su nombre de usuario. Se desplegará una lista de opciones y deberá seleccionar "Cambiar contraseña".</p>
                                        <p>A continuación, en la pantalla se solicitará que complete el formulario con su contraseña actual y una nueva contraseña. Para finalizar deberá hacer clic en el botón "Cambiar". Aparecerá un mensaje confirmando su nueva contraseña, y podrá ingresar a su HCEUN con la misma.</p>
                                        <br />
                                        <h4 className="title">¿Qué hago si el e-mail de cambio de contraseña no llega?</h4>
                                        <p>Usted puede repetir el proceso una vez más.</p>
                                        <p>Si la dificultad persiste diríjase al Centro de Adhesión para solucionar el inconveniente.</p>
                                        <br />
                                        <h4 className="title">¿Qué hago si se bloquea mi cuenta?</h4>
                                        <p>Diríjase al Centro de Adhesión para solucionar el inconveniente.</p>
                                        <br />
                                        <h4 className="title">DATOS:</h4>
                                        <h4 className="title">¿Porqué no puedo modificar ciertos datos personales?</h4>
                                        <p>La HCEUN tiene compromiso con el resguardo de sus datos personales, por tanto hay información que no puede modificarla por sí mismo.</p>
                                        <p>Si usted desea actualizar datos de su HCEUN puede dirijirse al Centro de Adhesión y completaran con usted los mismos.</p>
                                        <br />
                                        <h4 className="title">¿Porqué no veo la información médica?</h4>
                                        <p>La HCEUN tiene dos niveles de acceso para visualizar la información médica. Si usted no ve los datos de sus consultas o estudios es porque aún debe apersonarse al Centro de Adhesión y certificar su identidad.</p>
                                        <br />
                                        <h4 className="title">¿Qué debo hacer para ver la información médica de mi HCEUN?</h4>
                                        <p>Usted debe registrarse en el sistema HCEUN ingresando a la página <a className="text-info" href="http://hceun.com/" target="_blank" rel = "noopener noreferrer"><strong>hceun.com</strong></a> y dirigirse al Centro de Adhesión para certificar su identidad.</p>
                                        <br />
                                        <h4 className="title">¿Qué datos de mi HCEUN puedo ver?</h4>
                                        <p>Usted puede ver en su perfil: Información personal, obra social, de contacto, de antecedentes, referencia y datos étnicos.</p>
                                        <br />
                                        <h4 className="title">¿Cómo modificar mis datos personales?</h4>
                                        <p>Ingresar a su cuenta de HCEUN y el sistema le permitirá modificar sus datos personales de dos formas:</p>

                                        <ul>
                                            <li>Desde el inicio: Hacer clic en el botón "Modificar" que se encuentra en el margen superior izquierdo.</li>
                                            <li>Desde el menú principal en "Datos Personales": La opción "Datos Personales" se encuentra siempre visible en el sitio. Puede modificar sus datos personales haciendo clic en esa opción.</li>
                                        </ul>
                                        <p>Los datos que puede modificar desde su cuenta son:</p>
                                        <p>En <strong>Información personal:</strong></p>
                                        <p>Ocupación, Estado Civil y Nacionalidad</p>
                                        <p>En <strong>Información de contacto:</strong></p>
                                        <p>Teléfono fijo, celular y correo electrónico.</p>
                                        <p>En <strong>Dirección:</strong></p>
                                        <p>País, provincia, municipio, calle, número, piso y departamento.</p>
                                        <p>En <strong>Información de salud:</strong></p>
                                        <p>Si es o no, donante de órganos.</p>
                                        <p>Una vez realizadas las modificaciones necesarias, guarde los cambios.</p>
                                        <br />
                                        <h4 className="title">¿Cómo acceder a la información médica ?</h4>
                                        <p>Si usted se acercó al Centro de Adhesión a certificar su identidad, debe ingresar a su cuenta en la página <a className="text-info" href="http://hceun.com" target="_blank" rel = "noopener noreferrer"><strong>hceun.com</strong></a> y en el menú principal hacer clic en "Mis consultas".</p>
                                        <br />
                                        <h4 className="title">¿Por qué no veo la información médica de los pacientes adheridos?</h4>
                                        <p>
                                            La HCEUN tiene dos niveles de acceso para visualizar la información médica. Si usted no ve los datos de sus consultas o estudios de pacientes adheridos es porque aún debe apersonarse al Centro de Adhesión y certificar su identidad y su matrícula, la cual debe encontrarse al día en el Colegio de Médicos, y en caso de ser necesario deberá presentar el libre deuda que el mismo colegio entrega.
                                        Usted puede o no haberse registrado previamente en el sistema HCEUN ingresando a la página <a className="text-info" href="http://hceun.com" target="_blank" rel = "noopener noreferrer"><strong>hceun.com</strong></a>
                                        </p>
                                        <br />
                                        <h4 className="title">¿Qué debo hacer para ver la información médica de los pacientes adheridos a HCEU?</h4>
                                        <p>
                                            Si no se encuentra habilitado, debe dirigirse al Centro de Adhesión para certificar su identidad y su matrícula.
                                           Si se encuentra habilitado, los pasos a seguir son:
                                        </p>
                                        <p>- Ingresar al portal <a className="text-info" href="http://hceun.com" target="_blank" rel = "noopener noreferrer"><strong>hceun.com</strong></a> con su usuario y contraseña</p>
                                        <p>- Ingresar con el perfil de Especialista </p>
                                        <p>- Realizar la búsqueda del paciente</p>
                                        <p>- Seleccionar el paciente</p>
                                        <p>- Ingresar el código de autorización que provee el paciente</p>
                                        <br />
                                        <h4 className="title">¿Qué datos de HCEUN del paciente puedo ver?</h4>
                                        <p>Usted puede ver:</p>
                                        <p>- Datos personales</p>
                                        <p>- Datos físicos</p>
                                        <p>- Alergías</p>
                                        <p>- Consultas</p>
                                        <p>- Informes de Laboratorio e Imágenes</p>
                                        <p>- Datos de contacto de emergencia</p>
                                        <br />
                                        <h4 className="title">¿Qué debo hacer si los datos en el sitio no coinciden con mis datos personales?</h4>
                                        <p>Ante cualquier inconveniente con la información que muestra el sitio sobre sus datos personales, diríjase al Centro de Adhesión ubicado en el HUN.</p>

                                        <br />

                                        <h4 className="title">¿Cómo descargar información de mi Historia Clínica Electrónica Única?</h4>
                                        <p>La información médica correspondiente a la historia clínica se exporta a un archivo PDF, el cual puede ser descargado al momento de generarse, imprimirlo o enviarlo a una dirección de correo electrónico registrada. </p>
                                        <p>Para descargar su HCEUN debe dirigirse, en el menú principal, a "Mis Consultas" y hacer clic en el botón "Descargar HC". Aparecerá en pantalla un mensaje que le permitirá incluir o no los datos básicos de la HC y elegir, de una lista de opciones, cómo descargar su Historia Clínica. Para finalizar, debe hacer clic en el botón "Descargar" y su HCEUN será descargada por el medio que eligió anteriormente.</p>
                                        <p className="text-muted">Aclaración: En caso que usted haya filtrado consultas o informes en una búsqueda, el archivo descargado contendrá información médica correspondiente a los filtros seleccionados anteriormente.</p>
                                        <br />
                                        <h4 className="title">¿Qué debo hacer si no se muestran datos de una atención realizada?</h4>
                                        <p>Debe acercarse al Centro de Adhesión e informar de la situación para que se comuniquen con el Hospital o Institución correspondiente o apersonarse en el Hospital donde se realizó la atención.</p>
                                        <br />


                                        <p>Ante cualquier inconveniente puede comunicarse: </p>
                                        <p><strong>Por e-mail a:</strong> <a className="text-info" href="mailto:contacto@hceun.com"><strong>contacto@hceun.com</strong></a></p>
                                        <p><strong>Personalmente en:</strong></p>
                                        <p>- Centro de Adhesión ubicado en el HUN</p>

                                    </div>



          </div>
        )
    }
}
export default Faq;
