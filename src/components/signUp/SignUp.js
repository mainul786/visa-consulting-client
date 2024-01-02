import React, { useContext } from 'react';
import { UserContext } from '../context/AuthContext/AuthContext';

const SignUp = () => {
    const {createUser}  = useContext(UserContext);
    const handleSignUp = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        createUser(email, password)
        .then(result => {
            const user = result.user;
            console.log(user);
        })
        .catch(error=>console.error(error))
    }
    return (
       <div className='mt-4 '>
         <div className='mb-4'>
         <form onSubmit={handleSignUp} className='w-75 mx-auto border border-2 rounded p-2'>
            <div className="mb-3 ">
                <label for="exampleInputName1" className="form-label">Name</label>
                <input type="text" name='name' className="form-control" id="exampleInputName1" aria-describedby="emailHelp" />
                
            </div>
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
       
       </div>
    );
};

export default SignUp;