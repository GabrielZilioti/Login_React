import React, { useState} from 'react';
import './login.css'
import {TextField, Button} from '@material-ui/core'
import Toggle from '../../Assets/button.png'



function Login(){
    const [email, setEmail] = useState();
    const [senha, setSenha] = useState();
    const [tema, setTema] = useState(true)

    function toggleTheme(){
        var element = document.getElementById('container');
        element.classList.toggle("login-content-dark");
        setTema(!tema)
    }

    return(

        <>
        <div id='container' className="login-content d-flex align-items-center">
                <form className="form-signin mx-auto">
                <div className="login_st" style={{display: 'flex', flexDirection: 'column'}}>
                    <img src={tema ? "xplogo.png" : "xplogoDark.png"} className="img-fluid" />
                    <h1 className="h3 mb-3 fw-bold title">Login</h1>
                    <TextField className='ssheart' id="filled-basic" label="Email" variant="filled" onChange={(e) => setEmail(e.target.value) } type="email" id="inputEmail"/>
                    <br/>
                    <TextField className='ssheart' id="filled-basic" label="Senha" variant="filled" onChange={(e) => setSenha(e.target.value) } type="password" id="inputPassword"/>
                    <br/>
                    <button className='botaozin'>Login</button>
                    <br/>
                    <button className='botaozin2'>Recuperar Senha</button>
                    <br/>
                    <img onClick ={toggleTheme} className="togg" src={Toggle}></img>
                </div>
            </form>
            </div>
        </>
    )
}

export default Login;