import { useContext, useState } from "react";
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


    return (
        <>
            <Container>
                <ul>
                    <h3>Quadro 1</h3>
                    {
                        tarefaCtx.tarefas.map((element, index) => (
                            <li key={element.id} >
                                <div>
                                    <h4>{element.titulo}</h4>
                                    <p>{element.descricao}</p>
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
