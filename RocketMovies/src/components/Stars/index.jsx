import { Container, StarFull, StarEmpty } from "./styles";


export function Stars({ data, ...rest}){
    return(
        <Container {...rest}>
            {[...Array(data.rating)].map((_, i) => (
                        <StarFull key={`full-${i}`}/>
                    ))}
            {[...Array(5 - data.rating)].map((_, i) => (
                    <StarEmpty key={`empty-${i}`} />
                ))}
        </Container>
    )
}