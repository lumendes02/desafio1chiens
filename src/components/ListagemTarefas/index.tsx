import { useCallback, useContext, useEffect, useState } from "react";
import axios from "axios";
import { Container } from "./styles";
import { TarefaContext } from "../../contexts/tarefaContext";

interface interfaceTarefas {
    descricao: string;
    id: string;
    titulo: string;
}

export function ListagemTarefas() {


    const tarefaCtx = useContext(TarefaContext);

    const [tarefas, setTarefas] = useState<Array<interfaceTarefas>>([]);

    console.log('tarefaCtx')
    console.log(tarefaCtx)

    useEffect(() => {

        axios.get('/api/tarefas').then((res) => {
            setTarefas(res.data)
        })

    }, [])
    

    return (
        <>
            <Container>
                <ul>
                    <h3>Quadro 1</h3>
                    {
                        tarefas.map((element, index) => (
                            <li>
                                <div>
                                    <h4>{element.titulo}</h4>
                                    <p>{element.descricao}</p>
                                </div>
                            </li>
                        ))
                    }

                </ul>
            </Container>
        </>
    )
}
