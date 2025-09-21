import React, { useState } from "react";  

const Contact = () => {

    const [data, setData] = useState({
        fullName : "",
        phone : "",
        email : "",
        msg : ""
    });

    const formSubmit = (e) => {
        e.preventDefault();
        console.log("name " + data.fullName);
        console.log("phone " + data.phone);
        console.log("email " + data.email);
        console.log("message " + data.msg);
    }
    
    const inputEvent = (e) => {
        const {name, value} = e.target;

        setData((oldVal) => {
            return {
                ...oldVal,
                [name] : value
            };
        });

    }
    

    return (
        <>
            
            <div className="my-5">
                <h1 className="text-center">Contact Us</h1>
            </div>
            <div className="container contact_div">
                <div className="row">
                    <div className="col-md-6 col-10 mx-auto">
                    <form onSubmit={formSubmit}>
                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">Full Name</label>
                            <input type="text" class="form-control" id="exampleInputEmail1" value={data.fullName} name="fullName" onChange={inputEvent}/>
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">Phone</label>
                            <input type="text" class="form-control" id="exampleInputEmail1" value={data.phone} name="phone" onChange={inputEvent}/>
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">Email address</label>
                            <input type="email" class="form-control" id="exampleInputEmail1" value={data.email} name="email" onChange={inputEvent}/>
                            <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                        </div>
                        <div class="form-floating mb-2">
                        <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea" value={data.msg} name="msg" onChange={inputEvent}></textarea>
                        <label for="floatingTextarea">Message</label>
                        </div>
                        <button type="submit" class="btn btn-primary">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Contact;