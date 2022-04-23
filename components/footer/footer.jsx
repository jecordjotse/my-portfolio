import React from "react";
import { SocialBar } from "../header";
import { FooterWrap } from "./footerStyles";

const Footer = ({year}) => {
  
  return <FooterWrap>
            <p>&copy; {year} Jerome Cordjotse</p>
            <div style={{width:"500px", height: "100%", display: "flex", background: "#d1b5e8", alignSelf: "right",padding: "35px 100px 35px 100px"}}>
              <SocialBar/>
            </div>
          </FooterWrap>;
};

export default Footer;
