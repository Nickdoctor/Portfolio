import '../Styles/Home.css';
import { useNavigate} from 'react-router-dom'; 

const HomePage = () =>{
    const navigate = useNavigate();

    const handleAboutMe = () => {
        navigate("/AboutMe");
    };

    const handlePortfolio = () => {
        navigate("/Portfolio");
    };

    return (
         <div>
            <p>
                Hello Test!!
            </p>
            <button onClick={handleAboutMe}> About me Page </button>
            <button onClick={handlePortfolio}> Portfolio </button>
         </div>
    );
}
export default HomePage;