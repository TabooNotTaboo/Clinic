import React, { useState, useEffect } from 'react';
import { verifyEmail } from '../../redux/Slice/verifyEmailSlice';
import { Link } from 'react-router-dom';

function VerifyEmail() {
    const [email, setEmail] = useState('');
    const [hash, setHash] = useState('');
    const [isVerifying, setIsVerifying] = useState(false);
    const [verificationSuccess, setVerificationSuccess] = useState(null);

    useEffect(() => {
        const queryParams = new URLSearchParams(window.location.search);
        const emailFromParams = queryParams.get('email');
        const hashFromParams = queryParams.get('hash');

        setEmail(emailFromParams);
        setHash(hashFromParams);

        if (emailFromParams && hashFromParams) {
            setIsVerifying(true);
            verifyEmail(emailFromParams, hashFromParams)
                .then(data => {
                    console.log('Verification succeeded:', data);
                    setIsVerifying(false);
                    setVerificationSuccess(true);
                })
                .catch(error => {
                    console.error('Verification failed:', error);
                    setIsVerifying(false);
                    setVerificationSuccess(false);
                });
        }        
    }, []);

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="p-8 bg-white shadow-lg rounded-lg text-center">
                {isVerifying ? (
                    <p>Please wait, verifying your email...</p>
                ) : verificationSuccess ? (
                    <div>
                        <p>✔️ Verification successful!</p>
                        <p>Please come back to the <Link to="/login" className="text-blue-600 hover:text-blue-800">login</Link> page.</p>
                    </div>
                ) : verificationSuccess === false ? (
                    <p>Verification failed!</p>
                ) : null}
            </div>
        </div>
    );
}

export default VerifyEmail;
