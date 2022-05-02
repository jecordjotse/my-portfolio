import styled, { keyframes, css } from "styled-components";

export const PrjectsWrap = styled.div`
  border-top-color: rgb(237, 237, 237);
  border-top-style: solid;
  border-top-width: 1px;
  padding-bottom: 0px;
  padding-top: 80px;
`;

export const TitleWrap = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: 940px;
  h2 {
    font-size: 32px;
    font-weight: 300;
    line-height: 36px;
    text-align: center;
    margin: 0 0 32px 0;
  }
  padding-left: 10px;
  padding-right: 10px;

  @media all and (min-width: 990px) {
    max-width: 940px;
  }

  @media all and (min-width: 766px) and (max-width: 990px) {
    max-width: 730px;
  }
`;

export const ProjectLineItem = styled.div`
  @media all and (min-width: 766px) {
    display: flex;
  }
  @media all and (max-width: 766px) {
    display: grid;
  }

  div {
    flex: ${Math.round(Math.random())} 1 auto;
  }
`;
const detailExpand = keyframes`
  from{
    transform: translateY(20px);
  }
  to{
    height: translateY(120px);
  }
`;
export const ProjectCard = styled.div`
  background-color: rgba(0, 0, 0, 0);
  background-image: url("${(props) =>
    !!props.image ? props.image : "/glasses.jpg"}");
  background-position-x: 50%;
  background-position-y: 50%;
  background-repeat: no-repeat;
  background-size: cover;
  display: block;
  max-width: 100%;
  position: relative;
  text-decoration-color: rgb(255, 255, 255);
  text-decoration-line: none;
  text-decoration-style: solid;
  text-decoration-thickness: auto;
  transition-delay: 0s;
  transition-duration: 0.25s;
  transition-property: opacity;
  transition-timing-function: ease;
  margin: 20px;
  border-radius: 5px;

  @media all and (min-width: 766px) {
    width: calc(100vw / ${(props) => (!!props.itemCnt ? props.itemCnt : 1)});
  }
  @media all and (max-width: 766px) {
    width: 100vw;
  }
  height: 350px;

  p {
    display: none;
  }

  :hover {
    opacity: 60%;
    transition: 0.3s;
    div {
      font-size: 32px;
      background: rgba(0, 0, 0, 0.7);
      height: 100%;
      transform: translateY(1px);
    }

    p {
      display: inline;
    }
  }

  div {
    transition: transform 1s, background 0.5s 0.5s;
    color: #fff;
    position: absolute;
    bottom: 0;
    padding: 5px 5px 11px 5px;
    margin-bottom: 0;
    margin-left: 0px;
    margin-right: 0px;
    margin-top: 0px;
    width: 100%;
    background: rgba(0, 0, 0, 0.3);
  }

  :hover {
    animation: ${css`
        ${detailExpand}`} 1s linear intial;
  }
`;
