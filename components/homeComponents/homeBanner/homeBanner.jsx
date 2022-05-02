import React, {useEffect} from 'react'
import { BannerWrap } from './homeBannerStyles'
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import { useTheme } from '@mui/material/styles';
import { Gear } from '../../svg/gears_v2';

const HomeBanner = () => {
  return (
    <BannerWrap >
      <Gear />
    </BannerWrap>
  )
}

export default HomeBanner