import React, { useState } from "react";
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import HomeIcon from '@mui/icons-material/Home';
function ContactMe() {
  const [formValues,setformValues] = useState({
    fname:"",
    email:"",
    subject:"",
    message:""
  })
  function handleOnChange(event) {
    const{name,value}=event.target; 
    setformValues((prevValue)=>{
      return{
        ...prevValue,
        [name]:value
      }
    })
  }
  
    return(
        <section className="ftco-section contact-section ftco-no-pb" id="contact-section">
        <div className="container">
            <div className="row justify-content-center mb-5 pb-3">
            <div className="col-md-7 heading-section text-center ">
              <h1 className="big big-2">Contact</h1>
              <h2 className="mb-4">Contact Me</h2>
              <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
            </div>
          </div>
  
          <div className="row d-flex contact-info mb-5">
            <div className="col-md-6 col-lg-4 d-flex ">
                <div className="align-self-stretch box p-4 text-center">
                    <div className="icon d-flex align-items-center justify-content-center">
                        <HomeIcon/>
                    </div>
                    <h3 className="mb-4">Address</h3>
                  <p>198 West 21th Street, Suite 721 New York NY 10016</p>
                </div>
            </div>
            <div className="col-md-6 col-lg-4 d-flex ">
                <div className="align-self-stretch box p-4 text-center">
                    <div className="icon d-flex align-items-center justify-content-center">
                        <LocalPhoneIcon/>
                    </div>
                    <h3 className="mb-4">Contact Number</h3>
                  <p><a href="tel://1234567920">+ 1235 2355 98</a></p>
                </div>
            </div>
            <div className="col-md-6 col-lg-4 d-flex ">
                <div className="align-self-stretch box p-4 text-center">
                    <div className="icon d-flex align-items-center justify-content-center">
                    <EmailIcon fontSize="medium" style={{color:"yellow"}}/>
                    </div>
                    <h3 className="mb-4">Email Address</h3>
                  <p><a href="mailto:info@yoursite.com">info@yoursite.com</a></p>
                </div>
            </div>
          
          </div>
  
          <div className="row no-gutters block-9">
            <div className="col-md-6 order-md-last d-flex">
              <form action="#" className="bg-light p-4 p-md-5 contact-form">
                <div className="form-group">
                  <input name="fname" onChange={handleOnChange} type="text" className="form-control" placeholder="Your Name"/>
                </div>
                <div className="form-group">
                  <input name="email" onChange={handleOnChange} type="text" className="form-control" placeholder="Your Email"/>
                </div>
                <div className="form-group">
                  <input name="subject" onChange={handleOnChange} type="text" className="form-control" placeholder="Subject"/>
                </div>
                <div className="form-group">
                  <textarea name="message" onChange={handleOnChange} id="" cols="30" rows="7" className="form-control" placeholder="Message"></textarea>
                </div>
                <div className="form-group">
                  <input type="submit" value="Send Message" className="btn btn-primary py-3 px-5"/>
                </div>
              </form>
            
            </div>
  
            <div className="col-md-6 d-flex">
                <div className="img" style={{}}></div>
            </div>
          </div>
        </div>
      </section>
    )

}
export default ContactMe;

