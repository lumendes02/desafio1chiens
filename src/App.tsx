import { useState } from 'react';
import { GlobalStyle } from './styles/global'
import { Header } from './components/Header'
import { NovoModal } from './components/Modal'
import Modal from 'react-modal';
import { ListagemTarefas } from './components/ListagemTarefas';
import { TarefaContext } from './contexts/tarefaContext';

Modal.setAppElement('#root');
function App() {

    const [visibleModal, setVisibleModal] = useState<boolean>(false);


    function abrirModal() {
        setVisibleModal(true)
    }

    function fecharModal() {
        setVisibleModal(false)
    }

    return (
        <TarefaContext.Provider value={[]}>
            <div>
                <GlobalStyle />

                <Header abrirModal={abrirModal} />

                <ListagemTarefas />

                <NovoModal
                    visibleNovoModal={visibleModal}
                    fecharModal={fecharModal}
                />

            </div>
        </TarefaContext.Provider>
    );
}

export default App;
