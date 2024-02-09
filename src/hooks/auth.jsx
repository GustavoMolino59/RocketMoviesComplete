import { api } from '../services/api';
import { useContext, useState, createContext, useEffect } from 'react';

export const AuthContext = createContext({})

function AuthProvider({children}){
    const[data, setData] = useState({})
    async function signIn({email, password}){
        try{
            const response = await api.post("/sessions", {email, password}) //criar a sessão
            const{user, token} = response.data; //obter a resposta e desestruturar ela

            localStorage.setItem("@rocketmovies:user", JSON.stringify(user))
            localStorage.setItem("@rocketmovies:token", token) //salvar as informações no localStorage para quando recarregar a tela não morrer

            api.defaults.headers.common['Authorization'] = `Bearer ${token}`

            setData({user, token});

        }catch(error){
            if(error.response){
                alert(error.response.data.message)
            }else{
                alert("Não foi possível conectar")
            }
        }
    }

    async function signOut(){
        const user = localStorage.removeItem("@rocketmovies:user")
        const token = localStorage.removeItem("@rocketmovies:token")

        setData({})
    }

    async function updateProfile({user, avatarFile}){
        try{
            if(avatarFile){
                const fileUploadForm = new FormData() //Classe utilizado para conjunto chave:valor usada pra enviar fomulario e upload
                fileUploadForm.append("avatar", avatarFile) //Adiciona a chave/valor avatar: avatar file
                const response = await api.patch("/users/avatar", fileUploadForm) //Faz o upload
                user.avatar = response.data.avatar //Pega o local onde foi armazenado o file e passa para user avatar
            }
            await api.put("/users", user)
            
            localStorage.setItem("@rocketmovies:user", JSON.stringify(user))

            setData({user, token: data.token})

            alert("Perfil atualizado")
        }catch(error){
            if(error.response){
                alert(error.response.data.message)
            }else{
                alert("Não foi possível entrar")
            }
        }
    }

    useEffect( () => {
        const user =  localStorage.getItem("@rocketmovies:user")
        const token =  localStorage.getItem("@rocketmovies:token")

        if(user && token){

            api.defaults.headers.common['Authorization'] = `Bearer ${token}`
            setData({user:JSON.parse(user), token})
        }
    }, [])

    return(
        <AuthContext.Provider value={{signIn, user: data.user, signOut, updateProfile}}>
            {children}
        </AuthContext.Provider>
    ) //returna um contexto que prove todas as funções para todos os filhos. Ele é colocado acima de routes em main.jsx para prover tudo a todas as pages

}

function useAuth(){
    const context = useContext(AuthContext)

    return context
}


export{AuthProvider, useAuth}