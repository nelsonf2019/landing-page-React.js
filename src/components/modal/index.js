import './index.css'; 

const Modal = (props) => {
const { visible, children, onclose  } = props; 
//Verificamos si es visible o no de esta forma

    const onCloseHandler =()=> {

        onclose && onclose();

    }
    return visible ? (
        <div className="landing-modal--container">
            <div className="landing-modal">
                <div className="landing-modal--close-icon" onClick = {()=>{onCloseHandler()}}></div>
                    { children }
            </div>
                <div className="landing-modal--overlay"></div>
        </div>
    )  : null;

}

export default Modal; 