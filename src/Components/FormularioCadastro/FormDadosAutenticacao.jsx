import { Button, TextField } from '@material-ui/core';
import React, { useState } from 'react';

function FormDadosAutenticacao({onSubmit}){

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    return(
        <form
            onSubmit={(event)=>{
                event.preventDefault();
                onSubmit({email: "evandro.slipjr@gmail.com", senha:"12345678"});
            }}
        >
            <TextField
                value={email}
                onChange={e =>{setEmail(e.target.value)}}
                margin="normal"
                variant="outlined"
                label="E-mail"
                id="email"
                type="email"
                required
                fullWidth
            />
            <TextField
                value={senha}
                onChange={e =>{setSenha(e.target.value)}}
                margin="normal"
                variant="outlined"
                label="Senha"
                id="senha"
                required
                type="password"
                fullWidth
            />
            <Button                
                variant="contained" 
                color="primary" 
                fullWidth 
                type="submit"
            >
                Cadastrar
            </Button>
        </form>
    )
}

export default FormDadosAutenticacao;