import React , { useState } from 'react';
import ReCAPTCHA from "react-google-recaptcha";
import { ContactFormMainWrap, ContactFormWrap, ContactText, FormWrap } from './contactFormStyles'


const ContactForm = () => {
	const [ready, setReady] = useState(false);
	const recaptchaRef = React.useRef();

	const handleSubmit = (e) => {
		e.preventDefault();
		if(ready)
			e.target.submit();
	}
	
  return (
      <ContactFormMainWrap>
          <ContactFormWrap>
              <ContactText>
                  <h2>Get In Touch</h2>
                  <p>Let&apos;s work together. Submit your details in this form and I will get back to you ASAP.</p>
            </ContactText>
            <FormWrap>
                <form action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSf8UePOFsa_8L6hyVzGo8tswpt_eBWRXjIxWtO6_1ViWPy1LQ/formResponse" method="POST" onSubmit={handleSubmit}>
                    <input type="text" name="entry.48002773" placeholder="Name" maxLength="256" required/>
                    <input type="email" name="entry.1060212562" placeholder="Email Address" maxLength="256" style={{background:"white"}} required/>
                    <textarea placeholder="Describe your project..." name="entry.313725081" required>
                    </textarea>
					<ReCAPTCHA ref={recaptchaRef}  sitekey="6Lca3EsgAAAAAEobZba9RvZTMjbqpHmoIupua8ua" onChange={() => setReady(true)}/>
                    <button type="submit" value="Send inquiry">Send Enquiry</button>
                </form>
            </FormWrap>
          </ContactFormWrap>
        </ContactFormMainWrap>
  )
}

export default ContactForm  