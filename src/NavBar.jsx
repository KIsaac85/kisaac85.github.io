import React  , { useState, useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import './css/Style Main.css'


const navbarItems =[{
text:"Home",
href:"#home-section",
},
{
  text:"About",
  href:"#about-section",
  },
{text:"Resume",
href:"#resume-section"},
{
  text:"Skills",
  href:"#skills-section"
},
{text:"Projects",
  href:"#projects-section"
},
{
  text:"Contacts",
  href:"#contact-section"
}]

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);


  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };


  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleMouseEnter = e => {
    e.target.style.color = "#ffbd39"
  }
  const handleMouseLeave = e => {
    e.target.style.color = "white"
  }
  const [wid, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    console.log(wid);
    
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  
  return (
    <AppBar position="fixed" sx={{backgroundColor : 'black'} } >
      <Container maxWidth="tr"  style={{width:{wid}}}>
        <Toolbar disableGutters >

          <Typography 
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            variant="h6"
            noWrap
            component="a"
            href="#home-section"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontWeight: 700,
              fontSize:25,
              color: 'inherit',
              textDecoration: 'none',
              fontFamily:"poppins"
            }}
          >
            Karim
          </Typography>

          
          
          <Typography
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
            variant="h5"
            noWrap
            component="a"
            href="#home-section"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontWeight: 700,
              color: 'inherit',
              textDecoration: 'none',
              fontSize:25,
              fontFamily:"poppins"
            }}
          >
            Karim
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' , justifyContent: "right"} }}>
            {navbarItems.map(({text,href}) => (
              <Button
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
                key={text}
                href={href}
                sx={{ my: 2, color: 'white', display: 'block', fontFamily:"poppins" }}>
                {text}
                  
              </Button>
            ))}
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none', justifyContent: "right" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {navbarItems.map(({text,href}) => (
                <MenuItem key={text}  onClick={handleCloseNavMenu}>
                  <Typography  textAlign="center"><Button href={href} sx={{color:"black", fontFamily:"poppins"}}>{text}</Button></Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
