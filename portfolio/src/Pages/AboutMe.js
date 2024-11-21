import '../Styles/AboutMe.css';
import { useNavigate} from 'react-router-dom'; 

const AboutMePage = () =>{

    const navigate = useNavigate();

    const handleHome = () => {
        navigate("/");
      };

    return (
         <div>
            <p>
                Hello Test for about me page!!
            </p>
            <button onClick={handleHome}> Home Page </button>
         </div>
    );
}
export default AboutMePage;