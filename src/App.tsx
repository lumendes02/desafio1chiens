import { useState } from 'react';
import { GlobalStyle } from './styles/global'
import { Header } from './components/Header'
import { NovoModal } from './components/Modal'
import Modal from 'react-modal';

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
        <div>
            <GlobalStyle />

            <Header abrirModal={abrirModal} />

            <NovoModal
                visibleNovoModal={visibleModal}
                fecharModal={fecharModal}
            />

        </div>
    );
}

export default App;
