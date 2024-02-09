import { Container, Main, Dados, Marcadores, Form, Buttons } from "./styles";
import { FiArrowLeft } from "react-icons/fi";

import { Header } from "../../components/Header";
import { ButtonText } from "../../components/ButtonText";
import { Input } from "../../components/Input";
import { NoteItem } from "../../components/NoteItem";
import { Textarea } from "../../components/TextArea";
import { Button } from "../../components/Button";

import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { api } from "../../services/api";
export function New(){
    const[title, setTitle] = useState("")
    const[rating, setRating] = useState("")
    const[description, setDescription] = useState("")
    const[tags, setTags] = useState([])
    const[newTag, setNewTag] = useState("")
    const navigate = useNavigate();

    function handleUpdateRating(event){
        if(isNaN(event.target.value)){
            return alert("Por favor, insira apenas números")
        }
        if(Number(event.target.value) > 5 || Number(event.target.value) < 0){
            return alert("O rating vai de 0 a 5 apenas")
        }
        setRating(event.target.value);
    }
    function handleSaveNote(){
        let confirm = true;
        if(!title){
            alert("Insira o nome do filme")
        }
        if(!rating){
            alert("Insira a nota do filme")
        }
        if(newTag){
            confirm = window.confirm("você esqueceu de inserir uma tag, tem certeza que deseja enviar assim mesmo?")
        }
        if(confirm){
            api.post("/movies", {title, description, tags, rating})
            alert("Nota salva com sucesso")}
            navigate(-1);
    }
    function handleAddTag(){
        setTags((prevState => [...prevState, newTag]))
        setNewTag("")
        
    }
    function handleRemoveTag(element){
        setTags(prevState => prevState.filter(tag => tag !== element))
    }

    function handleRemoveMovie(){
        setTags("")
        setTitle("")
        setDescription("")
        setRating("")

    }

    return(
        <Container>
            <Header/>
            <Main>
                <ButtonText title="Voltar" icon={FiArrowLeft} target="/"/>
                <h1>Novo Filme</h1>
                <Form>
                    <Dados>
                        <Input placeholder='Título' value={title} onChange={e=>setTitle(e.target.value)}/>
                        <Input placeholder="Sua nota foi de (0 a 5)" value={rating} onChange={e=>handleUpdateRating(e)}/>
                    </Dados>
                    <Textarea placeholder="Observações"  value={description} onChange={e=>setDescription(e.target.value)}/>
                    <span>Marcadores</span>
                    <Marcadores>
                            {tags && 
                            tags.map((tag, index) => (
                                <NoteItem 
                                    key={String(index)}
                                    value={tag}
                                    onClick={() => handleRemoveTag(tag)}
                                    />
                                        
                            ))
                                
                            }
                            <NoteItem isNew placeholder="Novo marcador" value={newTag} setNewTag ={setNewTag} onClick={handleAddTag}></NoteItem>

                    </Marcadores>
                    <Buttons>
                        <div>
                            <Button title="Excluir filme" onClick={handleRemoveMovie}/>
                        </div>
                        <div>
                        <Button title="Salvar alterações" onClick={handleSaveNote}/>
                        </div>
                    </Buttons>
                </Form>
            </Main>
        </Container>
    )
}