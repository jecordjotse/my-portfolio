import React, { useEffect } from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';

const images = [
    {
      label: 'San Francisco – Oakland Bay Bridge, United States',
      imgPath:
        '/banner1.webp',
    },
    {
      label: 'Bird',
      imgPath:
      '/banner2.webp',
    },
    {
      label: 'Bali, Indonesia',
      imgPath:
      '/banner3.webp',
    },
  ];

function Carousel() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  useEffect(()=>{
      setTimeout(() => {
        setActiveStep(activeStep!==2? activeStep+1 : 0)
      }, 10000);
  })

  return (
    <Box sx={{ width: "100%", display: "grid" }}>     
        <img src={images[0].imgPath} alt="" style={{width:"100%",height:"540px", objectFit: "cover"}}/> 
      {/* <MobileStepper
      style={{position:"absolute", width:"100%", bottom:"0", background:"rgba(255, 255, 255, 0.5)"}}
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            Next
            {theme.direction === 'rtl' ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === 'rtl' ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            Back
          </Button>
        }
      /> */}
    </Box>
  );
}

export default Carousel;