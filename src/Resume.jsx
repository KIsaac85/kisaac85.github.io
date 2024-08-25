import React from "react";
import  {StyledButton}  from './js/ButtonStyle';
import CV from "./Resume/Karim ishak fahmy CV.pdf";
import Certicates from "./Resume/Courses Certificates.pdf";
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
    		
    		</div>
				
    		
			<Stack className='resume-middle '  spacing={20} direction={'row'}>
			<a href={CV} download='Karim Ishak CV.pdf'><StyledButton variant="contained">Download CV</StyledButton></a>
			<a href={Certicates} download='Karim Ishak Certificates.pdf'><StyledButton variant="contained"> Certicates </StyledButton></a>
			</Stack>
			
    		
    	</div>
    </section>)
}

export default Resume;