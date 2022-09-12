import React from 'react';
import auth from '../../firebase.init';
import { useAuthState, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Button } from '@material-tailwind/react';
import { useLocation, useNavigate } from 'react-router-dom';

const LogIn = () => {
    const [signInWithGoogle] = useSignInWithGoogle(auth);
    const location = useLocation()
    const navigate = useNavigate()
    const [user] = useAuthState(auth)
    const from = location?.state?.from?.pathname || '/';
    const handleGoogle = () => {
        signInWithGoogle()
    }
    if (user) {
        const url = 'http://localhost:5000/signin';
        const email = user.email;
        fetch(url, {
            method: 'POST',
            body: JSON.stringify({ email }),
            headers: { 'Content-type': 'application/json' },
        })
            .then((response) => response.json())
            .then((data) => { console.log(data) });
        navigate(from, { replace: true })
    }

    return (
        <div>
            <Button onClick={handleGoogle}>Continue with google</Button>

        </div>
    );
};

export default LogIn;