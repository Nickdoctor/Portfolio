import { Typography } from '@mui/material';
import '../Styles/Portfolio.css';
import { useNavigate} from 'react-router-dom'; 
import { Container, Row, Col } from 'react-bootstrap';
import pic1 from "../Assets/Manpreet.png";
import pic2 from "../Assets/fire.png";
import pic3 from "../Assets/HFS.png";

const PortfolioPage = () =>{

    const navigate = useNavigate();

    const handleGitHub = () => {
        window.open('https://github.com/Nickdoctor', '_blank');
    };

    const handleLinkedIn = () => {
        window.open('https://www.linkedin.com/in/nicolas-gugliemo-5776631b9/', '_blank');
    };
    const handleLink = (url) => {
        window.open(url, "_blank");
    };

    return (
<div
            className="d-flex justify-content-center align-items-center"
            style={{ minHeight: "100vh", backgroundColor: "#f8f9fa" }} // Light background for full page
        >
            <div className="container text-center">
                <div className="card p-4 shadow-lg">
                    <h2 className="card-title mb-4">Portfolio</h2>
                    <Row className="align-items-center">
                        <Col md={6}>
                                <Typography variant="h5" sx={{ mb: 2 }}>
                                    GlambyManpreet.net
                                </Typography>
                            <button class="btn btn-primary" onClick={() =>handleLink("https://glambymanpreet.net/")}>Link to Site</button>
                        </Col>
                        <Col md={6} className="text-center">
                            <img
                                src={pic1}
                                alt="Manpreet"
                                className="img-fluid rounded shadow hover-effect"
                                style={{ maxHeight: "400px" }}
                            />
                        </Col>
                        <Col md={6} className="text-center">
                            <img
                                src={pic2}
                                alt="fire"
                                className="img-fluid rounded shadow hover-effect"
                                style={{ maxHeight: "400px" }}
                            />
                        </Col>
                        <Col md={6}>
                                <Typography variant="h5" sx={{ mb: 2 }}>
                                    Fire detection using computer vision
                                </Typography>
                                <button class="btn btn-primary" onClick={() =>handleLink("https://www.linkedin.com/feed/update/urn:li:activity:7266877136404131840/")}> Link to Paper</button>
                        </Col> 
                        <Col md={6}> 
                                <Typography variant="h5" sx={{ mb: 2 }}>
                                    HFSSoft
                                    Software Engineer Internship 2024
                                </Typography>
                            <button class="btn btn-primary" onClick={() =>handleLink("https://www.hfssoft.com/")}>Link to Site</button>
                        </Col>
                        <Col md={6} className="text-center">
                            <img
                                src={pic3}
                                alt="HFS"
                                className="img-fluid rounded shadow hover-effect"
                                style={{ maxHeight: "400px"  }}
                            />
                        </Col>
                    </Row>
                </div>
            </div>
        </div>
    );
}
export default PortfolioPage;