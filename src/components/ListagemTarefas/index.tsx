import { useContext, useState } from "react";
import { Container } from "./styles";
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
            <Container>
                <ul>
                    <h3>Quadro 1</h3>
                    {
                        tarefaCtx.tarefas.map((element, index) => (
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
                                    <button
                                        type="button"
                                        onClick={() => tarefaCtx.excluirTarefa(element)}
                                    >
                                        <FaTrash />
                                    </button>
                                </div>
                            </li>
                        ))
                    }

                </ul>
                {/* 
                <TarefaContext.Consumer>
                        {
                            (data) => {
                                console.log('data ctx');
                                console.log(data);

                                return <div>ok</div>
                            }
                        }
                    </TarefaContext.Consumer>
                     */}
            </Container>
        </>
    )
}
