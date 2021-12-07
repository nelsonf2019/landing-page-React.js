import './index.css'; 

const TextInput = (props) => {
const { feedback, placeholder, value } = props;

return (

    <div className="landing-input-wrapper">
        <input
            placeholder={ placeholder }
            type="text"
            className="landing-input-text"
            value={value}
        />
        <p className="landing-input-feedback"> { feedback } </p>

    </div>
);
   

}

export default TextInput; 