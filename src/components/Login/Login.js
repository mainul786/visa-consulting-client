import React, { useContext } from 'react';
import { UserContext } from '../context/AuthContext/AuthContext';
import { useLocation, useNavigate } from 'react-router-dom';

const Login = () => {
    const { login, googleLogin } = useContext(UserContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const handleLogin = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        login(email, password)
        .then(result => {
            const user = result.user;
            console.log(user)
            navigate(from, { replace: true });
        })
        .catch(err => console.error(err))
    }

    const handleGoogleLogin = () =>{
        googleLogin()
        .then(result => {
            const user = result.user;
            console.log(user)
        })
        .catch(error => console.log(error))

    }

    return (
       <div className='mt-4 '>
         <div className='mb-4'>
         <form onSubmit={handleLogin} className='w-75 mx-auto border border-2 rounded p-2'>
            <div className="mb-3 ">
                <label for="exampleInputEmail1" className="form-label">Email address</label>
                <input type="email" name='email' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                
            </div>
            <div className="mb-3">
                <label for="exampleInputPassword1" className="form-label">Password</label>
                <input type="password" name='password' className="form-control" id="exampleInputPassword1" />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
        
         </div>
        <div className='pb-2 w-75 mx-auto'>
            <button className='btn btn-warning' onClick={handleGoogleLogin}>Google Login</button>
        </div>
       </div>
    );
};

export default Login;