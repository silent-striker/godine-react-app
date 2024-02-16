import './App.css';
import Signup from './view/signup';
import Profile from './view/profile';
import NotFound from './components/notfound';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, {useState} from 'react';
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';

function App() {

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [signedUp, setSignedUp] = useState(false);

  const router = createBrowserRouter([
    {
      path:"/",
      element: <Navigate to="/signup" />,
      errorElement: <NotFound />
    },
    {
      path:"/signup",
      element:<Signup firstName={firstName}
                setFirstName={setFirstName}

                lastName={lastName}
                setLastName={setLastName}

                email={email}
                setEmail={setEmail}
                
                setSignedUp={setSignedUp} />
    },
    {
      path:"/profile",
      element: signedUp? <Profile firstName={firstName} lastName={lastName} email={email}/>: <Navigate to="/signup" />
    }
  ]);

  return (
    <RouterProvider router={router} />
  );
}

export default App;
