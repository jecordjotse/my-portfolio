import React from "react";
import { SocialBar } from "../header";
import { FooterWrap } from "./footerStyles";

const Footer = ({year}) => {
  
  return <FooterWrap>
            <p>&copy; {year} Jerome Cordjotse</p>
            <div >
              <SocialBar/>
            </div>
          </FooterWrap>;
};

export default Footer;
