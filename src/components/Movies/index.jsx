import ClampLines from "react-clamp-lines";
import { Container, Estrelas, StarFull, StarEmpty, Tags } from "./styles";
import { Stars } from "../Stars";
import { Tag } from '../Tag'


export function Movie({data, ...rest}){
    
    return(
        
        <Container to="./details/4"{...rest}>
            <strong>{data.title}</strong>
            <Stars key = {data.id} data = {data}/>
            <p>
                <ClampLines 
                    text={data.description} 
                    id={data.movieId}  
                    lines={2}
                    ellipsis="..."
                    buttons={false}
                    innerElement="p">
                </ClampLines>
            </p>
            {
                data.tags &&
                <Tags>
                    {data.tags.map(tag => <Tag key={tag.id} title={tag.title}/> )}
                </Tags>
            }
        </Container>
    )
}