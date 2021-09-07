
import Modal from 'react-modal';
import { Content } from '../components/Header/styles';


interface INewTransactionModalProps{
isOpen:boolean,
onRequestClose:()=>void
}


export function NewTransactionModal({isOpen,onRequestClose}:INewTransactionModalProps){
  
    return(
        <Content>
        <Modal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        >
            <h2>Cadastrar Transação</h2>
        </Modal>
        </Content>
    )
}