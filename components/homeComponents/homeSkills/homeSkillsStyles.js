import styled from "styled-components";

export const SkillsMainWrap = styled.div`
  background-color: rgb(255, 255, 255);
  color: rgb(105, 105, 105);
  padding-bottom: 80px;
  padding-top: 80px;
  position: relative;
  z-index: 9;
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

  display: grid;
`;

export const TitleWrap = styled.div`
  min-height: 1px;
  padding-left: 10px;
  padding-right: 10px;
  position: relative;
  width: 50%;

  h2 {
    @media all and (min-width: 766px) {
      font-size: 85px;
    }
    @media all and (min-width: 540px) and (max-width: 766px) {
      font-size: 65px;
    }
    @media all and (max-width: 540px) {
      font-size: 45px;
    }
  }
`;

export const Skills = styled.div`
  color: rgb(105, 105, 105);
  float: left;
  font-family: Roboto, sans-serif;
  font-size: 14px;
  line-height: 20px;
  min-height: 1px;
  padding-left: 10px;
  padding-right: 10px;
  position: relative;
  justify-items: center;
  @media all and (min-width: 540px) {
    > div {
      grid: auto/auto auto auto;
    }
  }

  p {
    box-sizing: border-box;
    color: rgb(105, 105, 105);
    font-family: Dosis;
    font-size: 18px;
    line-height: 20px;
    margin-bottom: 10px;
    margin-top: 0px;
    text-align: center;
    width: 75%;
    margin: 0 auto 10px auto;
  }

  h3 {
    font-family: Dosis;
    font-size: 27px;
    line-height: 20px;
    text-align: center;
  }

  @media all and (max-width: 540px) {
    max-width: 90vw;
    > div {
      grid: auto/auto auto;
    }
  }
`;
