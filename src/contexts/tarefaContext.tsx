import axios from "axios";
import { createContext, ReactNode, useEffect, useState } from "react";

interface interfaceTarefaContext {
    tarefas: Array<InterfaceTarefas>;
    criarTarefas: (data: PropsTarefasInput) => Promise<void>;
}
export const TarefaContext = createContext({} as interfaceTarefaContext);

type InterfaceTarefas = {
    id: string,
    titulo: string,
    descricao: string
}

type PropsTarefasInput = Omit<InterfaceTarefas, 'id'>
// type PropsTarefasInput2 = Pick<InterfaceTarefas, 'titulo'| 'descricao'>

// interface PropsTarefasInput { 
//     titulo: string,
//     descricao: string 
// }

interface PropsTarefasProvider {
    children: ReactNode;
}

export function TarefasProvider(props: PropsTarefasProvider) {

    const [tarefas, setTarefas] = useState<Array<InterfaceTarefas>>([]);

    useEffect(() => {

        axios.get('/api/tarefas').then((res) => {
            setTarefas(res.data)
        })

    }, [])

    async function criarTarefas(data: PropsTarefasInput) {
        await axios.post('/api/tarefas', data)
            .then((res) => {

            })

        await axios.get('/api/tarefas').then((resposta) => {

            setTarefas(resposta.data)

        })
    }

    return (
        <TarefaContext.Provider value={{ tarefas, criarTarefas }}>
            {props.children}
        </TarefaContext.Provider>
    )
}
