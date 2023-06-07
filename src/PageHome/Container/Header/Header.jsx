import "./Header.css";
import Slider from "../../../components/Slider/Slider";
import CustomButton from "../../../components/Button/Button";
import { Link } from 'react-router-dom';


export default function Header({authentication}){
    return(
        <div className="header-container">
            <div>
                {authentication && (
                    <img
                        src="/icon/pencil.svg"
                        alt="Modifier"
                        className="pencil-logo"
                    />
                )}
                <h1 className="header-title">TITRE</h1>
            </div>
            <div className="login-button-container">
                <Link to="/authentication">
                    <CustomButton authentication={true} />
                </Link>
            </div>
            <div className="slider-container">
                <Slider authentication={authentication}/>
            </div>
        </div>
    );

}

