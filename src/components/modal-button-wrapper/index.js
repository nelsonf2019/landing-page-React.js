
import Button from './../button/button';
import Modal  from './../modal';
import Text from './../text/index';
import Title from './../title/index';
import TextInput from '../text-input/index';

const ModalButtonWrapper = (props) => {
    const {  buttonText } = props;
    
    const onButtonClick = () => {
        alert('Hola soy un mensaje')
    }

    const onClose  = () => {    
        console.log('Me cerré')
    }

    const onModalButtonCLick =()=> {
        console.log('Validé que el correo sea correcto')
    }

    return (
        <div className="modal-button-wrapper">
            <Button buttonText={buttonText} onClick={onButtonClick}/>
            <Modal visible={false} onClose={onClose}>
                 <Title title="REGÍSTRATE"/>
                 <Text text="Y mirá antes que nadie las novedades"/>
                 <TextInput placeholder="Ingresá tu Mail aquí"/>
                 <Button buttonText="Unirse" onClick={onModalButtonCLick}/>
            </Modal>
        </div>
    );

}

export default ModalButtonWrapper; 