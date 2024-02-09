import { Container, Form, Avatar } from "./styles";
import { FiArrowLeft, FiCamera, FiUser, FiLock, FiMail } from "react-icons/fi";
import { Input } from "../../components/Input";
import {ButtonText} from "../../components/ButtonText"
import { Button } from "../../components/Button";
import { useAuth } from "../../hooks/auth";
import { useState } from "react";
import avatarPlaceholder from '../../assets/avatar_placeholder.svg'
import { api } from "../../services/api";

export function Profile(){
    const[name, setName] = useState("")
    const[email, setEmail] = useState("")
    const[password, setPassword] = useState("")
    const[newPassword, setNewPassword] = useState("")

    //AVATAR
    const {updateProfile, user} = useAuth()
    const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder
    const[avatar, setAvatar] = useState(avatarUrl); //Avatar representa a url para acessar a imagem pra aparecer pro usuário
    const[avatarFile, setAvatarFile] = useState(null) //avatar file é o nome do arquivo pra passar pro banco de dados


    async function handleUpdate(){
        
        const updatedUser = {
            name,
            email,
            password: newPassword,
            old_password: password
        }
        console.log(updatedUser)
        const userUpdated = Object.assign(user, updatedUser)
        await updateProfile({user:userUpdated, avatarFile})
    }

    function handleChangeAvatar(event){
        const file = event.target.files[0];

        setAvatarFile(file);
        
        const imagePreview = URL.createObjectURL(file);
        setAvatar(imagePreview);
        console.log(avatarFile)
        console.log(avatar)
    }
    
    return(
        <Container>
            <header>
                <ButtonText title="Voltar" icon={FiArrowLeft} target="/"/>
            </header>
            <Form>
                <Avatar>
                <img src={avatar}/>
                <label htmlFor="avatar">
                        <FiCamera />

                        <input id="avatar" type="file" onChange={handleChangeAvatar}/>

                    </label>
                </Avatar>
                <Input placeholder='Nome' icon={FiUser} onChange={e => setName(e.target.value)} />
                <Input placeholder='Email' icon={FiMail} onChange={e => setEmail(e.target.value)} />
                <Input placeholder='Senha' icon={FiLock} onChange={e => setPassword(e.target.value)}/>
                <Input placeholder='Nova Senha' icon={FiLock} onChange={e => setNewPassword(e.target.value)}/>
                <Button title="Salvar" onClick={handleUpdate}/>
            </Form>
        </Container>
    )
}