import { Container} from './styles'

export function Input({icon:Icon, ...rest}){
    return(
        <Container>
            {Icon && <Icon size={20}/>} 
            <input {...rest}/>
        </Container>
    )
} //Input pode ou não ter um icon se tiver ele coloca a tag, senão não coloca