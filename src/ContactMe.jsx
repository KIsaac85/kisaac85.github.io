import React, { useState , useRef, useEffect} from "react";
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import HomeIcon from '@mui/icons-material/Home';
import emailjs from '@emailjs/browser';
import {useForm} from "react-hook-form";
import image1 from "./images/2.jpg"
import  {StyledButton ,SmallStyledButton}  from './js/ButtonStyle';


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
    
    
    const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const handleChange = () => {
    setChecked((prev) => !prev);
  };
    
    


    return(
        <section id="contact-section" className="main-animate main-animate-range-40">
            <div className="main-flex-column main-whole-width main-relative-position">
            <div className="main-bottom-space">
              <h1 className="resume-middle main-title-shadow contact-title-shadow-mob">Contact</h1>
              <h2 className="resume-middle main-title main-font-title main-font-title-mob">Contact Me</h2>
              </div>
            <div id="contact-icons-container" className={width>800?"main-flex-row":"main-flex-column contact-center-icons-mob"}>
            <div className="contact-icon-container  main-flex-column">
              <div className="contact-image-container contact-text-centered">
                <HomeIcon className="contact-image-icon" sx={width>600?{fontSize:30}:{fontSize:20}}/>
              </div>
              <h3 >Address</h3>
              <p className="contact-text-centered">Wundstraße 9 1351 Dresden Germany</p>
            </div>
            
          
            <div className="contact-icon-container main-flex-column">
              <div className="contact-image-container contact-text-centered">
              <LocalPhoneIcon className="contact-image-icon" sx={width>600?{fontSize:30}:{fontSize:20 }}/>
              </div>
              <h3 >Contact Number</h3>
              <p><a href="tel://+201224033791">+49 152 57892262</a></p>
            </div>

            <div className="contact-icon-container main-flex-column">
              <div className="contact-image-container contact-text-centered">
              <EmailIcon className="contact-image-icon" sx={width>600?{fontSize:30}:{fontSize:20}}/>
              </div>
              <h3>Email Address</h3>
              <p><a href="mailto:info@yoursite.com">karim_isaac@hotmail.com</a></p>
            </div>
            </div>
          </div>
  
          <div id="contact-img-Form-container " className="main-flex-row main-content-center main-bottom-space">
          {width>900&&<img  id="contact-image" src={image1}></img>}
          
            
              <form id="contact-form-style"  ref={form} action="#" >
                <div className="contact-form-group" >
                  <input  {...register("fname",{required:true,minLength:{
                    message:"this is req"
                  }})}aria-invalid={errors.fname ? "true" : "false"}  type="text" className="form-control" placeholder=" Your Name" />
                  <div>{errors.fname?.message}</div>
                </div>
                <div className="contact-form-group">
                  <input  {...register("email",{required:true})} type="text" className="form-control" placeholder=" Your Email" />
                </div>
                <div className="contact-form-group">
                  <input  {...register("subject",{required:true})}   type="text" className="form-control" placeholder=" Subject" />
                </div>
                <div className="contact-form-group">
                  <textarea  {...register("message",{required:true})}  id="" cols="30"  ws="7" className="form-control" placeholder=" Message" ></textarea>
                </div>
                <div className="contact-form-group">
                  
                   {width > 600 ? (
              <StyledButton style={{marginLeft:50}} variant="contained" type="submit" value="Send Message" onClick={handleSubmit(onSubmit)}  
                   onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} >Send Message</StyledButton>
            ) : (
              <SmallStyledButton style={{marginLeft:0}} variant="contained" type="submit" value="Send Message" onClick={handleSubmit(onSubmit)}  
                   onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>Send Message</SmallStyledButton>
            )}
                </div>
                <div style={{
                  opacity: hiddenDiv ? "0" : "1",
                  transition: "all .5s",
                  visibility: hiddenDiv? "hidden" : "visible"}}>Message sent successfully!</div>
                  
              </form>
            
            

          </div>
        
      </section>
    )
    
  }
  export default ContactMe;
  
  