import React from "react";
import  StyledButton  from './js/ButtonStyle';
import CV from "./CV/Karim ishak fahmy CV.pdf";
import Certicates from "./Certificates/Courses Certificates.pdf";
import { Stack} from '@mui/material';
import CertificatesData from "./js/Certificates"
import Certificates from "./Certificate.jsx"

function CertificatesFunction(certificate) {
	return(
		<Certificates className="resume-degree-container" key={certificate.id} 
		year={certificate.year}
		university= {certificate.university}
		certificate={certificate.cert}
		description={certificate.description}
    				
    					
    				
    			/>
	)
}



function Resume() {
    return(
    <section id="resume-section">

    	<div className="main-flex-column main-whole-width main-relative-position">
    		<div className="ٌresume-middle main-bottom-space">
          
          	<h1 className="main-title-shadow resume-middle">Resume</h1>
            <h2 className="resume-middle main-title main-font-title">Resume</h2>
        	</div>

    		<div className="resume-degrees main-bottom-space">

				{CertificatesData.map(CertificatesFunction)}
    			{/* <div className="resume-degree-container">
    				
    					<span className="resume-date">2002-2007</span>
    					<h2>Bachelor Degree in Engineering</h2>
    					<span className="">AAST University</span>
    					<p className="">Bachelor Degree in Construction Engineering with an average GPA 3.69/4.00 "Excellent with honor".</p>
    				
    			</div>

    			<div className="resume-degree-container">
    					<span className="resume-date">2009</span>
    					<h2>FE Exam</h2>
    					<span >NCEES USA</span>
    					<p>Passed the fundamental engineering exam from the NCEES USA.</p>
    			</div> */}
    		</div>
				
    		
			<Stack className='resume-middle'  spacing={20} direction={'row'}>
			<a href={CV} download='Karim Ishak CV.pdf'><StyledButton variant="contained">Download CV</StyledButton></a>
			<a href={Certicates} download='Karim Ishak Certificates.pdf'><StyledButton variant="contained"> Certicates </StyledButton></a>
			</Stack>
			
    		
    	</div>
    </section>)
}

export default Resume;