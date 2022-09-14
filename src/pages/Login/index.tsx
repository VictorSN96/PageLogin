import { useContext, ChangeEvent, useState} from "react";
import { AuthContext } from "../../contexts/Auths/AuthContext";
import {useNavigate } from 'react-router-dom';

export const Login = () =>{
    const auth = useContext(AuthContext);
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword]= useState('');

    const handleEmailInput = (event: ChangeEvent<HTMLInputElement>) =>{
        setEmail(event.target.value);
    }

    const handlePasswordInput = (event: ChangeEvent<HTMLInputElement>) =>{
        setPassword(event.target.value);
    }

    const handleLogin = async () =>{
        if(email && password){
            const isLogged = await auth.signin(email, password);
            if(isLogged){
                navigate('/');
            }else
                alert("Não foi possivel logar!")
        }
    }

    return(
        <div>
            <h2>Login Satel HelpDesk</h2>

            <input 
                type="text" 
                value={email} 
                //onChange={e => setEmail(e.target.value)}
                onChange={handleEmailInput}
                placeholder="Digites seu email"
            />
            <input 
                type="password" 
                value={password} 
                //onChange={e => setPassword(e.target.value) }
                onChange={handlePasswordInput}
                placeholder ="Digite sua senha"
            />

            <button onClick={handleLogin}>Login</button>
        </div>
    );
}