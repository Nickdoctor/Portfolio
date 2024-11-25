import '../Styles/ContactMe.css';
import EmailIcon from '@mui/icons-material/Email';
import PersonIcon from '@mui/icons-material/Person';
import MessageIcon from '@mui/icons-material/Message';
import { InputAdornment, TextField, IconButton } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import React, {useState} from 'react';
import axios from 'axios';
const ContactMePage = () => {

    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [data, setData] = useState([]);
    const [error, setError] = useState('');
    
    const handleName = (event) => {
        setName(event.target.value); 
    };

    const handleEmail = (event) => {
        setEmail(event.target.value); 
    };

    const handleMessage = (event) => {
        setMessage(event.target.value); 
    };

    const submitHandler = async (event) => {
        event.preventDefault()

        const user = {
        name:name,
        email:email,
        message:message
    }
      if (!name || !email || !message) {
        setError("All fields are required.");
        console.log('Fully fill in the field')
        return;
      }
  
      // Reset error if validation passes
      setError('');
    try {
        const response = await axios.post('/api/send', {
            name,
            email,
            message,
        });

        if (response.status === 200) {
            alert('Email sent successfully!');
        }
    } catch (error) {
        console.error('Error sending email:', error);
        alert('Failed to send email. Please try again later.');
    }
        setData([...data,user])
        setName("");
        setEmail("");
        setMessage("");
        console.log("Message attempted to Send")
    };

    return (
            <>
              <div 
                className="d-flex justify-content-center align-items-center" 
                style={{ minHeight: "100vh" }}
              >
                <div className="container text-center">
                  <div className="row justify-content-center">
                    <div className="col-md-6">
                      {/* Card container */}
                      <div className="card p-4 shadow-lg">
                        <h3 className="card-title mb-4">Contact Me</h3>
                        <p>Please fill in the following form to send me an email!</p>
                        <p>Leave your email so I can respond!</p>
                        <form onSubmit={submitHandler}>
                          <div className="mb-3">
                            <label htmlFor="exampleFormControlInput1" className="form-label">
                              Full Name
                            </label>
                            <TextField
                              type="text"
                              className="form-control"
                              id="exampleFormControlInput1"
                              placeholder="John Doe"
                              value={name}
                              onChange={handleName}
                              InputProps={{
                                startAdornment : (
                                    <InputAdornment position='start'>
                                        <PersonIcon />
                                    </InputAdornment>
                                ),
                              }}
                            />
                          </div>
                          <div className="mb-3">
                            <label htmlFor="exampleFormControlInput1" className="form-label">
                              Email address
                            </label>
                            <TextField
                              type="email"
                              className="form-control"
                              id="exampleFormControlInput1"
                              placeholder="name@example.com"
                              value={email}
                              onChange={handleEmail}
                              InputProps={{
                                startAdornment : (
                                    <InputAdornment position='start'>
                                        <EmailIcon />
                                    </InputAdornment>
                                ),
                              }}
                            />
                          </div>
                          <div className="mb-3">
                            <label htmlFor="exampleFormControlTextarea1" className="form-label">
                              Please Enter Message Below
                            </label>
                            <TextField
                              className="form-control"
                              id="exampleFormControlTextarea1"
                              fullWidth
                              multiline
                              rows='10'
                              value={message}
                              onChange={handleMessage}
                              InputProps={{
                                startAdornment : (
                                    <InputAdornment position='start'>
                                        <MessageIcon />
                                    </InputAdornment>
                                ),
                              }}
                            />
                          </div>
                          <button type="submit" className="btn btn-primary">
                            Send
                          </button>
                        </form>
                      </div>
                      {/* End of card */}
                    </div>
                  </div>
                </div>
              </div>
            </>
          );
}
export default ContactMePage;