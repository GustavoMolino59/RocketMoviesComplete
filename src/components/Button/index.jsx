import { Container} from './styles.js'
import { Link } from 'react-router-dom'
export function Button({title, icon:Icon, loading = false, target, ...rest}){
    return(
        <Link to={target}>
            <Container
                type="button"
                disabled = {loading}
                {...rest}   
            >
                {Icon && <Icon size={20}/>}
                
                {loading ? 'Carregando' : title}
            </Container>
        </Link>
    )
}