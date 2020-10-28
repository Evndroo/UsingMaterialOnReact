import React, { useState } from 'react';
import FormDadosAutenticacao from './FormDadosAutenticacao';
import FormDadosLocalizacao from './FormDadosLocalizazao';
import FormDadosPessoais from './FormDadosPessoais';



function FomularioCadastro({ onSubmit }) {
    const [step, setStep] = useState(0);
    const [dados, setDados] = useState({});
    const forms = [
        <FormDadosAutenticacao onSubmit={onFormSubmit} />, 
        <FormDadosPessoais onSubmit={onFormSubmit} />,
        <FormDadosLocalizacao onSubmit={onFormSubmit} />,
        <h1 align="center">Cadastro realizado com sucesso</h1>
    ]

    async function onFormSubmit(novosDados) {
        await setDados({ ...dados, ...novosDados });

        if (step === 2) {
            onSubmit(dados)
        }

        setStep(step + 1);
    }

    

    return (
        <>
            {forms[step]}
        </>
    )
}

export default FomularioCadastro;