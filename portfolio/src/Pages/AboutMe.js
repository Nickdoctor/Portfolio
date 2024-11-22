import '../Styles/AboutMe.css';
import pic1 from "../Assets/NicolasGugliemo1.jpg";  //Cant use HEIC pics, must be defaulted JPG
import { useNavigate} from 'react-router-dom'; 

const AboutMePage = () =>{

    const navigate = useNavigate();

    return (
         <div>
            <p>
                Hello Test for about me page!!
            </p>

            <div>
                //<img src={pic1} alt="pic1"/>
            </div>
         </div>
    );
}
export default AboutMePage;