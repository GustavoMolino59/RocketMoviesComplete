import {Container, Form, Background} from './styles.js'
import {Input} from '../../components/Input'
import {FiUser, FiLock, FiMail, FiArrowLeft} from 'react-icons/fi'
import {Button} from '../../components/Button'
import { ButtonText} from '../../components/ButtonText'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { api } from '../../services/api.js'
export function SignUp(){
    const[name, setName] = useState('')
    const[email, setEmail] = useState('')
    const[password, setPassword] = useState('')
    const navigate = useNavigate();
    async function handleRegister(){
        try{
            const response = await api.post("/users", {name, email, password})
            alert("usuário cadastrado com sucesso")
            navigate(-1)
        }catch(error){
            if(error.response){
                alert(error.response.data.status)
            }else{
                alert("Não foi possível conectar")
            }
        }
    }

    return(

        <Container>
            
            <Form>
                <h1>RocketMovies</h1>
                <p>Aplicação para acompanhar tudo que assistir</p>

                <h2>Crie sua conta</h2>
                <Input icon={FiUser} placeholder="Nome" onChange={e=>setName(e.target.value)}/>
                <Input icon={FiMail} placeholder="Email"  onChange={e=>setEmail(e.target.value)}/>
                <Input icon={FiLock} placeholder="Senha"  onChange={e=>setPassword(e.target.value)}/>
                <Button title = "Cadastrar" onClick={handleRegister}/>

                <ButtonText icon={FiArrowLeft} title = "Voltar para o login" target="/"/>
            </Form>
            <Background/>
        </Container>
    )
}