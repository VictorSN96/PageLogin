import { useContext } from "react";
import { AuthContext } from "../../contexts/Auths/AuthContext";


export const Consulta = () =>{
    const auth = useContext(AuthContext);

    return(
        <div>
            <h2> Consulta de Tickets</h2>

            Bem-Vindo {auth.user?.name}, ao HelpDesk!
        </div>
    );
}