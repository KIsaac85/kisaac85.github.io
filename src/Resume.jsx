import React  , { useState, useEffect } from "react";
import  {StyledButton ,SmallStyledButton}  from './js/ButtonStyle';
import CV from "../public/Karim ishak fahmy CV.pdf";
import Certicates from "../public/Courses Certificates.pdf";
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
	const [width, setWidth] = useState(window.innerWidth);

	useEffect(() => {
	  const handleResize = () => setWidth(window.innerWidth);
	  window.addEventListener("resize", handleResize);
	  return () => window.removeEventListener("resize", handleResize);
	}, []);
    return(
    <section id="resume-section" className="main-animate main-animate-range-40">

    	<div className="main-flex-column main-whole-width main-relative-position">
    		<div className="ٌresume-middle main-bottom-space">
          
          	<h1 className="resume-title-shadow-mob main-title-shadow resume-middle">Resume</h1>
            <h2 className="resume-middle main-title  main-font-title main-font-title-mob">Resume</h2>
        	</div>

    		<div className="resume-degrees main-bottom-space resume-mob-degrees">

				{CertificatesData.map(CertificatesFunction)}
    		
    		</div>
				
    		
			<Stack className='resume-middle '  spacing={20} direction={'row'}>
			<a href={CV} download='Karim Ishak CV.pdf'>{width>600?<StyledButton variant="contained">Download CV</StyledButton>:<SmallStyledButton variant="contained">CV</SmallStyledButton>}</a>
			<a href={Certicates} download='Karim Ishak Certificates.pdf'>{width>600?<StyledButton variant="contained">Certificates</StyledButton>:<SmallStyledButton variant="contained">Certificates</SmallStyledButton>}</a>
			</Stack>
			
    		
    	</div>
    </section>)
}

export default Resume;