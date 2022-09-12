import React from 'react';
import auth from '../../firebase.init';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Button } from '@material-tailwind/react';
import { useLocation, useNavigate } from 'react-router-dom';


const LogIn = () => {
    const [signInWithGoogle, user] = useSignInWithGoogle(auth);
    const location = useLocation()
    const navigate = useNavigate()
    const from = location?.state?.from?.pathname || '/';
    if (user) {
        navigate(from, { replace: true })
    }
    const handleGoogle = () => {
        signInWithGoogle()
    }

    return (
        <div>
            <Button onClick={handleGoogle}>Continue with google</Button>

        </div>



    );
};

export default LogIn;