import { Typography } from '@mui/material';
import "bootstrap/dist/css/bootstrap.min.css";
import '../Styles/Home.css';
import { useNavigate} from 'react-router-dom'; 
import { useState, useEffect } from 'react';
import  supabase  from '../supabaseClient';
const HomePage = () =>{
    const navigate = useNavigate();
    const [userRole, setUserRole] = useState(null); // 'admin' or 'user'
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      const fetchUserRole = async () => {
          try {
              setLoading(true);

              // Get the current user
              const { data: sessionData, error: sessionError } = await supabase.auth.getSession();
              if (sessionError) throw sessionError;

              const user = sessionData?.session?.user;
              if (!user) {
                  setUserRole(null); // Not logged in
                  return;
              }

              // Check if the user is in the admin table
              const { data: adminData, error: adminError } = await supabase
                  .from('admin')
                  .select('email')
                  .eq('email'.toLowerCase(), user.email.toLowerCase()); // Ensure case-insensitivity

              if (adminError) throw adminError;

              // Set role based on admin table presence
              if (adminData && adminData.length > 0) {
                  setUserRole('admin');
              } else {
                  setUserRole('user');
              }
          } catch (error) {
              console.error('Error fetching user role:', error);
              setUserRole(null);
          } finally {
              setLoading(false);
          }
      };

      fetchUserRole();
  }, []);

  if (loading) {
      return <p>Loading...</p>;
  }
    return (
         <div>
           <Typography align='center' className="text-success">
            Work in progress!! Feel free to look around! You are not logged In
           </Typography>
           {userRole === 'admin' && <Typography>You are an admin</Typography>}
           {userRole === 'user' && <Typography>You are a user</Typography>}

         </div>
    );
}
export default HomePage;