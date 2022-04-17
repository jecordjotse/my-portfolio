import React from 'react'
import { ContactFormMainWrap, ContactFormWrap, ContactText, FormWrap } from './contactFormStyles'

const ContactForm = () => {
  return (
      <ContactFormMainWrap>
          <ContactFormWrap>
              <ContactText>
                  <h2>Get In Touch</h2>
                  <p>Let's work together. Submit your details in this form and I will get back to you ASAP.</p>
            </ContactText>
            <FormWrap>
                <form >
                    <input type="text" name="name" placeholder="Name" maxLength="256"/>
                    <input type="email" name="email" placeholder="Email Address" maxLength="256" style={{background:"white"}}/>
                    <textarea placeholder="Describe your project..." name="description">
                    </textarea>
                    <button type="submit" value="Send inquiry">Send Enquiry</button>
                </form>
            </FormWrap>
          </ContactFormWrap>
        </ContactFormMainWrap>
  )
}

export default ContactForm