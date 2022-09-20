import { useContext } from "react"
import { UserContext } from "../contexts/user"

export default function Nome(){

    const { nomeAluno } = useContext(UserContext);

    return (
        <div>
            <span style={{color: "red"}}>Seja bem vindo {nomeAluno}</span><br />
        </div>
    )
}