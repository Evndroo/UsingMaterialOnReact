import React, {useState} from 'react';
import { Button, TextField, Switch, FormControlLabel } from "@material-ui/core";

function FormDadosPessoais({onSubmit}) {
    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [cpf, setCpf] = useState("");
    const [promotions, setPromotions] = useState(true);
    const [newsLetter, setNewsLetter] = useState(true);

    const [errors, setErrors] = useState({cpf:{valid:true, message:"Insira apenas números"}});

    return (
        <form 
            onSubmit={(event)=>{
                event.preventDefault();
                onSubmit({name, lastName, cpf, promotions, newsLetter})
            }}
        >
            <TextField
                value={name}
                onChange={e =>{setName(e.target.value)}}
                margin="normal"
                variant="outlined"
                label="Nome"
                id="name"
                required
                fullWidth
            />

            <TextField 
                value={lastName}
                onChange={e =>{setLastName(e.target.value)}}
                margin="normal" 
                variant="outlined" 
                label="Sobrenome" 
                id="lastName"
                required 
                fullWidth 
            />
        
            <TextField 
                value={cpf}
                error={!errors.cpf.valid}
                helperText={errors.cpf.message}
                onChange={e =>{setCpf(e.target.value)}}
                onBlur={e =>{
                    let valid = true;
                    let message = "Insira apenas números";

                    if(e.target.value.length !== 11){
                        valid = false;
                        message = "O CPF deve conter apenas números, esperamos que ele tenha 11 dígitos"
                    }

                    setErrors({...errors, cpf:{valid, message}})
                }}
                margin="normal" 
                variant="outlined" 
                label="CPF" 
                id="cpf" 
                required
                fullWidth 
            />

            <FormControlLabel 
                label="Promoções" 
                control={
                    <Switch
                        checked={promotions}
                        onChange={e =>{setPromotions(e.target.checked)}}
                        name="promotions" 
                        color="primary" 
                    />
                } 
            />

            <FormControlLabel 
                label="Novidades" 
                control={
                    <Switch 
                        checked={newsLetter}
                        onChange={e =>{setNewsLetter(e.target.checked)}} 
                        name="newsLetter"
                        color="primary" 
                    />
                } 
            />

            <Button 
                variant="contained" 
                color="primary" 
                fullWidth 
                type="submit"
                disabled={!errors.cpf.valid}
            >
                Cadastrar
            </Button>

        </form>
    )
}

export default FormDadosPessoais;