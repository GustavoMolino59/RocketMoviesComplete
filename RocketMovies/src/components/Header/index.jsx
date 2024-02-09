import { Container, Profile, Form } from "./styles";
import { Input } from "../Input";
import {Link, useNavigate} from 'react-router-dom'

import { useAuth } from "../../hooks/auth";
import { api } from "../../services/api";
import avatarPlaceholder from '../../assets/avatar_placeholder.svg'

export function Header({ onSearchTitle, onSearchTag, ...rest}){
    const navigate = useNavigate();
    const {signOut, user} = useAuth()
    const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder
    function handleSignOut(){
        signOut();
        navigate('/')
    }

    return(
        <Container {...rest}>
            <span>RocketMovies</span>
            <Form>
                <Input placeholder="Pesquisar pelo título" onChange = {e => onSearchTitle(e.target.value)}/>
                <Input placeholder="Pesquisar pela tag" onChange = {e => onSearchTag(e.target.value)}/>
            </Form>
            <Profile>
                <div>
                    <Link to="/profile">
                        <strong>{user.name}</strong>
                    </Link>
                    <Link to = "/" onClick={handleSignOut}>Sair</Link>
                </div>
                <Link to="/profile">
                    <img src={avatarUrl} alt="Foto do usuário"/>
                </Link>
            </Profile>
        </Container>

    )
}