import React from 'react';
import { useLoaderData } from 'react-router-dom';



const ServiceDetails = () => {
 
   const {name, details, image } = useLoaderData();
   
   const handleReviews = event =>{
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const photo = form.photoURL.value;
    const password = form.password.value;
    console.log(name, email, photo, password);
    const reviews = {
        name:name,
        email:email,
        photo:photo,
        password:password
    }

    fetch(`https://visa-consulting-server.vercel.app/reviews`, {
        method:'POST',
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(reviews)
    })
    .then(res => res.json())
    .then(data => {
      console.log(data)
      if(data.acknowledged){
        alert('inserted successfully!')
      }
    })

   }

    return (
    <div>
        <div className="card mb-3 w-full mt-4" >
  <div className="row g-0">
    <div className="col-md-4">
      <img src={image} className="img-fluid rounded-start" alt="..." />
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{details}</p>
      </div>
    </div>
  </div>
</div>
<div className='mt-4 border rounded p-4' >
    <h2>Reviews</h2>
<form onSubmit={handleReviews}>
  <div class="mb-3">
    <label for="exampleInputName1" class="form-label">Name</label>
    <input type="name" name='name' class="form-control" id="exampleInputName1" placeholder='Type your Name' aria-describedby="emailHelp" />
    
  </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" name="email" class="form-control" id="exampleInputEmail1" placeholder='Type your email' aria-describedby="emailHelp" />
  </div>
  <div class="mb-3">
    <label for="exampleInputPhoto1" class="form-label">PhotoUrl</label>
    <input type="text" name="photoURL" class="form-control" id="exampleInputPhoto1" placeholder='Type your photoURL' aria-describedby="emailHelp" />
    
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" name='password' class="form-control" placeholder='Type Your password' id="exampleInputPassword1" />
  </div>
  
  <button type="submit" class="btn btn-primary">Add Rewiew</button>
</form>
</div>
    </div>
    );
};

export default ServiceDetails;