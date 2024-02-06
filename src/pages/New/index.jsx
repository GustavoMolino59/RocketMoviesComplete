import { Container, Main, Dados, Marcadores, Form, Buttons } from "./styles";
import { FiArrowLeft } from "react-icons/fi";

import { Header } from "../../components/Header";
import { ButtonText } from "../../components/ButtonText";
import { Input } from "../../components/Input";
import { NoteItem } from "../../components/NoteItem";
import { Textarea } from "../../components/TextArea";
import { Button } from "../../components/Button";
export function New(){
    return(
        <Container>
            <Header/>
            <Main>
                <ButtonText title="Voltar" icon={FiArrowLeft} target="/"/>
                <h1>Novo Filme</h1>
                <Form>
                    <Dados>
                        <Input placeholder='Título'/>
                        <Input placeholder="Sua nota foi de (0 a 5)"/>
                    </Dados>
                    <Textarea placeholder="Observações"/>
                    <span>Marcadores</span>
                    <Marcadores>
                            <NoteItem value="Ficcção Cientifica"></NoteItem>
                            <NoteItem isNew placeholder="Novo marcador" value=""></NoteItem>

                    </Marcadores>
                    <Buttons>
                        <div>
                            <Button title="Excluir filme"/>
                        </div>
                        <div>
                        <Button title="Salvar alterações"/>
                        </div>
                    </Buttons>
                </Form>
            </Main>
        </Container>
    )
}