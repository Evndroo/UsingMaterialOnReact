import React, {useState} from 'react';
import { TextField, Button } from "@material-ui/core";

function FormDadosLocalizacao({onSubmit}) {

    const [cep, setCep] = useState("");
    const [numero, setNumero] = useState("");


    return (
        <form
            onSubmit={event=>{
                event.preventDefault();
                onSubmit({cep: parseInt(cep), numero:parseInt(numero)});
            }}
        >
            <TextField
                value={cep}
                onChange={e =>{setCep(e.target.value)}}
                margin="normal"
                variant="outlined"
                label="CEP"
                id="cep"
                type="number"
                required
            />
            <TextField
                margin="normal"
                variant="outlined"
                label="Endereço"
                id="endereco"
                fullWidth
            />

            <TextField
                value={numero}
                onChange={e =>{setNumero(e.target.value)}}
                margin="normal"
                variant="outlined"
                label="Número"
                id="numero"
                type="number"
                required
            />

            <TextField
                margin="normal"
                variant="outlined"
                label="Cidade"
                id="cidade"
            />

            <TextField
                margin="normal"
                variant="outlined"
                label="Estado"
                id="estado"
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
    );
}

export default FormDadosLocalizacao;