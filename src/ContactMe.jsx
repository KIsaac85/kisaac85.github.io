import React, { useState , useRef} from "react";
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import HomeIcon from '@mui/icons-material/Home';
import emailjs from '@emailjs/browser';
import {useForm} from "react-hook-form";
import image1 from "./images/2.jpg"
import  StyledButton  from './js/ButtonStyle';


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
      
        <div className="" >
            
            <div className="main-container">
              <h1 className="resume-middle main-title-shadow">Contact</h1>
              <h2 className="resume-middle main-title main-font-title">Contact Me</h2>
              <p className="resume-middle">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
            <div id="iconsContainer">
            <div className="iconContainer">
              <div className="imageContainer">
                <HomeIcon className="imageIcon" />
              </div>
              <h3 >Address</h3>
              <p id="textCentered">16 Abou Bakr elseddik street Dokki</p>
            </div>
            
          
            <div className="iconContainer">
              <div className="imageContainer">
              <LocalPhoneIcon className="imageIcon"/>
              </div>
              <h3 >Contact Number</h3>
              <p><a href="tel://+201224033791">+201224033791</a></p>
            </div>

            <div className="iconContainer">
              <div className="imageContainer">
              <EmailIcon className="imageIcon"/>
              </div>
              <h3>Email Address</h3>
              <p><a href="mailto:info@yoursite.com">karim_isaac@hotmail.com</a></p>
            </div>
            </div>
          </div>
  
          <div className="" style={{display:"flex", flexDirection:"row"}}>
          <div className="img" style={{width:450 }}><img src={image1}></img></div>
            <div className="" style={{width:800}}>
              <form style={{padding:50, backgroundColor:"lightgrey",height:860, border:""}} ref={form} action="#" className="">
                <div className="form-group" >
                  <input style={{width:600, margin:50, height:50, borderRadius:5}} {...register("fname",{required:true,minLength:{
                    message:"this is req"
                  }})}aria-invalid={errors.fname ? "true" : "false"}  type="text" className="form-control" placeholder={"Your Name"} />
                  <div>{errors.fname?.message}</div>
                </div>
                <div className="form-group">
                  <input style={{width:600, margin:50, height:50}} {...register("email",{required:true})} type="text" className="form-control" placeholder="Your Email" />
                </div>
                <div className="form-group">
                  <input style={{width:600, margin:50, height:50}} {...register("subject",{required:true})}   type="text" className="form-control" placeholder="Subject" />
                </div>
                <div className="form-group">
                  <textarea style={{width:600, margin:50, height:150 }} {...register("message",{required:true})}  id="" cols="30" rows="7" className="form-control" placeholder="Message" ></textarea>
                </div>
                <div className="form-group">
                  <StyledButton style={{marginLeft:50}} variant="contained" type="submit" value="Send Message" onClick={handleSubmit(onSubmit)}  
                   onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} className="">Send Message</StyledButton>
                </div>
                <div style={{
                  
                  opacity: hiddenDiv ? "0" : "1",
                  transition: "all .5s",
                  visibility: hiddenDiv? "hidden" : "visible"}}>Message sent successfully!</div>
                  
              </form>
            
            </div>

          </div>
        </div>
      </section>
    )
    
  }
  export default ContactMe;
  
  