import React from "react";
import { FooterWrap } from "./footerStyles";

const Footer = ({year}) => {
  
  return <FooterWrap><p>&copy; {year} Jerome Cordjotse</p><div>social</div></FooterWrap>;
};

export default Footer;
