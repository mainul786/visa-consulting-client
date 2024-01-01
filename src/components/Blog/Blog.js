import React from 'react';

const Blog = () => {
    const blogCode = [
        {
            title:"Difference between SQL and NoSQL",
            text:"SQL----RELATIONAL DATABASE MANAGEMENT SYSTEM (RDBMS).These databases have fixed or static or predefined schema.These databases are not suited for hierarchical data storage.NoSQL----Non-relational or distributed database system.They have a dynamic schema.These databases are best suited for hierarchical data storage.",
            id:1
        },
        {
            title:"What is JWT, and how does it work?",
            text:"JSON Web Token (JWT) authentication is a stateless method of securely transmitting information between parties as a JavaScript Object Notation (JSON) object. It is often used to authenticate and authorize users in web applications and APIs.",
            id:2
        },
        {
            title:"What is the difference between javascript and NodeJS?",
            text:"NodeJS is a Javascript runtime environment. Javascript is a computer programming language that is used to build scripts for websites. With the support of NodeJS, Javascript can be executed outside of the browser.",
            id:3
        },
        {
            title:"How does NodeJS handle multiple requests at the same time?",
            text:"The event-driven model is very efficient and allows NodeJS to handle thousands of concurrent requests with ease. Whenever a client sends a request the single thread will send that request to someone else. The current thread will not be busy working with that request. There are workers working for the server.",
            id:4
        }

    ]
    
    return (
        <div>
            {
                blogCode.map(blog =>
                    <div class="accordion" id="accordionExample" key={blog.id}>
                    <div class="accordion-item">
                      <h2 class="accordion-header" id="headingOne">
                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                          {blog.title}
                        </button>
                      </h2>
                      <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                         <strong>
                            {blog.text}
                         </strong>
                        </div>
                      </div>
                    </div>
                   
                    
                  </div>
                )
            }
    
        </div>
    );
};

export default Blog;