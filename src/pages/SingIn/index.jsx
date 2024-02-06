import {Container, Form, Background} from './styles.js'
import {Input} from '../../components/Input'
import {FiUser, FiLock} from 'react-icons/fi'
import {Button} from '../../components/Button'
import { ButtonText} from '../../components/ButtonText'
export function SignIn(){
    return(

        <Container>
            
            <Form>
                <h1>RocketMovies</h1>
                <p>Aplicação para acompanhar tudo que assistir</p>

                <h2>Faça seu login</h2>
                <Input icon={FiUser} placeholder="Nome"/>
                <Input icon={FiLock} placeholder="Senha"/>
                <Button title = "Entrar"/>

                <ButtonText title = "Criar conta" target="/cadastrar"/>
            </Form>
            <Background/>
        </Container>
    )
}