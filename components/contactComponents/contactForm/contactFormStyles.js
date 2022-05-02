import styled from "styled-components";

export const ContactFormMainWrap = styled.div`
  background-color: rgb(237, 237, 237);
  color: rgb(105, 105, 105);
  padding-bottom: 100px;
  padding-top: 100px;
  min-height: 55vh;
`;

export const ContactFormWrap = styled.div`
  box-sizing: border-box;
  color: rgb(105, 105, 105);
  margin-left: auto;
  margin-right: auto;
  max-width: 940px;
  @media all and (min-width: 990px) {
    max-width: 940px;
  }

  @media all and (min-width: 766px) and (max-width: 990px) {
    max-width: 730px;
  }

  @media all and (min-width: 766px) {
    display: flex;
  }

  @media all and (max-width: 766px) {
    display: grid;
  }
`;

export const ContactText = styled.div`
  box-sizing: border-box;
  color: rgb(105, 105, 105);
  float: left;
  font-size: 14px;
  line-height: 20px;
  min-height: 1px;
  padding-left: 10px;
  padding-right: 10px;
  position: relative;
  width: 320px;

  h2 {
    box-sizing: border-box;
    color: rgb(105, 105, 105);
    font-weight: 300;
    margin-bottom: 32px;
    margin-left: 0px;
    margin-right: 0px;
    margin-top: 0px;
  }

  p {
    box-sizing: border-box;
    color: rgb(163, 163, 163);
    margin-bottom: 10px;
    margin-top: 0px;
    padding-right: 59px;
  }
`;

export const FormWrap = styled.div`
  box-sizing: border-box;
  min-height: 1px;
  padding-left: 10px;
  padding-right: 10px;
  position: relative;
  width: 100%;
  font-size: 17px;
  font-style: normal;
  font-weight: 300;

  form > *:focus {  
    border-width: 0 0 0 2px;
    outline: none;
    border-style: solid;
    border-color: #afbac6;
    transition: 0.3s
  }


  form > input, textarea {  
    border-width: 0 0 0 2px;
    border-style: solid;
    border-color: rgb(247, 247, 247);
  }

  form input {
    background-color: rgb(247, 247, 247);
    color: #1f2a16;
    display: block;
    font-size: 17px;
    font-style: normal;
    font-weight: 300;
    height: 58px;
    margin: 0px;
    padding: 13px 12px 13px 12px;
    transition-delay: 0s;
    transition-duration: 0.3s;
    transition-property: box-shadow;
    transition-timing-function: ease;
    vertical-align: middle;
    width: 100%;
  }

  form textarea {
    background-color: rgb(247, 247, 247);
    color: #1f2a16;
    display: block;
    font-size: 17px;
    font-style: normal;
    font-weight: 300;
    height: 108px;
    margin: 0px;
    padding: 13px 12px 13px 12px;
    transition-delay: 0s;
    transition-duration: 0.3s;
    transition-property: box-shadow;
    transition-timing-function: ease;
    vertical-align: middle;
    width: 100%;
  } 

  form button{
    background-color: #afbac6;
    color: rgb(247, 247, 247);
    display: block;
    font-size: 17px;
    font-style: normal;
    font-weight: 300;
    height: 58px;
    line-height: 24.2833px;
    margin: 0px
    padding: 13px 12px 13px 12px;
    transition-delay: 0s;
    transition-duration: 0.3s;
    transition-property: box-shadow;
    transition-timing-function: ease;
    vertical-align: middle;
    width: 30%;
    border-width: 0;
    cursor: pointer;
    transition: 0.25s;
    :hover{
      transform: scale(1.05);
      color:#1e3ce0;
    }
  }
`;
