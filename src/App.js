import './App.css';
import FomularioCadastro from './Components/FormularioCadastro';
import { Container, Typography } from "@material-ui/core"
import "fontsource-roboto"

function handleFormSubmit(conteudo){
  console.log(conteudo)
}

function App() {
  return (
    <Container maxWidth="sm" component="article">
      <Typography 
        color="primary" 
        align="center" 
        variant="h3" 
        component="h1"
      >
        Formulario de cadastro
      </Typography>
      <FomularioCadastro onSubmit={handleFormSubmit}/>
    </Container>
  );
}

export default App;
