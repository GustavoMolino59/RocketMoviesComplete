import {Container} from './styles'
import { Link } from 'react-router-dom'

export function ButtonText({title, target, icon:Icon, ...rest}){
    return(

        <Container
            type='button'
            to={target}
            {...rest}
        >
            
            {Icon && <Icon size={20}/>} 
            {title}
            
        </Container>

    )
}