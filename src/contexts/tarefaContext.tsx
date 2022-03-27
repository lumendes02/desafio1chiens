import axios from "axios";
import { exit } from "process";
import { createContext, ReactNode, useEffect, useState } from "react";

interface InterfaceEditarTarefa {
    editar: boolean;
    tarefa: InterfaceTarefas | null;
}

interface interfaceTarefaContext {
    tarefas: Array<InterfaceTarefas>;
    criarTarefas: (data: PropsTarefasInput) => Promise<void>;
    funEditarTarefa: (data: InterfaceEditarTarefa) => void;
    editarTarefa: InterfaceEditarTarefa;
    valoresPadraoEditarTarefa: () => void;
    excluirTarefa: (data: InterfaceTarefas) => Promise<void>;
    atualizarTarefa: (data: InterfaceTarefas) => Promise<void>;
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
    const [editarTarefa, setEditarTarefa] = useState<InterfaceEditarTarefa>({
        editar: false, tarefa: null
    });

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

    async function atualizarTarefa(data: InterfaceTarefas) {
        await axios.put('/api/tarefas', data)
        .then((res) => {
            console.log(res)
        })
        .catch((err) => {
            console.log(err)
        })

        await axios.get('/api/tarefas').then((resposta) => {

            setTarefas(resposta.data)

        })
    }

    async function excluirTarefa(data: InterfaceTarefas) {
        await axios.delete('/api/tarefas/' + data.id)
        .then((res) => {
            console.log(res)
        })
        .catch((err) => {
            console.log(err)
        })

        await axios.get('/api/tarefas').then((resposta) => {

            setTarefas(resposta.data)

        })
    }

    function valoresPadraoEditarTarefa() {
        setEditarTarefa({ editar: false, tarefa: null })
    }

    function funEditarTarefa(data: InterfaceEditarTarefa) {
        setEditarTarefa(data)
    }

    return (
        <TarefaContext.Provider value={{
            tarefas, criarTarefas,
            atualizarTarefa,
            excluirTarefa,
            funEditarTarefa, editarTarefa, valoresPadraoEditarTarefa,
        }}>
            {props.children}
        </TarefaContext.Provider>
    )
}
