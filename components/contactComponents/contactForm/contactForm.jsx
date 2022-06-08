import axios from 'axios';
import React , { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import ReCAPTCHA from "react-google-recaptcha";
import { NEXT_PUBLIC_RECAPTCHA_KEY } from '../../../utils/keys';
import { ContactFormMainWrap, ContactFormWrap, ContactText, FormWrap } from './contactFormStyles'

const style = {
	position: 'absolute' ,
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: 400,
	bgcolor: 'background.paper',
	border: '2px solid #000',
	boxShadow: 24,
	p: 4,
  };

const ContactForm = () => {
	const [open, setOpen] = React.useState(false);
	const [ready, setReady] = useState(false);
	const [formData, setFormData] = useState({name:"",email:"",message:"",captcha:""})
	const recaptchaRef = React.useRef();

	const handleSubmit = (e) => {
		e.preventDefault();
			if(ready){
				formPost(formData, "/api/contact");
			}
	}
	
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	const formPost =  (formData, url) => {
		axios.post(url,{...formData}).then(res => {
			if(res.data.message === 'Successfull'){
				setFormData({name:"",email:"",message:"",captcha:""});
				recaptchaRef.current.reset();
				handleOpen();
			}
		  })
	}	

  return (
      <ContactFormMainWrap>
          <ContactFormWrap>
              <ContactText>
                  <h2>Get In Touch</h2>
                  <p>Let&apos;s work together. Submit your details in this form and I will get back to you ASAP.</p>
            </ContactText>
            <FormWrap buttonDisabled={ formData.captcha === "" || formData.captcha === null ? true:false }>
                <form action="/api/contact" method="POST" onSubmit={handleSubmit}>
                    <input type="text" name="name" placeholder="Name" maxLength="256" required value={formData.name} onChange={(e) => setFormData({...formData, name:e.target.value})}/>
                    <input type="email" name="email" placeholder="Email Address" maxLength="256" style={{background:"white"}} required value={formData.email} onChange={(e) => setFormData({...formData, email:e.target.value})}/>
                    <textarea placeholder="Describe your project..." name="message" required value={formData.message} onChange={(e) => setFormData({...formData, message:e.target.value})} />
					<ReCAPTCHA style={{display:`${(formData.name===""||formData.email==""||formData.message=="")?"none":"block	"}`}} ref={recaptchaRef}  sitekey={NEXT_PUBLIC_RECAPTCHA_KEY} onChange={(value) => {setFormData({...formData, captcha:value}); setReady(true)}}/>
                    <button type="submit" value="Send inquiry" disabled={ formData.captcha === "" || formData.captcha === null ? true:false }>Send Enquiry</button>
                </form>
            </FormWrap>
          </ContactFormWrap>
		  <> <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
		  Contact Me
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
		  I will be in touch soon. Thank you
          </Typography>
        </Box>
      </Modal></>
        </ContactFormMainWrap>
  )
}

export default ContactForm  