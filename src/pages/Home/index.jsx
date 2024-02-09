import { Container, Section, Main } from "./styles"
import { FiPlus } from "react-icons/fi"
import ClampLines from "react-clamp-lines"
import { Header } from "../../components/Header"
import { Button } from "../../components/Button"
import { Movie } from "../../components/Movies"

import { useEffect, useState } from "react"
import { api } from "../../services/api"
import { useAuth } from "../../hooks/auth"

export function Home() {
    const [title, setTitle] = useState("");
    const[tags, setTags] = useState("")
    
    const[notes, setNotes] = useState([])

    

    useEffect(() => {
        const filterTags =  tags.split(",").map(tag =>tag.trim())
        async function fetchMovies(){
            const response = await api.get(`/movies?title=${title}&tags=${tags}`)
            setNotes(response.data)
        }
        fetchMovies()
    },[title, tags ])


        return(
            <Container>
                <Header onSearchTitle={setTitle} onSearchTag={setTags}/>
                <Main>
                    <div>
                        <h1>Meus Filmes</h1>
                        <Button icon={FiPlus} title="Adicionar Filme" target="/new"/>
                    </div>
                    <Section>
                        {notes.map( note => (
                            <Movie key={String(note.id)} data={note}/>
                        ))
                        }
                    </Section>
                </Main>
            </Container>
        )
}