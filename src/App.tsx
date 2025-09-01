import { Box, Grid, Typography } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import { styled } from '@mui/material/styles';
import { useState, useEffect } from 'react';
import herb0tImage1 from './assets/herb0t_1.jpg';
import herb0tImage2 from './assets/herb0t_2.jpg';
import herb0t from './assets/herb0t.png';

const theme = createTheme({
  palette: {
    primary: {
      main: '#ED1C24',
    },
    secondary: {
      main: '#fffff8',
      dark: '#faf9e9',
      contrastText: '#000000',
    },
  },
});

const GridVH = styled(Grid)(({ theme }) => ({
  minHeight: '100vh',
  maxHeight: '100vh',
  width: '100vw',
  display: 'flex',
  flexDirection: 'column', // Change to row for side-by-side layout
  overflow: 'hidden',
  justifyContent: 'space-between',
  // backgroundColor: theme.palette.background.default
}));

const MenuGrid = styled(Grid)(({ theme }) => ({
  // Styles for the MenuGrid component
  padding: '1rem 0',
  display: 'flex',
  alignItems: 'center',
  textAlign: 'center',
  position: 'fixed',
  width: '100%',
  paddingLeft: '1rem',
  zIndex: 1000,
}));

const TypeGrid = styled(Typography)(({ theme }) => ({
  // Styles for the TypeGrid component
  fontFamily: '"Fira Code", monospace',
  fontWeight: 400,
  lineHeight: 1.5,
  textAlign: 'center',
}));

// Sample project data - replace with your actual projects
const projects = [
  {
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution built with React, Node.js, and MongoDB. Features include user authentication, payment processing, and admin dashboard.",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    liveUrl: "https://example-ecommerce.com",
    image: herb0tImage1 // You can add specific project images later
  },
  {
    title: "Task Management App", 
    description: "A collaborative task management application with real-time updates using Socket.io. Built with TypeScript and Express.",
    technologies: ["TypeScript", "Express", "Socket.io", "PostgreSQL"],
    liveUrl: "https://example-tasks.com",
    image: herb0tImage2
  },
  {
    title: "Weather Dashboard",
    description: "A responsive weather dashboard that displays current conditions and forecasts using OpenWeather API.",
    technologies: ["React", "Weather API", "Chart.js", "CSS Grid"],
    liveUrl: "https://example-weather.com", 
    image: herb0tImage1
  },
      {
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution built with React, Node.js, and MongoDB. Features include user authentication, payment processing, and admin dashboard.",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    liveUrl: "https://example-ecommerce.com",
    image: herb0tImage1 // You can add specific project images later
  },
  {
    title: "Task Management App", 
    description: "A collaborative task management application with real-time updates using Socket.io. Built with TypeScript and Express.",
    technologies: ["TypeScript", "Express", "Socket.io", "PostgreSQL"],
    liveUrl: "https://example-tasks.com",
    image: herb0tImage2
  },
  {
    title: "Weather Dashboard",
    description: "A responsive weather dashboard that displays current conditions and forecasts using OpenWeather API.",
    technologies: ["React", "Weather API", "Chart.js", "CSS Grid"],
    liveUrl: "https://example-weather.com", 
    image: herb0tImage1
  },
  {
    title: "Future Project",
    description: "A description for the future project.",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    liveUrl: "https://example-ecommerce.com",
    image: herb0tImage1 // You can add specific project images later
  },
  {
    title: "Future Project",
    description: "A description for the future project.",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    liveUrl: "https://example-ecommerce.com",
    image: herb0tImage1 // You can add specific project images later
  },
  {
    title: "Future Project",
    description: "A description for the future project.",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    liveUrl: "https://example-ecommerce.com",
    image: herb0tImage1 // You can add specific project images later
  },
  {
    title: "Future Project",
    description: "A description for the future project.",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    liveUrl: "https://example-ecommerce.com",
    image: herb0tImage1 // You can add specific project images later
  },
];

