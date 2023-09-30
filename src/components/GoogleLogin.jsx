import React from 'react'
import { useGoogleLogin } from '@react-oauth/google';
import { googleloginfunction } from '../services/Apis';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';


function GoogleLogin() {

    const navigate = useNavigate();

    const signinlogin = useGoogleLogin({
        onSuccess: async (coderesponse) => {
            console.log(coderesponse)
            const data = await googleloginfunction(coderesponse);
            if (data?.success) {
                toast.success('Successfuly login')
                localStorage.setItem('token', data?.authtoken)
                localStorage.setItem('user', JSON.stringify(data?.result));
                localStorage.setItem('username', JSON.stringify(data?.result?.username))
                setTimeout(() => {
                    navigate('/')
                }, 1000);
            }
        },
        onError: (error) => console.log('Login Failed:', error)
    });

    return (
        <>
            <ToastContainer />
            <div className="google_login_btn">
                <button onClick={() => signinlogin()}> <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRu1PJmT_THldF0n5APcmt9p10utgu6KSw4cH2fQ5Xhpw&s" alt="" /> Sign in with Google</button>
            </div>
        </>
    )
}

export default GoogleLogin