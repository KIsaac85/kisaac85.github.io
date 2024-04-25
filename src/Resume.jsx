import React from "react";

function Resume() {
    return(
    <section className="ftco-section ftco-no-pb" id="resume-section">
    	<div className="container">
    		<div className="row justify-content-center pb-5">
          <div className="col-md-10 heading-section text-center">
          	<h1 className="big big-2">Resume</h1>
            <h2 className="mb-4">Resume</h2>
            <p>Better late than never.</p>
          </div>
        </div>
    		<div className="row">
    			<div className="col-md-6">
    				<div className="resume-wrap ">
    					<span className="date">2002-2007</span>
    					<h2>Bachelor Degree in Engineering</h2>
    					<span className="position">AAST University</span>
    					<p className="mt-4">Bachelor Degree in Construction Engineering with an average GPA 3.69/4.00 "Excellent with honor".</p>
    				</div>
    			
    				
    			</div>

    			<div className="col-md-6">
                <div className="resume-wrap ">
    					<span className="date">2009</span>
    					<h2>FE Exam</h2>
    					<span className="position">NCEES USA</span>
    					<p className="mt-4">Passed the fundamental engineering exam from the NCEES USA.</p>
    				</div>
    				
    				
    				
    			</div>
    		</div>
    		<div className="row justify-content-center mt-5">
    			<div className="col-md-6 text-center ">
    				<p><a href="#" className="btn btn-primary py-4 px-5">Download CV</a></p>
    			</div>
    		</div>
    	</div>
    </section>)
}

export default Resume;