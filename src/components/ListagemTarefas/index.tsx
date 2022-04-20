import { useContext, useState } from "react";
import { Container, Container2 } from "./styles";
import { TarefaContext } from "../../contexts/tarefaContext";
import { FaPen, FaTrash } from 'react-icons/fa'

interface interfaceTarefas {
    descricao: string;
    id: string;
    titulo: string;
}

interface PropsListarTarefas {
    abrirModal: () => void;
}
export function ListagemTarefas({ abrirModal }: PropsListarTarefas) {

    const tarefaCtx = useContext(TarefaContext);

    // const [tarefas, setTarefas] = useState<Array<interfaceTarefas>>([]);


    return (
        <>
        <Container2>
            <Container>
                <ul>
                    <h3>Quadro 1</h3>
                    {
                        tarefaCtx.tarefas.filter(tarefas => tarefas.quadro === '1').map((element, index) => (
                            <li key={element.id} >
                                <div style={{
                                    display: 'flex',
                                    flexDirection: 'column'
                                }}>
                                    <h4>{element.titulo}</h4>
                                    <p>{element.descricao}</p>
                                </div>
                                <div>
                                    <button
                                        type="button"
                                        onClick={() => {
                                            tarefaCtx.funEditarTarefa({
                                                editar: true,
                                                tarefa: element
                                            })
                                            abrirModal();
                                        }}
                                    >
                                        <FaPen />
                                    </button>
                                </div>
                            </li>
                        ))
                    }

                </ul>
            </Container>
            <Container>
                <ul>
                    <h3>Quadro 2</h3>
                    {
                        tarefaCtx.tarefas.filter(tarefas => tarefas.quadro === '2').map((element, index) => (
                            <li key={element.id} >
                                <div style={{
                                    display: 'flex',
                                    flexDirection: 'column'
                                }}>
                                    <h4>{element.titulo}</h4>
                                    <p>{element.descricao}</p>
                                </div>
                                <div>
                                    <button
                                        type="button"
                                        onClick={() => {
                                            tarefaCtx.funEditarTarefa({
                                                editar: true,
                                                tarefa: element
                                            })
                                            abrirModal();
                                        }}
                                    >
                                        <FaPen />
                                    </button>
                                </div>
                            </li>
                        ))
                    }

                </ul>
                </Container>
                <Container>
                <ul>
                    <h3>Quadro 3</h3>
                    {
                       tarefaCtx.tarefas.filter(tarefas => tarefas.quadro === '3').map((element, index) => (
                            <li key={element.id} >
                                <div style={{
                                    display: 'flex',
                                    flexDirection: 'column'
                                }}>
                                    <h4>{element.titulo}</h4>
                                    <p>{element.descricao}</p>
                                </div>
                                <div>
                                    <button
                                        type="button"
                                        onClick={() => {
                                            tarefaCtx.funEditarTarefa({
                                                editar: true,
                                                tarefa: element
                                            })
                                            abrirModal();
                                        }}
                                    >
                                        <FaPen />
                                    </button>
                                </div>
                            </li>
                        ))
                    }

                </ul>
            </Container>
            </Container2>
        </>
    )
}