function App() {
  const images = [herb0tImage1, herb0tImage2];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [hidden, setHidden] = useState(true);
  const [titleType, setTitleType] = useState<'2rem' | '5.5rem'>('2rem');
  const [imageWidth, setImageWidth] = useState<'55%' | '80%'>('55%');
  const [imageMovement, setImageMovement] = useState<'0' | '-4rem'>('0');
  const [selectedProject, setSelectedProject] = useState(0);
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  //   }, 10000); // Change image every 5 secondshttp://localhost:9090/

  //   return () => clearInterval(interval); // Cleanup interval on component unmount
  // }, [images.length]);

  const handleTransition = () => {
    setHidden(!hidden);
    setTitleType(hidden ? '5.5rem' : '2rem');
    setImageWidth(hidden ? '80%' : '55%');
    setImageMovement(hidden ? '-4rem' : '0'); 
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <MenuGrid>
        <Box sx={{ display: 'flex'}}>
          <Typography sx={{ minWidth: 100 }} onClick={() => {scrollToSection('past-works')}}>Past Works</Typography>
          <Typography sx={{ minWidth: 100 }} onClick={() => {scrollToSection('contact')}}>Contact</Typography>
        </Box>
        <Box sx={{ 
          flexGrow: 1,
          backgroundImage: `url(${herb0t})`,
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'right',
          height: '50px',
          width: '50px',
          marginRight: '1rem',
        }} onClick={() => {scrollToSection('profile')}}/>
      </MenuGrid>
      <GridVH spacing={2} id='profile'>
        <Grid sx={{ 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'flex-end',
          flexDirection: 'column',
          minHeight: '50vh',
        }}>
          <TypeGrid sx={{transition: 'all 0.25s', fontSize: titleType}} >Herb0t</TypeGrid>
          <TypeGrid sx={{ opacity: hidden ? 0 : 1, transition: 'opacity 0.25s' }}>Your friendly neighborhood<br />Full Stack Developer</TypeGrid>
        </Grid>
        <Grid
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
            minHeight: '50vh',
          }}
        >
          <Box
            sx={{
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: imageWidth,
              border: '3px solid #ccc',
              padding: '1.5rem',
              position: 'relative',
              bottom: imageMovement,
              transition: 'width 0.25s, bottom 0.25s',
            }}
          >
            <Box
              sx={{
                backgroundImage: `url(${images[currentImageIndex]})`,
                backgroundSize: '100%',
                backgroundPosition: '50% 50%',
                backgroundRepeat: 'no-repeat',
                paddingTop: '100%',
                width: '100%',
                borderRadius: '50%',
                overflow: 'hidden',
              }}
            >
              {imageWidth === '80%' && (
                <RemoveCircleIcon sx={{
                  backgroundColor: 'white',
                  borderRadius: '50%',
                  fontSize: '2rem',
                  color: '#ED1C24',
                  position: 'absolute',
                  left: '16%',
                  top: '4.5%',
                }} onClick={handleTransition} />
              )}
            {imageWidth === '55%' && (
              <AddCircleIcon sx={{
                backgroundColor: 'white',
                borderRadius: '50%',
                fontSize: '2rem', 
                color: '#ED1C24',
                position: 'absolute',
                left: '16%',
                top: '2%',
                }} onClick={handleTransition} />
              )}
            </Box>
          </Box>
        </Grid>
      </GridVH>
      <GridVH spacing={2} id='past-works'>
        <Grid sx={{ 
          display: 'flex', 
          flexDirection: 'column',
          alignItems: 'center', 
          justifyContent: 'center',
          padding: '2rem',
          paddingTop: '82px',
          maxHeight: '69vh',
        }}>
          <Typography variant="h4" sx={{ mb: 3, fontFamily: '"Fira Code", monospace' }}>
            {projects[selectedProject].title}
          </Typography>
          <Typography variant="body1" sx={{ mb: 2, textAlign: 'center', maxWidth: '80%' }}>
            {projects[selectedProject].description}
          </Typography>
          <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', justifyContent: 'center', mb: 2 }}>
            {projects[selectedProject].technologies.map((tech, index) => (
              <Box 
                key={index}
                sx={{
                  backgroundColor: theme.palette.primary.main,
                  color: 'white',
                  padding: '0.25rem 0.75rem',
                  borderRadius: '1rem',
                  fontSize: '0.8rem'
                }}
              >
                {tech}
              </Box>
            ))}
          </Box>
        </Grid>

        {/* View-Master Reel Effect */}
        <Grid sx={{ 
          display: 'flex', 
          alignItems: 'flex-start', 
          justifyContent: 'center',
          position: 'relative',
          maxHeight: '31vh',
          overflow: 'hidden'
        }}>
          {/* Main View-Master Reel */}
          <Box sx={{
            width: '350px',
            height: '350px',
            backgroundColor: theme.palette.secondary.main,
            borderRadius: '50%',
            position: 'relative',
            boxShadow: '0 8px 20px rgba(0,0,0,0.2)',
            border: `4px solid ${theme.palette.secondary.dark}`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            {/* Center Brand/Logo Area */}
            <Box sx={{
              width: '150px',
              height: '150px',
              backgroundColor: theme.palette.primary.main,
              borderRadius: '50%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'flex-start',
              color: 'white',
              fontSize: '0.8rem',
              textAlign: 'center',
              fontFamily: '"Fira Code", monospace'
            }}>
              <Typography variant="h6" sx={{ fontSize: '1rem', fontWeight: 'bold', marginTop: '2.25rem' }}>
                Herb0t
              </Typography>
              <Typography variant="caption" sx={{ fontSize: '0.7rem' }}>
                Past Works - Since 2013
              </Typography>
            </Box>

            {/* Project Windows arranged in circle */}
            {projects.map((project, index) => {
              const offset = -90;
              const angle = (index * 360) / projects.length + offset;
              const radius = 125; // Distance from center
              const x = Math.cos((angle - 90) * Math.PI / 180) * radius;
              const y = Math.sin((angle - 90) * Math.PI / 180) * radius;
              
              return (
                <Box
                  key={index}
                  sx={{
                    position: 'absolute',
                    left: `calc(50% + ${x}px - 17.5px)`,
                    top: `calc(50% + ${y}px - 22.5px)`,
                    width: '35px',
                    height: '45px',
                    borderRadius: '8px',
                    backgroundImage: `url(${project.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    transform: `rotate(${angle}deg)`,
                    cursor: 'pointer',
                    border: selectedProject === index ? '3px solid #ED1C24' : '2px solid #fff',
                    boxShadow: selectedProject === index 
                      ? '0 0 15px rgba(237, 28, 36, 0.6)' 
                      : '0 2px 8px rgba(0,0,0,0.3)',
                    transition: 'all 0.25s',
                    '&:hover': {
                      transform: 'rotate(${angle}deg) scale(1.2)',
                      boxShadow: '0 4px 16px rgba(237, 28, 36, 0.4)'
                    }
                  }}
                  onClick={() => setSelectedProject(index)}
                />
              );
            })}

            {/* White positioning marks around the edge */}
            {[0, 1, 2, 3, 4, 5, 6].map((mark) => {
              const offset = 24;
              const angle = (mark * 51.42857) + offset;
              const radius = 160;
              const x = Math.cos((angle - 90) * Math.PI / 180) * radius;
              const y = Math.sin((angle - 90) * Math.PI / 180) * radius;
              
              return (
                <Box
                  key={mark}
                  sx={{
                    position: 'absolute',
                    left: `calc(50% + ${x}px - 3px)`,
                    top: `calc(50% + ${y}px - 8px)`,
                    width: '6px',
                    height: '16px',
                    transform: `rotate(${angle}deg)`,
                    backgroundColor: 'black',
                    borderRadius: '2px',
                  }}
                />
              );
            })}
          </Box>
        </Grid>
      </GridVH>
      <GridVH spacing={2} id='contact'>
        <Typography>Contact us here.</Typography>
      </GridVH>
    </>
  )
}

export default App