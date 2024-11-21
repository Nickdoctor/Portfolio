import '../Styles/AboutMe.css';
import { useNavigate} from 'react-router-dom'; 

const AboutMePage = () =>{

    const navigate = useNavigate();

    return (
         <div>
            <p>
                Hello Test for about me page!!
            </p>
         </div>
    );
}
export default AboutMePage;