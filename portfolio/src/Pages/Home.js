import '../Styles/Home.css';
import { useNavigate} from 'react-router-dom'; 

const HomePage = () =>{
    const navigate = useNavigate();

    const handleAboutMe = () => {
        navigate("/AboutMe");
      };
      
    return (
         <div>
            <p>
                Hello Test!!
            </p>
            <button onClick={handleAboutMe}> About me Page </button>
         </div>
    );
}
export default HomePage;