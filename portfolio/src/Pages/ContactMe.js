import '../Styles/ContactMe.css';
import { useNavigate} from 'react-router-dom'; 

const ContactMePage = () =>{

    const navigate = useNavigate();

    return (
         <div>
            <p>
                Hello Test for contact Me page
            </p>
         </div>
    );
}
export default ContactMePage;