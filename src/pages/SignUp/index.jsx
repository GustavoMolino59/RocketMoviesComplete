import {Container, Form, Background} from './styles.js'
import {Input} from '../../components/Input'
import {FiUser, FiLock, FiMail, FiArrowLeft} from 'react-icons/fi'
import {Button} from '../../components/Button'
import { ButtonText} from '../../components/ButtonText'
export function SignUp(){
    return(

        <Container>
            
            <Form>
                <h1>RocketMovies</h1>
                <p>Aplicação para acompanhar tudo que assistir</p>

                <h2>Crie sua conta</h2>
                <Input icon={FiUser} placeholder="Nome"/>
                <Input icon={FiMail} placeholder="Email"/>
                <Input icon={FiLock} placeholder="Senha"/>
                <Button title = "Cadastrar"/>

                <ButtonText icon={FiArrowLeft} title = "Voltar para o login" target="/"/>
            </Form>
            <Background/>
        </Container>
    )
}