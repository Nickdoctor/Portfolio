import { Typography } from '@mui/material';
import "bootstrap/dist/css/bootstrap.min.css";
import '../Styles/Home.css';
import { useNavigate} from 'react-router-dom'; 

const HomePage = () =>{
    const navigate = useNavigate();

    return (
         <div>
           <Typography align='center' className="text-success">
            Work in progress!! Feel free to look around!
           </Typography>
         </div>
    );
}
export default HomePage;