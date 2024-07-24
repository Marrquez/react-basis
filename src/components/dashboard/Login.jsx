import React from "react";

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = { texto: '', aceptado: false };
    }

    handleSubmit(ev) {
        ev.preventDefault();
        // this.props.onSubmit({
        //     texto: this.state.texto,
        //     aceptado: this.state.aceptado
        // });
    }
    handleTexto(ev) {
        this.setState((state) => ({
            ...state,  
            texto: ev.target.value 
        }));
    }
    handleCheckbox(ev) {
        this.setState((state) => ({
            ...state, 
            aceptado: ev.target.checked
        }));
    }
    render() {
        return <form onSubmit={this.handleSubmit.bind(this)}>
            <input
                type="text"
                placeholder="Texto"
                value={this.state.texto}
                onChange={this.handleTexto.bind(this)}
            />
            <br />
            <label>
                <input
                    type="checkbox"
                    checked={this.state.aceptado}
                    onChange={this.handleCheckbox.bind(this)}
                />
                Acepto los terminos
            </label>
            <button type="submit">Guardar</button>
        </form>;
    }
 }
 
 export default Login;


 