import '../Styles/Portfolio.css';
import { useNavigate} from 'react-router-dom'; 

const PortfolioPage = () =>{

    const navigate = useNavigate();

    const handleHome = () => {
        navigate("/");
    };

    const handleGitHub = () => {
        window.open('https://github.com/Nickdoctor', '_blank');
    };

    const handleLinkedIn = () => {
        window.open('https://www.linkedin.com/in/nicolas-gugliemo-5776631b9/', '_blank');
    };

    return (
         <div>
            <p>
                Hello Test for Portfolio page!!
            </p>
            <button onClick={handleHome}> Home Page </button>
            <button onClick={handleGitHub}> Github </button>
            <button onClick={handleLinkedIn}> Linked In </button>
         </div>
    );
}
export default PortfolioPage;