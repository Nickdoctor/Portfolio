import '../Styles/AboutMe.css';
import pic1 from "../Assets/NicolasGugliemo1.jpg";  //Cant use HEIC pics, must be defaulted JPG
import { useNavigate } from 'react-router-dom';
import { Typography } from '@mui/material';
import { Container, Row, Col } from 'react-bootstrap';

const AboutMePage = () => {

    const navigate = useNavigate();

    return (
        <div
            className="d-flex justify-content-center align-items-center"
            style={{ minHeight: "100vh", backgroundColor: "#f8f9fa" }} // Light background for full page
        >
            <div className="container text-center">
                <div className="card p-4 shadow-lg">
                    <h2 className="card-title mb-4">About Me</h2>
                    <Row className="align-items-center">
                        {/* Text Section */}
                        <Col md={6}>
                            <div>
                                <p>
                                    I am currently a computer science major at Sacramento State on track to graduate Fall 2024, seeking a full-time full-stack development job. I was a student at LMC on a 3-year plan to transfer for a computer science degree. I currently have an associate's in Liberal Arts: Math and Science, an associate for transfer degree for Mathematics, and graduated with honors in May of 2022. My GPA at LMC was 3.7. I have also completed the requirements for the IGETC certification and have received this certification.
                                </p>
                                <b>Achievements at Sacramento State University:</b>
                                <ul className="text-start">
                                    <li>Active member in MESA</li>
                                    <li>Member of WINS</li>
                                    <li>Active Member of Tau Sigma Honors Society</li>
                                    <li>Active Member of The National Society Of Leadership and Success</li>
                                    <li>PG&E mentorship through MESA</li>
                                    <li>Dean's Honors List every semester while undergraduate</li>
                                </ul>
                            </div>
                        </Col>

                        {/* Image Section */}
                        <Col md={6} className="text-center">
                            <img
                                src={pic1}
                                alt="About Me"
                                className="img-fluid rounded shadow"
                                style={{ maxHeight: "400px" }}
                            />
                        </Col>
                    </Row>
                </div>
            </div>
        </div>
    );
}
export default AboutMePage;