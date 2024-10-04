import React, { useState, useEffect } from "react";
import image1 from "./images/2.jpg";
import image2 from "./images/1.jpg";
import { Stack } from "@mui/material";
import { StyledButton, SmallStyledButton } from "./js/ButtonStyle";
import { Link } from "react-scroll";
import Fade from "@mui/material/Fade";

window.onfocus = () => {
  location.reload();
};

function Home() {
  const [checked, setChecked] = React.useState(true);
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const handleChange = () => {
    setChecked((prev) => !prev);
  };

  const inter = setInterval(() => {
    handleChange();
  }, 5000);

  return (
    <div
      id="home-section"
      className="main-flex-row main-content-center home-top-space home-relContainer-mob" >
      <div className="home-paragraph home-absInner-mob" >
        <Fade className="home-relSm-position" in={checked} timeout={2500}>
          <div style={width > 600 && { width: 800 }}>
            <span>Hello!</span>
            <h1>
              I'm <span>Karim Isaac</span>
            </h1>
            <h2>Bim App Dev</h2>
          </div>
        </Fade>
        <Fade className="home-relBig-position" in={!checked} timeout={2500}>
          <div style={width > 600 && { width: 950 }}>
            <span>Hello!</span>
            <h1>
              I'm Civil Engineer interseted in {width<600&&<br/>}
              <span> Digital Construction</span>
            </h1>
            <h2>A Freelance Full Stack Web Developer</h2>
          </div>
        </Fade>

        <Stack
          className="home-ButtonRelative-position"
          spacing={2}
          direction={"row"}
        >
          <Link
            to="contact-section"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
          >
            {width > 600 ? (
              <StyledButton variant="contained">Hire Me</StyledButton>
            ) : (
              <SmallStyledButton variant="contained">Hire Me</SmallStyledButton>
            )}
          </Link>
          <Link
            to="projects-section"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
          >
            {width > 600 ? (
              <StyledButton variant="contained">My Work</StyledButton>
            ) : (
              <SmallStyledButton variant="contained">My Work</SmallStyledButton>
            )}
          </Link>
        </Stack>
      </div>
      <div className="main-flex-row home-absInner-mob home-img-zindex" >
        <Fade className="home-fade-img main-mob-image"  in={!checked} timeout={2500}>
          <img id="home-whiteImg-mob"
            src={`${image1}`}
            alt="personal photo"
          />
        </Fade>
        <Fade in={checked} timeout={2500} className="main-mob-image">
          <img id="home-yellowImg-mob"
            src={`${image2}`}
            alt="personal photo"
          />
        </Fade>
      </div>
    </div>
  );
}

export default Home;
