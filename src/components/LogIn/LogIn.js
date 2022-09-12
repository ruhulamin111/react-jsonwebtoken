import React from 'react';
import auth from '../../firebase.init';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Button } from '@material-tailwind/react';


const LogIn = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
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