import { FormEvent, useContext, useEffect, useState } from 'react';
import Modal from 'react-modal';
import { FaWindowClose } from 'react-icons/fa';
import { FormContainer } from './styles';
import axios from 'axios';
import { TarefaContext } from '../../contexts/tarefaContext';

interface NovoModalProps {
    visibleNovoModal: boolean;
    fecharModal: () => void;
}

export function NovoModal(props: NovoModalProps) {

    const {
        criarTarefas,
        editarTarefa,
        valoresPadraoEditarTarefa,
        atualizarTarefa,
        excluirTarefa
    } = useContext(TarefaContext);

    const [quadro, setQuadro] = useState("");
    const [titulo, setTitulo] = useState("");
    const [descricao, setDescricao] = useState("");

    useEffect(() => {
        if (editarTarefa.editar) {
            setTitulo(editarTarefa.tarefa?.titulo ?
                editarTarefa.tarefa.titulo : '');

            setDescricao(editarTarefa.tarefa?.descricao ?
                editarTarefa.tarefa.descricao : '');

            setQuadro(editarTarefa.tarefa?.quadro ?
                 editarTarefa.tarefa.quadro : '');

        }
    }, [editarTarefa.editar])

    function limparCamposAoFecharModal() {
        setTitulo('')
        setDescricao('')
        valoresPadraoEditarTarefa();
        props.fecharModal();
    }

    function onSubmitModal(event: FormEvent) {
        //não deixa com que o formulario de reload na pagina
        event.preventDefault();

        if (editarTarefa.editar) {

            let obj: any = {
                ...editarTarefa.tarefa,
                quadro,
                titulo,
                descricao
            }

            atualizarTarefa(obj)
        } else {
            criarTarefas({
                quadro,
                titulo,
                descricao
            })
        }


        limparCamposAoFecharModal();
    }

    function excluir() {
        let obj: any = {
            ...editarTarefa.tarefa,
            titulo,
            descricao
        }
        excluirTarefa(obj);
        limparCamposAoFecharModal();
    }

    return (
        <Modal
            isOpen={props.visibleNovoModal}
            onRequestClose={() => limparCamposAoFecharModal()}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
        >
            <button
                type='button'
                onClick={() => limparCamposAoFecharModal()}
                className="react-modal-close"
            >
                <FaWindowClose />
            </button>

            <FormContainer onSubmit={onSubmitModal} >
                <h2>Cadastrar Tarefa</h2>

                <select value={quadro} onChange={(event) => setQuadro(event.target.value)}>
                    <option value="">-</option>
                    <option value="1">Quadro 1</option>
                    <option value="2">Quadro 2</option>
                    <option value="3">Quadro 3</option>
                </select>


                <input
                    placeholder='Titulo'
                    value={titulo}
                    onChange={(event) => setTitulo(event.target.value)}
                />

                <textarea
                    placeholder='Descrição'
                    value={descricao}
                    onChange={(event) => setDescricao(event.target.value)}
                />

                <button
                    type='submit'
                >
                    {editarTarefa.editar ? 'Editar' : 'Cadastrar'}
                </button>

                {editarTarefa.editar && <button
                     type="button"
                     onClick={() => excluir()}
                >
                    Excluir
                </button>}
            </FormContainer>

        </Modal>
    )
}
