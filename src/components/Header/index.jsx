import { Container, Profile, Form } from "./styles";
import { Input } from "../Input";
import {Link} from 'react-router-dom'
export function Header({...rest}){
    return(
        <Container {...rest}>
            <span>RocketMovies</span>
            <Form>
                <Input placeholder="Pesquisar pelo título"/>
            </Form>
            <Profile>
                <div>
                    <Link to="/profile">
                        <strong>Rodrigo Gonçalves</strong>
                    </Link>
                    <Link to = "/cadastrar">Sair</Link>
                </div>
                <Link to="/profile">
                    <img src="https:github.com/GustavoMolino59.png" alt="Foto do usuário"/>
                </Link>
            </Profile>
        </Container>

    )
}