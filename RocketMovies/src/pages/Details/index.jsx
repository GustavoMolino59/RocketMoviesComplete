import { Container, Main, Autor, Tags, Title } from "./styles";
import { FiArrowLeft, FiClock } from "react-icons/fi";
import { Header } from "../../components/Header";
import { ButtonText } from "../../components/ButtonText";
import { Stars } from "../../components/Stars";
import { Tag } from "../../components/Tag";

import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { useParams } from "react-router-dom";
import avatarPlaceholder from '../../assets/avatar_placeholder.svg'
import { useAuth } from "../../hooks/auth";
import { format } from 'date-fns';
export function Details(){
    const { user } = useAuth();
    const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder
    const params = useParams()
    const[data, setData] = useState(null)
    
    useEffect(() => {
        async function fetchMovie(){
            const response = await api.get(`/movies/${params.id}`)
            setData(response.data)

        }
        fetchMovie()
       
    },[])
    return(
        <Container>
            <Header/>
                {data &&
                <Main>
                    <ButtonText title="Voltar" icon={FiArrowLeft} target="/"/>
                    <Title>
                        <h1>{data.note.title}</h1>
                        <Stars key={data.id} data={{rating: data.note.rating}}/>
                    </Title>
                    <Autor>
                        <img src="https:github.com/GustavoMolino59.png"/>
                        <span>{user.name}</span>
                        <FiClock/>
                        <span> {format(new Date(data.note.created_at), 'dd/MM/yy \'ás\' HH:mm')}</span>
                    </Autor>
                    <Tags>
                        { data.tags &&
                            data.tags.map(tag => 
                                (<Tag key={String(tag.id)} title={tag.title}/>)
                            )
                        
                        }
                    </Tags>
                    <p>{data.note.description}
                    </p>
                </Main>
                }   
        </Container>
    )
}