import './index.css'; 

const Button = (props) => {
    const { buttonText, onClick }= props;
    //Por props se puede recibir variables, funciones y otros componentess
    const onClickHandler =()=> {
        // Este metodo es para controlar el error es para que la aplicaión no falle
        onClick && onClick();
    }
    return (
        <div className="landing-button" onClick={()=> onClickHandler()}>
        { buttonText }
        </div>
    );

}

export default Button; 