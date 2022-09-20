import { useState, useContext } from "react";
import { UserContext } from "../contexts/user"
import Nome from "./Nome"

export default function Alunos(){

    const { nomeAluno, setNomeAluno } = useContext(UserContext);
    const [ nomeInput, setNomeInput ] = useState(nomeAluno);

    return (
        <div>
            <h2>Component Alunos</h2>
            <h3 style={{color: "blue"}}>{nomeAluno}</h3>
            <h3 style={{color: "blue"}}>{nomeInput}</h3>
            <Nome/><br/>
            <input value={ nomeInput } onChange={e => setNomeInput(e.target.value)} type="text" />
            <button onClick={() => setNomeAluno(nomeInput)}>Mudar nome</button>
        </div>
    )
}