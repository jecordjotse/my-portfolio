import Link from "next/link";
import React from "react";
import { Button, ButtonWrap, ContactWrap } from "./aboutContactButtonStyles";

const ContactButton = () => {
  return (
          <ContactWrap>
            <ButtonWrap>
              <Link href="/contact" passHref>
                <Button >Hire Me</Button>
              </Link>
            </ButtonWrap>
          </ContactWrap>
        );
};

export default ContactButton;
