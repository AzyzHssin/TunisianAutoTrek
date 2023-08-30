import React, { useEffect } from 'react';
import { GoogleButton } from 'react-google-button';
import { UserAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Signin = () => {
  const { googleSignIn, user } = UserAuth();
  const navigate = useNavigate();

  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const redirectToHome = () => {
      navigate('/');
    };

    if (user != null) {
      redirectToHome();
    }
  }, [user, navigate]);

  return (
    <>
      <div className='bg-slate-100 m-24 p-24 rounded-lg'>
        <h1 className='text-3xl text-center font-bold font-questrial py-8'>Signin In Now</h1>
        <div className='max-w-[240px] m-auto py-4'>
          <GoogleButton onClick={handleGoogleSignIn} />
        </div>
      </div>
    </>
  );
};

export default Signin;
