import styled from "styled-components";

export const SkillsMainWrap = styled.div`
  background-color: rgb(237, 237, 237);
  color: rgb(105, 105, 105);
  padding-bottom: 80px;
  padding-top: 80px;
`;

export const SkillsWrap = styled.div`
  margin-left: auto;
  margin-right: auto;

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

export const TitleWrap = styled.div`
  min-height: 1px;
  padding-left: 10px;
  padding-right: 10px;
  position: relative;
  width: 50%;

  h2 {
    font-size: 21px;
  }
`;

export const Skills = styled.div`
  box-sizing: border-box;
  color: rgb(105, 105, 105);
  float: left;
  font-family: Roboto, sans-serif;
  font-size: 14px;
  line-height: 20px;
  min-height: 1px;
  padding-left: 10px;
  padding-right: 10px;
  position: relative;

  p {
    box-sizing: border-box;
    color: rgb(105, 105, 105);
    font-family: Roboto, sans-serif;
    font-size: 14px;
    line-height: 20px;
    margin-bottom: 10px;
    margin-top: 0px;
  }

  @media all and (max-width: 540px) {
    max-width: 90vw;
  }
`;
