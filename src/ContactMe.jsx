import React, { useState , useRef} from "react";
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import HomeIcon from '@mui/icons-material/Home';
import emailjs from '@emailjs/browser';
import {useForm} from "react-hook-form";
function ContactMe() {

  const {register,reset,handleSubmit,formState:{errors}}=useForm();

  const form = useRef();

  const [formValues,setformValues] = useState({
    name:"",
    em:"",
    sub:"",
    mess:""
  })
  const [hiddenDiv,setHiddenDiv]= useState(true)
  const [isMouseOver, setMouseOver]= useState(false)
  function handleMouseOver() {
    setMouseOver(true);
  }

  function handleMouseOut() {
    setMouseOver(false);
  }
  function onSubmit(data,e){
    const{fname,email,subject,message}=data; 
    
    emailjs
    .sendForm('service_i00ptz9', 'template_h6li3e8', form.current, {publicKey: 'RxPh_uTR2bt0dBeOS'})
    .then(
      () => {
        console.log('SUCCESS!');
        setHiddenDiv(false);
        e.preventDefault();
        reset();
        setTimeout(() => {
          setHiddenDiv(true)
        }, 3000);
      },
      (error) => {
        console.log('FAILED...', error.text);
      },
    );
    setformValues({
        name :fname,
        em:email,
        sub:subject,
        mess:message
      })
    }
    
    
    
    
    


    return(
        <section className="" id="contact-section">
        <div className="">
            
            <div className="main-container">
              <h1 className="resume-middle main-title-shadow">Contact</h1>
              <h2 className="resume-middle main-title main-font-title">Contact Me</h2>
              <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
            
            <div className="">
                <div className="">
                    <div className="">
                        <HomeIcon/>
                    </div>
                    <h3 className="">Address</h3>
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
              <form  ref={form} action="#" className="bg-light p-4 p-md-5 contact-form">
                <div className="form-group">
                  <input {...register("fname",{required:true,minLength:{
                    message:"this is req"
                  }})}aria-invalid={errors.fname ? "true" : "false"}  type="text" className="form-control" placeholder={errors.fname?.message} />
                  <div>{errors.fname?.message}</div>
                </div>
                <div className="form-group">
                  <input {...register("email",{required:true})} type="text" className="form-control" placeholder="Your Email" />
                </div>
                <div className="form-group">
                  <input {...register("subject",{required:true})}   type="text" className="form-control" placeholder="Subject" />
                </div>
                <div className="form-group">
                  <textarea {...register("message",{required:true})}  id="" cols="30" rows="7" className="form-control" placeholder="Message" ></textarea>
                </div>
                <div className="form-group">
                  <input type="submit" value="Send Message" onClick={handleSubmit(onSubmit)}  
                  style={{ backgroundColor: isMouseOver ? "#ffa500" : "orange" }} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}className="btn btn-primary py-3 px-5"/>
                </div>
                <div style={{
                  opacity: hiddenDiv ? "0" : "1",
                  transition: "all .5s",
                  visibility: hiddenDiv? "hidden" : "visible"}}>Message sent successfully!</div>
                  
              </form>
            
            </div>
  
            <div className="col-md-6 d-flex">
                <div className="img" ></div>
            </div>
          </div>
        </div>
      </section>
    )
    
  }
  export default ContactMe;
  
  