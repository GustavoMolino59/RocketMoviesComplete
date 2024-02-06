import { Container, Form, Avatar } from "./styles";
import { FiArrowLeft, FiCamera, FiUser, FiLock, FiMail } from "react-icons/fi";
import { Input } from "../../components/Input";
import {ButtonText} from "../../components/ButtonText"
import { Button } from "../../components/Button";
export function Profile(){
    return(
        <Container>
            <header>
                <ButtonText title="Voltar" icon={FiArrowLeft} target="/"/>
            </header>
            <Form>
                <Avatar>
                <img src="https:github.com/GustavoMolino59.png"/>
                <label htmlFor="avatar">
                        <FiCamera />

                        <input id="avatar" type="file"/>

                    </label>
                </Avatar>
                <Input placeholder='Nome' icon={FiUser} />
                <Input placeholder='Email' icon={FiMail} />
                <Input placeholder='Nome' icon={FiLock} />
                <Input placeholder='Nome' icon={FiLock} />
                <Button title="Salvar"/>
            </Form>
        </Container>
    )
}