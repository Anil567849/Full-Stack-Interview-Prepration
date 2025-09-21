import React, {useState, useEffect} from 'react'
// import {} from 'react-router-dom';

import i from '../images/a1.png';


function Contact() { 


    const [userData, setUserData] = useState({
        name : "",
        message : "",
        phone : "",
        email : "",
        
    });
  
    const callAboutPage = async () => {
      try {
        const res = await fetch("/getData", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          }
        });
  
        const data = await res.json();
  
      //   console.log(data);
  
        if ((res.status !== 200) | !data) {
          throw new Error(res.error);
        }else{
            setUserData({...userData, name : data.name, email : data.email, phone : data.phone});
        }
      } catch (err) {
        console.log("contact.js " + err);
      }
    };
  
  useEffect(()=>{
      callAboutPage();
  }, [])
  



  const handleInputs = (e) => {
    //   console.log(e);
    let n = e.target.name;
    let value = e.target.value;
    setUserData({...userData, [n] : value});
  }











    const imgCss = {
        height : "100%",
        width : "100%",
        
    }


    const contactForm = async (e) => {
        e.preventDefault();

        const res = await fetch('/contact', {
            method : "POST",
            headers : {
                "Content-Type" : "application/json"
            },
            body : JSON.stringify({
                name : userData.name,
                email : userData.email,
                phone : userData.phone,
                message : userData.message
            })
        });

        const data = await res.json();

        if(res.status != 200 || !data){
            console.log("message not sent");
        }else{
            console.log("message sent successfully");
            setUserData({...userData, message : ""});
        }

    }


    return (
    <div className='container'>
        <div className="row">

            <div className="col-md-6 my-auto">

                <form onSubmit={contactForm} method="POST">
                    <div className="mb-1">
                        <label htmlFor="name" className="form-label">name</label>
                        <input onChange={handleInputs} value={userData.name} name="name"  type="text" className="form-control" id="name" aria-describedby="emailHelp"/>
                    </div>
                    <div className="mb-1">
                        <label htmlFor="email" className="form-label">email</label>
                        <input onChange={handleInputs} value={userData.email} name="email" type="email" className="form-control" id="email" aria-describedby="emailHelp"/>
                    </div>
                    <div className="mb-1">
                        <label htmlFor="phone"  className="form-label">phone</label>
                        <input onChange={handleInputs} name="phone" value={userData.phone} type="phone" className="form-control" id="phone" aria-describedby="phone"/>
                    </div>
                    <div className="mb-1">
                        <label htmlFor="phone" className="form-label">Message</label>
                        <textarea onChange={handleInputs} value={userData.message} type="text" name="message" className="form-control" id="phone" aria-describedby="phone"></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>            
            </div>    

            <div className="col-md-6">
                <img style={imgCss} src={i} alt="" />
            </div>
        </div>            
    </div>
    )
}

export default Contact
