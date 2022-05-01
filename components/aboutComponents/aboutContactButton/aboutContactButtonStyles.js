import styled from "styled-components";

export const ContactWrap = styled.div`
  padding-bottom: 80px;
  padding-top: 80px;
`;

export const ButtonWrap = styled.div`
  box-sizing: border-box;
  color: rgb(105, 105, 105);
  font-family: Roboto, sans-serif;
  font-size: 14px;
  line-height: 20px;
  margin-left: 448px;
  margin-right: 448px;
  max-width: 940px;
  text-align: center;

  :before {
    content: " ";
    display: table;
    grid-column-end: 2;
    grid-column-start: 1;
    grid-row-end: 2;
    grid-row-start: 1;
  }

  :after {
    clear: both;
    content: " ";
    display: table;
    grid-column-end: 2;
    grid-column-start: 1;
    grid-row-end: 2;
    grid-row-start: 1;
  }
`;

export const Button = styled.a`
  cursor: pointer;
  border: 3px solid rgb(0, 0, 0);
  border-radius: 3px;
  color: rgb(0, 0, 0);
  font-size: 19px;
  font-weight: 400;
  display: inline-block;
  padding-bottom: 16px;
  padding-left: 26px;
  padding-right: 26px;
  padding-top: 16px;
  text-align: center;
  text-decoration: none;
  text-transform: capitalize;
  transition-delay: 0s, 0s, 0s;
  transition-duration: 0.25s, 0.25s, 0.25s;
  transition-property: background-color, color, border-color;
  transition-timing-function: ease, ease, ease;

  :hover {
    border-color: blue;
    color: blue;
    background: rgba(255, 255, 255, 0.5);
  }
`;
