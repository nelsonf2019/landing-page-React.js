import './index.css';
import Title from  './../title/index'; 
import Text from  './../text/index'; 
import ModalButtonWrapper from './../modal-button-wrapper';

const ContentContainer = () => {

    return (
        <div className="content-container">
            <div className="content-container--title">
                <Title title='PRÓXIMA MENTE' color="balck" fontSize="90px" letterSpacing="15px" />
                <Text text="¡Vamos a celebrar el lanzamiento de nuestro nuevo sitio!" color="balck" fontSize="15px" letterSpacing="3 px" />
                <ModalButtonWrapper buttonText="Notificarme"/>       
            </div>
        </div>
    );

}

export default ContentContainer;